import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: black; 
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(26, 26, 29, 0.3);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const LogoImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const ContainerLink = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  padding: 10px;
  text-align: center;
  transition: color 0.3s ease;

  border-bottom: 2px solid transparent; 
  transition: border-bottom 0.3s, transform 0.3s; 
  &:hover {
    border-bottom: 2px solid #FFDE00;
    transform: translateY(-2px);
  }
`;

export const Heading = styled.h3`
  font-size: 24px;
  color: #FFF;
  margin: 0;
`;

export const Description = styled.p`
  color: #FFF;
  font-size: 16px;
  margin-top: 20px;
`;

export const Link = styled.a`
  color: #FFF;
  font-size: 18px;
  text-decoration: none;
`;

export const SocialIconLink = styled.a`
  color: #FFF;
  text-decoration: none;
  font-size: 24px;
`;