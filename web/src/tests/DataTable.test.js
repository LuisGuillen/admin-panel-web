import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from '../components/DataTable';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<DataTable />, div);
	ReactDOM.unmountComponentAtNode(div);
});
