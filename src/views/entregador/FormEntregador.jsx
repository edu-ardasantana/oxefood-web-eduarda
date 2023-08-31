import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';


export default function FormEntregador() {
    return (
        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign="justified">

                    <h2><span style={{ color: 'darkgrey' }}>Entregador <Icon name='angle double right' size='small' /></span> Cadastro</h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    width={8}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    width={5}
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'
                                    maxLength="100"
                                    width={5}>
                                    <InputMask
                                        mask="99.999.999"
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    maxLength="100"
                                    width={5}>
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    maxLength="100"
                                    width={5}
                                />

                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    maxLength="100"
                                    width={5}
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    maxLength="100"
                                    width={12}
                                />

                                <Form.Input
                                    fluid
                                    label='Número'
                                    maxLength="100"
                                    width={4}
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    maxLength="100"
                                    width={8}
                                />

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    maxLength="100"
                                    width={8}
                                />

                                <Form.Input
                                    fluid
                                    label='CEP'
                                    maxLength="100"
                                    width={2}>
                                    <InputMask 
                                        mask="99.999-999"
                                    /> 
                                    </Form.Input>

                            </Form.Group>

                        </Form>

                    </div>

                </Container>

            </div>

        </div>
    );
}