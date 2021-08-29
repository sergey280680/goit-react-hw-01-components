import styled from "@emotion/styled";

export const BoardList = styled.ul`
  background-color: ${(props) => props.theme.colors.bgBoardFriends};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(227px, auto));

  gap: 31px;
  padding: 20px 40px;
`;
