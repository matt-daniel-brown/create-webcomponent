'use strict';

class MyComponent extends HTMLElement {
    constructor() {
        super();

        const webComponentTemplate = document.createElement('template');
        webComponentTemplate.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:600,700&display=swap');
                html { box-sizing: border-box !important; }
                *, *:before, *:after, *::before, *::after {
                    box-sizing: inherit !important;
                    text-rendering: optimizeLegibility !important;
                    -webkit-font-smoothing: antialiased !important;
                    -moz-osx-font-smoothing: grayscale !important;
                    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",
                    Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji",
                    "Segoe UI Emoji","Segoe UI Symbol";
                }
                html, body {
                    height: 100%;
                    min-height: 100vh;
                    width: 100%;
                    min-width: 100vw;
                    margin: 0 !important;
                    padding: 0 !important;
                    position: relative;
                }
                pre, code, samp, output, kbd, ruby {
                    font-family: 'Source Code Pro', monospace !important;
                    font-weight: 600;
                }
                pre code {
                    background: ghostwhite;
                    color: slategray;
                    border: whitesmoke solid 2px;
                    -webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;
                    padding: 1em;
                    font-size: small;
                    text-align: center;
                    margin: 1em;
                }
                body, p {
                    font-weight: 500;
                    line-height: 1.5;
                }
                h1, h2, h3, h4, h5, h6, p {
                    padding: 0;
                    margin: 0 auto;
                }
                samp.label {
                    font-size: x-small;
                    margin: 0 auto;
                    margin-bottom: 1em !important;
                    padding: 0;
                    line-height: 1.5 !important;
                    color: gray;
                }
            </style>
            <div>
                <samp class="label">Name:</samp>
                <h4>MyComponent</h4>
                <br>
                
                <samp class="label">Source Code:</samp>
                <pre><code> &lt;my-component&gt;&lt;/my-component&gt; </code></pre>
                <br>
                
                <samp class="label">Content:</samp>
                <p>Component Content</p>
                <br>
                
            </div>
        `;
        const webComponentTemplateClone = webComponentTemplate.content.cloneNode(true);
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.append(webComponentTemplateClone);
    }

    connectedCallback() {
        console.log('Web Component Connected.');
    }
}

customElements.define('my-component', MyComponent);


