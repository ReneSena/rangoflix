import React, { useState, useEffect } from 'react';
import Template from '../../../components/Template';
import FormField from '../../../components/FormField';

import {
  Title, Form, ButtonSave, Table,
} from './styled';

const CadastroCategoria = () => {
  const initialValues = {
    name: '',
    description: '',
    color: '#20bf6b',
  };

  // Guarda os valores da lista de categorias
  const [listCategorys, setListCategorys] = useState([]);
  const [values, setValues] = useState(initialValues);

  const setValue = (chave, valor) => {
    setValues({
      ...values,
      [chave]: valor,
    });
  };

  const handleChange = (event) => {
    setValue(
      event.target.getAttribute('name'), // nome campo
      event.target.value, // valor digitado no input
    );
  };

  useEffect(() => {
    // O que a gente quer que aconteça
    const URL_VALUE = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias' : 'https://rangoflix.herokuapp.com/categorias';

    fetch(URL_VALUE)
      .then(async (res) => {
        const responseReq = await res.json();
        setListCategorys([
          ...responseReq,
        ]);
      });
  }, []);
  /* quando a quer que aconteça */

  const handleSubmit = (event) => {
    event.preventDefault();

    setListCategorys([...listCategorys, values]);
    setValues(initialValues);
  };

  return (
    <Template styled={{ textAlign: 'center' }}>
      <Title>Nova Categoria</Title>

      <Form onSubmit={handleSubmit}>
        <FormField
          label="Nome"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <ButtonSave type="submit">Cadastrar</ButtonSave>
      </Form>

      {listCategorys.length === 0 && (
        <div>Loading...</div>
      )}

      {listCategorys.length > 0
                && (
                <Table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Descrição</th>
                      <th>Cor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listCategorys.map((category, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <tr key={index}>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                        <td>{category.color}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                )}

    </Template>
  );
};

export default CadastroCategoria;
