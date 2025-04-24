import { useEffect, useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TypeAnimation } from 'react-type-animation';
import styled, { useTheme } from 'styled-components';
import SocialsBarMobile from '../../../components/SocialsBarMobile';



export default function IntroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [yearsOfExperience, setYearsOfExperience] = useState(getYearsOfExperience());
  const theme = useTheme();
  const { innerWidth: width, innerHeight: height } = window;

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const i = setInterval(() => {
      setYearsOfExperience(getYearsOfExperience());
    }, 50);
    return () => clearInterval(i);
  }, []);

  function getYearsOfExperience() {
    const givenDate = new Date('December 1, 2015');
    const currentDate = new Date();
    const diffInMs = currentDate.getTime() - givenDate.getTime();
    const msInAYear = 1000 * 60 * 60 * 24 * 365.25;
    const yearsDiff = diffInMs / msInAYear;
    return yearsDiff.toFixed(8);
  }

  const waitTime = 1500;
  const one = <TypeAnimation
    sequence={[
      "Hello world! My name is:",
      3000,
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
    style={{ fontSize: width < 768 ? '.85em' : '1.5em', display: 'inline-block', fontFamily: 'var(--font-mono)', color: (theme as any).text.accent }}
    repeat={Infinity}
  />
  const two = <h2 className="big-heading">Ryan Page</h2>;
  const three = <h3>A Software Engineer and Tech Lead with <YoEContainer><FlexCenter><YearsOfExperience>{yearsOfExperience}</YearsOfExperience></FlexCenter></YoEContainer> years of experience.</h3>;
  const four = <SocialBarsContainer><SocialsBarMobile /></SocialBarsContainer>
  const items = width > 768 ? [one, two, three] : [one, two, three, four];

  return (
    <Section>
      <TransitionGroup component={null}>
        {isMounted && items.map((item, i) => (
          <CSSTransition key={i} classNames="fadeup" timeout={2000}>
            <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
          </CSSTransition>
        ))}
      </TransitionGroup>
      {
        width < 768 &&
        <Chevron size={40} color={theme.text.secondary} />
      }
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

    h1 {
      margin: 0 0 10px 4px;
      color: ${({ theme }: any) => theme.text.accent};
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 5vw, var(--fz-lg));
      font-weight: 400;
    }

    h2 {
      font-size: clamp(60px, 8vw, 90px);
    }

    h3 {
      margin-top: 5px;
      color: ${({ theme }: any) => theme.text.secondary};
      line-height: 0.95;
      font-size: 48px;
      max-width: 800px;
    }

    p {
      margin: 20px 0 0;
      max-width: 540px;
    }

    @media(max-width: 768px) {
      h3 {
        font-size: 36px;
      }
    }

    @media (max-width: 480px) {

      h2 {
        font-size: 48px;
      }

      h3 {
        font-size: 22px;
        line-height: 1.3;
      }
    }

    @media (max-width: 400px) {
      min-height: 70vh;

      h3 {
        font-size: 18px;
      }
    }
`;

const YoEContainer = styled.div`
  display: inline-block;
  font-family: var(--font-mono);
`;

const FlexCenter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const YearsOfExperience = styled.span`
  color: ${({ theme }: any) => theme.text.accent};
  align-items: center;
  align-text: center;
`;

const Chevron = styled(FaChevronDown)`
  position: absolute;
  bottom: 0;
  left: 45%;
`;

const SocialBarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: 10px;
`;
