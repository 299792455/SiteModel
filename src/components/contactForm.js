import React, { useState } from 'react';
import '../style/contactForm.scss';
//import apiService from '../../services/apiService'

const ContactForm = () => {
    return (
      <form className="contact-form">
      <h2>
        <span className="dj-label">DJ</span>
        <span className="name-label">DREAM MAKERS</span>
      </h2>
    
      {/* Conteneur avec largeur maximale */}
      <div className="form-fields-container">
        {/* Ligne pour les champs prénom et nom */}
        <div className="input-row">
          <input type="text" name="firstName" placeholder="Nombre *" required />
          <input type="email" name="email" placeholder="E-mail *" required />
        </div>
    
        {/* Champ message */}
        <textarea name="message" placeholder="Mensaje" required></textarea>
      </div>
    
      {/* Bouton d’envoi */}
      <button type="submit">
        <span>Enviar</span>
      </button>
    </form>
    );
  };

export default ContactForm;

//const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  //const handleChange = (e) => {
    //const { name, value } = e.target;
    //setFormData({ ...formData, [name]: value });};

  //const handleSubmit = async (e) => {
    //e.preventDefault();
    //try {
      //const response = await apiService.post('/contact/send-email', {
        //to: '75017pi@gmail.com', // Ajoute une adresse email valide ici
        //subject: `Message de ${formData.name}`,
        //message: formData.message,
      //});
      //alert(response.data.message);
    //} catch (error) {
      //console.error('Erreur lors de l\'envoi du message:', error);
      //alert('Erreur lors de l\'envoi du message');
    //}
  //};

  //<form onSubmit={handleSubmit} className="contact-form"></form>
  //<input type="text" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required />
  //<input type="email" name="email" placeholder="Votre email" value={formData.email} onChange={handleChange} required />
  //<textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} required></textarea>
