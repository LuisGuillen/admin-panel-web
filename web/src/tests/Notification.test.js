import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

import Notification from '../components/Notification';
import { Snackbar } from '@material-ui/core';

describe('Notification component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Notification />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders a <Snackbar />', () => {
		const wrapper = shallow(<Notification />);
		expect(wrapper.find(Snackbar)).toHaveLength(1);
	});
});