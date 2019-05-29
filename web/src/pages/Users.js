import React from 'react';
import DataTable from '../components/DataTable'

function Users() {

	const columns = [
		{ id: 'first_name', label: 'Nombre' },
		{ id: 'last_name', label: 'Apellido' },
		{ id: 'age', label: 'Edad' },
		{ id: 'type', label: 'Tipo' },
	]

	return (
		<div>
			<h1>Users</h1>
			<DataTable
				columns={columns}
				endPoint={'users'}
			></DataTable>
		</div>
	);
}

export default Users;