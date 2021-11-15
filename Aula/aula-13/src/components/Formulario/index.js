import { Component } from "react";
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';

import './style.scss';

export default class Formulario extends Component {

  handleSubmit = ({ nome, email, contato, mensagem }) => {
    const errors = {};

    if (!nome) {
      errors.nome = 'Insira um nome válido'
    }
    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Insira um email válido'
    }

    if (!contato || !/\(\d{2}\)\s\d{4,5}-\d{4}/.test(String(contato))) {
      errors.contato = 'O numero de contato deve estar no formato (00) 00000-0000';
    }
    if (!mensagem) {
      errors.mensagem = 'Insira uma mensagem válida'
    }

    if (errors.nome || errors.email || errors.contato || errors.mensagem) {
      Swal.fire({
        title: 'Oops, itens a serem corrigidos',
        icon: 'error',
        html: `<ul>
              ${errors.nome ? `<li>${errors.nome}</li>` : ''}
              ${errors.email ? `<li>${errors.email}</li>` : ''}
              ${errors.contato ? `<li>${errors.contato}</li>` : ''}
              ${errors.mensagem ? `<li>${errors.mensagem}</li>` : ''}
            </ul>`
      });
    }
    else {
      Swal.fire({
        title: 'Tudo certo!',
        icon: 'success',
        text: 'Em breve entraremos em contato!'
      })
    }
  }

  render() {
    return (
      <>
        <div className="col-md-4 offset-md-4 col-sm-8 offset-sm-2 my-3 container text-center">
          <h2>Contato</h2>
          <Formik validate={this.handleValidate} initialValues={{ nome: '', email: '', contato: '', mensagem: '' }} onSubmit={this.handleSubmit}>
            <Form>
              <Field placeholder="Insira seu nome" type="text" name="nome" id="nome" className="form-control" />
              <Field placeholder="Insira seu email" type="email" name="email" id="email" className="form-control" />
              <Field placeholder="Insira seu contato" type="tel" name="contato" id="contato" className="form-control" />
              <Field placeholder="Insira sua mensagem" as="textarea" name="mensagem" id="mensagem" className="form-control" />
              <button className="btn btn-primary my-4" type="submit">Enviar</button>
            </Form>
          </Formik>
        </div>
      </>
    )
  }
}