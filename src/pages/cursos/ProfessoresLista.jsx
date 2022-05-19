import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import ProfessoresService from '../../services/academico/ProfessoresService'
import {BsTrash, BsPencil} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {AiOutlineRollback} from 'react-icons/ai'

const ProfessoresLista = () => {

    const[professores, setProfessores] = useState ([])

    useEffect(()=> {
        setProfessores(ProfessoresService.getAll())
    }, [])

    function apagar(id) {
      if(window.confirm('Quer apagar a parada ?'))
      ProfessoresService.delete(id)
      setProfessores(ProfessoresService.getAll())
    }

    console.log(professores);
  return (
    <div>
         <Container>
        <h1>Professores Lista</h1>
        <Link className='btn btn-success' to={'/professores'}><AiOutlinePlus/> Novo</Link>
        <Table className="mt-3" striped bordered hover>
         <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Matricula</th>
            <th>Salário</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Cep</th>
            <th>Número</th>
            <th>Bairro</th>
        </tr>
        </thead>
        <tbody>
            {professores.map((item, i) => (
                <tr key={i}>
                <td>
                <Link to={'/professores/' + i}><BsPencil className='text-primary'/></Link>{"  "}
                <BsTrash onClick={() => apagar (i)} className='text-danger'/>
                </td>
                <td>{item.nome}</td>
                <td>{item.cpf}</td>
                <td>{item.matricula}</td>
                <td>{item.salario}</td>
                <td>{item.email}</td>
                <td>{item.telefone}</td>
                <td>{item.cep}</td>
                <td>{item.numero}</td>
                <td>{item.bairro}</td>
              </tr>
            ))}
        </tbody>
        </Table>
        <Link to={-1} className='btn btn-danger'><AiOutlineRollback/> Voltar</Link>
        </Container>
    </div>
  )
}

export default ProfessoresLista