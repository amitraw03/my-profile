import React from 'react'
import { motion } from 'framer-motion'
import { Github, Facebook, Twitter, Instagram, Linkedin, Download, ExternalLink } from 'lucide-react'
import hero from '../assets/Hero.png'
import reactLogo from '../assets/React.png'
import reduxLogo from '../assets/Redux.png'
import tailwind from '../assets/Tailwind Css.png'
import Particle from './Particle' // Assuming Particle component is in the same directory

const Hero = () => {
  const socialLinks = [
    { icon: Twitter, color: '#1DA1F2', link: 'https://x.com/rawatAmit30' },
    { icon: Linkedin, color: '#0A66C2', link: 'https://www.linkedin.com/in/amit-rawat-477866231/' },
    { icon: Github, color: '#333', link: 'https://github.com/amitraw03' },
  ]

  const techStack = [
    { image: reactLogo, position: 'top-36 left-0', delay: 0.2 },
    { image: reduxLogo, position: 'top-0 right-5', delay: 0.4 },
    { image: tailwind, position: 'bottom-36 right-0', delay: 0.6 },
  ]

  return (
    <section className='relative min-h-[90vh] overflow-hidden bg-transparent'>
      <Particle />
      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-6 px-6 lg:px-0 lg:mt-0 mt-10'
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug text-black'>
                Hi There, <br />
                I'm Amit <motion.span 
                  className='text-red-500'
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >Rawat</motion.span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='md:text-2xl text-xl mb-4 text-black font-serif'
            >
              Web Developer
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='mb-4 text-gray-900 max-w-xl'
            >
              I'm a passionate web developer with expertise in React, Next.js, and modern web technologies. 
              I love creating beautiful and functional websites that solve real world problems.
            </motion.p>
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.8 }}
              className='bg-red-500 hover:bg-red-600 text-white px-6 py-3 w-max rounded-full flex items-center gap-2 shadow-lg shadow-red-500/30'
            >
              <Download size={20} />
              <a 
                href="https://drive.google.com/uc?export=download&id=1m_fyTL7Bn_B94DiBVHfvVTErnqh0EkHm" 
                download 
                target='_blank'
                className='flex items-center gap-2'
              >
                Download CV <ExternalLink size={16} />
              </a>
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='md:w-1/2 relative flex justify-center items-end'
          >
            <motion.img 
              src={hero} 
              alt="Hero"
              className='lg:h-[90vh] h-96 relative z-10'
              initial={{ y: 20 }}
              animate={{ y: [0, -20, 0] }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {techStack.map((tech, index) => (
              <motion.img
                key={index}
                src={tech.image}
                alt=""
                className={`absolute w-10 rounded-full ${tech.position} md:hidden`}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: tech.delay,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className='fixed top-1/3 right-10 hidden md:flex flex-col gap-6'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            className='bg-white-800/50 p-3 rounded-full backdrop-blur-sm shadow-md
                     hover:shadow-lg transition-all duration-300 group'
            style={{
              boxShadow: `0 0 20px ${social.color}20`
            }}
          >
            <social.icon 
              size={24} 
              className='text-gray-400 group-hover:text-white transition-colors'
              style={{ 
                color: social.color
              }}
            />
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}

export default Hero
