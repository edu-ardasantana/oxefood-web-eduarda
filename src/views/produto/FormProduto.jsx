import React from "react";
import InputMask from 'react-input-mask';
import { Container, Icon, Divider, Form, TextArea, Button } from "semantic-ui-react";

export default function FormProduto() {

    return (
        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified'>

                    <h2> <span style={{ color: 'darkgrey' }}>Produto &nbsp; <Icon name='angle double right' size="small" /> </span> Cadastro</h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="100"
                                    placeholder='Informe o título do produto'
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    maxLength="100"
                                    placeholder='Informe o código do produto'
                                />



                            </Form.Group>

                            <Form.Group>

                                <Form.TextArea
                                    label='Descrição'
                                    fluid
                                    cols='600'
                                    placeholder='Informe a descrição do produto'
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label="Valor Unitário"
                                    maxLength="100"
                                    width={6}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label="Tempo de Entrega Mínimo em Minutos"
                                    maxLength="100"
                                    placeholder='30'
                                    width={6}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label="Tempo de Entrega Máximo em Minutos"
                                    maxLength="100"
                                    placeholder='40'
                                    width={6}
                                />

                            </Form.Group>

                        </Form>

                        <div style={{marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition="left"
                                color="orange"
                                >
                                    <Icon name='reply' />
                                    Voltar
                            </Button>

                            <Button
                            inverted
                            circular
                            icon
                            labelPosition="left"
                                color="blue"
                                floated="right"
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>

            </div>

        </div>
    );

}