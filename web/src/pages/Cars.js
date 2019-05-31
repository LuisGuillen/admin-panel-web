import React from 'react';
import DataTable from '../components/DataTable';

function Cars() {

	const columns = [
		{ id: 'make', label: 'Marca' },
		{ id: 'model', label: 'Modelo' },
		{ id: 'year', label: 'Año' },
		{ id: 'milage', label: 'Millas' },
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