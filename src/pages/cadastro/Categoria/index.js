import React, { useState, useEffect } from 'react';
import Template from '../../../components/Template';
import FormField from '../../../components/FormField';
import Loader from '../../../components/Loader';
import { ButtonSuccess, ButtonDanger } from '../../../components/Button';

import {
  Title, Form, Table, ContainerWrapper, ButtonDelete, ButtonUpdate,
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

    const URL_VALUE = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias' : 'https://rangoflix.herokuapp.com/categorias';

    // Valores do campos do form
    fetch(URL_VALUE, {
      method: 'POST',
      body: JSON.stringify({
        name: values.name,
        description: values.description,
        color: values.color,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(async (res) => {
        const responseFieldValues = await res.json();
        setListCategorys([...listCategorys, responseFieldValues]); // adicionando os novos valores no state
        setValues(initialValues);
      });
  };

  return (
    <Template styled={{ textAlign: 'center' }}>

      <ContainerWrapper>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Title as="legend">Nova Categoria</Title>

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
            label={`Color: ${values.color}`}
            type="color"
            name="color"
            value={values.color}
            onChange={handleChange}
          />

          <ButtonSuccess type="submit" style={{ marginRight: '30px' }}>Cadastrar</ButtonSuccess>
          <ButtonDanger type="button" onClick={() => setValues(initialValues)}>Limpar</ButtonDanger>
        </Form>

        {listCategorys.length === 0 && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '40px',
          }}
          >
            <Loader />
          </div>
        )}

        {listCategorys.length > 0
                && (
                <Table style={{ marginTop: '30px' }}>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Descrição</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listCategorys.map((category, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <tr key={index}>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                        <td>
                          <ButtonUpdate type="button">
                            Editar
                          </ButtonUpdate>
                          <ButtonDelete type="button">
                            Excluir
                          </ButtonDelete>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                )}
      </ContainerWrapper>
    </Template>
  );
};

export default CadastroCategoria;
