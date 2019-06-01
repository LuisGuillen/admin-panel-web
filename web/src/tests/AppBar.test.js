import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

import AppBar from '../components/AppBar';
import { Toolbar } from '@material-ui/core';

describe('AppBar component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<AppBar />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders a <Toolbar />', () => {
		const wrapper = shallow(<AppBar />);
		expect(wrapper.find(Toolbar)).toHaveLength(1);
	});
});