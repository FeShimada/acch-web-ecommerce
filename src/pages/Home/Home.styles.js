import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.6);
    justify-content: flex-start;
    background: linear-gradient(to top, black, #900020);
`;

export const FirstScreen = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
`;

export const MainText = styled.div`
    font-size: 2rem;
    font-weight: bold;
`;

export const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const LeftContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vw;
`;

export const RightContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    
`;

export const FoodTruckImage = styled.img`   
  margin: 10px;
  max-width: 400px;
  height: auto;
`;

export const Section = styled.section`  
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%
    height: 100vh;
`;

export const Container = styled.div`
    max-width: 800px;
`;

export const Title = styled.h2`
    color: white;
    font-weight: bold;
    margin: 20px;
`;

export const Paragraph = styled.p`
    color: white;
    gap: 15px;  
    margin-bottom: 15px;
`;

