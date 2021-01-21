import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Template from "../../../components/Template";
import FormField from "../../../components/FormField";
import Loader from "../../../components/Loader";
import {
	ButtonSuccess,
	ButtonDanger,
	ButtonIcon,
} from "../../../components/Button";
import useForm from "../../../hooks/useForm";

import { Title, Form, Table, ContainerWrapper } from "./styled";

const CadastroCategoria = () => {
	const history = useHistory();
	const location = useLocation();

	const initialValues = {
		titulo: "",
		description: "",
		cor: "#20bf6b",
	};

	const { handleChange, values, clearForm, setValues } = useForm(
		initialValues
	);

	// Guarda os valores da lista de categorias
	const [listCategorys, setListCategorys] = useState([]);

	/* quando a quer que aconteça */

	const handleSubmit = (event) => {
		event.preventDefault();

		const URL_VALUE = window.location.hostname.includes("localhost")
			? "http://localhost:8080/categorias"
			: "https://rangoflix.herokuapp.com/categorias";

		// Valores do campos do form
		fetch(URL_VALUE, {
			method: "POST",
			body: JSON.stringify({
				titulo: values.titulo,
				description: values.description,
				cor: values.cor,
			}),
			headers: {
				"content-type": "application/json",
			},
		}).then(async (res) => {
			const responseFieldValues = await res.json();
			setListCategorys([...listCategorys, responseFieldValues]); // adicionando os novos valores no state
			clearForm();
		});
	};

	const handleDelete = (event) => {
		const id = event.target.getAttribute("id");

		const URL_VALUE = window.location.hostname.includes("localhost")
			? "http://localhost:8080/categorias"
			: "https://rangoflix.herokuapp.com/categorias";

		fetch(`${URL_VALUE}/${id}`, {
			method: "DELETE",
		})
			.then((response) => response.json())
			.then((responseServer) => {
				setListCategorys((listCategorys) =>
					listCategorys.filter(
						(category) => category.id !== Number(id)
					)
				);
			});
	};

	const handleEditar = (event) => {
		const id = event.target.getAttribute("id");

		const URL_VALUE = window.location.hostname.includes("localhost")
			? "http://localhost:8080/categorias"
			: "https://rangoflix.herokuapp.com/categorias";

		fetch(`${URL_VALUE}/${id}`, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((responseServer) => {
				setValues({
					titulo: responseServer.titulo,
					description: responseServer.description,
					cor: responseServer.cor,
				});

				history.push("/cadastro/categoria/editar");
			});
	};

	useEffect(() => {
		// O que a gente quer que aconteça
		const URL_VALUE = window.location.hostname.includes("localhost")
			? "http://localhost:8080/categorias"
			: "https://rangoflix.herokuapp.com/categorias";

		fetch(URL_VALUE).then(async (res) => {
			const responseReq = await res.json();

			setListCategorys([...responseReq]);
		});
	}, []);

	return (
		<Template styled={{ textAlign: "center" }}>
			<ContainerWrapper>
				<Form onSubmit={handleSubmit} autoComplete="off">
					<Title as="legend">Nova Categoria</Title>

					<FormField
						label="Nome"
						type="text"
						name="titulo"
						value={values.titulo}
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
						label={`Color: ${values.cor}`}
						type="color"
						name="cor"
						value={values.cor}
						onChange={handleChange}
					/>

					<ButtonSuccess
						type="submit"
						style={{ marginRight: "30px" }}
					>
						Cadastrar
					</ButtonSuccess>

					<ButtonSuccess
						type="button"
						style={{ marginRight: "30px" }}
					>
						Editar
					</ButtonSuccess>

					<ButtonDanger type="button" onClick={() => clearForm()}>
						Limpar
					</ButtonDanger>
				</Form>

				{listCategorys.length === 0 && (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							margin: "40px 0",
						}}
					>
						<Loader />
						<div
							style={{
								fontSize: "12px",
								color: "#fff",
								marginTop: "10px",
							}}
						>
							Aguarde, carregando categorias...
						</div>
					</div>
				)}

				{listCategorys.length > 0 && (
					<Table style={{ marginTop: "30px" }}>
						<thead>
							<tr>
								<th>Nome</th>
								<th>Descrição</th>
								{/* <th>Ações</th> */}
							</tr>
						</thead>
						<tbody>
							{listCategorys.map((category, index) => (
								// eslint-disable-next-line react/no-array-index-key
								<tr key={index}>
									<td>{category.titulo}</td>
									<td>{category.description}</td>
									<td style={{ display: "flex" }}>
										{/* <ButtonIcon type="button">
                            <IconUpdate />
                          </ButtonIcon> */}

										<ButtonIcon
											id={category.id}
											onClick={(event) =>
												handleDelete(event)
											}
											type="button"
										>
											Excluir
										</ButtonIcon>

										<ButtonIcon
											id={category.id}
											onClick={(event) =>
												handleEditar(event)
											}
											type="button"
										>
											Editar
										</ButtonIcon>
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
