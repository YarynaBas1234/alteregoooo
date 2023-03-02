import React from 'react';
import { makeStyles } from '@material-ui/core';
import { FormControl, MenuItem, Select } from '@mui/material';

import { ISelectEventFunction } from 'src/interfaces';
import { localStorageService } from 'src/services';

interface IDropDownProps {
	onChange: ISelectEventFunction;
	options: {
		value: string;
		label: string;
	}[];
}

const useStyles = makeStyles({
	select: {
		maxHeight: 24,
		height: '100%',
	},
});

export const DropDown: React.FC<IDropDownProps> = (props) => {
	const { onChange, options } = props;
	const styles = useStyles();

	const curentLanguage = localStorageService.getFromLocalStorage('language');

	return (
		<FormControl sx={{ m: 1, minWidth: 70 }}>
			<Select
				value={curentLanguage || 'en'}
				onChange={onChange}
				className={styles.select}>
				{options.map((option, index) => (
					<MenuItem value={option.value} key={index}>{option.label}</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
