import styled from 'styled-components';

export default function SectionTitle({ title }: { title: string }) {
    return (
        <Container>
            <h1>// {title}</h1>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    h1 {
        font-size: 40px;
        font-family: var(--font-mono);
        font-weight: 600;
        color: ${({ theme }: any) => theme.text.secondary};
    }
`;