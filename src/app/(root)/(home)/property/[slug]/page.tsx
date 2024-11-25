"use client";
import Image from "next/image";
import { properties, propertiesTypes } from "@/data/properties";
import { useEffect, useState } from "react";
import { Bed, Car, MapPinIcon, Ruler, ShowerHead, Sofa } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PropertyProps {
	params: {
		slug: string;
	};
}

const PropertyDetail = ({ params }: PropertyProps) => {
	const [property, setProperty] = useState<propertiesTypes[]>([]);

	useEffect(() => {
		const filteredProperties = properties.filter(
			(prop) => prop.slug === params.slug
		);
		setProperty(filteredProperties);
	}, [params.slug]);
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-2xl border md:max-w-full lg:max-w-screen-2xl lg:py-20">
			<div className="flex flex-col lg:flex-row w-full">
				<div className="mb-6 lg:mb-0 lg:w-2/5 lg:pr-10">
					<Image
						className="object-cover w-full h-56 rounded-xl shadow-lg sm:h-96"
						src="/images/listing/four.jpg"
						alt="image"
						height={400}
						width={400}
					/>
				</div>
				<div className="mb-6 lg:mb-0 lg:w-3/5">
					<div className="flex justify-between items-start w-full">
						<div className="justify-start w-full">
							<h2 className="inline-flex w-full flex-col line-clamp-2 items-start text-lg/8 text-left m-0 text-foreground font-bold capitalize">
								{property[0]?.title}
							</h2>

							<div className="flex justify-start space-x-3 my-2">
								<span className="inline-flex justify-center items-center capitalize">
									{" "}
									<MapPinIcon className="size-4 mr-2" /> {property[0]?.location}
								</span>
								<span className="inline-flex justify-start w-auto whitespace-nowrap py-1 px-2 bg-orange-100 text-black text-sm font-medium">
									{`FOR ${property[0]?.propertyType}`}
								</span>
							</div>
							<h1 className="text-2xl font-bold">
								{formatCurrency(property[0]?.price)}
							</h1>
							<div className="flex flex-col w-full mt-4">
								<h2 className="font-semibold text-lg">Overview</h2>
								<div className="flex flex-col w-full my-4 shadow-md bg-white rounded-md">
									<div className="flex justify-between flex-wrap w-full">
										<div className="flex-[33.33%] items-start border-r border-b p-4">
											<span className="inline-flex justify-center items-center space-x-3">
												<Bed className="size-4" />
												<small className="text-sm">3 Bedroom</small>
											</span>
										</div>
										<div className="flex-[33.33%] items-start border-r border-b p-4">
											<span className="inline-flex justify-center items-center space-x-3">
												<ShowerHead className="size-4" />
												<small className="text-sm">3 Bathroom</small>
											</span>
										</div>
										<div className="flex-[33.33%] items-start border-r border-b p-4">
											<span className="inline-flex justify-center items-center space-x-3">
												<Ruler className="size-4" />
												<small className="text-sm">500sqtm</small>
											</span>
										</div>
										<div className="flex-[33.33%] items-start border-r border-b p-4">
											<span className="inline-flex justify-center items-center space-x-3">
												<Sofa className="size-4" />
												<small className="text-sm">All Furniture</small>
											</span>
										</div>
										<div className="flex-[33.33%] items-start border-r border-b p-4">
											<span className="inline-flex justify-center items-center space-x-3">
												<Car className="size-4" />
												<small className="text-sm">2 car park</small>
											</span>
										</div>
										<div className="flex-[33.33%] items-start border-r border-b p-4">
											<span className="inline-flex justify-center items-center space-x-3">
												<Bed className="size-4" />
												<small className="text-sm">3 Bedroom</small>
											</span>
										</div>
									</div>
								</div>
								<h2 className="font-semibold text-lg">Description</h2>
								<p className="text-gray-400 text-base">
									{" "}
									{property[0]?.description}
								</p>
							</div>
							<div className="flex flex-col w-full space-y-4 mt-5">
								<Button className="h-10 text-base font-semibold">
									Buy Property Now
								</Button>
								<Button
									className="h-10 text-base font-semibold"
									variant={"secondary"}
								>
									Rent Property Now
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default PropertyDetail;
