import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore.js';

const Faq = () => (
  <Container>
    <Hero titleText={settings.faq.title} pictureSrcText={settings.faq.image} pictureAltText={settings.faq.imageAlt}/>
    <h2>{settings.faq.headerText}</h2>
    <p>{settings.faq.tekst}</p>
  </Container>
);

export default Faq;