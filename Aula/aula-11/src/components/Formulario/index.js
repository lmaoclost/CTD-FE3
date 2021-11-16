import { Component } from "react";
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';

export default class Formulario extends Component {
  handleSubmit = ({ nome, idade }) => {
    if (nome === '') {
      Swal.fire({
        title: 'Aconteceu um erro',
        icon: 'error',
        text: 'Ih rapaz'
      });
    }
    else {
      Swal.fire({
        title: 'Valores enviados',
        icon: 'success',
        text: 'Opa, funfou'
      })
    }
  }

  render() {
    return (
      <>
        <Formik initialValues={{ nome: '', idade: '' }} onSubmit={this.handleSubmit}>
          <Form>
            <Field placeholder="Insira seu nome" type="text" name="nome" id="nome" className="form-control" />
            <Field placeholder="Insira sua idade" type="number" name="idade" id="idade" className="form-control" />
            <button className="btn btn-primary" type="submit">Enviar</button>
          </Form>
        </Formik>
      </>
    )
  }
}