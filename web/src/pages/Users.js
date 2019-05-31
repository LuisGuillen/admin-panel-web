import React from 'react';
import DataTable from '../components/DataTable';

function Users() {

	const columns = [
		{ id: 'first_name', label: 'Nombre' },
		{ id: 'last_name', label: 'Apellido' },
		{ id: 'age', label: 'Edad' },
		{ id: 'type', label: 'Tipo', options: { model: 'user' } },
	];

	return (
		<div>
			<DataTable
				columns={columns}
				endPoint={'users'}
				title={'Usuarios'}
			></DataTable>
		</div>
	);
}

export default Users;