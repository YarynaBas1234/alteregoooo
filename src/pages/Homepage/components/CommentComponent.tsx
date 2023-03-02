import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, Typography } from '@mui/material';

import { IComment } from 'src/redux/comments/interfaces';

const useStyles = makeStyles({
	commentBody: {
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		display: '-webkit-box',
		'-webkitBoxOrient': 'vertical',
		'-webkit-line-clamp': 2,
		whiteSpace: 'normal',
		fontStyle: 'italic',
	},
	commentUsername: {
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		width: 150,
		textAlign: 'end',
	},
});

interface CommentComponentProps {
	comment: IComment;
}

export const CommentComponent: React.FC<CommentComponentProps> = (props) => {
	const { comment } = props;
	const styles = useStyles();

	return (
		<>
			<Typography variant='body2' mt={2} mb={2} className={styles.commentBody}>
				"{comment.body}"
			</Typography>
			<Grid container justifyContent='flex-end'>
				<Typography variant='body1' mr={2} className={styles.commentUsername}>
					{comment.name}
				</Typography>
				<Typography variant='body1'>{comment.email}</Typography>
			</Grid>
		</>
	);
};
