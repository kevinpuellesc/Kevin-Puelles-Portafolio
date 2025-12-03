import React, { useState, useEffect } from 'react';
import { ArrowRight, Edit3, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_IMAGES } from '../constants';

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("Capturando la Verdad");
  const [subtitle, setSubtitle] = useState("Fotografía documental y narrativa visual");

  // Image rotation effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Images with Fade */}
      {HERO_IMAGES.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-60' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
        <div className="max-w-4xl space-y-6 fade-in">
          
          {/* Editable Title */}
          <div className="relative group">
            {isEditing ? (
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-transparent border-b border-white/50 text-white text-5xl md:text-7xl font-serif text-center focus:outline-none w-full pb-2"
                autoFocus
              />
            ) : (
              <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif tracking-tight leading-tight">
                {title}
              </h1>
            )}
          </div>

          {/* Editable Subtitle */}
          <div className="relative group mt-4">
             {isEditing ? (
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="bg-transparent border-b border-white/50 text-gray-200 text-lg md:text-xl font-light text-center focus:outline-none w-full pb-1"
              />
            ) : (
              <p className="text-lg md:text-xl text-gray-200 font-light tracking-widest uppercase">
                {subtitle}
              </p>
            )}
          </div>

          {/* Call to Action */}
          <div className="pt-10">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center space-x-2 text-white border border-white/30 px-8 py-3 hover:bg-white hover:text-gray-900 transition-all duration-300 tracking-widest uppercase text-sm"
            >
              <span>Ver Portafolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Edit Toggle Button (Fixed Position) */}
      <button
        onClick={() => setIsEditing(!isEditing)}
        className="absolute bottom-8 right-8 text-white/50 hover:text-white transition-colors flex items-center gap-2 text-xs uppercase tracking-wider z-20"
        title="Editar texto de portada"
      >
        {isEditing ? <Check className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
        {isEditing ? "Guardar Texto" : "Editar Texto"}
      </button>

      {/* Section Previews (Bottom Absolute) */}
      <div className="absolute bottom-0 w-full hidden md:flex border-t border-white/10 backdrop-blur-sm">
        <div className="flex-1 p-6 text-white/80 hover:bg-white/10 transition-colors cursor-pointer border-r border-white/10">
          <h3 className="uppercase text-xs tracking-widest mb-1 text-gray-400">Último Proyecto</h3>
          <p className="font-serif">Silencios Urbanos</p>
        </div>
        <div className="flex-1 p-6 text-white/80 hover:bg-white/10 transition-colors cursor-pointer border-r border-white/10">
          <h3 className="uppercase text-xs tracking-widest mb-1 text-gray-400">Servicios</h3>
          <p className="font-serif">Documental & Eventos</p>
        </div>
        <div className="flex-1 p-6 text-white/80 hover:bg-white/10 transition-colors cursor-pointer">
          <h3 className="uppercase text-xs tracking-widest mb-1 text-gray-400">Contacto</h3>
          <p className="font-serif">Disponible: Octubre 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;