import { Component } from "react";
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';

export default class Formulario extends Component {
  handleSubmit = ({ nome, number }) => {
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
        <Formik initialValues={{ nome: '', number: 0 }} onSubmit={this.handleSubmit}>
          <Form>
            <Field placeholder="Insira seu nome" type="text" name="nome" id="nome" className="form-control" />
            <Field placeholder="Insira sua idade" type="number" name="number" id="number" className="form-control" />
            <button type="submit">Enviar</button>
          </Form>
        </Formik>
      </>
    )
  }
}