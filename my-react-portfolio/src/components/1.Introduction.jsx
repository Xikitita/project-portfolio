import styled from "styled-components";
import vector1 from "../assets/vector1.svg";

export const Introduction = () => {
  return (
    <>
      <TopSection>
        <section>
          <Heading1>Hi, I&apos;m Alexandra Franzén</Heading1>
          <Heading2>Frontend Developer</Heading2>
          <Text>
            I&apos;m a Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
            massa. Vestibulum lacinia arcu eget nulla. Fusce nec tellus sed
            augue semper porta. Mauris massa.
          </Text>
        </section>
        <Arrow src={vector1} alt="Arrow image" />
      </TopSection>
    </>
  );
};
{
  /* <img src={}
alt="Profile picture"/> */
}

const TopSection = styled.div`
  width: 343px;
  height: 460px;
  margin-top: 64px;
 margin: auto;
  /* Grid layout for centering */
  display: grid;
  place-items: center;
`;

const Heading1 = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 21, 94px;
  width: 343px;
  height: 22px;
  gap: 0px;
  opacity: 0px;
`;

const Heading2 = styled.h2`
  color: #0b24f5;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 700;
  line-height: 39.01px;
  text-align: left;
  margin-left: 16px;
`;

const Text = styled.p`
  font-family: Hind;
  font-size: 16px;
  font-weight: 400;
  line-height: 28.82px;
  text-align: left;
  width: 343px;
  height: 203px;
  margin-left: 16px;
`;

const Arrow = styled.img`
  width: 100%;
  height: 30px;
  margin-top: 33px;
`;
