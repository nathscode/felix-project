import { clsx, type ClassValue } from "clsx";
import moment from "moment";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDateTime(date: string): string {
	return moment.utc(date).format("DD MMM, YYYY, HH:mm A");
}

export function addTenMinutes(minute: number): string {
	const date = new Date();
	const minutes = date.getMinutes() + minute;
	return new Date(date.setMinutes(minutes)).toString();
}

export function formatCurrency(
	price: number | string,
	country?: string,
	currencyCode?: string,
	options: {
		currency?: "NGN" | "USD" | "EUR" | "GBP" | "BDT";
		notation?: Intl.NumberFormatOptions["notation"];
	} = {}
) {
	const {
		currency = currencyCode ? currencyCode : "NGN",
		notation = "standard",
	} = options;
	const newCountry = country ? country : "en-NG";
	const numericPrice =
		typeof price === "string" ? parseFloat(price) : Number(price);
	return new Intl.NumberFormat(newCountry, {
		style: "currency",
		currency,
		notation,
		maximumFractionDigits: 2,
	}).format(numericPrice);
}
