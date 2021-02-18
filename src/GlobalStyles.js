import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

`;
