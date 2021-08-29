import styled from "@emotion/styled";

export const Card = styled.li`
  background-color: ${(props) => props.theme.colors.bgCardFriend};
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
  border: solid 1px black;
  border-radius: 5px;
  box-shadow: 0 0 10px rgb(0 0 0 / 50%);
  padding: 10px;
`;

export const Avatar = styled.img`
  background-color: ${(props) => props.theme.colors.bgAvatar};
  border-radius: 5px;
  border: solid 1px black;
  margin-right: 10px;
  width: 48px;
`;

export const UserName = styled.p`
  font-size: 25px;
`;

export const OnLineStatus = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 10px;

  background-color: ${(props) => {
    if (props.status) {
      return `green`;
    }
    return `red`;
  }};
`;
