'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMsg(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatusMsg('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatusMsg('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);
    try {
      console.log('Submitting contact form:', form);
      setStatusMsg('Thank you! Your message has been sent.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatusMsg('Sorry, something went wrong. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#0F172A] pt-20 pb-16">
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-white via-sky-50 to-cyan-50 py-20 px-6">
          <div className="absolute inset-0 bg-[url('/assets/contact-pattern.svg')] bg-center bg-cover opacity-5 pointer-events-none"></div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto text-center z-10"
          >
            <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-sky-800">Let’s Connect</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aazhimin is enabling traceable, climate-ready ocean commerce. We’d love to hear from you.
            </p>
          </motion.div>
        </section>

        {/* Contact Info + Form */}
        <section className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cyan-50 p-8 rounded-3xl shadow-xl space-y-8"
          >
            <h2 className="text-2xl font-semibold text-sky-800">Aazhimin by Ginnovation</h2>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-cyan-600 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Corporate Office</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  193/1a2, South Soorankudy, Kanyakumari, Agastheeswaram, Tamil Nadu, India, 629501.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-cyan-600" />
              <a href="mailto:info@aazhimin.com" className="text-gray-700 hover:text-sky-800 transition">
                info@aazhimin.com
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-cyan-600" />
              <a href="tel:+916369336414" className="text-gray-700 hover:text-sky-800 transition">
                +91 6369336414
              </a>
            </div>

            <div className="pt-4 border-t border-gray-300">
              <p className="text-gray-500 text-sm">
                For urgent support, add <strong>“URGENT”</strong> in your message subject.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-xl space-y-6 border border-cyan-100"
          >
            <h2 className="text-2xl font-semibold text-sky-800">Message Us</h2>

            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full bg-sky-50 border border-gray-300 rounded-xl px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full bg-sky-50 border border-gray-300 rounded-xl px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Your message or inquiry"
                className="w-full bg-sky-50 border border-gray-300 rounded-xl px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {statusMsg && (
              <p className={`text-sm ${statusMsg.startsWith('Thank') ? 'text-green-600' : 'text-red-500'}`}>
                {statusMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center bg-gradient-to-r from-sky-600 to-cyan-500 hover:opacity-90 text-white px-6 py-3 rounded-full shadow-lg transition disabled:opacity-50"
            >
              {submitting ? 'Sending...' : 'Send Message'}
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </motion.form>
        </section>
      </main>

      <Footer />
    </>
  );
}
