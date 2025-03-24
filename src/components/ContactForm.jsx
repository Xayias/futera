import React, { useState } from 'react'

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: ''});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form logic here (API or local logic)
        console.log(form);
        alert("message sent!");
    };

    return (
        <div className="bg-gray-300 py-16 px-4 md:px-0">
            <form onSubmit={handleSubmit} className="max-w-[700px] mx-auto p-8 bg-white shadow-xl rounded-lg border-2 border-[#1bb8d7]">
                <h2 className="text-3xl font-bold text-[#1bb8d7] mb-6 text-center">Send Us a Message</h2>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input 
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1bb8d7]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input 
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1bb8d7]"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Subject</label>
                    <input 
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1bb8d7]"
                    />
                </div>

                <div className="mt-4">
                    <label></label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1bb8d7]"
                    ></textarea>
                </div>

                <button type="submit" className="mt-6 bg-[#1bb8d7] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#169db7] transition">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm