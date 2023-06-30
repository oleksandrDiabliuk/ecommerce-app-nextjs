import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types/types";

export default function ProductTile({ product }: { product: Product }) {
	return (
		<Link href={`/product/${product.id}`} key={product.id} className="group border-2 rounded p-5">
			<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7">
				<Image
					src={product.image}
					alt={product.title}
					fill
					className="object-contain duration-300 ease-in-out group-hover:opacity-75 group-hover:cursor-pointer"
				/>
				<div className="flex items-end p-4" >
					<button type="button" className="relative z-10 w-full rounded-md border-2 border-transparent bg-blue-700 text-white px-4 py-2 text-sm opacity-0 focus:opacity-100 group-hover:opacity-100 hover:bg-white hover:border-blue-700 hover:text-black transition-all" >Quick View</button>
				</div>
			</div>
			<h3 className="mt-4 text-sm text-gray-700 h-16">{product.title}</h3>
			<p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
		</Link>
	);
}
