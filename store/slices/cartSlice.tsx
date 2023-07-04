import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductInCart, Product } from '@/types/types';

type SliceState = { cart: ProductInCart[], total: number, totalItemsInCart: number }

const initialCartState: SliceState = {
	cart: [],
	total: 0,
	totalItemsInCart: 0
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		addToCart: (state, action: PayloadAction<Product>) => {
			const isItemAlreadyExist = state.cart.some(item => item.id === action.payload.id)

			if (isItemAlreadyExist) {
				cartSlice.caseReducers.incrementQty(state, action);
				cartSlice.caseReducers.changeTotal(state);
				cartSlice.caseReducers.updateTotalItemsInCart(state);
			} else {
				state.cart.push({ ...action.payload, qty: 1, totalItemPrice: action.payload.price });
				cartSlice.caseReducers.changeTotal(state);
				cartSlice.caseReducers.updateTotalItemsInCart(state);
			}

		},
		removeFromCart: (state, action) => {
			state.cart = state.cart.filter(item => item.id !== action.payload.id);

			cartSlice.caseReducers.changeTotal(state);
			cartSlice.caseReducers.updateTotalItemsInCart(state);
		},
		incrementQty: (state, action) => {
			state.cart = state.cart.map(item => (
				item.id === action.payload.id ?
					{
						...item,
						qty: item.qty + 1,
						totalItemPrice: +((item.qty + 1) * item.price).toFixed(2)
					} : item
			));

			cartSlice.caseReducers.changeTotal(state);
			cartSlice.caseReducers.updateTotalItemsInCart(state);
		},
		decrementQty: (state, action) => {
			const isQtyZero = state.cart.find(item => item.id === action.payload.id && item.qty === 1);

			if (isQtyZero) {
				cartSlice.caseReducers.removeFromCart(state, action);
			} else {
				state.cart = state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty - 1, totalItemPrice: +((item.qty - 1) * item.price).toFixed(2) } : item);

				cartSlice.caseReducers.changeTotal(state);
				cartSlice.caseReducers.updateTotalItemsInCart(state);
			}
		},
		changeTotal: (state) => {
			state.total = +state.cart.reduce((sum, { totalItemPrice }) => sum + totalItemPrice, 0).toFixed(2);
		},
		updateTotalItemsInCart: (state) => {
			state.totalItemsInCart = +state.cart.reduce((items, { qty }) => items + qty, 0);
		},
		clearCart: (state) => {
			state.cart = [];
			state.total = 0;
			state.totalItemsInCart = 0;
		}
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;