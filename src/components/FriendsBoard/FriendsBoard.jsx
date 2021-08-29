import PropTypes from "prop-types";
import { FriendCard } from "components/FriendCard/FriendCard";
import { BoardList } from "./FriendsBoard.styled";

export const FriendsBoard = ({ events }) => {
  return (
    <BoardList>
      {events.map(({ avatar, name, isOnline, id }) => (
        <FriendCard
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </BoardList>
  );
};

FriendsBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
