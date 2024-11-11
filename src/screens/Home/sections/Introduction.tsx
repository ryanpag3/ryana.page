import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useEffect, useState } from 'react';

export default function IntroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [yearsOfExperience, setYearsOfExperience] = useState(getYearsOfExperience());

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const i = setInterval(() => {
      setYearsOfExperience(getYearsOfExperience());
    }, 5000);
    return () => clearInterval(i);
  }, []);

  function getYearsOfExperience() {
    const givenDate = new Date('12-01-2015');
    const currentDate = new Date();
    const diffInMs = currentDate.getTime() - givenDate.getTime();
    const msInAYear = 1000 * 60 * 60 * 24 * 365.25;
    const yearsDiff = diffInMs / msInAYear;
    return yearsDiff.toFixed(4);
  }

  const one = <h1>Hi 👋, my name is</h1>
  const two = <h2 className="big-heading">Ryan A. Page</h2>;
  const three = <h3>A Lead Software Engineer with <YearsOfExperience>{yearsOfExperience}</YearsOfExperience> years of experience.</h3>;

  const items = [one, two, three];

  return (
    <Section>
      <TransitionGroup component={null}>
        {isMounted && items.map((item, i) => (
          <CSSTransition key={i} classNames="fadeup" timeout={2000}>
            <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Section>
  );
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 100vh;
    align-items: flex-start;
    justify-content: center;

    @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
      height: auto;
      padding-top: var(--nav-height);
    }

    h1 {
      margin: 0 0 10px 4px;
      color: ${({ theme }) => theme.text.accent};
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 5vw, var(--fz-lg));
      font-weight: 400;

      @media (max-width: 480px) {
        margin: 0 0 20px 2px;
      }
    }

    h3 {
      margin-top: 5px;
      color: ${({ theme }) => theme.text.secondary};
      line-height: 0.95;
      font-size: clamp(32px, 5vw, 54px);
      max-width: 750px;
    }

    p {
      margin: 20px 0 0;
      max-width: 540px;
    }
`;

const YearsOfExperience = styled.span`
  color: ${({ theme }) => theme.text.accent};
  align-items: center;
  align-text: center;
`;