import styled from "styled-components";
import profileImg from "../assets/demo-profile-pic.jpg";

export const Introduction = () => {
  return (
    <>
      <TopSection>
        <ProfileImg src={profileImg} alt="Profile picture" />
        <Heading1>Hi, I&apos;m Alexandra Franzén</Heading1>
        <Heading2>Web Developer</Heading2>
        <Text>
          And a team player with a positive mindset, a problem-solving approach, and
          a passion for learning. I enjoy exploring new technologies and
          contributing to impactful, collaborative projects.
        </Text>
      </TopSection>
    </>
  );
};

const TopSection = styled.div`
  width: 343px;
  height: 460px;
  margin-top: 64px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: auto;
`;

const Heading1 = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  width: 343px;
`;

const Heading2 = styled.h2`
  color: #000;
  font-family: Montserrat;
  font-size: 31px;
  font-weight: 700;
  line-height: 5px;
  text-align: left;
`;

const Text = styled.p`
  font-family: Hind;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  width: 343px;
  height: 203px;
  margin: auto;
`;
