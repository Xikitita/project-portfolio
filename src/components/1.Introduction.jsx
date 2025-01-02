import styled from "styled-components";
import profileImg from "../assets/profile-pic.jpg";
import github from "../assets/footer-btn-github.png";
import linkedIn from "../assets/footer-btn-linkedin.png";

export const Introduction = () => {
  return (
    <>
      <TopSection>
        <ProfileImg src={profileImg} alt="Profile picture" />

        <Heading1>Hi, I&apos;m Alexandra Franzén</Heading1>
        <Heading2>Web Developer</Heading2>
        <Text>
          A team player with a positive mindset, a problem-solving approach and
          a passion for learning. I enjoy exploring new technologies and
          contributing to collaborative projects.
          <ImgSection>
            <a
              href="https://www.linkedin.com/in/alexandra-franz%C3%A9n-b9121b2b1/"
              target="_blank"
              rel="noopener noreferrer">
              <img src={linkedIn} alt="LinkedIn Profile" />
            </a>
            <a
              href="https://github.com/Xikitita"
              target="_blank"
              rel="noopener noreferrer">
              <img src={github} alt="GitHub Profile" />
            </a>
          </ImgSection>
        </Text>
      </TopSection>
    </>
  );
};

const TopSection = styled.section`
  width: 343px;
  height: 460px;
  margin-top: 64px;
  margin-left: 16px;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;

  @media (min-width: 668px) {
    width: 744px;
    height: auto;
    margin-bottom: 100px;
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: auto;
    gap: 8px;
  }
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: auto;
  object-fit: cover;

  @media (min-width: 668px) {
    display: grid;
    grid-column: 1;
    grid-row: 3;
    margin-left: 16px;
  }
`;

const Heading1 = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  width: 343px;

  @media (min-width: 668px) {
    dispaly: grid;
    grid-column: 1;
    grid-row: 1;
    margin-left: 16px;
  }
`;

const Heading2 = styled.h2`
  color: #000;
  font-family: Montserrat;
  font-size: 31px;
  font-weight: 700;
  line-height: 5px;
  text-align: left;

  @media (min-width: 668px) {
    display: grid;
    grid-row: 2;
    grid-column: 1 / 3;
    margin-left: 16px;
  }
`;

const Text = styled.p`
  color: #000000;
  font-family: Hind;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  width: 343px;
  height: 203px;
  margin: auto;

  @media (min-width: 668px) {
    display: grid;
    grid-row: 3;
    grid-column: 1 / 2;
    text-align: left;
    font-size: 16px;
    line-height: 29px;
    width: 494px;
    height: 145px;
    padding-left: 180px;
  }
`;

const ImgSection = styled.section`
  display: flex;
  justify-content: left;
  margin-top: 16px;
`;
