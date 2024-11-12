import styled from 'styled-components';
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import SocialsBar from '../../components/SocialsBar';
import AboutMe from './sections/AboutMe';
import Introduction from './sections/Introduction';
import Projects from './sections/Projects';
import WorkExperience from './sections/WorkExperience';
import Footer from '../../components/Footer';
import { useRef } from 'react';


export default function HomeScreen() {
  return (
    <Screen>
      <Header />
      <Introduction />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <Footer/>
    </Screen>
  );
}

