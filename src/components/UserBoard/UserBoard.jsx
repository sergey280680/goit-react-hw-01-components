import PropTypes from "prop-types";
import { UserCard } from "components/UserCard/UserCard";
import { BoardUser } from "./UserBoard.styled";

export const UserBoard = ({ event }) => {
  return (
    <BoardUser>
      <UserCard
        name={event.name}
        tag={event.tag}
        location={event.location}
        avatar={event.avatar}
        followers={event.stats.followers}
        views={event.stats.views}
        likes={event.stats.likes}
      />
    </BoardUser>
  );
};

UserBoard.propTypes = {
  event: PropTypes.exact({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
