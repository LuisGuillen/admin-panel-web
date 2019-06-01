import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

import DialogForm from '../components/DialogForm';
import { Dialog } from '@material-ui/core';

describe('DialogForm component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<DialogForm columns={[]} />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders a <Dialog />', () => {
		const wrapper = shallow(<DialogForm columns={[]} />);
		expect(wrapper.find(Dialog)).toHaveLength(1);
	});
});