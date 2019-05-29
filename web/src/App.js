import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import './css/App.css';
import AppBar from './components/AppBar';
import Users from './pages/Users';
import Cars from './pages/Cars';
import Parts from './pages/Parts';

const theme = createMuiTheme({
	palette: {
		primary: { main: '#bb1e1e' },
		secondary: { main: '#525252' }, 
	},
});

const Index = () => {
	return <h2> Bienvenido </h2>;
}

const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<AppBar />
				<main className='main'>
					<Route path="/" exact component={Index} />
					<Route path="/users" component={Users} />
					<Route path="/cars" component={Cars} />
					<Route path="/parts" component={Parts} />
				</main>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
