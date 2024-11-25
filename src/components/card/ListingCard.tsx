import { formatCurrency } from "@/lib/utils";
import { Dot, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { propertiesTypes } from "../../data/properties";
import { Button } from "../ui/button";
import placeholderImage from "/public/images/placeholder-image.png";

type Props = {
	property: propertiesTypes;
};

const ListingCard = ({ property }: Props) => {
	return (
		<Link
			href={`/property/${property.slug}`}
			className="w-[350px] h-full bg-card snap-center font-card-foreground flex-col flex items-center flex-none cursor-pointer group rounded-tl-lg rounded-tr-lgt "
		>
			<div className="w-full h-[250px] relative overflow-hidden rounded-lg bg-slate-50 ">
				<Image
					fill
					className="object-cover size-full transition-all aspect-square group-hover:scale-105"
					src={property.images[0] ?? placeholderImage}
					alt="Listing"
				/>
			</div>
			<div className="flex flex-col justify-start w-full mt-4">
				<div className="flex justify-between items-start w-full">
					<div className="justify-start w-[80%] mb-0">
						<h2 className="inline-flex w-full flex-col line-clamp-2 items-start text-lg text-left m-0  leading-8 capitalize text-foreground group-hover:text-brand group-hover:underline">
							{property.title}
						</h2>
					</div>
					<div className="justify-end">
						<Button
							className="rounded-full hover:bg-brand/10"
							variant={"ghost"}
							size={"icon"}
						>
							<Heart className="h-10 w-10" />
						</Button>
					</div>
				</div>
				<div className="flex flex-col w-full mb-2">
					<h2 className="flex w-full items-center  text-left m-0 leading-5">
						<strong className="text-xl text-brand">{`${formatCurrency(
							property.price
						)}`}</strong>
					</h2>
				</div>
				<div className="flex justify-between w-full">
					<ul className="flex justify-start gap-1 w-full">
						<li className="inline-flex items-center justify-start gap-x-1 text-gray-500">
							<span className="text-sm">2 bed</span>
						</li>
						<li className="inline-flex items-center justify-start gap-x-1 text-gray-500">
							<Dot className="size-4" />
						</li>
						<li className="inline-flex items-center justify-start gap-x-1 text-gray-500">
							<span className="text-sm">2 bath</span>
						</li>
					</ul>
					<div className="justify-end">
						<span className="inline-flex justify-start w-full whitespace-nowrap py-1 px-2 bg-orange-100 text-black text-sm font-medium">
							{`FOR ${property.propertyType}`}
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ListingCard;
