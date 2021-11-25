import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import api from '../../services/brasilAPICEP';

const BrasilAPICEP = () => {
  const [endereco, setEndereco] = useState({});
  const { cep } = useParams();

  useEffect(() => {
    if (cep) {
      handleSubmit({ cep });
    }
  }, [cep])

  const handleSubmit = async ({ cep }) => {
    try {
      const response = await api.get(`${cep}`);
      setEndereco(response.data);
    } catch (error) {
      Swal.fire({
        title: 'Oops',
        icon: 'error',
        text: 'CEP não encontrado ou erro no servidor.'
      });
    }
  }

  return (
    <>
      <main>
        <Link to="/">Ir para ViaCEP</Link>
        <div className="col-md-4 col-sm-6 my-3 container text-center">
          <h2>Procure um CEP</h2>
          <Formik initialValues={{ cep: '' }} onSubmit={handleSubmit}>
            <Form>
              <Field placeholder="Insira o CEP" required type="text" name="cep" id="cep" className="form-control my-3" />
              <button type="submit" className="btn btn-primary">Pesquisar</button>
            </Form>
          </Formik>
          {endereco.cep && (
            <ul className="list-group my-3">
              <li><Link to={`/${endereco.cep}`}>Ver no ViaCEP</Link></li>
              <li>{endereco.cep}</li>
              <li>{endereco.state}</li>
              <li>{endereco.city}</li>
              <li>{endereco.neighborhood}</li>
              <li>{endereco.street}</li>
            </ul>
          )}
        </div>
      </main>
    </>
  );
}

export default BrasilAPICEP;