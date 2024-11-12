import styled from 'styled-components';

export default function NavMenu() {

  function scrollIntoView(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <Menu>
      <MenuItem onClick={() => scrollIntoView("introduction")}>Introduction</MenuItem>
      <MenuItem onClick={() => scrollIntoView("about-me")}>About Me</MenuItem>
      <MenuItem onClick={() => scrollIntoView("work-experience")}>Experience</MenuItem>
      <MenuItem onClick={() => scrollIntoView("projects")}>Projects</MenuItem>
    </Menu>
  );
}

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-right: 30px; 
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