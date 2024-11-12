import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';
import Section from '../../../components/Section';

export default function AboutMeSection() {
  const [markdownString, setMarkdownString] = useState('');

  useEffect(() => {
    const aboutMePath = require('../../../content/about-me.md');
    fetch(aboutMePath)
      .then((response) => response.text())
      .then((text) => setMarkdownString(text));
  }, []);

  return (
    <Section id="about-me" title="About">
      <Row>
        <Column>
          <ProfilePicture src="/profile-picture.jpg" alt="image" />
        </Column>
        <Column>
          <Markdown
            components={{
              a: ({ node, ...props }) => {
                return <Link {...props} target="_blank" rel="noopener noreferrer" />;
              }
            }}
          >
            {markdownString}
          </Markdown>
        </Column>
      </Row>
    </Section>
  );
}

const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;

  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.anchor};
  text-decoration: none;
  transition: color 0.2s;
`;

const diameter = 250;
const ProfilePicture = styled.img`
  width: ${diameter}px;
  height: ${diameter}px;
  border-radius: 20%;
  margin-right: 20px;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.background.secondary};
`;