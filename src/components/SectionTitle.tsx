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
        font-size: 48px;
        font-family: var(--font-mono);
        font-weight: 600;
        color: ${({ theme }) => theme.text.secondary};
    }
`;