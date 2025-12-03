import React, { useState } from 'react';
import { Mail, MapPin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Documental',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Te responderé pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Hablemos</h2>
              <p className="text-gray-500 font-light text-lg">
                Estoy disponible para proyectos en toda Europa y encargos internacionales. Cuéntame tu historia.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-gray-400 mt-1" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wider">Estudio</h4>
                  <p className="text-gray-500 font-light mt-1">Calle de la Luz 24, Madrid<br/>España</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-gray-400 mt-1" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wider">Email</h4>
                  <p className="text-gray-500 font-light mt-1">hola@kevinpuelles-foto.com</p>
                </div>
              </div>

               <div className="flex items-start space-x-4">
                <Instagram className="w-6 h-6 text-gray-400 mt-1" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wider">Social</h4>
                  <p className="text-gray-500 font-light mt-1">@kevinpuelles_photo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-gray-50 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Interés</label>
                <select
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-gray-900 transition-colors appearance-none"
                >
                  <option value="Documental">Fotografía Documental</option>
                  <option value="Eventos">Cobertura de Eventos</option>
                  <option value="Retrato">Retrato Editorial</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-gray-900 transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-gray-900 text-white py-4 text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;