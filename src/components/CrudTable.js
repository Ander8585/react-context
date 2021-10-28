import React, { useContext } from "react";
import CrudTableRow from "./CrudTableRow";
import CrudContext from "./../context/CrudContext";

const CrudTable = () => {
	const { db } = useContext(CrudContext);
	return (
		<div>
			<h3>Tabla de Datos</h3>
			<table>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Constelacion</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{!db.length ? (
						<tr>
							<td colSpan="3">Sin Datos</td>
						</tr>
					) : (
						db.map((el) => <CrudTableRow key={el.id} el={el} />)
					)}
				</tbody>
			</table>
		</div>
	);
};

export default CrudTable;
