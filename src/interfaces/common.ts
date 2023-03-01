import { SelectChangeEvent } from "@mui/material";

export interface IDefaultAPIResponse {
	data: any;
	status: number;
};

export type ISelectEventFunction = (event: SelectChangeEvent) => void;