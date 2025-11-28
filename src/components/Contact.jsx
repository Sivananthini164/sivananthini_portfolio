// src/components/Contact.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showModal, setShowModal] = useState(false);
  const hideTimerRef = useRef(null);

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const showConfirmation = () => {
    // Clear any existing timer
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }

    setShowModal(true);
    // auto-hide after 3.5s
    hideTimerRef.current = setTimeout(() => {
      setShowModal(false);
      hideTimerRef.current = null;
    }, 3500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Minimal validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      // Optionally show an error modal or inline validation. For now, just focus first empty.
      const firstEmpty = ['name', 'email', 'message'].find((k) => !formData[k].trim());
      const el = document.querySelector(`[name="${firstEmpty}"]`);
      if (el) el.focus();
      return;
    }

    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });

    // Show the modal confirmation
    showConfirmation();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  const contactInfo = [
    {
      icon: './assets/email.png',
      label: 'Email',
      value: 'sivananthini611@gmail.com',
      href: 'mailto:sivananthini611@gmail.com'
    },
    {
      icon: './assets/linkedin.png',
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/sivananthini-ravichandran-4229742a2/'
    },
    {
      icon: './assets/phone.png',
      label: 'Phone',
      value: '+94 77 203 2122',
      href: 'tel:+94772032122'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { y: 18, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      {/* Confirmation Modal (window) */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden={!showModal}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Card */}
            <motion.div
              className="relative z-10 w-11/12 max-w-md mx-auto rounded-2xl bg-white shadow-2xl border border-slate-100 p-6"
              initial={{ y: 30, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.96, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              role="dialog"
              aria-modal="true"
              aria-label="Message sent confirmation"
            >
              <div className="flex flex-col items-center text-center gap-4">
                {/* Decorative circle with check */}
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg"
                  initial={{ scale: 0.6 }}
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 0.9, repeat: Infinity, repeatType: 'loop' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>

                <motion.h3
                  className="text-xl font-semibold text-slate-800"
                  initial={{ y: 6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  Your message was sent successfully!
                </motion.h3>

                <motion.p
                  className="text-sm text-slate-600"
                  initial={{ y: 6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { delay: 0.06 } }}
                >
                  Thank you — I will get back to you soon.
                </motion.p>

                <div className="mt-3 flex gap-3">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg font-medium border border-emerald-100 hover:bg-emerald-100 transition"
                  >
                    Close
                  </button>

                  <a
                    href="mailto:sivananthini611@gmail.com"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                  >
                    Contact Me
                  </a>
                </div>
              </div>

              {/* subtle confetti lines (pure CSS shapes) */}
              <div className="pointer-events-none">
                <motion.span
                  className="absolute top-2 left-4 w-0.5 h-6 bg-yellow-300 rounded"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 }}
                />
                <motion.span
                  className="absolute right-6 top-8 w-0.5 h-4 bg-pink-300 rounded"
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.14 }}
                />
                <motion.span
                  className="absolute left-10 bottom-6 w-0.5 h-5 bg-sky-300 rounded"
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.18 }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section__text__p1 text-2xl font-bold">Get in Touch</p>
          <h1 className="title text-1xl text-blue-800 font-semibold">Contact Me</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Let's Connect !!!</h2>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 8 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={info.icon} alt={info.label} className="w-6 h-6" />
                  </motion.div>

                  <div>
                    <h3 className="font-semibold text-gray-800">{info.label}</h3>
                    <p className="text-gray-600 group-hover:text-blue-600 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div className="flex gap-6 mt-8" variants={itemVariants}>
              {[
                { src: './assets/linkedin.png', href: 'https://www.linkedin.com/in/sivananthini-ravichandran-4229742a2/' },
                { src: './assets/github.png', href: 'https://github.com/Sivananthini164/' }
              ].map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-blue-100 transition-colors"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={social.src} alt="Social" className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Send Me a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Your message..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 shadow-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
