# PMX DIGITAL HUB

MVP estático y mobile-first para `PACKERS MÉXICO × WINGSTOP CONDESA · 2026–27`.

## Propósito

Presentar el próximo juego y concentrar las acciones operativas aprobadas del Hub. Esta fase valida estructura, funcionamiento y jerarquía; no representa el master visual final.

## Estructura

- `index.html`: estructura semántica de la interfaz.
- `css/styles.css`: presentación responsive.
- `js/config.js`: fuente única de contenido semanal y destinos.
- `js/analytics.js`: atribución de sesión, helper de eventos y carga condicional de GA4.
- `js/app.js`: render, comportamiento y conservación modular de UTM.
- `assets/README.md`: dependencias de identidad pendientes.

## Visualización local

Abre `index.html` directamente en un navegador moderno. No requiere instalación, servidor, framework ni proceso de build.

## Actualizar el próximo juego

Edita únicamente `window.PMX_CONFIG` en `js/config.js`. Rival, fecha y horario conservan placeholders técnicos hasta que existan datos confirmados.

Las URLs todavía no validadas permanecen vacías y sus acciones se muestran como no disponibles. `promoEnabled` controla completamente la visibilidad de la promoción.

## Analytics GA4

La única configuración del proveedor está en `js/config.js`:

```js
GA4_MEASUREMENT_ID: ""
```

Para activar GA4, reemplaza el valor vacío por el Measurement ID real aprobado. Mientras permanece vacío, no se carga `gtag.js`, no se envían datos y el Hub conserva toda su funcionalidad.

El helper global `pmxTrack(eventName, extraParams)` es el único punto de envío. Incorpora automáticamente ID de juego, versiones, ubicación de página y la atribución UTM persistida durante la sesión. La configuración de GA4 usa `send_page_view: false`; `HUB_VIEW` se controla con una llave única por carga para evitar duplicación.

Eventos P0 soportados:

- `HUB_VIEW`
- `CLICK_REGISTRO`
- `CLICK_MAPS`
- `CLICK_PROMO`
- `CLICK_CALENDAR`
- `CLICK_GOPACKGO`
- `CLICK_SOCIAL`
- `QR_OPEN`, exclusivamente con `utm_source=onsite` y `utm_medium=qr`

Todos incluyen `id_juego`, los cuatro parámetros `pmx_utm_*`, `hub_version`, `event_version` y `page_location`. Los clicks agregan `cta_id`, `destination_type` y `destination_url`; Social agrega `social_network` y Promo agrega `promo_id`. No se envía PII.

`REGISTRO_CONFIRMADO` no existe como evento activo en P0. Un `CLICK_REGISTRO` no demuestra registro completado ni asistencia.

### QA local sin transmisión

Abre el Hub desde `localhost` o `127.0.0.1` con `pmx_debug=1`. Los intentos y parámetros construidos quedan disponibles solamente en memoria en `window.PMX_ANALYTICS.debugAttempts` y en el atributo temporal `data-pmx-analytics-debug` del elemento `<html>`, con `sent: false` mientras el Measurement ID esté vacío. Este modo no se activa fuera de localhost y no transmite datos.

## Pendiente para fases posteriores

- Integración del handoff visual aprobado de Figma y activos definitivos.
- Incorporación del Measurement ID real aprobado y validación de envío en GA4 DebugView.
- Configuración y validación de GitHub Pages.
- Sustitución de placeholders por información y URLs confirmadas.
