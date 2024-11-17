import React from 'react';
import MernStack from '../assets/mernstack.png';
import Html from '../assets/Html.png';
import Css from '../assets/CSS.png';
import Javascript from '../assets/JS.png';
import ReactLogo from '../assets/React.png';
import ReduxLogo from '../assets/Redux.png';
import Tailwind from '../assets/Tailwind Css.png';
import Bootstrap from '../assets/Bootstrap.png';
import NodeLogo from '../assets/NodeLogo.png';
import Mongodb from '../assets/mongodb.svg';
import Express from '../assets/Express.png';
import NextJs from '../assets/NextJs.png';

const SkillCard = ({ icon, name }) => (
  <div className="border border-indigo-500/30 bg-white/5 backdrop-blur-sm flex items-center gap-2 px-4 py-2 rounded-lg hover:border-indigo-500 transition-colors group">
    <img src={icon} alt={name} className="w-8 h-8 object-contain" />
    <span className="font-medium text-white/80 group-hover:text-white">{name}</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative min-h-screen py-20 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-indigo-500/10"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-indigo-500 font-medium tracking-wide uppercase">About Me</h2>
          <h3 className="mt-2 text-4xl md:text-5xl font-bold text-white">
            Hi, I'm Amit Rawat
          </h3>
          <p className="mt-4 text-xl text-white/60 max-w-2xl mx-auto">
            A passionate Full-Stack Developer specializing in crafting elegant web solutions with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Journey Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              As a Full-Stack Developer, I've dedicated myself to mastering the MERN stack and modern web technologies. I specialize in building scalable web applications that combine powerful backend architectures with intuitive frontend designs. My expertise spans across responsive web design, RESTful APIs, and database management.
            </p>
            <img 
              src={MernStack} 
              alt="MERN Stack" 
              className="w-52 rounded-lg border border-indigo-500/30 p-2 bg-white/5" 
            />
          </div>

          {/* Skills Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <SkillCard icon={Html} name="HTML" />
              <SkillCard icon={Css} name="CSS" />
              <SkillCard icon={Javascript} name="JavaScript" />
              <SkillCard icon={ReactLogo} name="React" />
              <SkillCard icon={ReduxLogo} name="Redux" />
              <SkillCard icon={Tailwind} name="Tailwind" />
              <SkillCard icon={Bootstrap} name="Bootstrap" />
              <SkillCard icon={NodeLogo} name="Node.js" />
              <SkillCard icon={Mongodb} name="MongoDB" />
              <SkillCard icon={Express} name="Express" />
              <SkillCard icon={NextJs} name="Next.js" />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Professional Focus</h3>
          <p className="text-white/70 leading-relaxed">
            My professional journey is driven by a commitment to continuous learning and innovation in web development. I focus on creating efficient, scalable, and user-centric applications. Whether it's developing responsive frontends with React or architecting robust backend solutions with Node.js, I bring dedication and technical expertise to every project.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
};

export default About;