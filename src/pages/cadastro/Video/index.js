import React, { useState, useEffect } from 'react';
import Template from '../../../components/Template';
import FormField from '../../../components/FormField';
import { ButtonSuccess, ButtonDanger } from '../../../components/Button';

import {
  Title, Form, ContainerWrapper } from '../Categoria/styled';

const CadastroVideo = () => {

  return (
    <Template styled={{ textAlign: 'center' }}>

      <ContainerWrapper>
        <Form autoComplete="off">
          <Title as="legend">Novo Vídeo</Title>

          <FormField
            label="Titulo"
            type="text"
            name="titleVideo"
            value={''}
          />

          <FormField
            label="Link do vídeo"
            type="text"
            name="linkVideo"
            value={''}
          />

          <FormField
            label="Selecione uma categoria"
            type="text"
            name="category"
            value={''}
          />

          <ButtonSuccess type="submit" style={{ marginRight: '30px' }}>Cadastrar</ButtonSuccess>
          <ButtonDanger type="button">Limpar</ButtonDanger>
        </Form>
      </ContainerWrapper>
    </Template>
  );
};

export default CadastroVideo;
