import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from 'react-router-dom';

import AuthorizationPage from './pages/AuthorizationPage';
import Homepage from './pages/Homepage';
import Newspage from './pages/Newspage';
import Header from './components';
import { RoutePathConst, userData } from './constants';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import ProfilePage from './pages/ProfilePage';
import { getUserData } from './redux/auth/authService';

import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
		maxWidth: 1440,
		minHeight: 'calc(100vh - 109px)',
		padding: 20,
	},
});

const App = () => {
	const styles = useStyles();
	const dispatch = useAppDispatch();

	const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

	React.useEffect(() => {
		dispatch(getUserData());
	}, [dispatch]);

	return (
		<Grid container justifyContent='center'>
			<Header />
			<Grid className={styles.wrapper}>
				<Routes>
					<Route path={RoutePathConst.Home} element={<Homepage />} />
					<Route path={RoutePathConst.News} element={<Newspage />} />
					<Route path={RoutePathConst.Login} element={<AuthorizationPage />} />
					{isLoggedIn 
						? <Route path={RoutePathConst.Profile + userData.id} element={<ProfilePage />} />
						: <Route path={RoutePathConst.Profile + userData.id} element={<Navigate to={RoutePathConst.Home} replace />} />
					}

					<Route path='/*' element={<Homepage />} />
				</Routes>

				<ToastContainer
					position='top-right'
					theme={'colored'}
					autoClose={5000}
					hideProgressBar
					newestOnTop={true}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					limit={5}
				/>
			</Grid>
		</Grid>
	);
};

export default App;
