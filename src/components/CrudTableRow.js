import React, { useContext } from "react";
import CrudContext from "./../context/CrudContext";

const CrudTableRow = ({ el }) => {
	const { setDataToEdit, deleteData } = useContext(CrudContext);

	const { name, constellation } = el;
	return (
		<>
			<tr>
				<td>{name}</td>
				<td>{constellation}</td>
				<td>
					<button onClick={() => setDataToEdit(el)}>Editar</button>
					<button onClick={() => deleteData(el)}>Eliminar</button>
				</td>
			</tr>
		</>
	);
};

export default CrudTableRow;
