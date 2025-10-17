import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { withBase } from '../lib/utils';

function HeroSection({ 
  title, 
  subtitle, 
  backgroundImage, 
  cta = "Learn More", 
  ctaLink = "#", 
  secondaryCta = null,
  secondaryCtaLink = "#"
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ 
      /* Use withBase so assets work under subpaths; encode so spaces work */
      backgroundImage: (() => {
        const src = backgroundImage ? backgroundImage.replace(/^public\//, '') : '';
        const bgUrl = encodeURI(withBase(src));
        return `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.5)), url("${bgUrl}")`;
      })(),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-blue-800/10 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/15"></div>
      
      <div className="container mx-auto px-6 py-16 text-center relative z-10 rounded-md max-w-5xl">
        <h1 
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight ${isVisible ? 'slide-in-left' : 'opacity-0'}`}
          style={{ transitionDelay: '300ms' }}
        >
          {title}
        </h1>
        <p 
          className={`text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto ${isVisible ? 'fade-in' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        >
          {subtitle}
        </p>
        <div 
          className={`flex flex-col sm:flex-row justify-center gap-4 ${isVisible ? 'zoom-in' : 'opacity-0'}`}
          style={{ transitionDelay: '900ms' }}
        >
          <Link 
            to={ctaLink} 
            className="btn btn-primary text-lg shimmer hover-lift"
          >
            {cta}
          </Link>
          {secondaryCta && (
            <Link 
              to={secondaryCtaLink} 
              className="btn btn-outline border-white text-white hover:bg-gradient-to-r hover:from-white hover:to-gray-100 hover:text-blue-700 text-lg hover-lift"
            >
              {secondaryCta}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;