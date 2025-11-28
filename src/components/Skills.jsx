// src/components/Skills.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const SkillBar = ({ skill, percentage, delay }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 1.5, delay: delay * 0.1, ease: "easeOut" }
      });
    }
  }, [isInView, controls, percentage, delay]);

  return (
    <div className="skill mb-6" ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
          </div>
          <span className="font-semibold text-gray-700">{skill.name}</span>
        </div>
        <span className="text-gray-600 font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML5', percentage: 95, icon: './assets/html5.png' },
    { name: 'CSS3', percentage: 95, icon: './assets/css3.png' },
    { name: 'ReactJS', percentage: 85, icon: './assets/react.png' },
    { name: 'NodeJS', percentage: 85, icon: './assets/nodejs.png' },
    { name: 'JavaScript', percentage: 85, icon: './assets/javascript.png' },
    { name: 'SQL', percentage: 95, icon: './assets/sql.png' },
    { name: 'Java', percentage: 75, icon: './assets/java.png' },
    { name: 'C', percentage: 85, icon: './assets/c.png' },
    { name: 'C#', percentage: 95, icon: './assets/csharp.png' },
    { name: 'Python', percentage: 75, icon: './assets/python.png' },
    { name: 'Wordpress', percentage: 75, icon: './assets/word.png' },
  ];

  const softSkills = [
    'Adaptability', 'Time Management', 'Motivation', 'Decision Making', 'Positivity',
    'Leadership', 'Critical Thinking', 'Negotiation', 'Team Work', 'Creativity',
     "Problem-Solving", "Communication", "Attention to Detail", "Collaboration",
    "Conflict Resolution", "Multitasking", "Work Ethic", "Emotional Intelligence",
    "Responsibility", "Self-Learning",
  ];

  const tools = [
    { name: 'Visual Studio Code', icon: './assets/vscode.png' },
    { name: 'SSMS', icon: './assets/ssms.png' },
    { name: 'CodeBlocks', icon: './assets/code.png' },
    { name: 'Inteliji', icon: './assets/inteliji.png' },
    { name: 'Jira', icon: './assets/jira.png' },
    { name: 'PowerBI', icon: './assets/powerbi.png' },
    { name: 'GitHub', icon: './assets/git.png' },
    { name: 'Visual Studio', icon: './assets/visual.png' },
    { name: 'Jupyter', icon: './assets/jupyter.png' },
    { name: 'Figma', icon: './assets/figma.png' },
    { name: 'AndroidStudio', icon: './assets/android.png' },
    { name: 'PostMan', icon: './assets/post.png' },
    { name: 'MongoDB', icon: './assets/mongo.png' },
    { name: 'Canva', icon: './assets/canva.png' },
    { name: 'Adobe Photoshop', icon: './assets/photoshop.png' },
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section__text__p1 text-2xl font-bold">Get To Know More</p>
          <h1 className="title text-1xl text-blue-800 font-semibold">Skills</h1>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            variants={itemVariants}
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <SkillBar skill={skill} percentage={skill.percentage} delay={index} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            variants={itemVariants}
          >
            Soft Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[softSkills.slice(0, 10), softSkills.slice(10)].map((skillGroup, groupIndex) => (
              <motion.div
                key={groupIndex}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <ul className="space-y-4">
                  {skillGroup.map((skill, index) => (
                    <motion.li
                      key={skill}
                      className="flex items-center gap-3 text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (groupIndex * 5 + index) * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-green-500 text-lg">✔</span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            variants={itemVariants}
          >
            Tools
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center group cursor-pointer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                />
                <span className="text-sm font-medium text-gray-700">{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;