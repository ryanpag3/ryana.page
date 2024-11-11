import styled, { useTheme } from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function IntroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [yearsOfExperience, setYearsOfExperience] = useState(getYearsOfExperience());
  const theme = useTheme();

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

  const waitTime = 2500;
  const one = <TypeAnimation
    sequence={[
      "print('Hello world! My name is:')",  // Python
      waitTime,
      "console.log('Hello world! My name is:')",  // JavaScript
      waitTime,
      "System.out.println('Hello world! My name is:');",  // Java
      waitTime,
      "printf('Hello world! My name is:\\n');",  // C
      waitTime,
      "std::cout << 'Hello world! My name is:' << std::endl;",  // C++
      waitTime,
      "puts 'Hello world! My name is:'",  // Ruby
      waitTime,
      "echo 'Hello world! My name is:';",  // PHP
      waitTime,
      "print('Hello world! My name is:')",  // Swift
      waitTime,
      "println('Hello world! My name is:')",  // Kotlin
      waitTime,
      "cat('Hello world! My name is:\\n')",  // R
      waitTime,
      "fmt.Println('Hello world! My name is:')",  // Go
      waitTime,
      "Write-Output 'Hello world! My name is:'",  // PowerShell
      waitTime,
      "(display 'Hello world! My name is:')",  // Lisp
      waitTime,
      "echo('Hello world! My name is:');",  // Lua
      waitTime,
      "displayln(\"Hello world! My name is:\")",  // Racket
      waitTime,
      "Console.WriteLine('Hello world! My name is:');",  // C#
      waitTime,
      "IO.puts('Hello world! My name is:')",  // Elixir
      waitTime,
      "trace('Hello world! My name is:')",  // ActionScript
      waitTime,
      "PRINT 'Hello world! My name is:'",  // BASIC
      waitTime
  ]}
    wrapper="span"
    speed={70}
    style={{ fontSize: '1.25em', display: 'inline-block', fontFamily: 'var(--font-mono)', color: theme.text.accent }}
    repeat={Infinity}
  />
  const two = <h2 className="big-heading">Ryan Page</h2>;
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