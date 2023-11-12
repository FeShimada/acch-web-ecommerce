import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { productData } from '../Home/data';
import ProductoCard from '../../components/ProdutoCard/ProdutoCard';
import { Container, ProdutoContainer, ProdutoItem, Subtitulo, Titulo } from './Product.styles';

const Product = () => {

  const product = productData.map((item) => (
    <ProductoCard
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (

    <Container>
      <Titulo>CARDÁPIO DE PRODUTOS</Titulo>
      <Subtitulo>Conheça mais nossos produtos exclusivos</Subtitulo>

      <ProdutoContainer>
        {
          productData.map((item) => (
            <ProdutoItem>
              <ProductoCard
                name={item.name}
                url={item.imageurl}
                price={item.price}
                description={item.description}
              />
            </ProdutoItem>
          ))
        }
      </ProdutoContainer>
    </Container>

   
  )
}

export default Product;
