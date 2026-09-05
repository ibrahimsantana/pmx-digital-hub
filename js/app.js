(function () {
  "use strict";

  var config = window.PMX_CONFIG;
  var trackedParameterNames = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];

  if (!config) {
    throw new Error("PMX_CONFIG no está disponible.");
  }

  function readAttribution(search) {
    var source = new URLSearchParams(search);
    return trackedParameterNames.reduce(function (attribution, name) {
      var value = source.get(name);
      if (value) attribution[name] = value;
      return attribution;
    }, {});
  }

  function preserveAttribution(destination, attribution) {
    if (!destination) return "";

    var url;
    try {
      url = new URL(destination, window.location.href);
    } catch (error) {
      return "";
    }

    Object.keys(attribution).forEach(function (name) {
      if (!url.searchParams.has(name)) url.searchParams.set(name, attribution[name]);
    });

    return url.href;
  }

  function setText(id, value) {
    document.getElementById(id).textContent = value;
  }

  function configureLink(id, destination, attribution, unavailableLabel) {
    var link = document.getElementById(id);
    var safeDestination = preserveAttribution(destination, attribution);

    if (!safeDestination) {
      link.removeAttribute("href");
      link.setAttribute("aria-disabled", "true");
      link.setAttribute("title", unavailableLabel || "URL pendiente de validación");
      return;
    }

    link.href = safeDestination;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  function attachTracking(link, eventName, eventParameters) {
    if (!link.hasAttribute("href")) return;
    link.addEventListener("click", function () {
      window.pmxTrack(eventName, Object.assign({
        cta_id: link.id,
        destination_type: eventParameters.destination_type,
        destination_url: link.href
      }, eventParameters));
    });
  }

  function renderSocialLinks(attribution) {
    var list = document.getElementById("social-links");
    var labels = {
      facebook: "Facebook",
      instagram: "Instagram",
      x: "X",
      tiktok: "TikTok",
      youtube: "YouTube"
    };

    Object.keys(labels).forEach(function (network) {
      var item = document.createElement("li");
      var link = document.createElement("a");
      var destination = preserveAttribution(config.socialUrls[network], attribution);

      link.className = "text-link";
      link.textContent = labels[network];

      if (destination) {
        link.href = destination;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.addEventListener("click", function () {
          window.pmxTrack("CLICK_SOCIAL", {
            cta_id: "social-" + network,
            destination_type: "social",
            destination_url: link.href,
            social_network: network
          });
        });
      } else {
        link.setAttribute("aria-disabled", "true");
        link.setAttribute("title", "URL social pendiente de validación");
      }

      item.appendChild(link);
      list.appendChild(item);
    });
  }

  function renderPromo(attribution) {
    var section = document.getElementById("promo-section");
    if (!config.promoEnabled) {
      section.hidden = true;
      section.replaceChildren();
      return;
    }

    setText("promo-title", config.promoTitle || "PROMOCIÓN PENDIENTE");
    setText("promo-description", config.promoDescription || "Contenido pendiente de validación.");
    configureLink("promo-link", config.promoUrl, attribution, "URL de promoción pendiente de validación");
    attachTracking(document.getElementById("promo-link"), "CLICK_PROMO", {
      destination_type: "promotion",
      promo_id: config.promoId || config.gameId + "_promo"
    });
    section.hidden = false;
  }

  function render() {
    var attribution = window.PMX_ANALYTICS.getAttribution();
    var opponentPrefix = config.homeAway === "AWAY" ? "EN " : config.homeAway === "HOME" ? "VS " : "";

    window.PMX_ATTRIBUTION = Object.freeze(Object.assign({}, attribution));

    setText("game-week", config.week);
    setText("game-heading", opponentPrefix + config.opponent);
    setText("game-date", config.date);
    setText("game-time", config.time + " · CDMX");
    setText("game-venue", config.venue);
    document.querySelector(".venue-lock").textContent = config.venueWording;

    configureLink("registration-link", config.registrationUrl, attribution);
    configureLink("maps-link", config.mapsUrl, attribution, "URL de Maps pendiente de validación");
    configureLink("calendar-link", config.calendarUrl, attribution, "URL de calendario pendiente de validación");
    configureLink("gopackgo-link", config.gopackgoUrl, attribution, "URL de GoPackGo MX pendiente de validación");
    attachTracking(document.getElementById("registration-link"), "CLICK_REGISTRO", { destination_type: "registration" });
    attachTracking(document.getElementById("maps-link"), "CLICK_MAPS", { destination_type: "maps" });
    attachTracking(document.getElementById("calendar-link"), "CLICK_CALENDAR", { destination_type: "calendar" });
    attachTracking(document.getElementById("gopackgo-link"), "CLICK_GOPACKGO", { destination_type: "gopackgo" });
    renderPromo(attribution);
    renderSocialLinks(attribution);

    window.PMX_ANALYTICS.trackOnce("HUB_VIEW", {}, "hub-view");
    if (attribution.utm_source === "onsite" && attribution.utm_medium === "qr") {
      window.PMX_ANALYTICS.trackOnce("QR_OPEN", {}, "qr-open");
    }
  }

  window.PMX_HUB = Object.freeze({
    readAttribution: readAttribution,
    preserveAttribution: preserveAttribution
  });

  render();
})();
