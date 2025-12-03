import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Servicios</h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            Propuestas diseñadas para quienes valoran la autenticidad y la estética. Cada proyecto es único y se trata con la máxima dedicación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group border border-gray-200 p-8 hover:border-gray-400 transition-colors duration-300 bg-white flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <h3 className="text-2xl font-serif text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-400 font-light text-sm mb-6">{service.priceRange}</p>
                <p className="text-gray-600 leading-relaxed mb-8 font-light">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-500">
                      <span className="mr-2 text-gray-300">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <Link to="/contact" className="inline-flex items-center text-sm uppercase tracking-widest text-gray-900 group-hover:text-gray-500 transition-colors">
                  Reservar
                  <ArrowUpRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Preview or Philosophy */}
        <div className="mt-24 bg-gray-50 p-12 text-center">
            <h3 className="text-xl font-serif text-gray-900 mb-4">¿Buscas algo a medida?</h3>
            <p className="text-gray-500 font-light mb-8">
                Entiendo que cada historia es diferente. Contáctame para discutir proyectos personalizados, viajes o colaboraciones editoriales.
            </p>
            <Link to="/contact" className="text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors uppercase text-xs tracking-widest">
                Iniciar Conversación
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;