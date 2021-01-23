import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Template from "../../../components/Template";
import FormField from "../../../components/FormField";
import URL_BASE from "../../../config/index.js";
import { Trash } from "@styled-icons/boxicons-solid/Trash";
import { Edit } from "@styled-icons/evaicons-solid/Edit";

import {
	ButtonSuccess,
	ButtonDanger,
	ButtonIcon,
} from "../../../components/Button";
import useForm from "../../../hooks/useForm";

import { Title, Form, Table, ContainerWrapper, Actions } from "./styled";

const CadastroCategoria = () => {
	const history = useHistory();
	const { pathname } = useLocation();
	const [editId, setEditId] = useState();

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

		fetch(`${URL_BASE}${"/categorias"}`, {
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

		fetch(`${URL_BASE}${"/categorias"}/${id}`, {
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

	const handleGetDataEditar = (event) => {
		const id = event.target.getAttribute("id");
		setEditId(id);

		fetch(`${URL_BASE}${"/categorias"}/${id}`, {
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

	const handleEditar = (event) => {
		event.preventDefault();

		const URL_VALUE = window.location.hostname.includes("localhost")
			? "http://localhost:8080/categorias"
			: "https://rangoflix.herokuapp.com/categorias";

		// Valores do campos do form
		fetch(`${URL_VALUE}/${editId}`, {
			method: "PATCH",
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

			history.push("cadastro/categoria");
		});
	};

	useEffect(() => {
		fetch(`${URL_BASE}${"/categorias"}`).then(async (res) => {
			const responseReq = await res.json();

			setListCategorys([...responseReq]);
		});
	}, []);

	return (
		<Template styled={{ textAlign: "center" }}>
			<ContainerWrapper>
				<Form
					onSubmit={
						!pathname.includes("/categoria/editar")
							? handleSubmit
							: handleEditar
					}
					autoComplete="off"
				>
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

					<Actions>
						{!pathname.includes("/categoria/editar") ? (
							<ButtonSuccess
								type="submit"
								style={{ marginRight: "30px" }}
							>
								Cadastrar
							</ButtonSuccess>
						) : (
							<ButtonSuccess
								type="submit"
								style={{ marginRight: "30px" }}
							>
								Editar
							</ButtonSuccess>
						)}

						<ButtonDanger type="button" onClick={() => clearForm()}>
							Limpar
						</ButtonDanger>
					</Actions>
				</Form>

				{listCategorys.length === 0 && (
					<div>Aguarde, carregando categorias...</div>
				)}

				{listCategorys.length > 0 &&
					!pathname.includes("/categoria/editar") && (
						<Table style={{ marginTop: "30px" }}>
							<thead>
								<tr>
									<th>Nome</th>
									<th>Descrição</th>
									<th>Ações</th>
								</tr>
							</thead>
							<tbody>
								{listCategorys.map((category, index) => (
									<tr key={index}>
										<td>{category.titulo}</td>
										<td>{category.description}</td>
										<td style={{ display: "flex" }}>
											<ButtonIcon
												id={category.id}
												onClick={(event) =>
													handleGetDataEditar(event)
												}
												type="button"
											>
												<Edit
													size="24"
													color="#2a7ae4"
												/>
											</ButtonIcon>
											<ButtonIcon
												id={category.id}
												onClick={(event) =>
													handleDelete(event)
												}
												type="button"
											>
												<Trash
													size="24"
													color="#ea1d2c"
												/>
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
