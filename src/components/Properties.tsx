import React from "react";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { Heading } from "./heading";
import ListingCard from "./card/ListingCard";
import { properties } from "../data/properties";

const Properties = () => {
	return (
		<section className="relative py-10 sm:py-20 bg-white">
			<MaxWidthWrapper className="flex flex-col items-start gap-16 sm:gap-20">
				<div className="max-w-lg">
					<Heading className="text-left mb-4">Our Latest Properties</Heading>
					<p className="text-left text-base/7 font-medium text-gray-600">
						Browse through our latest vetted properties, either for buy or rent,
						we got you covered.
					</p>
				</div>
				<div className="flex flex-col w-full">
					<div className="flex flex-wrap justify-start gap-4 w-full">
						{properties.map((property) => (
							<ListingCard key={property.id} property={property} />
						))}
					</div>
				</div>
			</MaxWidthWrapper>
		</section>
	);
};

export default Properties;
