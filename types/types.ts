enum CategoryName {
	Women = "Women",
	Men = "Men",
	Jewelery = "Jewelery",
}

export type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: { rate: number; count: number };
};

interface Item {
	name: string;
	href: string;
}

interface Section {
	id: string;
	name: CategoryName.Women | CategoryName.Men | CategoryName.Jewelery | string;
	items: Item[];
}

interface Category {
	id: string;
	name: string;
	sections: Section[];
}

export interface Navigation {
	categories: Category[];
}

export type Props = {
	params: {
		id: string;
	};
};

export type ProductInCart = Product & {
	qty: number;
	totalItemPrice: number;
};
