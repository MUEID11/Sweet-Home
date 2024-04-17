const Faq = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      className="container mx-auto my-16"
    >
      <section id="faq" className="dark:bg-gray-100 dark:text-gray-800">
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8"
        >
          <h2 className="text-4xl font-bold sm:text-4xl text-center">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-600 text-center">
            Here are five frequently asked questions (FAQs) on real estate
          </p>
          <div data-aos="fade-up" data-aos-duration="1000" className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold">
                What is the difference between a Realtor® and a real estate
                agent?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                A Realtor® is a real estate professional who is a member of the
                National Association of Realtors® (NAR) and adheres to a strict
                code of ethics. On the other hand, a real estate agent is
                licensed to represent buyers and sellers in real estate
                transactions but may not necessarily be a Realtor®.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold">
                What factors should I consider when buying a home?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                When buying a home, it's important to consider factors such as
                location, budget, size of the property, amenities, neighborhood
                safety, school districts, proximity to work and amenities,
                future resale value, and the condition of the property.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold">
                How can I improve the value of my property?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Improving the value of your property can be done through various
                means such as renovations, landscaping, upgrading fixtures and
                appliances, adding energy-efficient features, enhancing curb
                appeal, and keeping the property well-maintained. Consult with a
                real estate professional to identify specific improvements that
                can maximize your property's value.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold">
                What are the costs involved in buying a home?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                The costs involved in buying a home typically include agent
                commissions, closing costs, home repairs or renovations to get
                increase marketability, staging expenses, document expenses, and
                potential capital gains taxes. It's important to budget for
                these expenses to ensure a smooth buying process.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold">
                How do I choose the right mortgage for my home purchase?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Choosing the right mortgage involves considering factors such as
                interest rates, loan terms, down payment requirements, closing
                costs, and your financial situation. It's advisable to shop
                around and compare mortgage options from different lenders to
                find the most suitable one for your needs. Additionally,
                consulting with a mortgage broker or financial advisor can
                provide valuable insights and guidance.{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
