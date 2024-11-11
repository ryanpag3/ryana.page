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
      <DateColumn>
        <DateText>{startDateYear} - {endDateYear}</DateText>
      </DateColumn>
      <ContentColumn>
        <Row><JobTitle>{job.title}</JobTitle>&nbsp;-&nbsp;<CompanyName href={job.company.url}>{job.company.name}</CompanyName></Row>
        {/* <h2>{job.title}</h2>
        <a href={job.company.url}>{job.company.name}</a> */}
        <Markdown>
          {job.accomplishments.map((accomplishment, index) => (
            `- ${accomplishment}\n`
          )).join('')}
        </Markdown>
      </ContentColumn>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 30px;

`;

const DateColumn = styled.div`
  flex: .25;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const DateText = styled.p`
  font-size: 14px;
  font-family: var(--font-mono);
  color: ${({ theme }) => theme.text.secondary};
  padding: 0;
  margin-top: 5px;
  margin-right: 25px;
`;

const ContentColumn = styled.div`
  flex: .75;
  color: ${({ theme }) => theme.text.primary};
  font-size: 18px;
  font-weight: 200;
  line-height: 1.3;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const JobTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.primary};
`;

const CompanyName = styled.a`
  margin: 0;
  /* line-height: .9; */
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.accent};
  text-decoration: none;
`;