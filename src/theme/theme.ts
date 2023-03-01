import { createTheme } from '@mui/material';

export enum themePalette {
	black = '#000000',
	gray = '#d3d3d32b',
	gray1 = '#eaeaea',
};

export const theme = createTheme({
	typography: {
		fontFamily: 'Montserrat',

		h1: {
			fontSize: 24,

			'@media (max-width: 960px)': {
				fontSize: 22,
			},
			'@media (max-width: 768px)': {
				fontSize: 20,
			},
		},
		h2: {
			fontSize: 22,

			'@media (max-width: 960px)': {
				fontSize: 20,
			},
			'@media (max-width: 768px)': {
				fontSize: 18,
			},
		},
		body1: {
			fontSize: 18,

			'@media (max-width: 960px)': {
				fontSize: 16,
			},
			'@media (max-width: 768px)': {
				fontSize: 12,
			},
		},
		body2: {
			fontSize: 16,

			'@media (max-width: 960px)': {
				fontSize: 14,
			},
			'@media (max-width: 768px)': {
				fontSize: 10,
			},
		},
	},
});
