import styled from "@emotion/styled";

export const CardProfile = styled.div`
  width: fit-content;
  background-color: ${(props) => props.theme.colors.bgCardProfile};
  border: solid 1px black;
  margin: 50px auto;
`;

export const Description = styled.div`
  text-align: center;
  margin: 30px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin: 20px 0 5px;
`;

export const Tag = styled.p`
  color: ${(props) => props.theme.colors.location};
`;

export const Location = styled.p`
  margin-top: 3px;
  color: ${(props) => props.theme.colors.location};
`;

export const StatusList = styled.ul`
  background-color: ${(props) => props.theme.colors.bgStatusUser};
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding: 22px;
`;

export const StatusItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 19px;
  font-weight: 600;
`;
