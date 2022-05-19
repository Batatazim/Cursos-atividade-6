import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {FaCheck} from 'react-icons/fa'
import CursoValidator from '../../validators/CursoValidator'
import CursoService from '../../services/academico/CursoService'

const Curso = () => {

  const params = useParams()
  const navigate = useNavigate()
  const {register, handleSubmit, setValue, formState: {errors} } = useForm();

  useEffect(()=>{
    if (params.id){
  const curso = CursoService.get(params.id)
  console.log(curso);

  for(let campo in curso){
    setValue(campo, curso[campo])
  }
 }
}, [])

function salvar(dados) {
  if(params.id){
    CursoService.update(params.id, dados)
  }
  else{
  CursoService.create(dados)
  navigate('/cursos')
  }
}

  return (
    <div>
        <Container>
        <h1>Cursos</h1>
        <Form>
         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register("nome", CursoValidator.nome)} />
           {errors.nome && <span>{errors.nome.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="duracao">
           <Form.Label>Duração: </Form.Label>
           <Form.Control type="text"{...register("duracao", CursoValidator.duracao)}  />
           {errors.duracao && <span>{errors.duracao.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="modalidade">
           <Form.Label>Modalidade: </Form.Label>
           <Form.Control type="text"{...register("modalidade", CursoValidator.modalidade)}  />
           {errors.modalidade && <span>{errors.modalidade.message}</span>}
         </Form.Group>

         <div className="text-center">
             <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck/> Salvar</Button>
         </div>
        </Form>
        </Container>
    </div>
  )
}

export default Curso