(function () {
  "use strict";

  var season = window.PMX_SEASON_2026;
  var filters = ["ALL", "HOME", "AWAY", "PRIME"];
  var activeFilter = "ALL";

  if (!season) throw new Error("PMX_SEASON_2026 no está disponible.");

  function todayInMexicoCity() {
    var parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Mexico_City",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(new Date());
    var values = {};
    parts.forEach(function (part) { if (part.type !== "literal") values[part.type] = part.value; });
    return values.year + "-" + values.month + "-" + values.day;
  }

  function preserveAttribution(destination) {
    if (!destination) return "";
    var attribution = window.PMX_ANALYTICS && window.PMX_ANALYTICS.getAttribution ? window.PMX_ANALYTICS.getAttribution() : {};
    var url = new URL(destination, window.location.href);
    ["utm_source", "utm_medium", "utm_campaign", "utm_content"].forEach(function (name) {
      if (attribution[name] && !url.searchParams.has(name)) url.searchParams.set(name, attribution[name]);
    });
    return url.href;
  }

  function nextGame() {
    var today = todayInMexicoCity();
    return season.games.find(function (game) {
      return game.site !== "BYE" && game.dateISO && game.dateISO >= today;
    }) || season.games.find(function (game) { return game.site !== "BYE" && !game.dateISO; }) || null;
  }

  function locationLabel(game) {
    if (game.site === "HOME") return "LOCAL";
    if (game.site === "AWAY") return "VISITA";
    return "DESCANSO";
  }

  function matchupLabel(game) {
    if (game.site === "HOME") return "PACKERS VS " + game.short;
    if (game.site === "AWAY") return "PACKERS @ " + game.short;
    return "BYE WEEK";
  }

  function renderNext(game) {
    if (!game) return;
    document.getElementById("next-week").textContent = "WEEK " + game.week + (game.special ? " · " + game.special : "");
    document.getElementById("next-opponent").textContent = matchupLabel(game);
    document.getElementById("next-meta").textContent = game.dateLabel + " · " + locationLabel(game) + (game.tv ? " · " + game.tv : "");
    document.getElementById("next-time").textContent = game.time ? game.time : "TBD";
  }

  function createMetaItem(text, accent) {
    var span = document.createElement("span");
    span.textContent = text;
    if (accent) span.className = "accent";
    return span;
  }

  function rowMatchesFilter(game) {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "PRIME") return Boolean(game.prime);
    return game.site === activeFilter;
  }

  function renderSchedule(next) {
    var list = document.getElementById("schedule-list");
    list.replaceChildren();

    season.games.forEach(function (game) {
      var row = document.createElement("article");
      row.className = "game-row" + (game.site === "BYE" ? " game-row--bye" : "") + (next && game.week === next.week ? " game-row--next" : "");
      row.dataset.site = game.site;
      row.dataset.prime = game.prime ? "true" : "false";
      row.hidden = !rowMatchesFilter(game);

      var week = document.createElement("div");
      week.className = "game-week";
      week.textContent = "W" + game.week;

      var opponent = document.createElement("div");
      opponent.className = "game-opponent";
      var name = document.createElement("h3");
      name.className = "game-opponent__name";
      name.textContent = game.site === "BYE" ? "BYE WEEK" : matchupLabel(game);
      var meta = document.createElement("div");
      meta.className = "game-opponent__meta";
      meta.appendChild(createMetaItem(game.dateLabel, next && game.week === next.week));
      if (game.site !== "BYE") meta.appendChild(createMetaItem(locationLabel(game), false));
      if (game.tv) meta.appendChild(createMetaItem(game.tv, false));
      if (game.special) meta.appendChild(createMetaItem(game.special, true));
      opponent.append(name, meta);

      var time = document.createElement("div");
      time.className = "game-time";
      var clock = document.createElement("p");
      clock.className = "game-time__clock";
      clock.textContent = game.site === "BYE" ? "—" : (game.time || "TBD");
      var zone = document.createElement("p");
      zone.className = "game-time__zone";
      zone.textContent = game.site === "BYE" ? "" : "CDMX";
      time.append(clock, zone);

      row.append(week, opponent, time);
      list.appendChild(row);
    });
  }

  function updateFilterButtons() {
    document.querySelectorAll(".filter-button").forEach(function (button) {
      var pressed = button.dataset.filter === activeFilter;
      button.setAttribute("aria-pressed", pressed ? "true" : "false");
    });
  }

  function applyFilter(filter) {
    if (!filters.includes(filter)) return;
    activeFilter = filter;
    document.querySelectorAll(".game-row").forEach(function (row) {
      var matches = activeFilter === "ALL" ||
        (activeFilter === "PRIME" && row.dataset.prime === "true") ||
        row.dataset.site === activeFilter;
      row.hidden = !matches;
    });
    updateFilterButtons();
  }

  function configureLinks() {
    var hubLinks = document.querySelectorAll("[data-hub-link]");
    hubLinks.forEach(function (link) { link.href = preserveAttribution(season.hubUrl); });

    var source = document.getElementById("source-link");
    source.href = season.sourceUrl;
    source.target = "_blank";
    source.rel = "noopener noreferrer";

    var googleCalendar = document.getElementById("google-calendar-link");
    googleCalendar.href = preserveAttribution(season.publicCalendarUrl);
    googleCalendar.target = "_blank";
    googleCalendar.rel = "noopener noreferrer";
    googleCalendar.addEventListener("click", function () {
      if (window.pmxTrack) {
        window.pmxTrack("CLICK_CALENDAR", {
          cta_id: "google-calendar-link",
          destination_type: "calendar",
          destination_url: googleCalendar.href
        });
      }
    });
  }

  function configureShare() {
    var button = document.getElementById("share-calendar");
    var status = document.getElementById("share-status");
    var shareUrl = new URL("https://packersmexico.github.io/calendario/");
    shareUrl.searchParams.set("utm_source", "calendar");
    shareUrl.searchParams.set("utm_medium", "share");
    shareUrl.searchParams.set("utm_campaign", "pmx_2026_schedule");
    shareUrl.searchParams.set("utm_content", "season_calendar");

    button.addEventListener("click", async function () {
      status.textContent = "";
      if (navigator.share) {
        try {
          await navigator.share({
            title: "Calendario Packers 2026 · PACKERS MÉXICO",
            text: "Todos los juegos de Green Bay en horario CDMX.",
            url: shareUrl.href
          });
          status.textContent = "Listo para compartir.";
          return;
        } catch (error) {
          if (error && error.name === "AbortError") return;
        }
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(shareUrl.href);
          status.textContent = "Enlace copiado.";
          return;
        } catch (error) {
          // Fall through to prompt fallback.
        }
      }

      window.prompt("Copia este enlace para compartir el calendario:", shareUrl.href);
    });
  }

  function render() {
    var next = nextGame();
    renderNext(next);
    renderSchedule(next);
    configureLinks();
    configureShare();

    document.querySelectorAll(".filter-button").forEach(function (button) {
      button.addEventListener("click", function () { applyFilter(button.dataset.filter); });
    });
    updateFilterButtons();

    document.getElementById("flex-note").textContent = season.flexNote;

    if (window.PMX_ANALYTICS && window.PMX_ANALYTICS.trackOnce) {
      window.PMX_ANALYTICS.trackOnce("HUB_VIEW", {}, "season-calendar-view");
    }
  }

  render();
})();
