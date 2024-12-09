import styled from "styled-components";
import livedemo from "../../assets/Live-Demo.png";
import viewcode from "../../assets/View-Code.png";

export const Button = ({ netlifyLink, githubLink }) => {
  return (
    <ButtonContainer>
      <StyledLink
        href={netlifyLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Live demo in a new tab">
        <img src={livedemo} alt="Live Demo Button" />
      </StyledLink>
      <StyledLink 
      href={githubLink} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="View source code on GitHub in a new tab">
        <img src={viewcode} alt="View Code Button" />
      </StyledLink>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;

  @media (min-width: 668px) {
    width: 100%;
    margin-left: 16px;
    display: flex;
    justify-content: flex-start;
  }
`;

const StyledLink = styled.a`
  display: flex;
  padding-right: 16px;
  align-items: center;
  gap: 7px;
  text-decoration: none;

  &:focus {
    outline: 2px solid #005fcc; /* Visible focus indicator */
    border-radius: 12px;
    width: 265px;
  }

  img {
    max-width: 100%; /* Ensure the images scale properly */
    height: auto;
  }
`;
