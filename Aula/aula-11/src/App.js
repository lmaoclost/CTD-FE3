import { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import Swal from 'sweetalert2'
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nome: ''
    }
    this.formUpdate = this.formUpdate.bind(this);
  }

  formUpdate(event) {
    this.setState({ nome: event.target.value });
  }

  handleSubmit = (values) => {
    console.log(values);
    Swal.fire({
      title: 'Valores enviados',
      text: 'Sucesso, tudo funcionou!',
      icon: 'info',
      confirmButtonText: 'Cool'
    })
  }

  render() {
    return (
      <>
        <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4 text-center" >
          <Formik
            initialValues={{
              nome: '',
              idade: 0
            }}
            onSubmit={this.handleSubmit}>
            <Form>
              <Field type={'text'} className="form-control" id="nome" name="nome" placeholder="Digite seu nome" />
              <Field type={"number"} className="form-control" id="idade" name="idade" placeholder="Digite sua idade" />
              <button className="btn my-3 btn-primary" type="submit">Enviar</button>
            </Form>
          </Formik>
        </div>
      </>
    )
  }
}