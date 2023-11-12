import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Container, ContainerLink, Description, FooterContainer, Heading, LogoImage, NavLink, SocialIconLink } from "./Footer.styles";

function Footer() {

    return (
        <FooterContainer>
            <Container>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                    <LogoImage src={logo} alt="Logo da empresa" />
                    <Heading>HAI EVENTOS</Heading>
                </div>
                <Description>Slogan ou descrição curta sobre a empresa e seus produtos alimentícios.</Description>
                <ContainerLink>
                    <NavLink href="#">Home</NavLink>
                    <NavLink href="#">Produtos</NavLink>
                    <NavLink href="#">Sobre Nós</NavLink>
                    <NavLink href="#">Contato</NavLink>
                    <NavLink href="/admin">Administrativo</NavLink>
                    <NavLink href="/admin">Telefone</NavLink>

                </ContainerLink>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "30px" }}>
                    <SocialIconLink href="#"><i className="fab fa-facebook-f"></i></SocialIconLink>
                    <SocialIconLink href="#"><i className="fab fa-instagram"></i></SocialIconLink>
                    <SocialIconLink href="#"><i className="fab fa-twitter"></i></SocialIconLink>
                </div>
                <Description>© 2023 HAI. Todos os direitos reservados.</Description>
            </Container>
        </FooterContainer>
    );
}

export default Footer;
