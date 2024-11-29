import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "emailjs-com"; // Import EmailJS

const Contact = () => {
  // State to manage form input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(null); // State to manage success or error message

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (name && email && message) {
      // Send email using EmailJS
      emailjs
        .send(
          "service_0od0v36", // Your EmailJS service ID
          "template_e2h1om8", // Your EmailJS template ID
          {
            from_name: name,
            from_email: email, // User's email as sender
            message: message,
            to_email: "heshanchamika100@gmail.com", // Receiver's email (your email)
          },
          "KjD2Nu5tspr9mZQx9" // Your EmailJS user ID
        )
        .then(
          (response) => {
            console.log("Message sent successfully", response);
            setIsSent(true); // Show success message
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.error("Error sending message", error);
            setIsSent(false); // Handle error
          }
        );
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section id="contact" className="py-16 mb-10 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">Get in touch</h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">Let's work <br /> together</h2>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            onSubmit={handleSubmit} // Handle form submission
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your Name"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your Email"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
            ></textarea>

            {/* Success or Error Message */}
            {isSent === true && <p className="text-green-500 mb-4">Message sent successfully!</p>}
            {isSent === false && <p className="text-red-500 mb-4">There was an error sending your message. Please try again.</p>}

            <button type="submit" className="btn btn-lg">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
