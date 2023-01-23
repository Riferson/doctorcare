import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--green_light);
`;

export const Conteudo = styled.div`
    max-width: 100%;
    margin: 0 auto;
    
    padding: 2.5rem 3.87rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoArea = styled.div`
`;

export const Logo = styled.img`
    width:8.25rem;
    height:1rem ;
`;

export const Navegacao = styled.div`
`;

export const MenuItens = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
`;

export const Item = styled.div`
    margin: 0 2rem;
    font-size: 16px;

    color: var(--green);

    text-decoration: none;
    :active{
        text-decoration: underline;
    }
`;

export const Botao = styled.div`

`;

export const Button = styled.button`
    width: 11.87rem;
    height: 2.4rem;
    background-color: var(--green_light);
    border:solid 1px var(--green);
    border-radius: 1rem;
    color: var(--green);
`;