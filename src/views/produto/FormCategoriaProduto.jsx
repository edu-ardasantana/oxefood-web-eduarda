import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Icon, Divider, Form, Button } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import MenuSistema from '../../MenuSistema';
import {mensagemErro, notifyError, notifySuccess } from '../../views/util/Util';

export default function FormCategoriaProduto() {

    const { state } = useLocation();

    const [idCategoriaProduto, setIdCategoriaProduto] = useState();
    const [descricao, setDescricao] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8082/api/categoriaProduto/" + state.id)
                .then((response) => {
                    setIdCategoriaProduto(response.data.id)
                    setDescricao(response.data.descricao)
                })
        }
    }, [state])

    function salvar() {

        let categoriaProdutoRequest = {
            descricao: descricao
        }

        if (idCategoriaProduto != null) { //Alteração
            axios.put("http://localhost:8082/api/categoriaProduto/" + idCategoriaProduto, categoriaProdutoRequest)
                .then((response) => {
                    notifySuccess('Categoria de produto alterada com sucesso.')
                    console.log('Categoria de produto alterada com sucesso.')
                })
                .catch((error) => {
                    if (error.response) {
                        notifyError(error.response.data.errors[0].defaultMessage)
                    } else {
                        notifyError(mensagemErro)
                    }
                    console.log('Erro ao alterar uma categoria de produto.')
                })
        } else { //Cadastro
            axios.post("http://localhost:8082/api/categoriaProduto", categoriaProdutoRequest)
                .then((response) => {
                    notifySuccess('Categoria de produto cadastrado com sucesso.')
                    console.log('Categoria de produto cadastrada com sucesso.')
                })
                .catch((error) => {
                    if (error.response) {
                        notifyError(error.response.data.errors[0].defaultMessage)
                    } else {
                        notifyError(mensagemErro)
                    }
                    console.log('Erro ao incluir a categoria de produto.')
                })
        }
    }

    return (
        <div>

            <MenuSistema />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign="justified" >

                    {idCategoriaProduto === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Categoria Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idCategoriaProduto !== undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Categoria Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Input
                                required
                                fluid
                                label='Descrição'
                                maxLength="100"
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)}
                            />

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/list-categoriaProduto'}>Voltar</Link>
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>

            </div>
        </div>
    )

}