import styled from "styled-components";


export const Container = styled.div`
`;

export const HeaderPaciente = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--green_light);
`;

export const PacienteFoto = styled.img`
    width: 11.25rem;
    height: 11.25rem;
    border-radius: 6rem;
    margin-bottom: 1rem;
`;

export const Nome = styled.h1`
    color: var(--green);
`;

export const ListagemConsultas = styled.div`
 
`;

export const AreaTitulo = styled.div`
       display: flex;
       justify-content: space-between;
       padding: 4rem 4rem 1rem 4rem;
`;

export const TituloListagem = styled.h1`
`;

export const AgendarConsulta = styled.button`
    width: 11.87rem;
    height: 2.4rem;
    background-color: var(--green_light);
    border:solid 1px var(--green);
    border-radius: 1rem;
    color: var(--green);
    
`;

export const DadosDaConsulta = styled.div`
    padding: 1rem 4rem;
`;

export const Consulta = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1rem;
    border: 1px solid gray;
    box-shadow: 0px 10px 13px -7px #000000, 0px 1px 0px 0px rgba(0,0,0,0.04);
    padding: 1rem;
    margin: 1rem 1rem;
    text-align: center;
`;

export const Info = styled.p`
`;
