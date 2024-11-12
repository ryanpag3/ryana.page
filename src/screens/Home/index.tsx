import styled from 'styled-components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import AboutMe from './sections/AboutMe';
import Introduction from './sections/Introduction';
import Projects from './sections/Projects';
import WorkExperience from './sections/WorkExperience';


export default function HomeScreen() {
  return (
    <Screen>
      <Header />
      <Introduction />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <Footer />
    </Screen>
  );
}
