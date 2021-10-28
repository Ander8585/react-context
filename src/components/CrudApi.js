/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

import Loader from "./Loader";
import Message from "./Message";
import CrudContext from "./../context/CrudContext";

const CrudApi = () => {
	const { error, loading, db } = useContext(CrudContext);

	return (
		<div>
			<h2>CRUD API con Context API</h2>
			<article className="grid-1-2">
				<CrudForm />
				{loading && <Loader />}
				{error && (
					<Message
						msg={`Error ${error.status}: ${error.statusText}`}
						bgColor="#dc3545"
					/>
				)}
				{db && !error && <CrudTable />}
			</article>
		</div>
	);
};

export default CrudApi;
