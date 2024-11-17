import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Lottie from 'lottie-react';
import contactAnimation from '../assets/Contact.json';

const ContactCard = ({ icon: Icon, title, content }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
    <div className="flex items-center gap-4">
      <div className="rounded-full p-3 bg-indigo-500/10">
        <Icon className="h-6 w-6 text-indigo-500" />
      </div>
      <div>
        <h3 className="font-medium text-white">{title}</h3>
        <p className="text-sm text-white/60">{content}</p>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help your business grow.
            Drop me a message, and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="md:order-2">
              <Lottie 
                animationData={contactAnimation} 
                className="w-full max-w-lg mx-auto"
                loop={true}
              />
            </div>

            <div className="space-y-4">
              <ContactCard
                icon={MapPin}
                title="Location"
                content="Faridabad, Haryana, India"
              />
              <ContactCard
                icon={Mail}
                title="Email"
                content="rawatamit302003@gmail.com"
              />
              <ContactCard
                icon={Phone}
                title="Phone"
                content="+91 80766 09296"
              />
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 space-y-6"
          >
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-white mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-white mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-white mb-2 block">
                  Message
                </label>
                <textarea
                  placeholder="Your message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
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

export default Contact;