import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import api from '../../services/brasilAPICEP';

export default class BrasilAPICEP extends Component {
  constructor() {
    super();
    this.state = {
      endereco: {}
    }
  }

  handleSubmit = async ({ cep }) => {
    try {
      const response = await api.get(`${cep}`);
      this.setState({ endereco: response.data });
    } catch (error) {
      Swal.fire({
        title: 'Oops',
        icon: 'error',
        text: 'CEP não encontrado ou erro no servidor.'
      });
    }
  }

  render() {
    return (
      <>
        <main>
          <Link to="/">Ir para ViaCEP</Link>
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>Procure um CEP</h2>
            <Formik initialValues={{ cep: '' }} onSubmit={this.handleSubmit}>
              <Form>
                <Field placeholder="Insira o CEP" required type="text" name="cep" id="cep" className="form-control my-3" />
                <button type="submit" className="btn btn-primary">Pesquisar</button>
              </Form>
            </Formik>
            {this.state.endereco.cep && (
              <ul className="list-group my-3">
                <li>{this.state.endereco.cep}</li>
                <li>{this.state.endereco.state}</li>
                <li>{this.state.endereco.city}</li>
                <li>{this.state.endereco.neighborhood}</li>
                <li>{this.state.endereco.street}</li>
              </ul>
            )}
          </div>
        </main>
      </>
    );
  }
}