import React from 'react';
import ReactDOM from 'react-dom';
import LateralMenu from '../components/LateralMenu';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<LateralMenu />, div);
	ReactDOM.unmountComponentAtNode(div);
});
