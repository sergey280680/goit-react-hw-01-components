import styled from "@emotion/styled";

export const Table = styled.table`
  background-color: ${(props) => props.theme.colors.bgTransactionsTable};
  width: 700px;
  margin: 10px auto;
`;

export const StringTable = styled.tr`
  text-align: center;
  height: 50px;
  background-color: ${(props) => props.theme.colors.bgStringTable};
`;
