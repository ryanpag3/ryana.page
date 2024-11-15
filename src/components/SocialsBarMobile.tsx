import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { RiBlueskyLine } from "react-icons/ri";
import styled from 'styled-components';


export default function SocialsBarMobile() {
  const iconSize = 30;

  return (
    <Container>
      <HorizLine style={{width: '15px'}}/>
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
      <HorizLine />
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

const Anchor = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.text.primary};

  &:hover {
    color: ${({ theme }) => theme.text.accent};
  }
`;

const HorizLine = styled.hr`
    width: 60px;
`;
