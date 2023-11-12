import { createContext, useState } from "react";

export const CarrinhoContext = createContext()

export const CarrinhoProvider = ({children}) => {

    const [nrCarrinho, setNrCarrinho] = useState(0);

    const increaseNrCarrinho = () => {
        setNrCarrinho(nrCarrinho + 1);
    }

    return (
        <CarrinhoContext.Provider value={{nrCarrinho, increaseNrCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    )
}

