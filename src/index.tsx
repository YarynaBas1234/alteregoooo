import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from './theme';
import store from './redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Provider store={store}>
		<HashRouter>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<React.StrictMode>
						<App />
					</React.StrictMode>
				</ThemeProvider>
			</BrowserRouter>
		</HashRouter>
	</Provider>
);

reportWebVitals();
