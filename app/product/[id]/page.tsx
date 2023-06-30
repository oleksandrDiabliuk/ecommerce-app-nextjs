import Link from 'next/link';

import { StarIcon } from '@heroicons/react/20/solid';

import { Props, Product } from '@/types/types';

function classNames(...classes: string[]): string {
	return classes.filter(Boolean).join(' ')
}

export default async function ProductDetails({ params: { id } }: Props) {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`);
	const product: Product = await res.json();

	return (
		<div className="flex flex-col justify-between gap-28 pt-6">
			<nav aria-label="Breadcrumb">
				<ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
					{/* {product.breadcrumbs.map((breadcrumb) => ( */}
					<li>
						<div className="flex items-center">
							<Link href={`/products/category/${product.category}`} className="mr-2 text-sm font-medium text-gray-900 hover:text-blue-700">
								Return to Category Page
							</Link>
							<svg
								width={16}
								height={20}
								viewBox="0 0 16 20"
								fill="currentColor"
								aria-hidden="true"
								className="h-5 w-4 text-gray-300"
							>
								<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
							</svg>
						</div>
					</li>
					{/* ))} */}
					<li className="text-sm">
						<Link href={`/product/${id}`} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
							{product.title}
						</Link>
					</li>
				</ol>
			</nav>

			{/* Image gallery */}
			<div className="relative items-center self-center max-w-80 w-60 md:w-80 md:inline">
				<img src={product.image} alt={product.title} />
			</div>

			{/* Product info */}
			<div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
				<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
					<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
				</div>

				{/* Options */}
				<div className="mt-4 lg:row-span-3 lg:mt-0">
					<h2 className="sr-only">Product information</h2>
					<p className="text-3xl tracking-tight text-gray-900">${product.price}</p>

					{/* Reviews */}
					<div className="mt-6">
						<h3 className="sr-only">Reviews</h3>
						<div className="flex items-center">
							<div className="flex items-center">
								{[0, 1, 2, 3, 4].map((rating) => (
									<StarIcon
										key={rating}
										className={classNames(
											product.rating.rate > rating ? 'text-gray-900' : 'text-gray-200',
											'h-5 w-5 flex-shrink-0'
										)}
										aria-hidden="true"
									/>
								))}
							</div>
							<p className="sr-only">{product.rating.rate} out of 5 stars</p>
							<p className="ml-3 text-sm font-medium text-blue-700 hover:text-blue-600">
								{product.rating.count} reviews
							</p>
						</div>
					</div>
					<button
						type="submit"
						className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-700 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						Add to bag
					</button>
				</div>

				<div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
					{/* Description and details */}
					<div>
						<h3 className="sr-only">Description</h3>

						<div className="space-y-6">
							<p className="text-base text-gray-900">{product.description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
