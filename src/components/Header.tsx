import styled from 'styled-components';
import SocialsBar from './SocialsBar';
import NavMenu from './NavMenu';

export default function Header() {
  return (
    <Container>
      <SocialsBar /> {/* position absolute */}
      <EmptySpace />
      <NavMenu/>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 10px;

    @media (max-width: 480px) {
      padding-top: 0;
    };
`;

const EmptySpace = styled.div`
  display: flex;
  flex: 1;
`;