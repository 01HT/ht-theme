import { css } from "lit-element";

export const stylesBasicWebcomponents = css`
  :host {
    display: block;
    box-sizing: border-box;
    position: relative;
  }

  :host([hidden]) {
    display: none;
  }

  [hidden] {
    display: none;
  }
`;
