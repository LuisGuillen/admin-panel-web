import React from 'react';
import DataTable from '../components/DataTable';

function Parts() {

	const columns = [
		{ id: 'name', label: 'Nombre', required: true },
		{ id: 'description', label: 'Descripción' },
		{ 
			id: 'status',
			label: 'Estatus',
			options: {
				model: 'part',
				type: 'status',
				values: [
					{ 1: 'Nueva' },
					{ 2: 'Usada' }
				]
			}
		}
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