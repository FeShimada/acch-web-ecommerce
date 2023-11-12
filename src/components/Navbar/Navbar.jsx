import React, { useContext, useState } from 'react';
import {
  Nav,
  NavbarContainer,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './Navbar.styles';
import LogoImg from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom';
import { CarrinhoContext } from '../../context/CarrinhoContext';

function Navbar() {

  const { nrCarrinho } = useContext(CarrinhoContext)
  const [click, setClick] = useState(false);
  const history = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
        <Nav>
          <NavbarContainer>
            <Logo onClick={() => history('/')} src={LogoImg} />
            <MobileIcon onClick={handleClick}>
              {click ? <>&#10005;</> : <> &#8801;</>}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/produtos' onClick={closeMobileMenu}>
                  Produtos
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/carrinho' onClick={closeMobileMenu}>
                  Carrinho: {nrCarrinho}
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
    </>
  );
}

export default Navbar;