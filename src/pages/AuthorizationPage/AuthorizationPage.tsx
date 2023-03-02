import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Grid, TextField, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { loginUser } from 'src/redux/auth/authService';
import { RoutePathConst } from 'src/constants';
import { themePalette } from 'src/theme';
import { Button } from 'src/components';

import { TextFieldPassword } from './components';

const useStyles = makeStyles({
	wrapper: {
		height: 'calc(100vh - 150px)',
	},
	form: {
		maxWidth: 450,
		width: '100%',
		boxShadow: '0px 0px 10px 10px rgb(0 0 0 / 5%)',
		padding: 40,
		backgroundColor: themePalette.gray,
		textAlign: 'center',
	},
	input: {
		height: 75,
		width: '100%',
		'&.MuiFormControl-root': {
			marginTop: 15,
		},
		'&.MuiButtonBase-root': {
			marginTop: 30,
		},
	},
	loginButton: {
		width: '100%',
		'&.MuiFormControl-root': {
			marginTop: 15,
		},
		'&.MuiButtonBase-root': {
			marginTop: 30,
		},
	},
});

const AuthorizationPage = () => {
	const styles = useStyles();
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [username, setUsername] = React.useState<string>();
	const [password, setPassword] = React.useState<string>();

	const loggedInUserData = useAppSelector((state) => state.auth.logedUserData);

	const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};

	const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleLogin = async () => {
		if (username && password) {
			await dispatch(loginUser({ username, password }))
				.unwrap()
				.then(() => navigate(RoutePathConst.Profile + loggedInUserData.id))
				.catch(() => navigate('/login'));
		} else {
			setUsername('');
			setPassword('');
		}
	};

	return (
		<Grid container justifyContent='center' alignItems='center' className={styles.wrapper}>
			<form className={styles.form}>
				<Typography variant='h2'>{t('TITLES.LOGIN_TITLE')}</Typography>
				<TextField
					label={t('LABELS.USERNAME')}
					type='text'
					error={username === ''}
					className={styles.input}
					onChange={handleUsername}
					helperText={username === '' ? t('FIELD_ERRORS.EMPTY') : undefined}
				/>
				<TextFieldPassword
					onChange={handlePassword}
					error={password === ''}
					helperText={password === '' ? 'FIELD_ERRORS.EMPTY' : undefined}
					className={styles.input}
				/>
				<Button className={styles.loginButton} onClick={handleLogin} label={t('BUTTONS.LOGIN')} />
			</form>
		</Grid>
	);
};

export default AuthorizationPage;
