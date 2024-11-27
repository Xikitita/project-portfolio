import styled from "styled-components";

export const Tags = ({ tags }) => {
  return (
    <TagsContainer>
      {tags.map((tag, index) => (
        <TagItem key={index}>{tag}</TagItem>
      ))}
    </TagsContainer>
  );
};

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 0 16px;
`;

const TagItem = styled.div`
  color: #000;
  border: 1px solid black;
  border-radius: 3px;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 2px;
`;
