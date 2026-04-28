import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { contactInfo } from "../utils/contact";
import { socialLinks } from "../utils/hero";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex flex-col justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-6 py-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-yellow-500 dark:text-yellow-400 font-semibold tracking-widest uppercase text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Contact{" "}
            <span className="text-yellow-500 dark:text-yellow-400">Me</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg">
            Have a project in mind or just want to say hi? My inbox is always
            open. I'll get back to you as soon as possible!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Contact Info Cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 bg-white dark:bg-gray-800 px-5 py-4 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-yellow-100 dark:bg-yellow-500/10 text-yellow-500 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-gray-800 dark:text-white font-semibold">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-500 dark:text-gray-400 font-medium mb-4 uppercase tracking-widest text-sm">
                Find me on
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.15, y: -4 }}
                    className="p-3 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 shadow-sm hover:shadow-md transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-center gap-3 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 px-5 py-4 rounded-2xl"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <p className="text-green-700 dark:text-green-400 font-semibold text-sm">
                Currently available for freelance & full-time roles
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center h-full py-16 text-center gap-4"
              >
                <div className="text-6xl">🎉</div>
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                  Message Sent!
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Thanks for reaching out. I'll get back to you very soon!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-white dark:text-gray-900 font-bold rounded-full transition-all duration-300"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-yellow-400 dark:focus:border-yellow-400 transition-colors duration-200 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 block">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-yellow-400 dark:focus:border-yellow-400 transition-colors duration-200 text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-yellow-400 dark:focus:border-yellow-400 transition-colors duration-200 text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-yellow-400 dark:focus:border-yellow-400 transition-colors duration-200 text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-yellow-500 hover:bg-yellow-400 disabled:opacity-70 text-white dark:text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
