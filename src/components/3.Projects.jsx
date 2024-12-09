import styled from "styled-components";
import { projects } from "../../projects.json";
import { Tags } from "../components/reusable-components/Tags";
import { Button } from "../components/reusable-components/Button";

export const Projects = () => {
  return (
    <div>
      <Heading2>
        Featured Projects
      </Heading2>
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
    </div>
  );
};

const ColumnLayout = styled.div`
  width: 343px;
  display: grid;
  place-items: center;
  gap: 64px;
  margin: auto;
  overflow: hidden;

  @media (min-width: 668px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 680;
    gap: 100px;
  }
`;

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const Heading2 = styled.h2`
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 66px;
  width: 80%;
  margin: auto;
  padding-bottom: 64px;
  padding-top: 64px;

  
  @media (min-width: 668px) {
  display: flex;
  justify-content: flex-start;
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
  margin-left: 16px;
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
