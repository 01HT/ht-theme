import { css } from "lit-element";
import { style as typography } from "./mwc-typography-css";

export const styles = css`
${typography}
<style>
:host {
    display: block;
    box-sizing: border-box;
    position: relative;
}

h1, h2, h3, h4, h5, h6 {
    /* color: #424242; */
    color: #414549;
    /* color:#202124; */
}

a {
    color: #4285f4;
    /* color: var(--accent-color); */
    text-decoration: none;
    outline: 0;
}

a:hover {
    text-decoration: underline;
}

p {
    /* font-size: 16px; */
    margin: 0 0 16px;
}

ul {
    margin-top: 0;
}

li {
    /* font-size: 16px; */
    line-height:1.8;
}

[hidden] {
    display:none !important;
}

paper-button {
    font-size: .875rem;
    /* font-size: 14px; */
    line-height: 2.25rem;
    font-weight: 500;
    letter-spacing: .04929em;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 16px;
    margin:0;
    min-width: 64px;
    min-height: 36px;
    background: var(--accent-color);
    color:#fff;
}

paper-button iron-icon {
    width:18px;
    height:18px;
    margin-left: -4px;
    margin-right: 8px;
}

@media (max-width: 767px) {
    /* h1 {
        font-size: 24px;
        line-height: 32px;
    }
    p, ul, li {
        font-size: 16px;
        margin: 0 0 12px 0;
    }
    li {
        margin: 0 0 8px 0 ;
    } */
}
</style>`;
