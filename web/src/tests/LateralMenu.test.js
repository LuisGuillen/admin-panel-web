import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

import LateralMenu from '../components/LateralMenu';
import { Drawer } from '@material-ui/core';

describe('LateralMenu component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<LateralMenu />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders a <Drawer />', () => {
		const wrapper = shallow(<LateralMenu />);
		expect(wrapper.find(Drawer)).toHaveLength(1);
	});
});