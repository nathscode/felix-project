export type Customer = {
	id: string;
	name: string;
	email: string;
	phone?: string;
	createdAt: string;
};
export type Property = {
	id: string;
	title: string;
	price: number;
	location?: string;
	createdAt?: string;
};

export type Reservation = {
	id: string;
	reservationType: "RENT" | "BUY";
	status: "pending" | "processing" | "success" | "cancelled";
	customer: Customer;
	property: Property;
	createdAt: string;
	updatedAt?: string;
};
