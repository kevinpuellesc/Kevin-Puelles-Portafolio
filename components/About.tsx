import React from 'react';
import { Camera, Heart, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
               <img 
                src="https://picsum.photos/id/338/800/1200" 
                alt="Kevin Puelles Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gray-200 -z-10 hidden md:block"></div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              Observador de <br />
              <span className="italic text-gray-500">lo invisible</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
              <p>
                Hola, soy Kevin. Mi fotografía nace de la curiosidad y el respeto por la realidad. No busco crear momentos, sino estar presente cuando suceden.
              </p>
              <p>
                Con más de 10 años de experiencia recorriendo el mundo y documentando eventos, he aprendido que las mejores imágenes son aquellas que cuentan una historia honesta. Mi estilo se define por el uso de la luz natural, composiciones limpias y una edición atemporal.
              </p>
              <p>
                Me especializo en fotografía documental y eventos sociales, buscando siempre la belleza en lo espontáneo y la elegancia en la simplicidad.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div className="text-center md:text-left">
                <Camera className="w-6 h-6 text-gray-400 mb-2 mx-auto md:mx-0" />
                <h4 className="text-sm font-medium text-gray-900">Equipo</h4>
                <p className="text-xs text-gray-500 mt-1">Sony Alpha & Leica</p>
              </div>
              <div className="text-center md:text-left">
                <Heart className="w-6 h-6 text-gray-400 mb-2 mx-auto md:mx-0" />
                <h4 className="text-sm font-medium text-gray-900">Pasión</h4>
                <p className="text-xs text-gray-500 mt-1">Narrativa Visual</p>
              </div>
              <div className="text-center md:text-left">
                <Globe className="w-6 h-6 text-gray-400 mb-2 mx-auto md:mx-0" />
                <h4 className="text-sm font-medium text-gray-900">Base</h4>
                <p className="text-xs text-gray-500 mt-1">Madrid, España</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;