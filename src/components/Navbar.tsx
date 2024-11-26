"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="bg-gray-900">
			<div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div className="relative flex items-center justify-between">
					<Link
						href="/"
						aria-label="F.O SUITES"
						title="F.O SUITES"
						className="inline-flex items-center"
					>
						<span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
							F.O SUITES
						</span>
					</Link>
					<ul className=" items-center hidden space-x-8 lg:flex">
						<li>
							<Link
								href="/"
								aria-label="Our Home"
								title="Our Home"
								className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/"
								aria-label="Rent"
								title="Rent"
								className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
							>
								Rent
							</Link>
						</li>
						<li>
							<Link
								href="/"
								aria-label="Buy"
								title="Buy"
								className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
							>
								Buy
							</Link>
						</li>
					</ul>

					<ul className="sm:flex items-center hidden space-x-8 lg:flex">
						<li>
							<Link
								href="/"
								className="inline-flex items-center justify-center text-white"
								aria-label="Login"
								title="Login"
							>
								Log in
							</Link>
						</li>
						<li>
							<Button className="" variant={"secondary"} asChild>
								<Link
									href="/"
									className="inline-flex items-center justify-center "
									aria-label="Sign up"
									title="Sign up"
								>
									Sign up
								</Link>
							</Button>
						</li>
					</ul>
					<div className="lg:hidden">
						<button
							aria-label="Open Menu"
							title="Open Menu"
							className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
							onClick={() => setIsMenuOpen(true)}
						>
							<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
								/>
								<path
									fill="currentColor"
									d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
								/>
								<path
									fill="currentColor"
									d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
								/>
							</svg>
						</button>
						{isMenuOpen && (
							<div className="absolute top-0 left-0 w-full">
								<div className="p-5 bg-white border rounded shadow-sm">
									<div className="flex items-center justify-between mb-4">
										<div>
											<a
												href="/"
												aria-label="Company"
												title="Company"
												className="inline-flex items-center"
											>
												<span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
													FUPREPROPA
												</span>
											</a>
										</div>
										<div>
											<button
												aria-label="Close Menu"
												title="Close Menu"
												className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
												onClick={() => setIsMenuOpen(false)}
											>
												<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
													<path
														fill="currentColor"
														d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
													/>
												</svg>
											</button>
										</div>
									</div>
									<nav>
										<ul className="flex flex-col space-y-4">
											<li>
												<Link
													href="/"
													aria-label="Our Home"
													title="Our Home"
													className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-teal-accent-400"
												>
													Home
												</Link>
											</li>
											<li>
												<Link
													href="/"
													aria-label="Rent"
													title="Rent"
													className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-teal-accent-400"
												>
													Rent
												</Link>
											</li>
											<li>
												<Link
													href="/"
													aria-label="Buy"
													title="Buy"
													className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-teal-accent-400"
												>
													Buy
												</Link>
											</li>
										</ul>

										<ul className="flex flex-col items-start mt-5 space-y-4 lg:hidden">
											<li>
												<Link
													href="/"
													className="inline-flex items-center justify-center text-black"
													aria-label="Login"
													title="Login"
												>
													Log in
												</Link>
											</li>
											<li>
												<Button className="w-full" variant={"default"} asChild>
													<Link
														href="/"
														className="inline-flex w-full items-center justify-center "
														aria-label="Sign up"
														title="Sign up"
													>
														Sign up
													</Link>
												</Button>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
