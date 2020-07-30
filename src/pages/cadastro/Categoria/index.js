import React, { useState }  from 'react';
import Template from '../../../components/Template';
import FormField from '../../../components/FormField';

import { Title, Form, ButtonSave, Table } from './styled';

const CadastroCategoria = () => {
    const [listCategorys, setListCategorys] = useState([]); //Guarda os valores da lista de categorias

    const initialValues = {
        name: '',
        description: '',
        color: '#20bf6b', 
    }

    const [values, setValues] = useState(initialValues);

    const setValue = (chave, valor)=> {
        setValues({
            ...values,
            [chave]: valor,
        })
    } 

    const handleChange = (event) => {

        setValue(
            event.target.getAttribute('name'), //nome campo
            event.target.value //valor digitado no input
        );
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

        setListCategorys([...listCategorys, values]);
        setValues(initialValues)
    }

    return(
        <Template styled={{ textAlign:'center'}}>
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
  
            {listCategorys.length > 0 && 
                <Table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Cor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listCategorys.map((category, index) => {
                            return(
                                <tr key={index}>
                                    <td>{category.name}</td>
                                    <td>{category.description}</td>
                                    <td>{category.color}</td>
                                </tr>     
                            )
                        })}
                    </tbody>
                </Table>
            }
     
        </Template>
    )
};

export default CadastroCategoria;