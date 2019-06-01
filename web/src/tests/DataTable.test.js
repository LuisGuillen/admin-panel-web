import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

import DataTable from '../components/DataTable';
import { Table } from '@material-ui/core';

describe('DataTable component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<DataTable />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders a <Table />', () => {
		const wrapper = shallow(<DataTable />);
		expect(wrapper.find(Table)).toHaveLength(1);
	});
});