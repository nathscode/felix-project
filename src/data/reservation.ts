import { addTenMinutes } from "@/lib/utils";
import { Reservation } from "@/types";

export const reservations: Reservation[] = [
	// ... (previous reservation)
	{
		id: "m5gr84i9",
		reservationType: "BUY",
		status: "success",
		createdAt: addTenMinutes(10),
		customer: {
			id: "1",
			name: "Joe Doe",
			email: "ken99@yahoo.com",
			createdAt: addTenMinutes(30),
		},
		property: {
			id: "1",
			title: "self contain with pop ceiling",
			price: 1450000,
		},
	},
	{
		id: "m5gr84i8",
		reservationType: "BUY",
		status: "success",
		createdAt: addTenMinutes(20),
		customer: {
			id: "2",
			name: "Sarah Johnson",
			email: "sarahj@gmail.com",
			createdAt: addTenMinutes(40),
		},
		property: {
			id: "2",
			title: "luxury apartment with ocean view",
			price: 2500000,
		},
	},
	{
		id: "m5gr84i7",
		reservationType: "RENT",
		status: "pending",
		createdAt: addTenMinutes(15),
		customer: {
			id: "3",
			name: "Michael Brown",
			email: "michaelb@gmail.com",
			createdAt: addTenMinutes(35),
		},
		property: {
			id: "3",
			title: "cozy studio near downtown",
			price: 1800000,
		},
	},
	{
		id: "m5gr84i6",
		reservationType: "BUY",
		status: "cancelled",
		createdAt: addTenMinutes(25),
		customer: {
			id: "4",
			name: "Emily Chen",
			email: "emilyc@yahoo.com",
			createdAt: addTenMinutes(45),
		},
		property: {
			id: "4",
			title: "modern townhouse with pool",
			price: 3200000,
		},
	},
	{
		id: "m5gr84i5",
		reservationType: "RENT",
		status: "success",
		createdAt: addTenMinutes(35),
		customer: {
			id: "5",
			name: "David Lee",
			email: "davidl@gmail.com",
			createdAt: addTenMinutes(55),
		},
		property: {
			id: "5",
			title: "beachfront condo",
			price: 3800000,
		},
	},
	{
		id: "m5gr84i4",
		reservationType: "BUY",
		status: "pending",
		createdAt: addTenMinutes(40),
		customer: {
			id: "6",
			name: "Lisa Nguyen",
			email: "lisang@gmail.com",
			createdAt: addTenMinutes(60),
		},
		property: {
			id: "6",
			title: "penthouse apartment with city view",
			price: 4200000,
		},
	},
	{
		id: "m5gr84i3",
		reservationType: "RENT",
		status: "success",
		createdAt: addTenMinutes(50),
		customer: {
			id: "7",
			name: "Kevin White",
			email: "kevinw@gmail.com",
			createdAt: addTenMinutes(70),
		},
		property: {
			id: "7",
			title: "luxury penthouse with rooftop pool",
			price: 5000000,
		},
	},
	{
		id: "m5gr84i2",
		reservationType: "BUY",
		status: "cancelled",
		createdAt: addTenMinutes(45),
		customer: {
			id: "8",
			name: "Amy Martin",
			email: "amym@gmail.com",
			createdAt: addTenMinutes(65),
		},
		property: {
			id: "8",
			title: "high-rise apartment with gym",
			price: 2900000,
		},
	},
	{
		id: "m5gr84i1",
		reservationType: "RENT",
		status: "success",
		createdAt: addTenMinutes(55),
		customer: {
			id: "9",
			name: "Chris Hall",
			email: "chrish@gmail.com",
			createdAt: addTenMinutes(75),
		},
		property: {
			id: "9",
			title: "loft-style apartment near art district",
			price: 2600000,
		},
	},
	{
		id: "m5gr84i0",
		reservationType: "BUY",
		status: "pending",
		createdAt: addTenMinutes(60),
		customer: {
			id: "10",
			name: "Rebecca Davis",
			email: "rebeccad@gmail.com",
			createdAt: addTenMinutes(80),
		},
		property: {
			id: "10",
			title: "luxury penthouse with private elevator",
			price: 6000000,
		},
	},
];
