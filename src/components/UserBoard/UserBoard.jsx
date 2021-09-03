import PropTypes from "prop-types";
import { UserCard } from "components/UserBoard/UserCard/UserCard";
import { BoardUser } from "./UserBoard.styled";

export const UserBoard = ({ event }) => {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = event;
  return (
    <BoardUser>
      <UserCard
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
    </BoardUser>
  );
};

UserBoard.propTypes = {
  event: PropTypes.exact({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.exact({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
