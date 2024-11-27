import { DataTable } from "@/components/DataTable";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Receipt } from "lucide-react";
import { ReservationColumns } from "@/components/columns/ReservationColumn";
import { reservations } from "@/data/reservation";

const ReservationSectionPage = async () => {
	return (
		<div className="px-10 py-5">
			<div className="flex items-center justify-between">
				<p className="text-2xl font-bold">Reservations</p>
			</div>
			<Separator className="bg-gray-200 my-4" />
			<div className="grid grid-cols-2 md:grid-cols-3 gap-10">
				<Card>
					<CardHeader className="flex flex-row justify-between items-center">
						<CardTitle className="text-lg">Total Reservations</CardTitle>
						<Receipt className="max-sm:hidden" />
					</CardHeader>
					<CardContent>
						<p className="text-body-bold"> {reservations?.length}</p>
					</CardContent>
				</Card>
			</div>
			<DataTable
				columns={ReservationColumns}
				//@ts-ignore
				data={reservations}
				searchKey="Name"
			/>
		</div>
	);
};

export const dynamic = "force-dynamic";

export default ReservationSectionPage;
