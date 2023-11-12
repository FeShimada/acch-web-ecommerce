import React, { useContext } from "react";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import { Botao, Card, Descricao, Preco, ProdutoImagem, Titulo } from "./ProdutoCard.styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductoCard(props) {

  const { increaseNrCarrinho } = useContext(CarrinhoContext);
  const notify = () => toast.success("Sucesso! Produto adicionado ao carrinho");

  const handleClick = () => {
    increaseNrCarrinho()
    notify()
  }

  return (
    <Card>
      <ProdutoImagem src={props.url} alt="product image" />
      <Titulo>{props.name}</Titulo>
      <Preco>{props.price}</Preco>
      <Descricao>{props.description}</Descricao>
      <p>
        <Botao onClick={handleClick}>Adicionar ao carrinho</Botao>
      </p>
    </Card>
  );
}
