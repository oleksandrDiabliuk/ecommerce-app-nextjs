'use client';

import { Fragment, useEffect, useState } from 'react';

import Link from 'next/link';

import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '@/store/slices/cartSlice';
import { RootState } from '@/store/index';
import { ProductInCart } from '@/types/types';

type Props = {
	openCart: boolean,
	setOpenCart: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Cart(props: Props) {
	const { cart, total } = useSelector((state: RootState) => state);

	const [prevCart, setPrevCart] = useState<ProductInCart[]>(cart);
	const [prevTotal, setPrevTotal] = useState<number>(total);

	const dispatch = useDispatch();


	useEffect(() => {
		if (prevCart === undefined) {
			return;
		}

		if (JSON.stringify(prevCart) !== JSON.stringify(cart) || prevTotal !== total) {
			props.setOpenCart(true);
			setPrevCart(cart);
			setPrevTotal(total);
		}
	}, [cart, total, prevCart, prevTotal]);

	return (
		<Transition.Root show={props.openCart} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={props.setOpenCart}>
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>
				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto w-screen max-w-md">
									<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
										<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 relative">
											<div className="flex items-start justify-between">
												<Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
												<div className="ml-3 flex h-7 items-center">
													<button
														type="button"
														className="-m-2 p-2 text-gray-400 hover:text-gray-500"
														onClick={() => props.setOpenCart(false)}
													>
														<span className="sr-only">Close panel</span>
														<XMarkIcon className="h-6 w-6" aria-hidden="true" />
													</button>
												</div>
											</div>
											<div className="mt-8">
												<div className="flow-root">
													<ul role="list" className="-my-6 divide-y divide-gray-200">
														{cart.length ? cart.map((product) => (
															<li key={product.id} className="flex flex-col py-6 sm:flex-row">
																<div className="h-32 w-32 self-center flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mb-3 sm:mb-0">
																	<img
																		src={product.image}
																		alt={product.title}
																		className="h-32 w-32 object-contain"
																	/>
																</div>

																<div className="ml-4 flex justify-between flex-1 flex-col">
																	<div>
																		<div className="flex justify-between text-base font-medium text-gray-900">
																			<h3 className='mb-3 sm:mb-0 max-h-12 overflow-hidden'>
																				<Link href={`/product/${product.id}`}>{product.title}</Link>
																			</h3>
																			<p className="ml-4">${product.totalItemPrice}</p>
																		</div>
																	</div>
																	<div className="flex flex-1 items-end justify-between justify-items-center text-sm max-h-8">
																		<button onClick={() => dispatch(cartActions.decrementQty(product))} className="basis-1/8 bg-blue-700 hover:bg-blue-800 text-white font-bold p-2 rounded self-center">-</button>
																		<p className="text-gray-500 self-center">Qty {product.qty}</p>
																		<button onClick={() => dispatch(cartActions.incrementQty(product))} className="basis-1/8 bg-blue-700 hover:bg-blue-800 text-white font-bold p-2 rounded self-center">+</button>
																		<button
																			type="button"
																			className="font-medium text-blue-700 hover:text-blue-700 self-center"
																			onClick={() => dispatch(cartActions.removeFromCart(product))}
																		>
																			Remove
																		</button>
																	</div>
																</div>
															</li>
														)) : <p className='text-black text-lg text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Cart is Empty :&#40;</p>}
													</ul>
												</div>
											</div>
										</div>
										<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
											<div className="flex justify-between text-base font-medium text-gray-900">
												<p>Total</p>
												<p>${total}</p>
											</div>
											<p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
											<div className="mt-6">
												<a
													href="#"
													className="flex items-center justify-center rounded-md border border-transparent bg-blue-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-600"
												>
													Checkout
												</a>
											</div>
											<div className="mt-6 flex justify-center text-center text-sm text-gray-500">
												<p>
													or
													<button
														type="button"
														className="font-medium text-blue-700 hover:text-blue-600 ml-1"
														onClick={() => props.setOpenCart(false)}
													>
														Continue Shopping
														<span aria-hidden="true"> &rarr;</span>
													</button>
												</p>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
};
