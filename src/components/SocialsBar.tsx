import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { RiBlueskyLine } from "react-icons/ri";
import styled from 'styled-components';


export default function SocialsBar() {
  const { innerWidth: width, innerHeight: height } = window;

  const iconSize = width > 480 ? 30 : 20;

  return (
    <Container>
      <VertLine />
      <Anchor
        href="https://github.com/ryanpag3"
        target="_blank"
        referrerPolicy='no-referrer'
      >
        <AiFillGithub size={iconSize} />
      </Anchor>
      <Anchor
        href="https://www.linkedin.com/in/ryanpag3/"
        target="_blank"
        referrerPolicy='no-referrer'
      >
        <AiFillLinkedin size={iconSize} />
      </Anchor>
      <Anchor
        href="https://bsky.app/profile/ryanpage.bsky.social"
        target="_blank"
        referrerPolicy='no-referrer'
      >
        <RiBlueskyLine size={iconSize} />
      </Anchor>
      <Anchor
        href="mailto:ryanapage@gmail.com"
        target="_blank"
        referrerPolicy='no-referrer'
      >
        <AiOutlineMail size={iconSize} />
      </Anchor>
      <VertLine />
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 20px;
    gap: 15px;
    height: 100%;
    justify-content: center;
    align-items: center;

    @media (max-width: 480px) {
      display: none;
    };
`;

const Anchor = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.text.primary};

  &:hover {
    color: ${({ theme }) => theme.text.accent};
  }
`;

const VertLine = styled.div`
  border-left: 1px solid ${({ theme }) => theme.text.secondary};
  height: 60px;

  @media (max-width: 480px) {
    height: 40px;
  }
`;
