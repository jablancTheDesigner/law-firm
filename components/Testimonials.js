import React from "react";

const Testimonials = () => {
	const clientTestimonials = [
		{
			client: "John Doe",
			company: "CTO of Company Co.",
			testimonial: "The team was professional, compassionate, and helped me through a tough time."
		},
		{
			client: "Leroy Jenkins",
			company: "CTO of Company Co.",
			testimonial: "Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc fabulas. Nam meliore minimum et, regione convenire cum id. Ex pro eros mucius consectetuer, pro magna nulla nonumy ne, eam putent iudicabit consulatu cu."
		},
		{
			client: "Leroy Jenkins",
			company: "CTO of Company Co.",
			testimonial: "Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc fabulas. Nam meliore minimum et, regione convenire cum id. Ex pro eros mucius consectetuer, pro magna nulla nonumy ne, eam putent iudicabit consulatu cu."
		},
		{
			client: "Leroy Jenkins",
			company: "CTO of Company Co.",
			testimonial: "Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc fabulas. Nam meliore minimum et, regione convenire cum id. Ex pro eros mucius consectetuer, pro magna nulla nonumy ne, eam putent iudicabit consulatu cu."
		}

	]
	return (
		<section className="bg-midnight text-tahiti">
			<div className="container px-6 py-12 mx-auto max-w-xl p-6 py-24 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
				<div className="grid items-center gap-4 xl:grid-cols-5">
					<div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
						<h2 className="text-4xl font-bold">What our clients say</h2>
						<p className="dark:text-gray-600">Pri ex magna scaevola moderatius. Nullam accommodare no vix, est ei diceret alienum, et sit cetero malorum. Et sea iudico consequat, est sanctus adipisci ex.</p>
					</div>
					<div className="p-6 xl:col-span-3">
						<div className="grid gap-4 md:grid-cols-2">
							<div className="grid content-center gap-4">
								<div className="p-6 rounded shadow-md dark:bg-gray-50 text-white">
									<p>The team was professional, compassionate, and helped me through a tough time.</p>
									<div className="flex items-center mt-4 space-x-4">
										<div>
											<p className="text-lg font-semibold">John Doe</p>
											<p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
										</div>
									</div>
								</div>
								<div className="p-6 rounded shadow-md dark:bg-gray-50 text-white">
									<p>Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc fabulas. Nam meliore minimum et, regione convenire cum id.</p>
									<div className="flex items-center mt-4 space-x-4">
										<div>
											<p className="text-lg font-semibold">Leroy Jenkins</p>
											<p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="grid content-center gap-4">
								<div className="p-6 rounded shadow-md dark:bg-gray-50 text-white">
									<p>Putant omnium elaboraret per ut. Id dicta tritani nominavi quo, mea id justo errem elaboraret. Case movet ad est, sed tota vocent appetere ea.</p>
									<div className="flex items-center mt-4 space-x-4">
										<div>
											<p className="text-lg font-semibold">Leroy Jenkins</p>
											<p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
										</div>
									</div>
								</div>
								<div className="p-6 rounded shadow-md dark:bg-gray-50 text-white">
									<p>Te omnes virtute volutpat sed. Ei esse eros interesset vel, ei populo denique ocurreret vix, eu cum pertinax mandamus vituperatoribus. Solum nihil luptatum per ex, ei amet viderer eos. Ea illum labitur mnesarchum pro. Eius meis salutandi ei nam, alterum expetenda et nec. Expetenda intellegat at eum, per mazim sanctus honestatis ad. Ei noluisse invenire vix. Te ancillae patrioque qui, probo bonorum vivendum ex vim.</p>
									<div className="flex items-center mt-4 space-x-4">
										<div>
											<p className="text-lg font-semibold">Leroy Jenkins</p>
											<p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
};

export default Testimonials;
