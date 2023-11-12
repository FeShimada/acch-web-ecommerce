import { NotFoundContainer, NotFoundHeading, NotFoundMessage } from "./Error404.styles";

const Error404 = () => {
    return (
        <NotFoundContainer>
            <NotFoundHeading>Oops! Página não encontrada.</NotFoundHeading>
            <NotFoundMessage>
                Desculpe, a página que você está procurando não foi encontrada.
            </NotFoundMessage>
        </NotFoundContainer>
    )
}

export default Error404;
