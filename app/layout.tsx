import './globals.css'
import { Inter } from 'next/font/google'

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import { Providers } from './provider';

import { Navigation } from '@/types/types';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'NextShop',
	description: 'Find products that you need!',
}

enum CategoryName {
	Women = "women's clothing",
	Men = "men's clothing",
	Electronics = "electronics",
	Jewelery = "jewelery",
}

async function getCategories(): Promise<Navigation> {
	const res = await fetch("https://fakestoreapi.com/products/categories");
	const data: string[] = await res.json();

	const mutatedData = {
		categories: data.filter((category: string) => category !== CategoryName.Electronics).map((category: string) => {
			return {
				id: category,
				name: category === CategoryName.Women ? "Women" : category === CategoryName.Men ? 'Men' : category === CategoryName.Jewelery ? 'Jewelery' : category,
				sections: [
					{
						id: "allCategoryProducts",
						name: "All Category Products",
						items: [{ name: "Browse All", href: `/products/category/${category}` }],
					},
				],
			};
		})
	};

	return mutatedData;
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const categories = await getCategories();

	return (
		<html lang="en">
			<body className={`${inter.className} h-screen`}>
				<div className="min-h-screen relative">
					<div className="pb-10">
						<Providers>
							<Header {...categories} />
							{children}
							<Footer />
						</Providers>
					</div>
				</div>
			</body>
		</html>
	)
}
