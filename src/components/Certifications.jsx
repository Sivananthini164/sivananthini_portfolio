// src/components/Certifications.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      name: 'Introduction to Backend Development',
      date: 'Dec 2024',
      organization: 'Coursera',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/I9QGT71UMDQZ'
    },
    {
      name: 'Data Analytics 30 Days Master Class',
      date: 'Jul 2024',
      organization: 'NoviTech R&D Pvt Ltd',
      credentialUrl: './assets/data.jpg'
    },
    {
      name: 'Java Programming',
      date: 'Jun 2024',
      organization: 'Great Learning Academy',
      credentialUrl: 'https://www.mygreatlearning.com/certificate/DEJPGAIC'
    },
    {
      name: 'Internet of Things 30 Days Master Class',
      date: 'Feb 2024',
      organization: 'NoviTech R&D Pvt Ltd',
      credentialUrl: './assets/iot.jpg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
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
    <section id="certifications" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="title text-2xl font-bold">Certifications</h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -5
              }}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {cert.name}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
                
                <div className="mb-6 flex-grow">
                  <p className="text-gray-600">
                    <span className="font-semibold">Issued By:</span> {cert.organization}
                  </p>
                </div>

                <motion.button
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors group-hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open(cert.credentialUrl, '_blank')}
                >
                  Show Credential
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;