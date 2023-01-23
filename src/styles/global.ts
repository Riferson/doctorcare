import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --green:#00856F;
        --green_light:#DCE9E2;
        --green_light_02:#F7F9F9;
        --beige:#FFFAF1;
        --green-hover:#00453A;

        --gray-headline:#061800;
        --gray-paragraph:#384633;
        --white:#FFFFFF;
    }
    
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        @media(max-width: 1080px){
            font-size: 93.75%; //15px
        }
        @media(max-width: 720px){
            font-size: 87.5%; //14px
        }        
    }

    body{
        background-color: var(--green_light_02);
        -webkit-font-smoothing:antialiased;
    }
    button{
        cursor:pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor:not-allowed;
    }

    .react-modal-overlay{

        background: rgba(0,0,0,0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex; 
        
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;

        background: var(--green_light);

        padding: 3rem;

        position: relative;
        border-radius: 0.24rem;
    }
    .react-modal-close{
        position: absolute;
        right:1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        
    }
`
