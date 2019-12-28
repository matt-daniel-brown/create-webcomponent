'use strict';

class WebComponent extends HTMLElement {
    constructor() {
        super();

        const webComponentTemplate = document.getElementById('web-component-template');
        const webComponentTemplateClone = webComponentTemplate.content.cloneNode(true);
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.append(webComponentTemplateClone);
    }

    connectedCallback() {
        console.log('Web Component Connected.');
    }
}

customElements.define('web-component', WebComponent);