import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';
import { Box, Grid, Typography } from '@mui/material';

import { IPost } from 'src/redux/posts/interfaces';
import { themePalette } from 'src/theme';
import { Button } from 'src/components';

const useStyles = makeStyles({
	postWrapper: {
		width: '100%',
		height: '100%',
		borderRadius: 5,
		padding: '30px 30px 60px 30px',
		boxShadow: '8px 8px 8px rgb(0 0 0 / 5%)',
		border: `1px solid ${themePalette.gray1}`,
		position: 'relative',
	},
	deleteButton: {
		position: 'absolute',
		bottom: 20,
	},
});

interface PostComponentProps {
	post: IPost;
	onDelete: (id: number) => void;
}

export const PostComponent: React.FC<PostComponentProps> = (props) => {
	const { post, onDelete } = props;
	const styles = useStyles();
	const { t } = useTranslation();

	return (
		<Grid item lg={4} md={6} sm={6} xs={12} key={post.id} pb={2} pr={1} pl={1}>
			<Grid className={styles.postWrapper} >
				<Box>
					<Typography variant='h2'>{post.title}</Typography>
					<Typography variant='body1' mt={2} mb={2}>
						{post.body}
					</Typography>
				</Box>
				<Box className={styles.deleteButton}>
					<Button onClick={() => onDelete(post.id)} label={t('BUTTONS.DELETE')} />
				</Box>
			</Grid>
		</Grid>
	);
};
