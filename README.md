# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Estrutura de pastas

`assets`: Serve para armazenar imagens (imagens leves, se forem pesadas sempre prefira hospedar em uma CDN), ícones, etc.

`components`: Componentes reutilizáveis da aplicação. Componentes que são unidades para sua aplicação, um button, um dropdown, um modal, etc.

`pages`: As pages são as páginas que usam vários componentes. É essa a página que o usuário vai ver.

## Estrutura de pastas importantes mas não utilizadas nesta aplicação

`types`: Armazena as tipagens de typescript (types e interfaces) que são comuns em várias áreas do projeto.

`utils`: Funções utilitárias como formatCurrency, formatPhone, convertTimezone, parsePhone (javascript puro).

`services`: Aqui ficam as configurações de HTTP clientes, normalmente utilizando axios.

`store`: Ficam as definições de state managers, context api, zustand, redux.

`hooks`: Essa pasta é utilizada para armazenar hooks que são genéricos, têm interação com hooks do React (useState, useEffect) e normalmente reutilizáveis e qualquer projeto, exemplos: useScreenSize, useLocalStorage, useSessionStorage, useUserActive.

## Principais pacotes

`react-router-dom`

