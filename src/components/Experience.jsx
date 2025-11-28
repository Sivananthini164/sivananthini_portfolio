// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "IT Lecturer",
    company: "IVTC Campus",
    duration: "Apr 2025 - Present",
    description:
      "Serving as a part-time lecturer, delivering semester subjects for the BIT degree program, BSc in Artificial Intelligence, BSc in Cyber Security, such as Web Design and Software Development, Programming Languages, etc..",
    logo: "/assets/ivtc.jpeg",
  },
  {
    role: "Academic Coordinator, Web Developer & Lecturer",
    company: "TT Metro Campus",
    duration: "May 2025 - Nov 2025",
    description:
      "I oversee the smooth functioning of academic operations while delivering quality lectures in the field of Information Technology.",
    document: "/assets/service_letter_at_TTMC.pdf",
    logo: "/assets/ttmetro.jpeg",
  },
  {
    role: "Software Engineer Intern",
    company: "Gamage Recruiters Pvt Ltd",
    duration: "Apr 2025 - Oct 2025",
    description:
      "Developed responsive websites, optimized performance, and delivered full-stack MERN applications for global clients.",
    document: "/assets/service_letter_at_Gamage.pdf",
    logo: "/assets/gamage.jpeg",
  },
  {
    role: "District Coordinator",
    company: "T-Field Youth Development Centre",
    duration: "2017 - present",
    description:
      "Helping upcountry students to overcome their challenges.",
    logo: "/assets/tfield.jpeg",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section__text__p1 text-2xl font-bold">My Journey</p>
          <h1 className="title text-1xl text-blue-800 font-semibold">
            Experience
          </h1>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-900 h-full z-0"></div>

          {/* Experience Cards */}
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0; // zig-zag toggle
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center justify-between mb-20 ${
                  !isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Experience Card */}
                <div className="w-full md:w-[45%] bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                    {exp.role}
                  </h3>
                  <div className="flex justify-between items-center p-2 mb-3">
                    <p className="text-blue-900 font-semibold">{exp.company}</p>
                    <p className="text-sm text-blue-900 font-semibold">{exp.duration}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">{exp.description}</p>

                  {exp.document && (
                    <button
                      onClick={() => window.open(exp.document, "_blank")}
                      className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      View / Download
                    </button>
                  )}
                </div>

                {/* Organization Logo */}
                <motion.div
                  className={`flex w-full md:w-[45%] justify-center mt-6 md:mt-0 z-10 ${
                    !isLeft ? "md:ml-8" : "md:mr-8"
                  }`}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-40 h-40 md:w-64 md:h-64 rounded-3xl object-contain border-4 border-white shadow-xl"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
