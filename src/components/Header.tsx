import styled from 'styled-components';
import SocialsBar from './SocialsBar';
import NavMenu from './NavMenu';

export default function Header() {
  return (
    <Container>
      <SocialsBar /> {/* position absolute */}
      <EmptySpace />
      <NavMenu/>
      {/* <ResumeButton
        href='/ryana.page/ryanpage-resume-2024.pdf'
      >Resume</ResumeButton> */}
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 10px;
`;

const EmptySpace = styled.div`
  display: flex;
  flex: 1;
`;

const ResumeButton = styled.a`
  margin-right: 10px;
  background-color: ${({ theme }) => theme.button.primary.background};
  color: ${({ theme }) => theme.button.primary.text};
  border: none;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.button.primary.onHover};
    color: ${({ theme }) => theme.button.primary.textOnHover};
  }
`;