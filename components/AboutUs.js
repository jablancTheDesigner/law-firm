import React from "react";
import { useRouter } from "next/router";

const AboutUs = () => {
  const router = useRouter();
  return (
    <section className="py-6 bg-white text-midnight">
      <div className="container mx-auto flex flex-col items-center justify-center p-4 md:p-10 md:px-24 xl:px-48 max-w-xl p-6 py-24 mx-auto space-y-24 lg:px-8 lg:max-w-5xl">
        <h1 className="text-5xl font-bold leading-none text-center">About Us</h1>
        <p className="text-xl font-medium text-center">We are a law firm committed to providing high-quality legal services. We strive to make
          justice accessible to everyone, regardless of their background. Our team of passionate lawyers is here
          to guide you through legal challenges with care and expertise.</p>
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
          <button className="px-8 py-3 text-lg font-normal border rounded dark:bg-gray-800 dark:text-gray-50 dark:border-gray-700" onClick={() => router.push("/about")}>Learn more</button>
        </div>
      </div>
    </section>
  )
};

export default AboutUs;
