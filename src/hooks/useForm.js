import { useState } from "react";

const useForm = (initialValues) => {
	const [values, setValues] = useState(initialValues);

	const setValue = (chave, valor) => {
		setValues({
			...values,
			[chave]: valor,
		});
	};

	const handleChange = (event) => {
		setValue(
			event.target.getAttribute("name"), // nome campo
			event.target.value // valor digitado no input
		);
	};

	const clearForm = () => {
		setValues(initialValues);
	};

	return {
		values,
		handleChange,
		clearForm,
		setValues,
	};
};

export default useForm;
