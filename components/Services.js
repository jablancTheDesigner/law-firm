import React from "react";

const Services = () => {
  const featuredServices = [
    {
      title: "Business Law",
      description: "Legal advice and services for your growing business.",
    },
    {
      title: "Criminal Defense",
      description: "Protecting your rights and defending you in criminal cases.",
    },
    {
      title: "Family Law",
      description: "Guidance and support for family-related legal matters.",
    },
  ]; 
  return (
    <section className="bg-midnight text-white">
      <div className="container max-w-xl p-6 py-24 mx-auto space-y-24 lg:px-8 lg:max-w-5xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">Rain, Sleet, or Snow...Our lawyers are trained to go</h2>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Top Services</h3>
            <p className="mt-3 text-lg dark:text-gray-600">Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.</p>
            <div className="mt-12 space-y-12">
              {featuredServices.map((service, index) => (
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">{service.title}</h4>
                    <p className="mt-2 dark:text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img src="https://source.unsplash.com/random/360x480" alt="" className="mx-auto rounded-lg shadow-lg bg-tahiti w-full max-w-[360px] h-[480px]" />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Services;
