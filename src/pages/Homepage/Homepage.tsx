import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { LinkButton, Wrapper } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { fetchComments } from 'src/redux/comments/commentsService';
import { IComment } from 'src/redux/comments/interfaces';
import { themePalette } from 'src/theme';

import { CommentComponent } from './components';

const useStyles = makeStyles({
	homeWrapper: {
		borderRadius: 5,
		padding: '0 100px 0 100px',
		position: 'relative',
	},
	commentWrapper: {
		border: `2px solid ${themePalette.gray1}`,
		width: '100%',
		padding: 20,
		boxShadow: 'rgba(0, 0, 0, 0.1) 0px 8px 8px',
		background:
			'linear-gradient(90deg, rgba(212,246,250,1) 0%, rgba(233,243,250,1) 0%, rgba(252,255,255,1) 23%)',
	},
});

const Homepage = () => {
	const styles = useStyles();
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const [countComments, setCountComments] = React.useState(5);

	const comments = useAppSelector((state) => state.comments.commentsList);

	React.useEffect(() => {
		dispatch(fetchComments());
	}, [dispatch]);

	const handleLoadMore = () => {
		setCountComments(countComments + 5);
	};

	return (
		<Wrapper text={t('TITLES.HOME_TITLE')}>
			<Grid container justifyContent='center'>
				<Grid className={styles.homeWrapper}>
					{comments.map((comment: IComment, index: number) => {
						if (index < countComments) {
							return (
								<Grid item className={styles.commentWrapper} mb={3} key={index}>
									<CommentComponent comment={comment} />;
								</Grid>
							);
						}
						return <Grid key={index}/>;
					})}
				</Grid>
				<LinkButton onClick={handleLoadMore} text={t('BUTTONS.LOAD_MORE')} />
			</Grid>
		</Wrapper>
	);
};

export default Homepage;
