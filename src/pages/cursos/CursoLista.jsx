import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import CursoService from '../../services/academico/CursoService'
import {BsTrash, BsPencil} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {AiOutlineRollback} from 'react-icons/ai'


const CursoLista = () => {

    const[curso, setCurso] = useState ([])

    useEffect(()=> {
        setCurso(CursoService.getAll())
    }, [])

    function apagar(id) {
      if(window.confirm('Quer apagar a parada ?'))
      CursoService.delete(id)
      setCurso(CursoService.getAll())
    }

    console.log(curso);

  return (
    <div>
<Container>
        <h1>Curso Lista</h1>
        <Link className='btn btn-success' to={'/cursos'}><AiOutlinePlus/> Novo</Link>
        <Table className="mt-3" striped bordered hover>
         <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Duração</th>
            <th>Modalidade</th>
        </tr>
        </thead>
        <tbody>
            {curso.map((item, i) => (
                <tr key={i}>
                <td>
                <Link to={'/cursos/' + i}><BsPencil className='text-primary'/></Link>{"  "}
                <BsTrash onClick={() => apagar (i)} className='text-danger'/>
                </td>
                <td>{item.nome}</td>
                <td>{item.duracao}</td>
                <td>{item.modalidade}</td>
              </tr>
            ))}
        </tbody>
        </Table>
        <Link to={-1} className='btn btn-danger'><AiOutlineRollback/> Voltar</Link>
        </Container>
    </div>
  )
}

export default CursoLista