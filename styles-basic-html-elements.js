import { css } from "lit-element";

export const stylesBasicHTMLElements = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
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
    line-height: 1.8;
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
`;
