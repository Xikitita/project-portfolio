import styled from "styled-components";
import livedemo from "../../assets/Live-Demo-Button.svg";
import viewcode from "../../assets/View-Code-Button.svg";

export const Button = ({ netlifyLink, githubLink }) => {
  return (
    <ButtonContainer>
      <Link href={netlifyLink} target="_blank" rel="noopener noreferrer">
        <img src={livedemo} alt="Live Demo Button" />
      </Link>
      <Link href={githubLink} target="_blank" rel="noopener noreferrer">
        <img src={viewcode} alt="View Code Button" />
      </Link>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Link = styled.a`
  display: flex;
  padding-right: 16px;
  align-items: center;
  gap: 7px;
  text-decoration: none; /* Removes the underline from the links */
`;
