'use client';

import { Product } from "@/types/types";

import { useDispatch } from 'react-redux';
import { cartActions } from '@/store/slices/cartSlice';

export default function Button(product: Product) {
	const dispatch = useDispatch();

	const handleAddToCartClick = (product: Product) => {
		dispatch(cartActions.addToCart(product));
	}

	return (
		<button
			type="submit"
			className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-700 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
			onClick={() => handleAddToCartClick(product)}
		>
			Add to bag
		</button>
	);
}