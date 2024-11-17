import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import {
  Gamepad2,
  Mountain,
  Film,
  Music,
  Book,
  Camera,
  Coffee,
  Code
} from 'lucide-react';

// Import required Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Interests = () => {
  const interests = [
    {
      id: 1,
      icon: Gamepad2,
      title: "Gaming",
      description: "Passionate about gaming, both playing and watching. Love analyzing game strategies and following esports tournaments."
    },
    {
      id: 2,
      icon: Mountain,
      title: "Trekking",
      description: "Enthusiast for outdoor adventures and mountain trails. Finding peace and challenge in nature's magnificence."
    },
    {
      id: 3,
      icon: Film,
      title: "Movies",
      description: "Avid film enthusiast with a particular interest in thought-provoking narratives and innovative cinematography."
    },
    {
      id: 4,
      icon: Code,
      title: "Coding",
      description: "Beyond professional work, I enjoy exploring new technologies and working on personal coding projects."
    },
    {
      id: 5,
      icon: Book,
      title: "Reading",
      description: "Love diving into technical books and articles to stay updated with the latest in technology and development."
    },
    {
      id: 6,
      icon: Coffee,
      title: "Coffee & Coding",
      description: "Perfect combination of brewing coffee while solving complex programming challenges."
    },
    {
      id: 7,
      icon: Music,
      title: "Music",
      description: "Enjoy listening to various genres while coding. Music helps maintain my focus and creativity."
    },
    {
      id: 8,
      icon: Camera,
      title: "Photography",
      description: "Capturing moments during treks and travels, documenting nature's beauty and urban landscapes."
    }
  ];

  return (
    <div id='interests' className='py-10 bg-gray-900 relative overflow-hidden'>
      <h1 className='text-center text-2xl lg:text-4xl font-bold text-white'>My Interests & Hobbies</h1>
      <p className='text-center mt-4 text-gray-400 max-w-2xl mx-auto px-4'>
        Discovering the perfect balance between professional passion and personal interests
      </p>
      <div className='max-w-6xl mx-auto py-10 px-5'>
        <Swiper
          style={{
            "--swiper-pagination-color": "#6366F1",
            "--swiper-pagination-bullet-inactive-color": "#4B5563",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          className="mySwiper !pb-14"
        >
          {interests.map((item) => {
            const Icon = item.icon;
            return (
              <SwiperSlide key={item.id} className="transition-transform duration-500">
                {({ isActive }) => (
                  <div className={`
                    border border-indigo-500/30 bg-gray-800/50 backdrop-blur-sm 
                    shadow-lg shadow-indigo-500/20 rounded-lg flex flex-col p-6 
                    transition-all duration-500 h-full
                    ${isActive ? 'transform scale-110 -translate-y-4 bg-gray-800/80' : 'scale-90 opacity-50'}
                  `}>
                    <div className="flex flex-col items-center text-center">
                      <div className={`
                        rounded-full p-4 mb-4 transition-all duration-500
                        ${isActive ? 'bg-indigo-500/30 scale-110' : 'bg-indigo-500/10'}
                      `}>
                        <Icon className={`
                          h-8 w-8 transition-all duration-500
                          ${isActive ? 'text-indigo-300' : 'text-indigo-400'}
                        `} />
                      </div>
                      <h3 className={`
                        font-semibold text-xl mb-3 transition-all duration-500
                        ${isActive ? 'text-indigo-300' : 'text-indigo-400'}
                      `}>{item.title}</h3>
                      <p className='text-gray-300 leading-relaxed'>{item.description}</p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
          <div className='swiper-pagination gap-1 relative'></div>
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-slide {
          transition: all 0.5s ease;
        }
        
        .swiper-slide-active {
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default Interests;