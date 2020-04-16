import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore.js';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.title} pictureSrcText={settings.info.image} pictureAltText={settings.info.imageAlt}/>
    <h2>{settings.info.headerText}</h2>
    <p>{settings.info.tekst}</p>
  </Container>
);

export default Info;