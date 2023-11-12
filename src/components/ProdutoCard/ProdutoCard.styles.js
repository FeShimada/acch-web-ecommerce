import styled from 'styled-components';

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 320px;
    margin: auto 1rem;
    text-align: center;
    font-family: arial;
`;

export const ProdutoImagem = styled.img`
    width: 100%;
    height: 16em;
    object-fit: cover;
`;

export const Preco = styled.p`
    color: white;
    font-size: 22px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Descricao = styled.p`
    margin-bottom: 10px;
`;

export const Titulo = styled.p`
    margin-top: 10px;
`;

export const Botao = styled.button`
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;

    border-bottom: 2px solid transparent; 
    transition: border-bottom 0.3s, transform 0.3s; 
    &:hover {
        border-bottom: 2px solid #FFDE00;
        transform: translateY(-2px);
    }
`;