import { createContext, useState } from "react";

export const CarrinhoContext = createContext()

export const CarrinhoProvider = ({children}) => {

    const [nrCarrinho, setNrCarrinho] = useState(0);
    const [carrinhoList, setCarrinhoList] = useState([]);

    const increaseNrCarrinho = (carrinho) => {
        setNrCarrinho(nrCarrinho + 1);
        setCarrinhoList([...carrinhoList, carrinho])
    }

    return (
        <CarrinhoContext.Provider value={{nrCarrinho, increaseNrCarrinho, carrinhoList}}>
            {children}
        </CarrinhoContext.Provider>
    )
}

