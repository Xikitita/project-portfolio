import styled from "styled-components";
import profileImg from "../assets/demo-profile-pic.jpg";
import github from "../assets/footer-btn-github.png";
import linkedIn from "../assets/footer-btn-linkedin.png";

export const Footer = () => {
  return (
    <>
      <FooterSection>
        <Heading1>Let's talk!</Heading1>
        <ProfileImg src={profileImg} alt="Profile picture" />
        <Heading2>
          Alexandra Franzén <br></br>
          <EmailLink href="mailto:alexandra.s.franzen@gmail.com">
            alexandra.s.franzen@gmail.com
          </EmailLink>
        </Heading2>
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
      </FooterSection>
    </>
  );
};

const FooterSection = styled.div`
  width: 343px;
  height: 460px;
  margin-top: 84px;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
`;

const Heading1 = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-size: 31px;
  font-weight: 700;
  text-align: center;
`;

const Heading2 = styled.h2`
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 760;
  width: 343px;
  text-align: center;
`;

const EmailLink = styled.a`
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 760;
  width: 343px;
  text-align: center;

    &:hover {
    text-decoration: underline;
  }
`;

const ImgSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
