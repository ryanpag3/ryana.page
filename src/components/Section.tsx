import styled from 'styled-components';
import SectionTitle from './SectionTitle';

export default function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <Container>
            <SectionTitle title={title} />
            {children}
        </Container>
    );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 50px 0;
`;