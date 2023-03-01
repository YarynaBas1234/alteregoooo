import React from "react";

import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	wrapperComponent: {
		paddingBottom: 20,
	}
});

interface IFormWrapper {
    text: string;
    children: JSX.Element;
}

export const Wrapper: React.FC<IFormWrapper> = (props) => {
	const { children, text } = props;
	const styles = useStyles();

	return (
		<div>
			<Typography variant='h2' className={styles.wrapperComponent}>{text}</Typography>
			{children}
		</div>
	);
};
