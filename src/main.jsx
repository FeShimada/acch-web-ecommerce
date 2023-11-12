import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Product from './pages/Product/Product.jsx'
import './index.css'
import Error404 from './pages/Error404/Error404.jsx'
import { CarrinhoProvider } from './context/CarrinhoContext.jsx'
import { ToastContainer } from 'react-toastify'
import Carrinho from './pages/Carrinho/Carrinho.jsx'
import Compra from './pages/Compra/Compra.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error404/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/produtos',
        element: <Product/>
      },
      {
        path: '/carrinho',
        element: <Carrinho/>
      },
      {
        path: '/comprar',
        element: <Compra/>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarrinhoProvider>
      <ToastContainer position='top-left' hideProgressBar={true} />
      <RouterProvider router={router} />
    </CarrinhoProvider>
  </React.StrictMode>,
)
