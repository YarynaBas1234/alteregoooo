import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import { IRootState, IAppDispatch } from '../index';

export const useAppDispatch = () => useDispatch<IAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
