import { PropertyChart } from "@/components/charts/PropertyChart";
import DropdownNotification from "@/components/layouts/DropdownNotification";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { HouseIcon, Users2 } from "lucide-react";

export default async function DashboardPage() {
	return (
		<>
			<div className="px-8 py-10">
				<div className="flex justify-between w-full">
					<div className="justify-start">
						<p className="font-bold text-2xl">Admin Dashboard</p>
					</div>
					<div className="justify-end">
						<DropdownNotification />
					</div>
				</div>
				<Separator className="bg-grey-1 my-5" />
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					<Card>
						<CardHeader className="flex flex-row justify-between items-center">
							<CardTitle className="text-lg">Total Reservations</CardTitle>
							<HouseIcon className="max-sm:hidden" />
						</CardHeader>
						<CardContent>
							<p className="text-xl font-bold">{150}</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row justify-between items-center">
							<CardTitle className="text-lg">Total Properties</CardTitle>
							<HouseIcon className="max-sm:hidden" />
						</CardHeader>
						<CardContent>
							<p className="text-xl font-bold">{205}</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row justify-between items-center">
							<CardTitle className="text-lg">Total Customers</CardTitle>
							<Users2 className="max-sm:hidden" />
						</CardHeader>
						<CardContent>
							<p className="text-xl font-bold">{50}</p>
						</CardContent>
					</Card>
				</div>
				<div className="flex flex-col w-full my-5">
					<PropertyChart />
				</div>
			</div>
		</>
	);
}
