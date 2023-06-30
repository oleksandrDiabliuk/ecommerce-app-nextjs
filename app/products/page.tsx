import Image from 'next/image';
import Link from 'next/link';

import ProductTile from '@/components/ProductTile/ProductTile';

import { Product } from "@/types/types";

export default async function Products() {
	const res = await fetch("https://fakestoreapi.com/products");
	const products: Product[] = await res.json();
	const filteredProducts: Product[] = products.filter((product: Product) => product.category !== "electronics");

	return (
		<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-15 lg:max-w-7xl lg:px-8">
			<h2 className="text-black text-2xl font-bold mb-10 capitalize">All Products</h2>
			<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
				{filteredProducts.map((product: Product) => (
					<ProductTile key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}
