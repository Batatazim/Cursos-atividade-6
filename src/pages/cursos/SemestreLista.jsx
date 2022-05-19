import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import SemestreService from '../../services/academico/SemestreService'
import {BsTrash, BsPencil} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {AiOutlineRollback} from 'react-icons/ai'


const SemestreLista = () => {

    const[semestre, setSemestre] = useState ([])

    useEffect(()=> {
        setSemestre(SemestreService.getAll())
    }, [])

    function apagar(id) {
      if(window.confirm('Quer apagar a parada ?'))
      SemestreService.delete(id)
      setSemestre(SemestreService.getAll())
    }

    console.log(semestre);
  return (
    <div>
        <Container>
        <h1>Semestre Lista</h1>
        <Link className='btn btn-success' to={'/semestre'}><AiOutlinePlus/> Novo</Link>
        <Table className="mt-3" striped bordered hover>
         <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Início do semestre</th>
            <th>Término do semestre</th>
        </tr>
        </thead>
        <tbody>
            {semestre.map((item, i) => (
                <tr key={i}>
                <td>
                <Link to={'/semestre/' + i}><BsPencil className='text-primary'/></Link>{"  "}
                <BsTrash onClick={() => apagar (i)} className='text-danger'/>
                </td>
                <td>{item.nome}</td>
                <td>{item.datain}</td>
                <td>{item.datafim}</td>
              </tr>
            ))}
        </tbody>
        </Table>
        <Link to={-1} className='btn btn-danger'><AiOutlineRollback/> Voltar</Link>
        </Container>
    </div>
  )
}

export default SemestreLista