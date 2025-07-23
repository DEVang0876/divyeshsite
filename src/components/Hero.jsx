import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaXTwitter, FaInstagram, FaDiscord, FaDownload } from 'react-icons/fa6';
import dhairya from '../assets/dhairya-portrait.png';
//import FeedbackModal from './FeedbackModal';
//import FeedbackList from './FeedbackList';

const Hero = () => {
  //const [showFeedback, setShowFeedback] = useState(false);

  // useEffect(() => {
  //   const hasSubmittedFeedback = localStorage.getItem('hasSubmittedFeedback');
  //   if (!hasSubmittedFeedback) {
  //     const timer = setTimeout(() => {
  //       setShowFeedback(true);
  //     }, 10000); // Show after 10 seconds
  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/DEVang0876' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/devang0876/' },
    { icon: FaInstagram, href: 'https://www.instagram.com/__deviiinee_/' },
    { icon: FaXTwitter, href: 'https://x.com/DevangDhandhuk1' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 md:space-y-8 order-2 md:order-1"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.span className="text-[#87CEEB] text-sm uppercase tracking-wider font-fira">
                Electrical Engineer
              </motion.span>
              <motion.h1 className="text-3xl md:text-6xl font-bold font-fira">
                Hello I'm{' '}
                <span className="text-sky-500">Divyesh</span>
              </motion.h1>
              <motion.p className="text-base md:text-lg text-gray-300 max-w-lg font-fira">
                I excel at designing intelligent electrical systems that fuse technical precision with a passion for innovation in sustainable mobility and electric vehicles.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = '/Resume.pdf';
                }}
                className="px-4 md:px-6 py-2 md:py-3 border-2 border-[#87CEEB] text-[#87CEEB] rounded-md hover:bg-[#87CEEB] hover:text-[#121212] transition-colors duration-300 flex items-center space-x-2 font-fira text-sm md:text-base"
              >
                <FaDownload />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: '#87CEEB' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white flex items-center justify-center hover:border-[#87CEEB] transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div className="relative order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative w-[20rem] md:w-[26rem] h-[20rem] md:h-[26rem] mx-auto">
              {/* Neon glow effect */}
              <div className="absolute inset-0 bg-sky-500/20 blur-xl" />

              {/* Animated video background */}
              <video
                className="absolute inset-0 w-full h-full object-cover rounded-full z-0"
                src={require('../assets/background.mp4')}
                autoPlay
                loop
                muted
                playsInline
                style={{ filter: 'blur(8px) brightness(0.7)' }}
              />

              {/* Lightning SVG animation */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 420 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Animated thunderstorm lightning bolts */}
                {[...Array(12)].map((_, i) => {
                  // Position bolts around the circle
                  const angle = (i / 12) * 2 * Math.PI;
                  const startX = 210 + 110 * Math.cos(angle);
                  const startY = 210 + 110 * Math.sin(angle);

                  // Create a zigzag/forked pattern
                  const midX1 = startX + Math.random() * 30 - 15;
                  const midY1 = startY + Math.random() * 30 - 15;
                  const midX2 = midX1 + Math.random() * 30 - 15;
                  const midY2 = midY1 + Math.random() * 30 - 15;
                  const endX = midX2 + Math.random() * 40 - 20;
                  const endY = midY2 + Math.random() * 40 - 20;

                  return (
                    <motion.polyline
                      key={i}
                      points={`${startX},${startY} ${midX1},${midY1} ${midX2},${midY2} ${endX},${endY}`}
                      stroke={i % 2 === 0 ? "#FFD700" : "#87CEEB"}
                      strokeWidth={3 + Math.random()}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        pathLength: [0, 1, 0],
                        filter: [
                          'drop-shadow(0 0 12px #FFD700)',
                          'drop-shadow(0 0 24px #87CEEB)',
                          'drop-shadow(0 0 12px #FFD700)'
                        ]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.9 + Math.random(),
                        delay: Math.random() * 1.2,
                        ease: 'easeInOut'
                      }}
                    />
                  );
                })}
              </svg>

              {/* Image container */}
              <div className="absolute inset-16 md:inset-20 rounded-full overflow-hidden border-2 border-sky-500/30 flex items-center justify-center z-20">
                <img
                  src={dhairya}
                  alt="Divyesh"
                  className="w-[6rem] md:w-[8rem] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Feedback Components */}
      {/* <FeedbackModal
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
      /> */}
      {/* <FeedbackList onOpenFeedback={() => setShowFeedback(true)} /> */}
    </section>
  );
};

export default Hero;
