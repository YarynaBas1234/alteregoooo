import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import {
	AppBar,
	Box,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core';

import { languages, PUBLIC_URL, RoutePathConst } from 'src/constants';
import { useChangeLanguage } from 'src/hooks';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { logoutUser } from 'src/redux/auth/authService';
import { themePalette } from 'src/theme';

import { DropDown } from '../DropDown';
import { Button } from '../Button';

const useStyles = makeStyles({
	languageSelector: {
		'& .MuiSelect-select': {
			padding: '5px 10px',
		},
	},
	logo: {
		width: 100,
		height: 50,

		'@media (max-width: 480px)': {
			width: 80,
			height: 40,
		},
	},
	headerLink: {
		textDecoration: 'none',
		display: 'block',
		color: themePalette.black,
		margin: '0 16px 0 16px',
	},
	activeNavLink: {
		borderBottom: `1px solid ${themePalette.black}`,
	}
});

const Header = () => {
	const styles = useStyles();
	const navigate = useNavigate();
	const onLanguageChange = useChangeLanguage();
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
	const loggedInUserData = useAppSelector((state) => state.auth.logedUserData);

	const pages = [
		{
			title: 'HEADER.HOME',
			to: '/',
		},
		{
			title: 'HEADER.NEWS',
			to: '/news',
		},
		{
			title: 'HEADER.PROFILE',
			to: RoutePathConst.Profile + loggedInUserData.id,
			validation: !isLoggedIn,
		},
	];

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleLogout = () => {
		dispatch(logoutUser());
		navigate('/');
	}

	const handleLogin = () => {
		navigate('/login');
	}

	return (
		<AppBar position='static' color='default' sx={{ mb: 3 }}>
			<Container maxWidth='xl'>
				<Toolbar>
					<Box
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
						}}>
							<Link to='/' aria-label='h1'>
								<img src={PUBLIC_URL + '/pictures/logo.png'} className={styles.logo} alt='avatar' />
							</Link>
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}>
							{pages.map((page) => {
								if (!page.validation) {
									return (
										<MenuItem
											key={page.title}
											onClick={() => {
												handleCloseNavMenu();
												navigate(page.to);
											}}>
											<Typography textAlign='center'>{t(page.title)}</Typography>
										</MenuItem>
									);
								}
								return null;
							})}
						</Menu>
					</Box>
					<Box
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
						}}>
							<Link to='/' aria-label='h1'>
								<img src={PUBLIC_URL + '/pictures/logo.png'} className={styles.logo} alt='avatar' />
							</Link>
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => {
							if (!page.validation) {
								return (
									<NavLink 
										to={page.to}
										key={page.title}
										onClick={() => {
											handleCloseNavMenu();
										}}
										className={({ isActive }) => isActive ? clsx(styles.headerLink, styles.activeNavLink) : styles.headerLink}
									>
										{t(page.title)}
									</NavLink>
								);
							}
							return null;
						})}
					</Box>
					<Box sx={{ flexGrow: 0 }} className={styles.languageSelector}>
						<DropDown onChange={onLanguageChange} options={languages} />
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						{isLoggedIn ? (
							<Button onClick={handleLogout} variant='text' label={t('BUTTONS.LOGOUT')} sx={{ my: 2, color: themePalette.black, display: 'block' }} />
						) : (
							<Button onClick={handleLogin} variant='text' label={t('BUTTONS.LOGIN')} sx={{ my: 2, color: themePalette.black,  display: 'block' }} />
						)}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
