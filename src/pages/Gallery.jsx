import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import HeroSection from '../components/HeroSection';
import { withBase } from '../lib/utils';

// Gallery images data
const galleryImages = [
  {
    id: 3,
    category: "corporate",
    src: "/galleryimage1.jpg",
    alt: "Corporate auditorium presentation",
    title: "Corporate Leadership Presentation"
  },

  {
    id: 5,
    category: "workshop",
    src: "/WhatsApp Image 2025-08-28 at 12.36.35_f0598a53.png",
    alt: "Team celebration and networking",
    title: "Team Celebration & Networking Event"
  },
  {
    id: 6,
    category: "corporate",
    src: "/gallery2.png",
    alt: "Corporate training session",
    title: "Corporate Training Session"
  },

  {
    id: 8,
    category: "corporate",
    src: "/homepage.jpg",
    alt: "Business seminar",
    title: "Business Seminar"
  },
  {
    id: 9,
    category: "workshop",
    src: "/gallery3.png",
    alt: "Interactive workshop session",
    title: "Interactive Workshop Session"
  },
  {
    id: 10,
    category: "corporate",
    src: "/gallery2.png",
    alt: "Professional development",
    title: "Professional Development Program"
  },
  {
    id: 11,
    category: "workshop",
    src: "/gallery9.jpg",
    alt: "Leadership workshop",
    title: "Leadership Development Workshop"
  },
  {
    id: 12,
    category: "corporate",
    src: "/gallery8.png",
    alt: "Corporate seminar",
    title: "Corporate Excellence Seminar"
  },
  {
    id: 13,
    category: "workshop",
    src: "/WhatsApp Image 2025-08-28 at 12.36.35_f0598a53.png",
    alt: "Team building activity",
    title: "Team Building Activity"
  },
  
  {
    id: 15,
    category: "workshop",
    src: "/gallery3.png",
    alt: "Interactive learning",
    title: "Interactive Learning Session"
  },

  {
    id: 17,
    category: "workshop",
    src: "/gallery6.png",
    alt: "Skills development workshop",
    title: "Skills Development Workshop"
  },
  {
    id: 18,
    category: "corporate",
    src: "/gallery5.png",
    alt: "Corporate leadership",
    title: "Corporate Leadership Training"
  },

  {
    id: 20,
    category: "corporate",
    src: "/WhatsApp Image 2025-08-28 at 12.36.35_1d6db621.png",
    alt: "Business excellence program",
    title: "Business Excellence Program"
  },
  {
    id: 21,
    category: "workshop",
    src: "/WhatsApp Image 2025-08-28 at 12.36.35_f0598a53.png",
    alt: "Communication skills workshop",
    title: "Communication Skills Workshop"
  },
  {
    id: 22,
    category: "corporate",
    src: "/gallery7.png",
    alt: "Management training",
    title: "Management Training Session"
  },
  {
    id: 23,
    category: "workshop",
    src: "/gallery4.png",
    alt: "Personal development",
    title: "Personal Development Workshop"
  },

];

function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentImage: null
  });
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);
    
  const openLightbox = (image) => {
    setLightbox({
      isOpen: true,
      currentImage: image
    });
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightbox({
      isOpen: false,
      currentImage: null
    });
    document.body.style.overflow = 'auto';
  };
  
  const navigateImage = (direction) => {
    const currentIndex = galleryImages.findIndex(img => img.id === lightbox.currentImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    
    setLightbox({
      ...lightbox,
      currentImage: galleryImages[newIndex]
    });
  };

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <HeroSection 
        title="Gallery"
        subtitle="Moments from our workshops, training sessions, and events"
        backgroundImage="/galleryimage1.jpg"
          ctaLink="/courses"
      />
      
      {/* Gallery Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              All Photos
            </button>
           
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="container-custom">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {filteredImages.map((image) => (
      <div 
        key={image.id} 
        className="overflow-hidden relative rounded-lg shadow-md cursor-pointer group"
        onClick={() => openLightbox(image)}
      >
        <div className="flex justify-center items-center w-full h-64 bg-black">
          <img 
            src={encodeURI(withBase(image.src))} 
            alt={image.alt} 
            className="object-contain max-w-full max-h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex absolute inset-0 items-end bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 from-black/70 group-hover:opacity-100">
          <h3 className="p-4 font-medium text-white">{image.title}</h3>
        </div>
      </div>
    ))}
  </div>
</section>

     
      
      {/* Lightbox */}
{/* Lightbox */}
{lightbox.isOpen && lightbox.currentImage &&
  ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={closeLightbox}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute right-0 -top-10 text-3xl text-white transition-colors hover:text-gray-300"
          onClick={closeLightbox}
        >
          &times;
        </button>

        {/* Image */}
        <img
          src={encodeURI(withBase(lightbox.currentImage.src))}
          alt={lightbox.currentImage.alt}
          className="w-auto h-auto max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-lg"
        />

        {/* Title & Description */}
        <div className="mt-4 text-center text-white">
          <h3 className="text-xl font-semibold">{lightbox.currentImage.title}</h3>
          <p className="mt-1 text-sm text-gray-300">{lightbox.currentImage.alt}</p>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-4 top-1/2 text-3xl text-white transition-colors -translate-y-1/2 hover:text-gray-300"
          onClick={() => navigateImage('prev')}
        >
          &#8592;
        </button>
        <button
          className="absolute right-4 top-1/2 text-3xl text-white transition-colors -translate-y-1/2 hover:text-gray-300"
          onClick={() => navigateImage('next')}
        >
          &#8594;
        </button>
      </div>
    </div>,
    document.body
  )
}



    </div>
  );
}

export default Gallery;