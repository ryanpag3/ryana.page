import Project from '../../../components/Project';
import Section from '../../../components/Section';
import ProjectsList from '../../../content/projects.json';

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      {
        ProjectsList.map((project, index) => <Project key={index} project={project as any} />)
      }
    </Section>
  );
}