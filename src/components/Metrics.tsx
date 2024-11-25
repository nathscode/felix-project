import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { Heading } from "./heading";

const Metrics = () => {
	return (
		<section className="relative py-10 sm:py-20 bg-white">
			<MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
				<div className="max-w-lg">
					<Heading className="text-center mb-4">We Speak Volume</Heading>
					<p className="text-center text-base/7 font-medium text-gray-600">
						if you are looking for a new home, an investment property to explore
						the area we will help you find exactly what you are looking for.
					</p>
				</div>
				<div className="flex flex-col w-full">
					<div className="relative bg-[#F5F5EB] text-gray-600 w-full">
						<ul className="grid max-w-6xl grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:gap-6 gap-10">
							<li className="relative">
								<div className="flex flex-col items-center justify-center rounded-2xl flex-1 text-center p-6 bg-transparent">
									<h1 className="text-4xl sm:text-5xl text-pretty font-heading font-bold tracking-tight text-zinc-800">
										1500+
									</h1>

									<p className="text-center text-sm/5 font-medium text-gray-600 mt-2">
										Homes for sale
									</p>
								</div>
							</li>
							<li className="relative">
								<div className="flex flex-col items-center justify-center rounded-2xl flex-1 text-center p-6 bg-transparent">
									<h1 className="text-4xl sm:text-5xl text-pretty font-heading font-bold tracking-tight text-zinc-800">
										1010+
									</h1>

									<p className="text-center text-sm/5 font-medium text-gray-600 mt-2">
										Homes for Rent
									</p>
								</div>
							</li>
							<li className="relative">
								<div className="flex flex-col items-center justify-center rounded-2xl flex-1 text-center p-6 bg-transparent">
									<h1 className="text-4xl sm:text-5xl text-pretty font-heading font-bold tracking-tight text-zinc-800">
										500
									</h1>

									<p className="text-center text-sm/5 font-medium text-gray-600 mt-2">
										Real estate agent
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</MaxWidthWrapper>
		</section>
	);
};

export default Metrics;
