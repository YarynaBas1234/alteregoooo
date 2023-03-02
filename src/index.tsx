import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from './theme';
import store from './redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</ThemeProvider>
		</BrowserRouter>
	</Provider>
);

reportWebVitals();