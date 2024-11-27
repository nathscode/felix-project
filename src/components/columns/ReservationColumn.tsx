"use client";

import { formatCurrency, formatDateTime } from "@/lib/utils";
import { Reservation } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "../ui/badge";

export const ReservationColumns: ColumnDef<Reservation>[] = [
	{
		accessorKey: "sn",
		header: "SN",
		cell: ({ row }) => <span>{row.index + 1}</span>,
	},
	{
		accessorKey: "id",
		header: "Reservation ID",
		cell: ({ row }) => (
			<Link
				href={`/dashboard/reservations/${row.original.id}`}
				className="hover:text-brand"
			>
				{row.original.id}
			</Link>
		),
	},
	{
		accessorKey: "type",
		header: "Reservation Type",
		cell: ({ row }) => row.original.reservationType,
	},
	{
		accessorKey: "property",
		header: "Property",
		cell: ({ row }) => row.original.property.title,
	},
	{
		accessorKey: "amount",
		header: "Amount",
		cell: ({ row }) => formatCurrency(row.original.property.price),
	},
	{
		accessorKey: "ReservedBy",
		header: "ReservedBy",
		cell: ({ row }) => row.original.customer.name,
	},
	{
		accessorKey: "status",
		header: "status",
		cell: ({ row }) => (
			<Badge
				variant={`${
					row.original.status === "success"
						? "success"
						: row.original.status === "pending"
						? "pending"
						: "destructive"
				}`}
			>
				{row.original.status}
			</Badge>
		),
	},
	{
		accessorKey: "Date",
		header: "Date",
		cell: ({ row }) => formatDateTime(row.original.createdAt!.toString()!),
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const reservation = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem>Approve</DropdownMenuItem>
						<DropdownMenuItem>Decline</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Delete</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
