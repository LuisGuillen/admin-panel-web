import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import App from '../App';
import Users from '../pages/Users';

describe('App component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders an `.main`', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.main')).toHaveLength(1);
	});

	it('renders 4 <Route /> components', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Route)).toHaveLength(4);
	});

	// it('renders 4 <Route /> components', () => {
	// 	const wrapper = shallow(<App />);
	// 	wrapper.find(<Route path="/users" component={Users} />).simulate('click');
	// 	expect(wrapper.find(Route)).toHaveLength(4);
	// });
});