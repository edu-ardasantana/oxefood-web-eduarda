import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { Link, useLocation } from "react-router-dom";

import MenuSistema from '../../MenuSistema';

const options = [
    { key: "pe", text: "PE", value: "PE" },
    { key: "sp", text: "SP", value: "SP" },
    { key: "rj", text: "RJ", value: "RJ" },
]

export default function FormEntregador() {

    const { state } = useLocation();

    const [idEntregador, setIdEntregador] = useState();
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
    const [valorFrete, setValorFrete] = useState();
    const [enderecoRua, setEnderecoRua] = useState();
    const [enderecoNumero, setEnderecoNumero] = useState();
    const [enderecoBairro, setEnderecoBairro] = useState();
    const [enderecoCidade, setEnderecoCidade] = useState();
    const [enderecoUf, setEnderecoUf] = useState();
    const [enderecoComplemento, setEnderecoComplemento] = useState();
    //const [ativo, setAtivo] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8082/api/entregador/" + state.id)
                .then((response) => {
                    setIdEntregador(response.data.id)
                    setNome(response.data.nome)
                    setCpf(response.data.cpf)
                    setRg(response.data.rg)
                    setDataNascimento(formatarData(response.data.dataNascimento))
                    setFoneCelular(response.data.foneCelular)
                    setFoneFixo(response.data.foneFixo)
                    setQtdEntregasRealizadas(response.data.qtdEntregasRealizadas)
                    setValorFrete(response.data.valorFrete)
                    setEnderecoRua(response.data.enderecoRua)
                    setEnderecoNumero(response.data.enderecoNumero)
                    setEnderecoBairro(response.data.enderecoBairro)
                    setEnderecoCidade(response.data.enderecoCidade)
                    setEnderecoUf(response.data.enderecoUf)
                    setEnderecoComplemento(response.data.enderecoComplemento)
                })
        }
    }, [state])

    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];


    }


    function salvar() {

        let entregadorRequest = {
            nome: nome,
            cpf: cpf,
            rg: rg,
            dataNascimento: dataNascimento,
            foneCelular: foneCelular,
            foneFixo: foneFixo,
            qtdEntregasRealizadas: qtdEntregasRealizadas,
            valorFrete: valorFrete,
            enderecoRua: enderecoRua,
            enderecoNumero: enderecoNumero,
            enderecoBairro: enderecoBairro,
            enderecoCidade: enderecoCidade,
            enderecoUf: enderecoUf,
            enderecoComplemento: enderecoComplemento,
            // ativo: ativo
        }

        if (idEntregador != null) { //Alteração:
            axios.put("http://localhost:8082/api/entregador/" + idEntregador, entregadorRequest)
                .then((response) => { console.log('Entregador alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alter um entregador.') })
        } else { //Cadastro:
            axios.post("http://localhost:8082/api/entregador", entregadorRequest)
                .then((response) => { console.log('Entregador cadastrado com sucesso.') })
                .catch((error) => { console.log('Erro ao incluir o entregador.') })
        }

    }

    return (
        <div>

            <MenuSistema />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign="justified">

                    {idEntregador === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idEntregador != undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }


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
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    width={5}
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'
                                    maxLength="100"
                                    width={5}>
                                    <InputMask
                                        mask="99.999.999"
                                        value={rg}
                                        onChange={e => setRg(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Data de Nascimento'
                                    maxLength="100"
                                    width={5}>
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={dataNascimento}
                                        onChange={e => setDataNascimento(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={foneCelular}
                                        onChange={e => setFoneCelular(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={foneFixo}
                                        onChange={e => setFoneFixo(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    maxLength="100"
                                    width={5}
                                    value={qtdEntregasRealizadas}
                                    onChange={e => setQtdEntregasRealizadas(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    maxLength="100"
                                    width={5}
                                    value={valorFrete}
                                    onChange={e => setValorFrete(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    maxLength="100"
                                    width={12}
                                    value={enderecoRua}
                                    onChange={e => setEnderecoRua(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Número'
                                    maxLength="100"
                                    width={4}
                                    value={enderecoNumero}
                                    onChange={e => setEnderecoNumero(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    maxLength="100"
                                    width={8}
                                    value={enderecoBairro}
                                    onChange={e => setEnderecoBairro(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    maxLength="100"
                                    width={8}
                                    value={enderecoCidade}
                                    onChange={e => setEnderecoCidade(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='CEP'
                                    maxLength="100"
                                    width={2}>
                                    <InputMask
                                        mask="99.999-999"
                                    // value={cep}
                                    // onChange={e => setCep(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Select
                                fluid
                                label='UF'
                                options={options}
                                placeholder="Selecione"
                                value={enderecoUf}
                                onChange={(e,{value}) =>{
                                    setEnderecoUf(value)
                                }}
                            />

                            <Form.Input
                                fluid
                                label="Complemento"
                                value={enderecoComplemento}
                                onChange={e => setEnderecoComplemento(e.target.value)}
                            />

                            <Form.Group inline>

                                <label>Ativo:</label>

                                <Form.Radio
                                    label="Sim"
                                    value="sim"
                                // checked={value === 'sim'}
                                // onChange={this.handleChange}
                                />

                                <Form.Radio
                                    label="Não"
                                    value="nao"
                                // checked={value === 'nao'}
                                // onChange={this.handleChange}
                                />


                            </Form.Group>

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
                                <Link to={'/list-entregador'}>Voltar</Link>
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
    );
}
