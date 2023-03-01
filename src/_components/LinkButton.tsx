import React from 'react';
import { Box, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core';

import { themePalette } from 'src/theme';

const useStyles = makeStyles({
    button: {
		borderBottom: `1px solid ${themePalette.black}`,

		'&:hover': {
			opacity: 0.5,
			transition: '0.2s',
			cursor: 'pointer',
		},
    }
});

interface LinkButtonProps {
    onClick: () => void;
    text: string;
}

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
    const { onClick, text } = props;
    const styles = useStyles();

	return (
		<Grid container justifyContent='center' sx={{ mt: 3 }} mt={3}>
			<Box className={styles.button} onClick={onClick}>
				{text}
			</Box>
		</Grid>
	);
};
