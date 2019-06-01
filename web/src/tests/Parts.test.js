import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

import Parts from '../pages/Parts';
import DataTable from '../components/DataTable';

describe('Parts component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Parts />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders a <DataTable />', () => {
		const wrapper = shallow(<Parts />);
		expect(wrapper.find(DataTable)).toHaveLength(1);
	});
});