import React, { useState } from "react";

const Enquiry = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enquiry submitted! We'll get back to you soon.");
  };

  return (
    <div className="page">
      <h1>Enquiry Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Enquiry;
