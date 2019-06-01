import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

import AlertDialog from '../components/AlertDialog';
import { Dialog } from '@material-ui/core';

describe('AlertDialog component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<AlertDialog />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders a <Dialog />', () => {
		const wrapper = shallow(<AlertDialog />);
		expect(wrapper.find(Dialog)).toHaveLength(1);
	});
});