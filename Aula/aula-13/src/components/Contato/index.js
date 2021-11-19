import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import './style.scss';

export default class Contato extends Component {
  handleSubmit = ({ nome, email, contato, mensagem }) => {
    const errors = [];

    if (!nome) {
      errors.push('Insira um nome válido');
    }

    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.push('Insira um email válido');
    }

    if (!contato || !/\(\d{2}\)\s\d{4,5}-\d{4}/.test(String(contato))) {
      errors.push('O número de contato deve estar no formato (00) 00000-0000');
    }

    if (!mensagem) {
      errors.push('Insira uma mensagem válida');
    }

    if (errors.length) {
      Swal.fire({
        title: 'Oops, há itens a serem corrigidos',
        icon: 'error',
        html: errors.join('<br>')
      })
    }
    else {
      Swal.fire({
        title: 'Tudo certo!',
        icon: 'success',
        text: 'Em breve entraremos em contato Radiante'
      })
    }
  }

  render() {
    return (
      <>
        <section id="contato" className="col-md-4 col-sm-6 my-3 container text-center">
          <h2>Contato</h2>
          <Formik initialValues={{ nome: '', email: '', contato: '', mensagem: '' }} onSubmit={this.handleSubmit}>
            <Form>
              <Field placeholder="Insira seu nome" type="text" name="nome" id="nome" className="form-control mb-2" />
              <Field placeholder="Insira seu email" type="email" name="email" id="email" className="form-control mb-2" />
              <Field placeholder="Insira seu contato" type="tel" name="contato" id="contato" className="form-control mb-2" />
              <Field placeholder="Insira sua mensagem" as="textarea" name="mensagem" id="mensagem" className="form-control mb-2" />
              <button className="btn btn-primary my-3" type="submit">Enviar</button>
            </Form>
          </Formik>
        </section>
      </>
    )
  }
}