import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import './style.scss';

export default class Formulario extends Component {
  handleSubmit = ({ nome, number }) => {
    if (nome === '') {
      Swal.fire({
        title: 'Aconteceu um erro',
        icon: 'error',
        text: 'Ih rapaz'
      })
    }
    else {
      console.log(nome);
      Swal.fire({
        title: 'Valores enviados',
        icon: 'success',
        text: 'Opa, funfou'
      })
    }
  }

  render() {
    return (
      <div id="formulario" className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4 text-center">
        <Formik initialValues={{ nome: '', number: 0 }} onSubmit={this.handleSubmit}>
          <Form>
            <Field type="text" id="nome" name="nome" className="form-control" />
            <Field type="number" id="number" name="number" className="form-control" />
            <button className="btn btn-primary my-3" type="submit">Enviar</button>
          </Form>
        </Formik>
      </div>
    )
  }
}