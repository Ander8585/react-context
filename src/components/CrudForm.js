import React, { useState, useEffect, useContext } from "react";
import CrudContext from "../context/CrudContext";

const initialForm = {
	name: "",
	constellation: "",
	id: null,
};

const CrudForm = () => {
	const [form, setForm] = useState(initialForm);

	const { createData, updateData, dataToEdit, setDataToEdit } =
		useContext(CrudContext);

	useEffect(() => {
		if (dataToEdit) {
			setForm(dataToEdit);
		} else {
			setForm(initialForm);
		}
	}, [dataToEdit]);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.name || !form.constellation) {
			alert("Datos Incompletos");
			return;
		}

		if (!form.id) {
			createData(form);
		} else {
			updateData(form);
		}

		handleReset();
	};

	const handleReset = (e) => {
		setForm(initialForm);
		setDataToEdit(false);
	};

	return (
		<div>
			<h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Nombre"
					onChange={handleChange}
					value={form.name}
				/>
				<input
					type="text"
					name="constellation"
					placeholder="Constelacion"
					onChange={handleChange}
					value={form.constellation}
				/>
				<input type="submit" value="Enviar" onClick={handleSubmit} />
				<input type="reset" value="Limpiar" onClick={handleReset} />
			</form>
		</div>
	);
};

export default CrudForm;