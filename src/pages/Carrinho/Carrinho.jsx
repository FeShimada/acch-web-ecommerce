import React, { useContext } from 'react';
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';
import ProductoCarrinho from '../../components/ProdutoCarrinho/ProdutoCarrinho';
import { CarrinhoContext } from '../../context/CarrinhoContext';
import { BotaoComprar, Container, ProdutoContainer, ProdutoItem, Subtitulo, Titulo } from './Carrinho.styles';

const Carrinho = () => {

    const { carrinhoList } = useContext(CarrinhoContext);
    const history = useNavigate();

    return (

        <Container>
            <Titulo>PRODUTOS ADICIONADOS</Titulo>
            <Subtitulo>Obrigado por confiar na gente!</Subtitulo>

            <ProdutoContainer>
                {
                    carrinhoList.map((item) => (
                        <ProdutoItem>
                            <ProductoCarrinho
                                name={item.name}
                                url={item.imageurl}
                                price={item.price}
                                description={item.description}
                            />
                        </ProdutoItem>
                    ))
                }
            </ProdutoContainer>

            <BotaoComprar onClick={() => {history('/comprar')}}>Submeter compra</BotaoComprar>
        </Container>


    )
}

export default Carrinho;
