import React from 'react';
import ReactDOM from 'react-dom';
import Parts from '../pages/Parts';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Parts />, div);
	ReactDOM.unmountComponentAtNode(div);
});
