import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { RiBlueskyLine } from "react-icons/ri";
import styled from 'styled-components';
import SocialLinks from '../const/social-links';


export default function SocialsBarMobile() {
  const iconSize = 30;

  return (
    <Container>
      <HorizLine style={{width: '15px'}}/>
      <Anchor
        href={SocialLinks.GITHUB}
        target="_blank"
        referrerPolicy='no-referrer'
      >
        <AiFillGithub size={iconSize} />
      </Anchor>
      <Anchor
        href={SocialLinks.LINKEDIN}
        target="_blank"
        referrerPolicy='no-referrer'
      >
        <AiFillLinkedin size={iconSize} />
      </Anchor>
      <Anchor
        href={SocialLinks.BLUESKY}
        target="_blank"
        referrerPolicy='no-referrer'
      >
        <RiBlueskyLine size={iconSize} />
      </Anchor>
      <Anchor
        href={SocialLinks.EMAIL}
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
  color: ${({ theme }: any) => theme.text.primary};

  &:hover {
    color: ${({ theme }: any) => theme.text.accent};
  }
`;

const HorizLine = styled.hr`
    width: 60px;
`;
