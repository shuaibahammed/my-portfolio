"use client";

import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-gray-300 text-lg">
            I&apos;m always interested in hearing about new projects and opportunities.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                <span className="text-blue-400">✉</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-400">shuaibek@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                <span className="text-purple-400">📱</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-gray-400">+91 7736710016</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center border border-pink-500/30">
                <span className="text-pink-400">📍</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-gray-400">Malappuram, Kerala, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-600/30">
                <span className="text-blue-300">in</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">LinkedIn</h4>
                <a href="https://linkedin.com/in/shuaibek" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  linkedin.com/in/shuaibek
                </a>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
            required
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
