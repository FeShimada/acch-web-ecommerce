import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    padding: 100px;
    margin-right: 15vw;
    margin-left: 15vw;
    box-shadow: 0 5px 15px rgba(0,0,0,0.6);
    min-height: 100vh;

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

export const BotaoComprar = styled.button`
    padding: 10px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#900020')};
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    border-bottom: 2px solid transparent; 
    transition: border-bottom 0.3s, transform 0.3s; 
    cursor: pointer;
    &:hover {
        border-bottom: 2px solid #FFDE00;
        transform: translateY(-2px);
    }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;
