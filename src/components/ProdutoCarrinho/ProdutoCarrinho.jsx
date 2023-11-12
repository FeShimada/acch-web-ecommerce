import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Card, Descricao, Preco, Titulo } from "./ProdutoCarrinho.styles";

export default function ProdutoCarrinho(props) {

  return (
    <Card>
      <Titulo>{props.name}</Titulo>
      <Preco>{props.price}</Preco>
      <Descricao>{props.description}</Descricao>
    </Card>
  );
}
