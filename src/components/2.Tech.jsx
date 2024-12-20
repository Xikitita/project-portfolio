import styled from "styled-components";

export const Tech = () => {
  return (
    <div>
      <Container aria-label="Technologies I work with">
        <Heading2>Tech</Heading2>
        <Text>
          JavaScript, ES6, React, React Hooks, Node.js, Express.js, MongoDB,
          Mongoose, APIs, Git, GitHub, CSS, HTML, Styled-Components, Flexbox,
          JSX, Web Accessibility, NPM
          <Spacer />
          Upcoming: TypeScript
        </Text>
      </Container>
    </div>
  );
};

const Container = styled.section`
  background: #000;
  color: #ffffff;
  width: 100%;
  height: 460px;
  margin: auto;
  display: grid;
  place-items: center;

  @media (min-width: 668px) {
    height: 627px;
    margin-bottom: 100px;
  }
`;

const Heading2 = styled.h2`
  height: 68px;
  font-family: Montserrat;
  font-size: 56px;
  font-weight: 700;
  line-height: 68.26px;
  text-align: center;
`;

const Text = styled.p`
  font-family: Hind;
  font-size: 16px;
  font-weight: 600;
  line-height: 38.42px;
  text-align: left;
  padding: 0 16px;
  margin: auto;

  @media (min-width: 668px) {
    font-size: 24px;
    text-align: center;
    width: 680px;
    height: 284px;
  }
`;

const Spacer = styled.div`
  height: 16px;

  @media (min-width: 668px) {
    height: 24px;
  }
`;
