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

  const handleMouseEnterHome = () => {
    const home = document.getElementsByClassName('home')[0];
    if (home) {
      home.style.color = '#B0C4DE';
    }

  }

  const handleMouseEnterProduto = () => {
    const produtos = document.getElementsByClassName('produto')[0];
    if (produtos) {
      produtos.style.color = '#B0C4DE';
    }
  }

  const handleMouseEnterCarrinho = () => {
    const carrinho = document.getElementsByClassName('carrinho')[0];
    if (carrinho) {
      carrinho.style.color = '#B0C4DE';
    }
  }

  const handleMouseLeaveHome = () => {
    const home = document.getElementsByClassName('home')[0];
    if (home) {
      home.style.color = 'white';
    }    
  }

  const handleMouseLeaveProduto = () => {
    const produtos = document.getElementsByClassName('produto')[0];
    if (produtos) {
      produtos.style.color = 'white';
    }
  }

  const handleMouseLeaveCarrinho = () => {
    const carrinho = document.getElementsByClassName('carrinho')[0];
    if (carrinho) {
      carrinho.style.color = 'white';
    }
  }


  return (
    <>
      <Nav>
        <NavbarContainer>
          <Logo onClick={() => history('/')} src={LogoImg} />
          <MobileIcon onClick={handleClick}>
            {click ? <>&#10005;</> : <> &#8801;</>}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
              <NavItem onMouseEnter={handleMouseEnterHome} onMouseLeave={handleMouseLeaveHome}>
                <NavLinks className="home" to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
            <NavItem onMouseEnter={handleMouseEnterProduto} onMouseLeave={handleMouseLeaveProduto}>
              <NavLinks className="produto" to='/produtos' onClick={closeMobileMenu}>
                Produtos
              </NavLinks>
            </NavItem>
            <NavItem onMouseEnter={handleMouseEnterCarrinho} onMouseLeave={handleMouseLeaveCarrinho}>
              <NavLinks className="carrinho" to='/carrinho' onClick={closeMobileMenu}>
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