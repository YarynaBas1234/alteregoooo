import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'src/redux/hooks';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Button, Wrapper } from 'src/components';
import { PUBLIC_URL, RoutePathConst } from 'src/constants';

const useStyles = makeStyles({
	profileWrapper: {
		maxWidth: 700,
	},
	header: {
		textAlign: 'center',
	},
	avatar: {
		width: 150,
		height: 150,
		borderRadius: '50%',

		'@media (max-width: 960px)': {
			width: 140,
			height: 140,
		},
		'@media (max-width: 768px)': {
			width: 120,
			height: 120,
		},
	},
	body: {
		padding: '0 30px 0 30px',
		marginBottom: 50,
	},
	rowWrapper: {
		padding: 10,
	},
	columnTitle: {
		minWidth: 70,
	},
});

interface RowProps {
	title: string;
	dataRow: string;
}

const Row: React.FC<RowProps> = (props) => {
	const { title, dataRow } = props;
	const styles = useStyles();

	return (
		<Grid className={styles.rowWrapper}>
			<Typography variant='body1' className={styles.columnTitle}>
				{title}
			</Typography>
			<Typography variant='body2'>{dataRow}</Typography>
		</Grid>
	);
};

const ProfilePage = () => {
	const styles = useStyles();
	const navigate = useNavigate();
	const { t } = useTranslation();
	const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
	const loggedInUserData = useAppSelector((state) => state.auth.logedUserData);

	if (!isLoggedIn) {
		return null;
	} else {
		return (
			<Wrapper text={t('TITLES.PROFILE_TITLE')}>
				<Grid container justifyContent='center'>
					<Grid
						container
						flexDirection='column'
						alignItems='center'
						className={styles.profileWrapper}>
						<Grid container flexDirection='column' alignItems='center' className={styles.header}>
							<img src={PUBLIC_URL + '/pictures/avatarUser.png'} className={styles.avatar} alt='avatar' />
							<Grid>
								<Typography variant='h2'>{loggedInUserData.name}</Typography>
								<Typography variant='body1'>{loggedInUserData.position}</Typography>
							</Grid>
						</Grid>
						<Grid container justifyContent='space-between' className={styles.body} mt={6}>
							<Row title={t('PROFILE_PAGE.PHONE')} dataRow={loggedInUserData.phone} />
							<Row title={t('PROFILE_PAGE.URL')} dataRow='https://example.com' />
							<Row title={t('PROFILE_PAGE.EMAIL')} dataRow={loggedInUserData.email} />
						</Grid>
						<Grid container justifyContent='center' mt={4}>
							<Button onClick={() => navigate(RoutePathConst.Home)} label={t('BUTTONS.HOME')} />
						</Grid>
					</Grid>
				</Grid>
			</Wrapper>
		);
	}
};

export default ProfilePage;
