import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  // Replace these with your EmailJS values
  const SERVICE_ID = "service_65l59qe";
  const TEMPLATE_ID = "template_nztt1ej";
  const PUBLIC_KEY = "pLdKBZURBcnMSAp_q";

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required.";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters.";
        break;
      case "email":
        if (!value.trim()) return "Email is required.";
        if (!/^\S+@\S+\.\S+$/.test(value)) return "Email is invalid.";
        break;
      case "message":
        if (!value.trim()) return "Message is required.";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters.";
        break;
      default:
        break;
    }
    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) newErrors[name] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
      });
  };

  return (
    <section className="bg-indigo-50 text-indigo-900 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-1 text-indigo-700">
          I'd love to hear from you. Please fill out the form below.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6 border-blue-500"
        noValidate
      >
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.name && (
              <p className="text-red-600 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-600 text-xs mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.message
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.message && (
            <p className="text-red-600 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className={`w-full ${
            status === "sending"
              ? "bg-blue-400"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white font-semibold px-6 py-3 rounded transition`}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center mt-4">
            Thank you for your message. We'll reach out to you soon!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center mt-4">
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
