import React from 'react';
import DataTable from '../components/DataTable';

function Users() {

	const columns = [
		{ id: 'first_name', label: 'Nombre', required: true },
		{ id: 'last_name', label: 'Apellido' },
		{ id: 'age', label: 'Edad', type: 'number' },
		{ 
			id: 'type',
			label: 'Tipo',
			options: { 
				model: 'user',
				values: [
					{ 1: 'Admin' },
					{ 2: 'Cliente' }
				]
			}
		},
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