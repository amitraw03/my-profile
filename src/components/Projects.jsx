import React from 'react'
import Rstore from '../assets/Rstore.png'
import blogshow from '../assets/blogshow.png'
import netflix from '../assets/netflix.png'
import meTUBE from '../assets/meTUBE.png'
import logofy from '../assets/logofy.png'
import hungrymania from '../assets/hungrymania.png'

import Cards from './Cards'

const Projects = () => {
  const projectJson = [
    
    {
      title: 'R-Store',
      desc: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features Framer Motion animations and Stripe payment integration for seamless shopping experience.',
      image: Rstore,
      live: "https://shopraw.onrender.com/",
      github: "https://github.com/amitraw03/shopRAW"
    },
    {
      title: 'BlogShow',
      desc: 'A dynamic blog creation and reading website powered by EJS templating and Node.js backend. Features user authentication, markdown support, and responsive design.',
      image: blogshow,
      live: "https://blogshow-qmhz.onrender.com/",
      github: "https://github.com/amitraw03/BlogShow"
    },
    {
      title: 'NetflixClone',
      desc: 'A Netflix-inspired streaming platform built with React and Redux. Integrates Firebase authentication and GeminiAI for personalized movie recommendations.',
      image: netflix,
      live: "https://cinema-hub-flax.vercel.app/",
      github: "https://github.com/amitraw03/cinemaHUB"
    },
    {
      title: 'HungryMania',
      desc: 'A comprehensive food restaurant website built with React and Redux. Features nearby restaurant discovery, online ordering, and responsive design for seamless dining experience.',
      image: hungrymania,
      live: "https://hungry-mania.vercel.app/",
      github: "https://github.com/amitraw03/HungryMania"
    },
    {
      title: 'MeTUBE',
      desc: 'A feature-rich YouTube clone implementing core functionalities. Built with modern web technologies focusing on user experience and performance.',
      image: meTUBE,
      live: "https://me-tube-brown.vercel.app/",
      github: "https://github.com/amitraw03/MeTUBE"
    },
    {
      title: 'Logofy',
      desc: 'A modern logo creation platform built with React and shadcn/ui components. Features intuitive design tools and export capabilities.',
      image: logofy,
      live: "https://logo-fy.vercel.app/",
      github: "https://github.com/amitraw03/LogoCREATOR"
    },
  ];

  return (
    <section id='projects' className='relative py-20 bg-gray-900'>
      <div className='absolute inset-0 bg-gradient-to-b from-gray-900/0 via-indigo-900/10 to-gray-900/0' />
      <div className='relative max-w-7xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-indigo-500 font-medium tracking-wide uppercase'>Portfolio</h2>
          <h3 className='mt-2 text-4xl font-bold text-white'>Featured Projects</h3>
          <p className='mt-4 text-xl text-gray-400 max-w-2xl mx-auto'>
            Showcasing my journey through code and creativity
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
          {projectJson.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;