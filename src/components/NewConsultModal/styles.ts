import { style } from "@mui/system";
import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25ren;

        font-size: 1rem;

        & + input{
            margin-top: 1rem;
        }
    }

    button[type='submit']{
        width: 100%;
        padding: 1.5rem;
        color:var(--white);
        height: 4rem;
        background-color: var(--green);

        border-radius: 0.25rem;

        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;

        :hover{
            opacity: 0.7;
        }
    }

`;

export const CalendarArea = styled.div`
    margin: 1rem 0;
    text-align: center;
    background-color: var(--white);
`;