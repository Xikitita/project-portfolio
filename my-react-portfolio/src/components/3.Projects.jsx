import styled from "styled-components";
import { projects } from "../../../projects.json";
import { Tags } from "../components/reusable-components/Tags";
import { Button } from "../components/reusable-components/Button";

export const Projects = () => {
  return (
    <div>
      <Heading2>
        Featured <br></br>Projects
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
            <Title>{project.name}</Title>
            <Text>{project.text}</Text>
            <Tags tags={project.tags} />
            <Button netlifyLink={project.netlify} githubLink={project.github} />
          </ProjectsContainer>
        ))}
      </ColumnLayout>
    </div>
  );
};

const ColumnLayout = styled.div`
  width: 343px;
  flex-direction: column;
  align-items: flex-start;
  gap: 64px;
  margin: auto;
  display: grid;
  place-items: center;
`;

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;
const Heading2 = styled.h2`
  color: #0b24f5;
  text-align: center;
  font-family: Montserrat;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 66px;
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Title = styled.h3`
  align-self: stretch;
  color: #000;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  padding-left: 16px;
  line-height: normal;
`;

const Text = styled.p`
  align-self: stretch;
  color: #000;
  font-family: Hind;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  padding: 0 16px;
  line-height: normal;
`;

const NoImage = styled.span`
  font-style: italic;
`;
