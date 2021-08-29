import styled from "@emotion/styled";

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.colors.bgStatistics};
  width: fit-content;
  margin: 20px auto;
`;

export const TitleStatistics = styled.h2`
  text-align: center;
  line-height: 60px;
`;

export const StatisticsList = styled.ul`
  display: flex;
`;

export const ItemStatistic = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 17px;
  background-color: aqua;
  color: white;
`;
