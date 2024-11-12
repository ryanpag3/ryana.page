import { Fragment } from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';

type Job = {
  company: {
    name: string;
    url: string;
  },
  title: string;
  startDate: string;
  endDate: string;
  accomplishments: string[];
}

export default function JobExperience({ job }: { job: Job }) {
  const startDateYear = new Date(job.startDate).getFullYear();
  const endDateYear = job.endDate ? new Date(job.endDate).getFullYear() : "Present";

  return (
    <Container>
      <Header>
        <DateText>{startDateYear} - {endDateYear}</DateText>
        <JobContainer>
          <JobTitle>{job.title}</JobTitle>&nbsp;|&nbsp;<CompanyName href={job.company.url}>{job.company.name}</CompanyName>
        </JobContainer>
      </Header>
      <ContentColumn>
        <Markdown
          components={{
            li: ({ node, ...props }) => {
              return <li style={{paddingBottom: '10px'}}>{props.children}</li>;
            },
            a: ({ node, ...props }) => {
              return <Anchor {...props} target="_blank" rel="noopener noreferrer" />;
            }
          }}
        >
          {job.accomplishments.map((accomplishment, index) => (
            `- ${accomplishment}\n`
          )).join('')}
        </Markdown>
      </ContentColumn>
    </Container>
  );
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Header = styled(Row)`
  width: 100%;
  align-items: center;
`;

const Container = styled(Column)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DateText = styled.p`
  font-size: 14px;
  font-family: var(--font-mono);
  color: ${({ theme }) => theme.text.secondary};
  padding: 0;
  padding-right: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ContentColumn = styled.div`
  color: ${({ theme }) => theme.text.primary};
  font-size: 18px;
  font-weight: 200;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const JobContainer = styled(Row)`
  align-items: center;
`;

const JobTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.accent};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CompanyName = styled.a`
  margin: 0;
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.primary};
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Anchor = styled.a`
  color: ${({ theme }) => theme.anchor};
  font-weight: 500;
  text-decoration: none;
`;