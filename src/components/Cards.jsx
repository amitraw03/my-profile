import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Cards = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/50 backdrop-blur-sm border border-indigo-500/30 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 w-full max-w-[400px]"
    >
      <div className="relative group">
        <img src={item.image} alt={item.title} className="w-full h-[200px] object-cover" />
        <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-indigo-400 mb-2">{item.title}</h3>
        <p className="text-gray-300 text-sm mb-4 min-h-[80px]">{item.desc}</p>
        <div className="flex gap-4">
          <a 
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors duration-300"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a 
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;