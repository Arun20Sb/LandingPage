import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    // Reset the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Have questions? We'd love to hear from you.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 space-y-6"
        >
          {/* Name */}
          <div>
            <label
              className="block text-sm font-medium text-gray-600 mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-sm font-medium text-gray-600 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              className="block text-sm font-medium text-gray-600 mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base font-medium py-3 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
