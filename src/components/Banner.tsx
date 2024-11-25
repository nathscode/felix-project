import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

export const Banner = () => {
	return (
		<div className="relative">
			<div className="relative flex flex-col w-full h-[80vh]">
				<Image
					src="https://images.pexels.com/photos/8134816/pexels-photo-8134816.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
					className="absolute inset-0 object-cover w-full h-full"
					alt=""
					fill
				/>

				<div className="relative bg-gray-900 h-full bg-opacity-75">
					<div className="px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40">
						<div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
							<div className="text-center">
								<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
									<h2 className="max-w-2xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-5xl md:mx-auto">
										Discover your dream home and property with ease.
									</h2>
									<p className="text-base text-gray-100 md:text-lg">
										Search for home to buy or rent and compare prices.
									</p>
								</div>
								<form className="flex flex-col items-center w-full mb-10 md:flex-row md:px-16">
									<Input
										placeholder="Enter property name"
										type="text"
										className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
									/>
									<Button type="submit" className="h-11" variant={"secondary"}>
										Search
									</Button>
								</form>

								<Link
									href="#features"
									aria-label="Scroll down"
									className="flex items-center justify-center w-10 h-10 mx-auto text-gray-100 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="currentColor"
									>
										<path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
