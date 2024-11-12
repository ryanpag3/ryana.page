import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';

export default function Section({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            ScrollReveal().reveal(sectionRef.current, {
                duration: 500,
                delay: 250
            });
        }
    }, []);

    return (
        <Container id={id} ref={sectionRef}>
            <SectionTitle title={title} />
            {children}
        </Container>
    );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  padding-bottom: 150px;
`;