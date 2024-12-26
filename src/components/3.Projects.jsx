import styled from "styled-components";
import { projects } from "../../projects.json";
import { Tags } from "../components/reusable-components/Tags";
import { Button } from "../components/reusable-components/Button";

export const Projects = () => {
  return (
    <section aria-labelledby="featured-projects-heading">
      <Heading2>Featured Projects</Heading2>
      <ColumnLayout>
        {projects.map((project, index) => (
          <ProjectsContainer key={index}>
            {project.image ? (
              <Img
                src={project.image}
                alt={`image of project ${project.name}`}
              />
            ) : (
              <NoImage>
                <p>Oops... no image available</p>
              </NoImage>
            )}

            <Tags tags={project.tags} />
            <Title>{project.name}</Title>
            <Text>{project.text}</Text>
            <Button netlifyLink={project.netlify} githubLink={project.github} />
          </ProjectsContainer>
        ))}
      </ColumnLayout>
    </section>
  );
};

const ColumnLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin: auto;

  @media (min-width: 668px) {
    gap: 100px;
  }
`;

const ProjectsContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Heading2 = styled.h2`
  color: #000;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;

  @media (min-width: 668px) {
    font-size: 56px;
    text-align: left;
    margin-left: 16px;
  }
`;

const Img = styled.img`
  border-radius: 12px;
  border: 1px solid;
  width: 95%;
  max-width: 680px;
  height: 300px;
  object-fit: cover;
  object-position: top;
  margin: auto;
`;

const Title = styled.h3`
  align-self: stretch;
  color: #000;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  padding-left: 16px;
  margin-bottom: -20px;
`;

const Text = styled.p`
  align-self: stretch;
  color: #000;
  font-family: Hind;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  padding: 0 16px;
`;

const NoImage = styled.span`
  font-style: italic;
  margin-left: 16px;
`;
