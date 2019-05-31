import React from 'react';
import ReactDOM from 'react-dom';
import DialogForm from '../components/DialogForm';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<DialogForm />, div);
	ReactDOM.unmountComponentAtNode(div);
});
