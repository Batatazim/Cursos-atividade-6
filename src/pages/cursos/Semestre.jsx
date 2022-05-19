import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {FaCheck} from 'react-icons/fa'
import semestreValidator from '../../validators/semestreValidator'
import SemestreService from '../../services/academico/SemestreService'


const Semestre = () => {

  const params = useParams()
  const navigate = useNavigate()
  const {register, handleSubmit, setValue, formState: {errors} } = useForm();

  useEffect(()=>{
    if (params.id){
  const semestre = SemestreService.get(params.id)
  console.log(semestre);

  for(let campo in semestre){
    setValue(campo, semestre[campo])
  }
 }
}, [])

function salvar(dados) {
  if(params.id){
    SemestreService.update(params.id, dados)
  }
  else{
  SemestreService.create(dados)
  navigate('/semestre')
  }
}

  return (
    <div>
         <Container>
        <h1>Semestre</h1>
        <Form>
         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register("nome", semestreValidator.nome)} />
           {errors.nome && <span>{errors.nome.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="datain">
           <Form.Label>Início do semestre: </Form.Label>
           <Form.Control type="date"{...register("datain", semestreValidator.datain)}  />
           {errors.datain && <span>{errors.datain.message}</span>}
         </Form.Group>

         <Form.Group className="mb-3" controlId="datafim">
           <Form.Label>Término do semestre: </Form.Label>
           <Form.Control type="date"{...register("datafim", semestreValidator.datafim)}  />
           {errors.datafim && <span>{errors.datafim.message}</span>}
         </Form.Group>

         <div className="text-center">
             <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck/> Salvar</Button>
         </div>
        </Form>
        </Container>
    </div>
  )
}

export default Semestre