// src/components/Contact.js
import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Message sent! Thank you for contacting us.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;