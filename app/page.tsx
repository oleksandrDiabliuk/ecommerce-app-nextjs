import Link from 'next/link'

export default function Homepage() {
	return (
		<div className="relative overflow-hidden bg-white">
			<div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
				<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
					<div className="sm:max-w-lg">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Summer styles are finally here
						</h1>
						<p className="mt-4 text-xl text-gray-500">
							Our new summer collection will impress you from the harsh elements of a world.
						</p>
					</div>
					<div>
						<div className="mt-10">
							{/* Decorative image grid */}
							<div
								aria-hidden="true"
								className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
							>
								<div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
									<div className="flex items-center space-x-6 lg:space-x-8">
										<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
											<div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
												<img
													src="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
										</div>
										<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=711&q=80"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
										</div>
										<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=705&q=80"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>

							<Link
								href="/products"
								className="inline-block rounded-md border border-transparent bg-blue-700 px-8 py-3 text-center font-medium text-white hover:bg-blue-700"
							>
								Browse Products
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

