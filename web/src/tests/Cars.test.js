import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

import Cars from '../pages/Cars';
import DataTable from '../components/DataTable';

describe('Cars component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Cars />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders a <DataTable />', () => {
		const wrapper = shallow(<Cars />);
		expect(wrapper.find(DataTable)).toHaveLength(1);
	});
});