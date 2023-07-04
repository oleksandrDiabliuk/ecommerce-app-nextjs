import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';

import cartSlice from "./slices/cartSlice";

const persistConfig = {
	key: 'cart',
	storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, cartSlice);

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: [thunk]
});

export type RootState = ReturnType<typeof store.getState>

export default store;

export const persistor = persistStore(store);
