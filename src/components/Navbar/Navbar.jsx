import React, { useState } from 'react';
import { LeftContainer, Logo, NavbarContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, NavbarLinkExtended, OpenLinksButton, RightContainer } from './Navbar.styles';
import LogoImg from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [extendNavbar, setExtendNavbar] = useState(false);
    const history = useNavigate();

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/"> Home</NavbarLink>
                        <NavbarLink to="/produtos"> Produtos</NavbarLink>
                        <NavbarLink to="/carrinho"> Carrinho</NavbarLink>
                        <OpenLinksButton
                            onClick={() => {
                                setExtendNavbar((curr) => !curr);
                            }}
                        >
                            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </LeftContainer>

                <RightContainer>
                    <Logo onClick={() => history('/')} src={LogoImg} />
                </RightContainer>
            </NavbarInnerContainer>

            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
                    <NavbarLinkExtended to="/produtos"> Produtos</NavbarLinkExtended>
                    <NavbarLinkExtended to="/carrinho"> Carrinho</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    )
}

export default Navbar;


