import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { RiBlueskyLine } from "react-icons/ri";
import styled from 'styled-components';
import SocialLinks from '../const/social-links';


export default function SocialsBar() {
  const { innerWidth: width, innerHeight: height } = window;

  const iconSize = width > 480 ? 30 : 20;

  return (
    <Container>
      <VertLine />
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
  color: ${({ theme }: any) => theme.text.primary};

  &:hover {
    color: ${({ theme }: any) => theme.text.accent};
  }
`;

const VertLine = styled.div`
  border-left: 1px solid ${({ theme }: any) => theme.text.secondary};
  height: 60px;

  @media (max-width: 480px) {
    height: 40px;
  }
`;
