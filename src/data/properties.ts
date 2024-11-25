export type propertiesTypes = {
	id: string;
	slug: string;
	title: string;
	description: string;
	price: number;
	location: string;
	propertyType: "RENT" | "BUY";
	images: string[];
};

export const properties: propertiesTypes[] = [
	{
		id: "1",
		slug: "self-contain-with-pop-ceiling",
		title: "self contain with pop ceiling",
		description:
			"newly built self contain with no landlord, water heater, spacious bedroom",
		price: 600000,
		location: "iterigbi",
		propertyType: "BUY",
		images: ["/images/listing/one.jpg"],
	},
	{
		id: "2",
		slug: "modern-studio-apartment",
		title: "Modern Studio Apartment",
		description: "Cozy studio apartment with modern decor and natural light",
		price: 450000,
		location: "Ugbromo",
		propertyType: "RENT",
		images: ["/images/listing/two.jpg", "/images/listing/three.jpg"],
	},
	{
		id: "3",
		slug: "luxury-penthouse",
		title: "Luxury Penthouse",
		description:
			"Spacious penthouse with panoramic views and high-end finishes",
		price: 1200000,
		location: "Iterigbi",
		propertyType: "BUY",
		images: ["/images/listing/four.jpg", "/images/listing/five.jpg"],
	},
	{
		id: "4",
		slug: "cozy-cottage",
		title: "Cozy Cottage",
		description: "Charming cottage perfect for a peaceful retreat",
		price: 350000,
		location: "Okuokoko",
		propertyType: "BUY",
		images: ["/images/listing/three.jpg", "/images/listing/two.jpg"],
	},
	{
		id: "5",
		slug: "apartment-complex-unit",
		title: "Apartment Complex Unit",
		description: "Modern apartment unit in a secure complex",
		price: 400000,
		location: "ugolo",
		propertyType: "RENT",
		images: ["/images/listing/three.jpg", "/images/listing/two.jpg"],
	},
	{
		id: "6",
		slug: "beachfront-bungalow",
		title: "Beachfront Bungalow",
		description: "Stunning beachfront property with private access",
		price: 900000,
		location: "iterigbi",
		propertyType: "RENT",
		images: ["/images/listing/three.jpg", "/images/listing/four.jpg"],
	},
	{
		id: "7",
		slug: "executive-townhouse",
		title: "Executive Townhouse",
		description: "Spacious townhouse with ample storage and modern amenities",
		price: 700000,
		location: "ugbromo",
		propertyType: "RENT",
		images: ["/images/listing/three.jpg", "/images/listing/two.jpg"],
	},
	{
		id: "8",
		slug: "rustic-cabin",
		title: "Rustic Cabin",
		description:
			"Quaint cabin perfect for nature lovers and outdoor enthusiasts",
		price: 300000,
		location: "Ugbromo",
		propertyType: "BUY",
		images: ["/images/listing/one.jpg", "/images/listing/two.jpg"],
	},
	{
		id: "9",
		slug: "pent-house",
		title: "Pent House",
		description:
			"Quaint cabin perfect for nature lovers and outdoor enthusiasts",
		price: 4500000,
		location: "Ugbromo",
		propertyType: "BUY",
		images: ["/images/listing/two.jpg", "/images/listing/two.jpg"],
	},
];
