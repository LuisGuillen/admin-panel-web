import React from 'react';
import DataTable from '../components/DataTable';

function Cars() {

	const columns = [
		{ id: 'make', label: 'Marca', required: true },
		{ id: 'model', label: 'Modelo', required: true },
		{ id: 'year', label: 'Año', type: 'number' },
		{ id: 'milage', label: 'Millas', type: 'number' },
	];

	return (
		<div>
			<DataTable
				columns={columns}
				endPoint={'cars'}
				title={'Autos'}
			></DataTable>
		</div>
	);
}

export default Cars;