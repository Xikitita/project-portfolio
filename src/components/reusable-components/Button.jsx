import styled from "styled-components";
import livedemo from "/live-demo.png";
import viewcode from "/view-code.png";

export const Button = ({ netlifyLink, githubLink }) => {
  return (
    <ButtonContainer>
      <StyledLink
        href={netlifyLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Live demo in a new tab">
        <img src={livedemo} alt="Live Demo Button" tabIndex="0" />
      </StyledLink>
      <StyledLink
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View source code on GitHub in a new tab">
        <img src={viewcode} alt="View code button" tabIndex="0" />
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

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;

    &:focus {
      outline: 2px solid #005fcc;
      border-radius: 12px;
    }
  }
`;
