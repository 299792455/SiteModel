import React from 'react';
import '../style/agenda.scss';

// Import des images
import skinImage from '../style/Medias/events/Skin.webp';
import playgirlImage from '../style/Medias/events/playgirl.webp';
import nitroImage from '../style/Medias/events/Nitro.webp';
import soldImage from '../style/Medias/events/Sold-out.webp';

const events = [
  {
    id: 1,
    image: skinImage, // Utilisation de l'import
    date: '17.01.25',
    day: 'Vie, 17 Ene',
    name: 'Skin: III ANIVERSARIO - UNA NUEVA ERA',
    location: 'Cadavra, Madrid',
    participantes: 453,
    link: 'https://es.ra.co/events/2078257'
  },
  {
    id: 2,
    image: playgirlImage, // Utilisation de l'import
    date: '17.01.25',
    day: 'Vie, 17 Ene',
    name: '[SOLD OUT] PLAYGIRL VOL. 13',
    location: 'TBA - Madrid',
    participantes: 466,
    link: 'https://es.ra.co/events/2070226'
  },
  {
    id: 3,
    image: soldImage, // Utilisation de l'import
    date: '17.01.25',
    day: 'Vie, 17 Ene',
    name: '[SOLD OUT] Five2nine Pres: Keep The Weekend Roof',
    location: 'TBA - Granvia',
    participantes: 197,
    link: 'https://es.ra.co/events/2072623'
  },
  {
    id: 4,
    image: nitroImage, // Utilisation de l'import
    date: '18.01.25',
    day: 'Sab, 18 Ene',
    name: 'NITRO: Linus Villa + Sora Eke + Sømmar B2B',
    location: 'TBA - ENTITY',
    participantes: 540,
    link: 'https://es.ra.co/events/2074336'
  }
];

const Agenda = () => {
    return (
      <div className="agenda-section">
        <h2 className="agenda-title">Agenda</h2> {/* Titre ajouté */}
  
        <div className="agenda-container">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.name} className="event-image" />
              <div className="event-details">
                <span className="event-date">{event.day}</span>
                <h3 className="event-name">{event.name}</h3>
                <p className="event-location">{event.location}</p>
                <p className="event-participants">{event.participantes} participantes</p>
                <a href={event.link} className="event-link">
                  VER EVENTO
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default Agenda;
