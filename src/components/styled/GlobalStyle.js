import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
    body {
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;
        background: #f3f2ef;
    }
    a{
        text-decoration: none
    }
    li{
        list-style: none;
    }
    ::selection{
        background-color:#f1fffe;
    }

`;
