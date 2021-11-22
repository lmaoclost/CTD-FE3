import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import api from './services/api';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      repositorios: []
    }
  }

  componentDidMount() {
    this.handleSubmit({ nomeUsuario: 'lmaoclost' });
  }

  handleSubmit = async ({ nomeUsuario }) => {
    try {
      const response = await api.get(`/users/${nomeUsuario}/repos`);
      this.setState({ repositorios: response.data });
    } catch (error) {
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.data.message
      });
    }
  }

  render() {
    return (
      <>
        <div className="col-md-4 col-sm-6 my-3 container text-center">
          <h2>Procure um usuário do github</h2>
          <Formik initialValues={{ nomeUsuario: '' }} onSubmit={this.handleSubmit}>
            <Form>
              <Field placeholder="Insira o nome do usuário" required type="text" name="nomeUsuario" id="nomeUsuario" className="form-control my-3" />
              <button className="btn btn-primary" type="submit">Pesquisar</button>
            </Form>
          </Formik>
          {this.state.repositorios && (
            <ol className="list-group list-group-numbered my-3">
              {this.state.repositorios.map(({ id, name, html_url }) => {
                return (
                  <li key={id}>
                    <a target="_blank" href={html_url} rel="noreferrer">{name}</a>
                  </li>
                )
              })}
            </ol>
          )}
        </div>
      </>
    );
  }
}