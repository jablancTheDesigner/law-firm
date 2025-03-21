import React from "react";
import { useRouter } from "next/router";

const Hero = () => {
	const router = useRouter();
	return (
  <section className="bg-tahiti text-midnight">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Empowering
			<span className="dark:text-violet-600">Your</span> Legal Rights
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Providing trusted legal services</p>
		<div className="flex flex-wrap justify-center">
			<button 
				className="px-8 py-3 text-lg font-normal border rounded dark:bg-gray-800 dark:text-gray-50 dark:border-gray-700" 
				onClick={() => router.push("/scheduler")}>Get a Free Consultation</button>
		</div>
	</div>
</section>
)};

export default Hero;
