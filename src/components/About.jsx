// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section__text__p1 text-2xl font-bold">Get To Know More</p>
          <h1 className="title text-1xl text-blue-800 font-semibold">About Me</h1>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row items-center gap-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Content */}
          <motion.div
            className="flex-1"
            variants={containerVariants}
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              variants={itemVariants}
            >
              <motion.div
                className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
                variants={itemVariants}
              >
                <img
                  src="./assets/result.png"
                  alt="Experience"
                  className="w-12 h-12 mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">CP/N/Cambridge National College</h3>
                <p className="text-gray-600">
                  Result: A B C <br />
                  District Rank: 4 <br />
                  Island Rank: 123
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
                variants={itemVariants}
              >
                <img
                  src="./assets/education.avif"
                  alt="Education"
                  className="w-12 h-12 mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">University of Sri Jayewardenepura</h3>
                <p className="text-gray-600">
                  BICT.Specl in Software Technology <br />
                  CGPA: 3.58
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg"
              variants={itemVariants}
            >
              <p className="text-gray-700 leading-relaxed">
                As a dedicated ICT student with a strong passion for MERN stack development,
                I bring solid technical expertise in building dynamic, user-friendly, and scalable full-stack web applications using MongoDB, Express.js, React, and Node.js.
                I am committed to delivering high-quality performance, clean architecture, and seamless functionality across the entire stack.
                My hands-on experience with front-end development in React, back-end API creation in Node.js/Express, and database management with MongoDB enables me to design, develop, and optimize modern web applications with efficiency and precision.
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <img
                  src="./assets/about.jpg"
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -inset-4 border-2 border-purple-800 rounded-2xl -z-10"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;