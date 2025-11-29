import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const timerRef = useRef(null);

  const roles = [
    'Software Enthusiast',
    'IT Lecturer',
    'Software Developer',
    'Web Developer',
    'Software Engineer',
    'IT Coordinator'
  ];

  // Typing Effect ---------------------
  useEffect(() => {
    const currentRole = roles[loopNum % roles.length];
    const typingSpeed = isDeleting ? 50 : 100;

    timerRef.current = setTimeout(() => {
      if (!isDeleting) {
        const nextIndex = Math.min(index + 1, currentRole.length);
        setIndex(nextIndex);
        setDisplayText(currentRole.slice(0, nextIndex));

        if (nextIndex === currentRole.length) {
          clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        const nextIndex = Math.max(index - 1, 0);
        setIndex(nextIndex);
        setDisplayText(currentRole.slice(0, nextIndex));

        if (nextIndex === 0) {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timerRef.current);
  }, [index, isDeleting, loopNum, roles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section
      id="profile"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/*  Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-20"
        src="/assets/background.mp4" 
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional: Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      <div className="section-container relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content ---------------------- */}
          <motion.div className="flex-1 text-center md:text-left" variants={itemVariants}>
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-4 mb-6"
              variants={itemVariants}
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mb-2 md:mb-0 whitespace-nowrap">
                Hello, I'm{' '}
                <span className="font-bold bg-gradient-to-r from-blue-300 via-pink-300 to-gray-200 bg-clip-text text-transparent 
                  text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Sivananthini Ravichandran
                </span>
              </h1>
            </motion.div>

            {/* Typing Effect */}
            <motion.div
              className="min-h-[80px] flex items-center justify-center md:justify-start mb-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                I'm a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-200">
                  {displayText}
                </span>
                <span className="ml-1 animate-pulse text-blue-300">|</span>
              </h2>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="btn-container flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.button
                className="relative overflow-hidden bg-black text-white text-lg px-8 py-4 rounded-full border-2 bg-origin-border shadow-sm"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('/assets/Sivananthini_CV.pdf', '_blank')}
              >
                <span className="relative z-10 bg-black rounded-full px-6 py-2">Download CV</span>
              </motion.button>

              <motion.button
                className="relative overflow-hidden bg-black text-white text-lg px-8 py-4 rounded-full border-2 border-transparent bg-origin-border shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <span className="relative z-10 bg-black rounded-full px-6 py-2">Contact Info</span>
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div className="flex justify-center md:justify-start gap-6" variants={itemVariants}>
              {[
                {
                  icon: FaLinkedin,
                  alt: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/sivananthini-ravichandran-4229742a2/',
                  color: 'text-blue-900',
                  bgColor: 'bg-blue-100',
                  hoverColor: 'hover:bg-blue-600'
                },
                {
                  icon: FaGithub,
                  alt: 'GitHub',
                  href: 'https://github.com/Sivananthini164/',
                  color: 'text-gray-900',
                  bgColor: 'bg-gray-100',
                  hoverColor: 'hover:bg-blue-700'
                }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.div
                    key={social.alt}
                    className={`p-3 rounded-full ${social.bgColor} ${social.hoverColor} ${social.color} cursor-pointer shadow-lg transition-colors`}
                    onClick={() => window.open(social.href, '_blank')}
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                      boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Profile Image ---------------------- */}
          <motion.div className="flex-1 flex justify-center" variants={itemVariants}>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-4xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img src="/assets/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
              </motion.div>

              {/* Rotating ring */}
              <motion.div
                className="absolute -inset-4 border-2 border-blue-300 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
