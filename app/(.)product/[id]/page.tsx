"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Product } from "@/types/types";

import { Dialog } from "@headlessui/react";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

import { Props } from '@/types/types';

function classNames(...classes: string[]): string {
	return classes.filter(Boolean).join(' ')
}

function Modal({ params: { id } }: Props) {
	let [isOpen, setIsOpen] = useState(true);
	const [product, setProduct] = useState<Product>();
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		async function fetchProduct() {
			setLoading(true);
			const res = await fetch(`https://fakestoreapi.com/products/${id}`);
			const product = await res.json();

			setProduct(product);
			setLoading(false);
		}

		fetchProduct();
	}, [id]);

	return (
		<Dialog
			open={isOpen}
			onClose={() => {
				setIsOpen(false);
				router.back();
			}}
			className="relative z-50"
		>
			{/* The backdrop, rendered as a fixed sibling to the panel container */}
			<div className="fixed inset-0 bg-black/30" aria-hidden="true" />

			{/* Full-screen scrollable container */}
			<div className="fixed inset-0 overflow-y-auto text-black">
				{/* Container to center the panel */}
				<div className="flex min-h-full h-full md:h-fit items-center justify-center p-4">
					{/* The actual dialog panel  */}
					<Dialog.Panel className="mx-auto max-w-3xl md:h-fit rounded bg-white p-10 relative">
						{loading ? (
							<div className="h-8 w-8 rounded-full border-2 border-dotted border-blue-600 animate-spin" />
						) : (
							<div className="flex flex-col justify-between gap-10 justify-items-center h-full md:flex-row gap-x-8 md:h-96">
								{product?.image && (
									<div className="relative items-center self-center max-w-56 w-56 md:inline">
										<img src={product.image} alt={product.title} />
									</div>
								)}
								<div className="flex-1 flex flex-col gap-10">
									<div className="flex-1">
										<h4 className="font-semibold">{product?.title}</h4>
										<p className="font-medium text-sm">${product?.price}</p>

										<div className="flex items-center text-sm my-4">
											<p>{product?.rating.rate}</p>
											{product?.rating.rate && (
												<div className="flex items-center ml-2 mr-6">
													{/* Display 5 stars but display the rate ones as StarIconOutline  */}
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
											)}
											<p className="text-blue-600 hover:underline cursor-pointer text-xs">
												See all {product?.rating.count} reviews
											</p>
										</div>

										<p className="line-clamp-5 text-sm">
											{product?.description}
										</p>
									</div>

									<div className="space-y-3 text-sm">
										<button className="button w-full h-10 border-2 bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black transition-all">
											Add to bag
										</button>
										<button
											onClick={() => window.location.reload()}
											className="button w-full h-10 border-2 border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all"
										>
											View full details
										</button>
									</div>
								</div>
								<button
									type="button"
									onClick={() => {
										setIsOpen(false);
										router.back();
									}}
									className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
								>
									<span className="sr-only">Close</span>
									<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
						)}
					</Dialog.Panel>
				</div>
			</div>
		</Dialog>
	);
}

export default Modal;
