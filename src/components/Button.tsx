import React from 'react';
import { ButtonProps as MaterialButtonProps } from '@material-ui/core';
import { Typography, Button as MuiButton, SxProps, } from '@mui/material';

interface ButtonProps extends Omit<MaterialButtonProps, 'children'> {
    label: string | React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    ClassName?: string;
    variant?: 'text' | 'contained' | 'outlined';
    sx?: SxProps;
}

export const Button = ({
    label,
    variant = 'contained',
    onClick,
    className,
    sx,
}: ButtonProps) => {

	return (
		<MuiButton variant={variant} className={className} onClick={onClick} sx={sx}>
			<Typography variant='body2'>{label}</Typography>
		</MuiButton>
	);
};
