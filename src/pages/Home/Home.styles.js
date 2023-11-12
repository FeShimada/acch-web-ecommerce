import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    padding: 50px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.6);
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
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    width: 70%;
    height: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const LeftContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 800px;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export const RightContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    
`;

export const FoodTruckImage = styled.img`   
  max-width: 200px;
  height: auto;
`;

export const Section = styled.section`  
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60vh;

    @media (max-width: 768px) {
        height: 100vh;
    }
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

export const CarouselContainer = styled.div`

    width: 80%;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    height: 60vh;
`;
