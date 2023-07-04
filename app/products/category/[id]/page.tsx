import ProductTile from "@/components/ProductTile/ProductTile";

import { Product } from "@/types/types";
import { Props } from "@/types/types";

import { Suspense } from 'react';
import Loading from './loading';

export default async function Category({ params: { id } }: Props) {
	const res = await fetch(`https://fakestoreapi.com/products/category/${id}`);
	const products: Product[] = await res.json();
	const categoryName = id.replace(/%20/g, ' ');

	return (
		<Suspense fallback={<Loading />}>
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-15 lg:max-w-7xl lg:px-8">
				<h2 className="text-black text-2xl font-bold mb-10 capitalize">{categoryName}</h2>
				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{products.map((product: Product) => (
						<ProductTile key={product.id} product={product} />
					))}
				</div>
			</div>

		</Suspense>
	)
}
