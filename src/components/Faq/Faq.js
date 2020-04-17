import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore.js';

const { title, image, imageAlt } = settings.faq;
const Faq = () => (
  <Container>
    <Hero 
      titleText={title} 
      pictureSrcText={image} 
      pictureAltText={imageAlt}
    />
    <h2>{settings.faq.headerText}</h2>
    <p>{settings.faq.tekst}</p>
  </Container>
);

export default Faq;