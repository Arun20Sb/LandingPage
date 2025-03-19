import React from "react";

const pricingPlans = [
  {
    title: "Basic",
    price: "$19/mo",
    features: ["1 User", "Basic Support", "All Core Features"],
    popular: false,
  },
  {
    title: "Pro",
    price: "$49/mo",
    features: ["5 Users", "Priority Support", "Advanced Features"],
    popular: true,
  },
  {
    title: "Premium",
    price: "$99/mo",
    features: ["Unlimited Users", "24/7 Support", "All Features + Extras"],
    popular: false,
  },
];

const PricingTable = () => {
  return (
    <section className="py-16 bg-white" id="pricing">
      <div className="container mx-auto px-10 max-md:px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-lg shadow-md p-8 transition-transform duration-300 hover:-translate-y-2 ${
                plan.popular ? "border-blue-600 bg-blue-50" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="mb-4">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <p className="text-4xl font-extrabold text-blue-600 mb-6">
                {plan.price}
              </p>

              <ul className="mb-6 space-y-3 text-gray-600">
                {plan.features.map((feature, idx) => (
                  <li key={idx} >
                    ✅ {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition duration-300 ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-600 hover:bg-gray-700"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
