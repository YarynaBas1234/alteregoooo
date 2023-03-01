import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './posts/postsSlice';
import authReducer from './auth/authSlice';
import commentsSlice from './comments/commentsSlice';

const store = configureStore({
	reducer: {
		posts: postsReducer,
		auth: authReducer,
		comments: commentsSlice,
	},
});

export default store;

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
