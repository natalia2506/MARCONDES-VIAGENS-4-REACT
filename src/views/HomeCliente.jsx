import React, { useState, useEffect } from 'react'

import { useNavigate, Link, useParams } from 'react-router-dom';

import axios from 'axios'

export default function HomeCliente() {

    const [clientes, setClientes] = useState([]);

    const listarCadastroCliente = async () => {
        try {
            await axios.get("http://localhost:8080/marcondes/cliente").then((response) => { setClientes(response.data) })
        } catch (erro) {
            alert(erro.message);
        }
    };


    useEffect(() => { listarCadastroCliente() }, [])

    const { id } = useParams();

    const deleteCliente = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/marcondes/cliente/${id}`)
                .then((response) => {
                    alert('Cliente excluido.')
                    listarCadastroCliente();
                })
        } catch (erro) {
            alert(erro.message)
        }
    }

    return (
        <div classNameName='container'>
            <div classNameName='py-4'>
                <table className="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Nome Social</th>
                            <th scope="col">Data de nascimento</th>
                            <th scope="col">Identidade</th>
                            <th scope="col">Cpf</th>
                            <th scope="col">Celular</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">Cidade</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Cep</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente, key) => (
                            <tr>
                                <th scope="row" key={key}>{key + 1}</th>
                                <td>{cliente.nome}</td>
                                <td>{cliente.nomeSocial}</td>
                                <td>{cliente.dataNascimento}</td>
                                <td>{cliente.identidade}</td>
                                <td>{cliente.cpf}</td>
                                <td>{cliente.celular}</td>
                                <td>{cliente.endereco}</td>
                                <td>{cliente.cidade}</td>
                                <td>{cliente.estado}</td>
                                <td>{cliente.cep}</td>
                                <td>{cliente.email}</td>

                                <td>
                                    <Link to={`/visualizarCliente/${cliente.id}`} className='btn btn-primary mx-2'>Ver por id</Link>

                                    <Link to={`/atualiazarCliente/${cliente.id}`} className='btn btn-success mx-2'>Editar</Link>


                                    <button className="btn btn-danger mx-2" onClick={() => deleteCliente(cliente.id)}>Excluir</button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    )
}