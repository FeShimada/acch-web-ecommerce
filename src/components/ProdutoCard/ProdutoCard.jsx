import React from "react";
import { Botao, Card, Descricao, Preco, ProdutoImagem, Titulo } from "./ProdutoCard.styles";

export default function ProductoCard(props) {
  return (
    <Card>
      <ProdutoImagem src={props.url} alt="product image" />
      <Titulo>{props.name}</Titulo>
      <Preco>{props.price}</Preco>
      <Descricao>{props.description}</Descricao>
      <p>
        <Botao>Adicionar ao carrinho</Botao>
      </p>
    </Card>
  );
}
