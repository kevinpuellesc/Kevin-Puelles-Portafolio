import { Category, Photo, Service } from './types';

export const HERO_IMAGES = [
  "https://picsum.photos/id/15/1920/1080", // Waterfall/Nature (Moody)
  "https://picsum.photos/id/250/1920/1080", // Camera/details
  "https://picsum.photos/id/1015/1920/1080", // Landscape
  "https://picsum.photos/id/338/1920/1080", // Venue/Event
];

export const PORTFOLIO_ITEMS: Photo[] = [
  // Documentary
  {
    id: '1',
    url: 'https://picsum.photos/id/1025/800/600',
    title: 'Silencios Urbanos',
    category: Category.DOCUMENTARY,
    description: 'La vida cotidiana en las calles de Madrid.'
  },
  {
    id: '2',
    url: 'https://picsum.photos/id/237/600/800',
    title: 'Compañeros de Viaje',
    category: Category.DOCUMENTARY,
    description: 'Historias no contadas de mascotas.'
  },
  {
    id: '3',
    url: 'https://picsum.photos/id/1062/800/500',
    title: 'El Último Oficio',
    category: Category.DOCUMENTARY,
    description: 'Artesanos trabajando con luz natural.'
  },
  {
    id: '4',
    url: 'https://picsum.photos/id/177/600/600',
    title: 'Viaje al Sur',
    category: Category.DOCUMENTARY,
    description: 'Crónica de un verano.'
  },
  // Events
  {
    id: '5',
    url: 'https://picsum.photos/id/433/800/600',
    title: 'Gala Anual',
    category: Category.EVENTS,
    description: 'Cobertura corporativa discreta.'
  },
  {
    id: '6',
    url: 'https://picsum.photos/id/349/600/800',
    title: 'Boda en el Bosque',
    category: Category.EVENTS,
    description: 'Momentos espontáneos y emotivos.'
  },
  {
    id: '7',
    url: 'https://picsum.photos/id/669/800/500',
    title: 'Concierto de Jazz',
    category: Category.EVENTS,
    description: 'Capturando el ritmo y la atmósfera.'
  },
   {
    id: '8',
    url: 'https://picsum.photos/id/823/600/600',
    title: 'Retratos de Familia',
    category: Category.EVENTS,
    description: 'Reuniones íntimas.'
  },
];

export const SERVICES: Service[] = [
  {
    id: 'doc',
    title: 'Sesión Documental',
    priceRange: 'Desde 300€',
    description: 'Captura la esencia de tu proyecto, viaje o vida cotidiana sin poses forzadas.',
    features: ['3 horas de cobertura', 'Entrega digital en alta resolución', 'Edición autoral en BN y Color', 'Galería privada']
  },
  {
    id: 'event',
    title: 'Cobertura de Eventos',
    priceRange: 'Desde 600€',
    description: 'Para bodas íntimas, conferencias o celebraciones. Una mirada atenta a los detalles.',
    features: ['Cobertura completa del evento', 'Sin límite de fotografías', 'Entrega en 72 horas (previo)', 'Álbum digital']
  },
  {
    id: 'portrait',
    title: 'Retrato Editorial',
    priceRange: 'Desde 150€',
    description: 'Retratos con carácter para profesionales, artistas o uso personal.',
    features: ['1 hora de sesión', 'Luz natural o estudio portátil', '10 fotos con retoque fino', 'Asesoría de estilo']
  }
];
