import React from 'react';
import DataTable from '../components/DataTable';

function Parts() {

	const columns = [
		{ id: 'name', label: 'Nombre' },
		{ id: 'description', label: 'Descripción' },
		{ id: 'status', label: 'Estatus', options: { model: 'part', type: 'status' }}
	];

	return (
		<div>
			<DataTable
				columns={columns}
				endPoint={'parts'}
				title={'Partes'}
			></DataTable>
		</div>
	);
}

export default Parts;