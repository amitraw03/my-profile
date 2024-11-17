import React from 'react';
import { 
  Heart, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Code,
  Coffee
} from 'lucide-react';
import Lottie from 'lottie-react';

const FooterLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
    aria-label={label}
  >
    <Icon className="h-4 w-4 text-white/60 hover:text-white transition-colors" />
  </a>
);

const Footer = () => {
  return (
    <footer className="relative py-12 mt-20">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-indigo-500/5"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `footerFloat ${Math.random() * 10 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center border-t border-white/10 pt-8">
          {/* Left section */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-medium mb-2">Amit Rawat</h3>
            <p className="text-sm text-white/60">
              Turning ideas into reality through code
            </p>
          </div>

          {/* Middle section */}
          <div className="text-center flex flex-col items-center">
            <div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <Code className="h-4 w-4" />
              <span>with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>and</span>
              <Coffee className="h-4 w-4" />
            </div>
            <p className="text-sm text-white/60 mt-2">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* Right section */}
          <div className="flex justify-center md:justify-end gap-4">
            <FooterLink 
              href="https://github.com/amitraw03" 
              icon={Github} 
              label="GitHub Profile"
            />
            <FooterLink 
              href="https://www.linkedin.com/in/amit-rawat-477866231/" 
              icon={Linkedin} 
              label="LinkedIn Profile"
            />
            <FooterLink 
              href="https://x.com/rawatAmit30" 
              icon={Twitter} 
              label="Twitter Profile"
            />
            <FooterLink 
              href="mailto:rawatamit302003@gmail.com" 
              icon={Mail} 
              label="Email"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes footerFloat {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;