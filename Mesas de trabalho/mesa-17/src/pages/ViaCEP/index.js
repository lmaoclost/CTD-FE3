import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/apiViaCEP';

const ViaCEP = () => {
  const [endereco, setEndereco] = useState({});
  const { cep } = useParams();

  useEffect(() => {
    if (cep) {
      handleSubmit({ cep });
    }
  }, [cep])

  const handleSubmit = async ({ cep }) => {
    try {
      const response = await api.get(`${cep}/json`);
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
        <Link to="/brasilapi">Ir para BrasilAPI</Link>
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
              <li><Link to={`/brasilapi/${endereco.cep}`}>Ver endereço com BrasilAPI</Link></li>
              <li>{endereco.cep}</li>
              <li>{endereco.logradouro}</li>
              <li>{endereco.complemento}</li>
              <li>{endereco.bairro}</li>
              <li>{endereco.localidade}</li>
              <li>{endereco.uf}</li>
            </ul>
          )}
        </div>
      </main>
    </>
  );
}

export default ViaCEP;