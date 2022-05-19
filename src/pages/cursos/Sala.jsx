import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {FaCheck} from 'react-icons/fa'
import salaValidator from '../../validators/salaValidator'
import SalaService from '../../services/academico/SalaService'

const Sala = () => {

  const params = useParams()
  const navigate = useNavigate()
  const {register, handleSubmit, setValue, formState: {errors} } = useForm();

  useEffect(()=>{
    if (params.id){
  const sala = SalaService.get(params.id)
  console.log(sala);

  for(let campo in sala){
    setValue(campo, sala[campo])
  }
 }
}, [])

function salvar(dados) {
  if(params.id){
    SalaService.update(params.id, dados)
  }
  else{
  SalaService.create(dados)
  navigate('/sala')
  }
}

  return (
    <div>
        <Container>
        <h1>Salas</h1>
        <Form>
         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register("nome", salaValidator.nome)} />
           {errors.nome && <span>{errors.nome.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="capacidade">
           <Form.Label>Capacidade: </Form.Label>
           <Form.Control type="text"{...register("capacidade", salaValidator.capacidade)}  />
           {errors.capacidade && <span>{errors.capacidade.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="tipo">
           <Form.Label>Tipo: </Form.Label>
           <Form.Control type="text"{...register("tipo", salaValidator.tipo)}  />
           {errors.tipo && <span>{errors.tipo.message}</span>}
         </Form.Group>

         <div className="text-center">
             <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck/> Salvar</Button>
         </div>
        </Form>
        </Container>
    </div>
  )
}

export default Sala