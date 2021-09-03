import { randomColor } from "utils";
import PropTypes from "prop-types";
import {
  StatisticsList,
  Wrapper,
  TitleStatistics,
  ItemStatistic,
} from "./Statistics.styled";

export const Statistics = ({ title, items }) => {
  return (
    <Wrapper>
      {title && <TitleStatistics>{title}</TitleStatistics>}

      <StatisticsList>
        {items.map(({ id, label, percentage }) => (
          <ItemStatistic key={id} style={{ backgroundColor: randomColor() }}>
            <span>{label}</span>
            <span>{percentage}</span>
          </ItemStatistic>
        ))}
      </StatisticsList>
    </Wrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
