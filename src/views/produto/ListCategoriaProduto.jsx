import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table, Modal, Header } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import {mensagemErro, notifyError, notifySuccess } from '../../views/util/Util';

export default function ListCategoriaProduto() {

    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();

    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {

        axios.get("http://localhost:8082/api/categoriaProduto")
            .then((response) => {

                setLista(response.data)
            })
    }

    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }

    async function remover() {

        await axios.delete('http://localhost:8082/api/categoriaProduto/' + idRemover)
            .then((response) => {
                notifySuccess('Categoria de produto removida com sucesso.')
                console.log('categoria de produto removida com sucesso.')

                axios.get("http://localhost:8082/api/categoriaProduto")
                    .then((response) => {
                        setLista(response.data)
                    })
            })
            .catch((error) => {
                if (error.response) {
                    notifyError(error.response.data.errors[0].defaultMessage)
                } else {
                    notifyError(mensagemErro)
                }
                console.log('Erro ao remover uma categoria de produto.')
            })
        setOpenModal(false)
    }

    return (

        <div>

            <MenuSistema />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified'>

                    <h2>Categoria de Produto </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-categoriaProduto'
                        />

                        <br /><br /><br />

                        <Table color='orange' sortable celled>

                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Descrição</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {lista.map(categoriaProduto => (

                                    <Table.Row key={categoriaProduto.id}>
                                        <Table.Cell>{categoriaProduto.descricao}</Table.Cell>
                                        <Table.Cell textAlign='center'>

                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados desta categoria de produto'
                                                icon>
                                                <Link to="/form-categoriaProduto" state={{ id: categoriaProduto.id }} style={{ color: 'green' }}> <Icon name='edit' /> </Link>
                                            </Button> &nbsp;

                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover esta categoria de produto'
                                                icon
                                                onClick={e => confirmaRemover(categoriaProduto.id)}>
                                                <Icon name='trash' />
                                            </Button>

                                        </Table.Cell>
                                    </Table.Row>
                                ))}

                            </Table.Body>
                        </Table>

                    </div>

                </Container>

                <Modal
                    basic
                    onClose={() => setOpenModal(false)}
                    onOpen={() => setOpenModal(true)}
                    open={openModal}
                >
                    <Header icon>
                        <Icon name='trash' />
                        <div style={{ marginTop: '5%' }}> Tem certeza que deseja remover esse registro? </div>
                    </Header>
                    <Modal.Actions>
                        <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                            <Icon name='remove' /> Não
                        </Button>
                        <Button color='green' inverted onClick={() => remover()}>
                            <Icon name='checkmark' /> Sim
                        </Button>
                    </Modal.Actions>
                </Modal>

            </div>

        </div>

    )

}