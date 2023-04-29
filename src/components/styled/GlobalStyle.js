import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
    body {
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;
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
