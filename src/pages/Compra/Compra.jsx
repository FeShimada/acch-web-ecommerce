import React, { useContext, useEffect, useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BotaoComprar, Container, FormContainer, Input, Subtitulo, Titulo } from './Compra.styles';

const Compra = () => {

    const history = useNavigate();
    const [totalPrice, setTotalPrice] = useState(500);
    const notify = () => toast.success("Sucesso! Compra efetuada");

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        cpf: '',
        telefone: '',
    });

    const [formValido, setFormValido] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validarFormulario = () => {
        const { nome, email, cpf, telefone } = formData;
        if (nome && email && cpf && telefone) {
            setFormValido(true);
        } else {
            setFormValido(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValido) {
            notify();
            history('/');
        } else {
            alert('Por favor, preencha todos os campos do formulário.');
        }
    };

    return (

        <Container>
            <Titulo>INSIRA SEUS DADOS</Titulo>
            <Subtitulo>Obrigado por confiar na gente!</Subtitulo>
            <Subtitulo>TOTAL {totalPrice}</Subtitulo>
            <FormContainer onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    onBlur={validarFormulario}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={validarFormulario}
                />
                <Input
                    type="text"
                    placeholder="CPF"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleInputChange}
                    onBlur={validarFormulario}
                />
                <Input
                    type="tel"
                    placeholder="Número de Telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    onBlur={validarFormulario}
                />
            </FormContainer>
            <BotaoComprar onClick={handleSubmit} type="submit" disabled={!formValido}>Finalizar</BotaoComprar>
        </Container>
    )
}

export default Compra;
