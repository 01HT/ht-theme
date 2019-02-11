import { css } from "lit-element";

export const stylesUIButtons = css`
  paper-button {
    font-size: 0.875rem;
    /* font-size: 14px; */
    line-height: 2.25rem;
    font-weight: 500;
    letter-spacing: 0.04929em;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 16px;
    margin: 0;
    min-width: 64px;
    min-height: 36px;
    background: var(--accent-color);
    color: #fff;
  }

  paper-button iron-icon {
    width: 18px;
    height: 18px;
    margin-left: -4px;
    margin-right: 8px;
  }
`;
