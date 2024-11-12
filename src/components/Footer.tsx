import styled from 'styled-components';

export default function Footer() {
  return (<DisclaimerContainer>
    <Disclaimer>
      Designed and built by <Anchor href="https://github.com/ryanpag3" target="_blank" referrerPolicy='no-referrer'>@ryanpag3</Anchor>
    </Disclaimer>
  </DisclaimerContainer>);
}

const DisclaimerContainer = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

const Disclaimer = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text.secondary};
  font-family: var(--font-mono);
  text-decoration: none;
`;

const Anchor = styled.a`
  color: ${({ theme }) => theme.text.primary};
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.text.accent};
  }
`;
