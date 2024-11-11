import Header from '../../components/Header';
import Screen from '../../components/Screen';
import AboutMe from './sections/AboutMe';
import GetInTouch from './sections/GetInTouch';
import Introduction from './sections/Introduction';
import Projects from './sections/Projects';
import WorkExperience from './sections/WorkExperience';


export default function HomeScreen() {
  return (
    <Screen>
      <Header/>
      <Introduction />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <GetInTouch />
    </Screen>
  );
}