import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 67.625rem;
    background-color: var(--green_light02);
`;

export const Conteudo = styled.div`
    text-align: center;
`;

export const TitleContainer = styled.div`
    margin-top: 10rem;
`;

export const Ancora = styled.h6`
    font-size: 0.6rem;
    color:var(--green);
`;

export const TitleSection = styled.p`
    font-size: 2.5rem;
`;

export const CartoesServicos = styled.div`
    width:70.0625rem;
    height: 28.375rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0rem;
    margin: 0 auto;
    margin-top: 4rem;
`;

export const Cartao = styled.div`
    width: 21.6875rem ;;
    height: 12.9375rem;
    margin: 0 auto;
    padding: 1.5rem;
    text-align: start;

    background-color: var(--white);
    border: solid 1px var(--green_light);
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.5);
`;

export const Icon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`;

export const TitleCartao = styled.h1`
    margin-bottom:1rem;
`;

export const TextoCartao = styled.p``;





export const Numeros = styled.div`
    width: 70rem;
    height: 13.125rem;
    display: flex;
    background-color: var(--beige);
    margin: 0 auto;
    border-radius: 6px;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin-top:-5rem;
    position: relative;
`;


export const NumArea = styled.div`
    width: 100%;
    border-left:0.5px solid var(--green_light);
    border-right:0.5px solid var(--green_light);

    
`;


export const NumTittle = styled.h1`
    font-size: 2.87rem;
`;


export const NumSubTitle = styled.p`
    font-size: 1rem;
`;