import styled from 'styled-components';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { RiBlueskyLine } from "react-icons/ri";


export default function SocialsBar() {
  const iconSize = 30;

  return (
    <Container>
      <VertLine/>
      <Anchor>
        <AiFillGithub size={iconSize}/>
      </Anchor>
      <Anchor>
        <AiFillLinkedin size={iconSize}/>
      </Anchor>
      <Anchor>
        <RiBlueskyLine size={iconSize}/>
      </Anchor>
      <Anchor>
        <AiOutlineMail size={iconSize}/>
      </Anchor>
      <VertLine/>
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
`;

const Anchor = styled.a`
  cursor: pointer;
`;

const VertLine = styled.div`
  border-left: 1px solid ${({ theme }) => theme.text.secondary};
  height: 60px;
`;
