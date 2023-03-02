import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { useAppSelector, useAppDispatch } from 'src/redux/hooks';
import { deletePostById, fetchPosts } from 'src/redux/posts/postsService';
import { IPost } from 'src/redux/posts/interfaces';
import { LinkButton, Wrapper } from 'src/components';

import { PostComponent } from './components';

const useStyles = makeStyles({
	wrapper: {
		minHeight: 'calc(100vh - 200px)',
		height: '100%',
		display: 'flex',
	},
});

const Newspage = () => {
	const styles = useStyles();
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const posts = useAppSelector((state) => state.posts.list);

	const [countPosts, setCountPosts] = React.useState(6);

	React.useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	const onDelete = (id: number) => {
		dispatch(deletePostById(id)).then(() => {
			dispatch(fetchPosts());
		});
		
		alert('This post will not be really updated on the server but it will be faked as if.');
	};

	const handleLoadMore = () => {
		setCountPosts(countPosts + 6);
	};

	return (
		<Wrapper text={t('TITLES.NEWS_TITLE')}>
			<Grid className={styles.wrapper} flexDirection='column' justifyContent='space-between'>
				<Grid container>
					{posts.map((post: IPost, index: number) => {
						if (index < countPosts) {
							return <PostComponent post={post} key={post.id} onDelete={onDelete} />;
						}
						return null;
					})}
				</Grid>
				<LinkButton onClick={handleLoadMore} text={t('BUTTONS.LOAD_MORE')} />
			</Grid>
		</Wrapper>
	);
};

export default Newspage;
