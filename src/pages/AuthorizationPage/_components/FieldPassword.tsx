import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface TextFieldPasswordProps {
	error?: boolean;
	helperText?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className: string;
}

export const TextFieldPassword: React.FC<TextFieldPasswordProps> = (props) => {
	const { error, helperText, onChange, className } = props;
	const { t } = useTranslation();

	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	return (
		<TextField
			label={t('LABELS.PASSWORD')}
			className={className}
			error={error}
			helperText={helperText? t(helperText) : helperText}
			onChange={onChange}
			type={showPassword ? 'text' : 'password'}
			InputProps={{
				endAdornment: (
					<InputAdornment position='end'>
						<IconButton
							aria-label='toggle password visibility'
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge='end'>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
};
