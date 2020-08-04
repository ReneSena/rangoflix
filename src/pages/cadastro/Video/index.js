import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Template from '../../../components/Template';
import FormField from '../../../components/FormField';
import { ButtonSuccess, ButtonDanger } from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

import { Title, Form, ContainerWrapper } from '../Categoria/styled';

const CadastroVideo = () => {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromSever) => {
        setCategorias(categoriasFromSever);
      });
  }, []);

  return (
    <Template styled={{ textAlign: 'center' }}>

      <ContainerWrapper>
        <Form
          autoComplete="off"
          onSubmit={(event) => {
            event.preventDefault();

            const categoriaEscohida = categorias.find((categoria) => categoria.titulo === values.categoria);

            videosRepository.create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: categoriaEscohida.id,
            })
              .then(() => {
                console.log('vídeo cadastrado!!!');
                history.push('/');
              });
          }}
        >
          <Title as="legend">Novo Vídeo</Title>

          <FormField
            label="Titulo"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="Link do vídeo"
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <FormField
            id="categoria"
            label="Selecione uma categoria"
            type="text"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={categoryTitles}
          />

          <ButtonSuccess type="submit" style={{ marginRight: '30px' }}>Cadastrar</ButtonSuccess>
          <ButtonDanger type="button">Limpar</ButtonDanger>
        </Form>
      </ContainerWrapper>
    </Template>
  );
};

export default CadastroVideo;
