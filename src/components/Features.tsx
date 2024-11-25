import React from "react";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { Heading } from "./heading";
import { DollarSign, Home, Hotel } from "lucide-react";

const Features = () => {
	return (
		<section className="relative py-10 sm:py-20 bg-white" id="features">
			<MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
				<div>
					<Heading className="text-center mb-4">See how we can Help</Heading>
					<p className="text-center text-base/7 font-medium text-gray-600">
						Discover the power of our platform, how we can simplify and enhance
						your experience.
					</p>
				</div>
				<ul className="grid max-w-6xl grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:gap-6 gap-10">
					<li className="relative">
						<div className="absolute h-48 z-0 inset-px rounded-sm  bg-[#F5F5EB]" />

						<div className="pointer-events-none z-0 absolute rounded-sm inset-px h-48  shadow-sm  ring-1 ring-black/5" />

						<div className="relative p-6 z-10">
							<div className="flex flex-col text-[#7c7c11]">
								<Home className="size-8" />
							</div>
							<h3 className="text-lg/7 font-semibold tracking-tight text-gray-950 mt-4">
								Buy a home
							</h3>
							<p className="text-sm/5 text-gray-600 mt-2">
								We have many vetted properties for sale; look around and take a
								pick.
							</p>
						</div>
					</li>
					<li className="relative">
						<div className="absolute h-48 z-0 inset-px rounded-sm  bg-[#FEF4EA]" />

						<div className="pointer-events-none z-0 absolute rounded-sm inset-px h-48  shadow-sm  ring-1 ring-black/5" />

						<div className="relative p-6 z-10">
							<div className="flex flex-col text-[#7c7c11]">
								<Hotel className="size-8" />
							</div>
							<h3 className="text-lg/7 font-semibold tracking-tight text-gray-950 mt-4">
								Rent a home
							</h3>
							<p className="text-sm/5 text-gray-600 mt-2">
								We have many vetted properties for rent; look around and take a
								pick.
							</p>
						</div>
					</li>
					<li className="relative">
						<div className="absolute h-48 z-0 inset-px rounded-sm  bg-[#EBF5F2]" />

						<div className="pointer-events-none z-0 absolute rounded-sm inset-px h-48  shadow-sm  ring-1 ring-black/5" />

						<div className="relative p-6 z-10">
							<div className="flex flex-col text-[#7c7c11]">
								<DollarSign className="size-8" />
							</div>
							<h3 className="text-lg/7 font-semibold tracking-tight text-gray-950 mt-4">
								See home prices
							</h3>
							<p className="text-sm/5 text-gray-600 mt-2">
								Explore the ever changing landscape of house prices
							</p>
						</div>
					</li>
				</ul>
			</MaxWidthWrapper>
		</section>
	);
};

export default Features;
