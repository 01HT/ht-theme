const htCSSDocumentContainer = document.createElement("div");
htCSSDocumentContainer.setAttribute("style", "display: none;");

htCSSDocumentContainer.innerHTML = `
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-focus-color: var(--accent-color);

    --paper-spinner-layer-1-color: var(--accent-color);
    --paper-spinner-layer-2-color: var(--second-accent-color);
    --paper-spinner-layer-3-color: var(--accent-color);
    --paper-spinner-layer-4-color: var(--second-accent-color);

    --paper-checkbox-checked-color: var(--accent-color);

    --paper-toggle-button-checked-bar-color:  var(--accent-color);
    --paper-toggle-button-checked-button-color:  var(--accent-color);
    --paper-toggle-button-checked-ink-color: var(--accent-color);

    --paper-tooltip-background: #232F34;
    --paper-tooltip-opacity: 1;

    --paper-tabs-selection-bar-color: var(--accent-color);
    --paper-tab-ink: var(--accent-color);
    }
  </style>
</custom-style>`;

document.body.appendChild(htCSSDocumentContainer);
