import styled from 'styled-components';

export default function NavMenu() {
  const { innerWidth } = window;

  function scrollIntoView(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (innerWidth > 480 ?
    <Menu>
      <MenuItem onClick={() => scrollIntoView("introduction")}>Introduction</MenuItem>
      <MenuItem onClick={() => scrollIntoView("about-me")}>About Me</MenuItem>
      <MenuItem onClick={() => scrollIntoView("work-experience")}>Experience</MenuItem>
      <MenuItem onClick={() => scrollIntoView("projects")}>Projects</MenuItem>
      <MenuItem><ResumeAnchor href='/ryana.page/ryanpage-resume-2024.pdf'>Resume</ResumeAnchor></MenuItem>
    </Menu> : null
  );
}

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-right: 30px;
  margin-top: 10px;
`;

const MenuItem = styled.button`
  color: ${({ theme }) => theme.text.primary};
  font-size: 16px;
  font-weight: 200;
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
  border: none;

  &:hover {
    color: ${({ theme }) => theme.text.secondary};
    text-decoration: underline;
  }
`;

const ResumeAnchor = styled.a`
  color: ${({ theme }) => theme.text.primary};
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;