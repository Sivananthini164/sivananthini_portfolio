// src/components/Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Veritas LMS - Learning Management System',
      description: 'E-learning and management platform',
      image: './assets/lms.png',
      github: 'https://github.com/Prathviharan/Veritas-Campus-Learning-Management-System.git',
      demo: 'https://veritas-campus-lms-ywm1.vercel.app/',
      tags: ['web', 'fullstack']
    },
    {
      id: 2,
      title: 'AllFresh - Laundry Services Website',
      description: 'A comprehensive laundry service management platform',
      image: './assets/laundry.png',
      github: 'https://github.com/Sivananthini164/Laundry',
      demo: 'https://laundry-pearl.vercel.app/',
      tags: ['web', 'frontend']
    },
    {
      id: 3,
      title: 'DonateFood - Food Wasting Management',
      description: 'Platform to reduce food waste through donations',
      image: './assets/food.png',
      github: 'https://github.com/Sivananthini164/DonateFood',
      demo: 'https://sivananthini164.github.io/DonateFood/',
      tags: ['web', 'frontend']
    },
    {
      id: 4,
      title: 'CreateCV - Building CV/Resume',
      description: 'Interactive CV/resume builder application',
      image: './assets/cv.png',
      github: 'https://github.com/Sivananthini164/CreateCV',
      demo: 'https://sivananthini164.github.io/CreateCV/',
      tags: ['web', 'frontend']
    },
    {
      id: 5,
      title: 'Reserve Master - Lecture Hall & Lab Management System',
      description: 'System for managing educational facility reservations',
      image: './assets/reserve.jpg',
      github: 'https://github.com/Sivananthini164/Reserve_Master',
      demo: 'https://sivananthini164.github.io/Reserve_Master/',
      tags: ['web', 'fullstack']
    },
    {
      id: 6,
      title: 'Automated Open & Closed Door using Arduino',
      description: 'IoT-based automated door control system',
      image: './assets/door.jpg',
      github: 'https://github.com/Sivananthini164/Automated_Door',
      demo: './assets/video.mp4',
      tags: ['iot', 'hardware']
    },
    {
      id: 7,
      title: 'An Interactive Dictionary Application',
      description: 'Feature-rich dictionary with interactive elements',
      image: './assets/dictionary.png',
      github: 'https://github.com/Sivananthini164/Dictionary',
      demo: 'https://sivananthini164.github.io/Dictionary/',
      tags: ['web', 'frontend']
    },
    {
      id: 8,
      title: 'A Cocktail Application',
      description: 'Cocktail recipe and discovery platform',
      image: './assets/cocktail.png',
      github: 'https://github.com/Sivananthini164/Cocktail-App',
      demo: 'https://sivananthini164.github.io/Cocktail-App/',
      tags: ['web', 'frontend']
    },
    {
      id: 9,
      title: 'User-Experienced Snake Game',
      description: 'Modern take on the classic snake game',
      image: './assets/snake.png',
      github: 'https://github.com/Sivananthini164/snake-Game',
      demo: 'https://sivananthini164.github.io/snake-Game/',
      tags: ['game', 'web']
    },
    {
      id: 10,
      title: 'Virtual Piano Keyboard',
      description: 'Interactive virtual piano for web',
      image: './assets/piano.png',
      github: 'https://github.com/Sivananthini164/Piano_keyboard',
      demo: 'https://sivananthini164.github.io/Piano_keyboard/',
      tags: ['web', 'music']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const filterButtons = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'iot', label: 'IoT' },
    { key: 'game', label: 'Games' }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section__text__p1 text-2xl font-bold">Browse My Recent</p>
          <h1 className="title text-1xl text-blue-800 font-semibold">Projects</h1>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filterButtons.map((button) => (
            <motion.button
              key={button.key}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === button.key
                  ? 'bg-blue-900 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
              onClick={() => setFilter(button.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {button.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={filter}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <motion.div
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </motion.div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      GitHub
                    </motion.button>
                    <motion.button
                      className="flex-1 border-2 border-gray-800 text-gray-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      Live Demo
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">No projects found for the selected filter.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;