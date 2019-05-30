import React from 'react';
import ReactDOM from 'react-dom';
import AlertDialog from '../components/AlertDialog';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<AlertDialog />, div);
	ReactDOM.unmountComponentAtNode(div);
});
