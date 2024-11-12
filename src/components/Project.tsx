import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai';
import { RiGithubLine } from 'react-icons/ri';
import styled from 'styled-components';

type Project = {
  name: string;
  githubUrl: string;
  status: "active" | "archived";
  description: string;
  technologies: string[];
}

export default function Project({ project }: { project: Project }) {
  return (
    <Container>
      <Row>
        <ProjectName>{project.name}</ProjectName>
        <GithubAnchor
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          <RiGithubLine size={25}/>
        </GithubAnchor>
      </Row>
      <Row>
        <ProjectStatusBadge>status: {project.status}</ProjectStatusBadge>
      </Row>
      <Description>{project.description}</Description>
      <BadgeRow>
        {
          project.technologies.map((technology, index) => (
            <TechBadge key={index}>
              <TechBadgeText>{technology}</TechBadgeText>
            </TechBadge>
          ))
        }
      </BadgeRow>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 50px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const GithubAnchor = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.text.primary};

  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const ProjectStatusBadge = styled.div`
  font-size: 12px;
  font-family: var(--font-mono);
  display: flex;
  height: 25px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text.secondary};
`;

const ProjectName = styled.h2`
  font-size: 24px;
  font-family: var(--font-mono);
  font-weight: 600;
  color: ${({ theme }) => theme.text.accent};
  margin-bottom: 5px;
`;


const Description = styled.p`
  /* color: ${({ theme }) => theme.text.primary}; */
`;

const BadgeRow = styled(Row)`
  max-width: 400px;
  flex-wrap: wrap;
`;

const TechBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  padding: 2px 10px;
  border-radius: 5px;
`;

const TechBadgeText = styled.span`
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
`;