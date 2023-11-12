import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 100px;
    margin-right: 15vw;
    margin-left: 15vw;
    box-shadow: 0 5px 15px rgba(0,0,0,0.6);

    @media (max-width: 768px) {
        margin-right: 0;
        margin-left: 0;
        padding: 0px;
    }
`;

export const Titulo = styled.h1`
    font-weight: bold;
    font-size: 2rem;

    @media (max-width: 768px) {
        font-size: 1rem;
        margin-top: 20px;
    }
`;

export const Subtitulo = styled.p`
    font-weight: bold;
    margin-top: 15px;
    border-top: 2px solid gray; 
    border-bottom: 2px solid gray; 
    padding: 10px 0; 
`;

export const ProdutoContainer = styled.div`
    weight: 60vh;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`;

export const ProdutoItem = styled.div`
  flex: 0 0 25%; 
  box-sizing: border-box; 
  padding: 10px; 
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
        flex: 0 0 100%; 
        
    }
`;
