import PropTypes from "prop-types";
import { UserCard } from "components/UserCard/UserCard";
import css from "./UserBoard.module.css";

// export const UserBoard = ({ event }) => {
export const UserBoard = ({ event }) => {
  return (
    <div className={css.userBoard}>
      <UserCard
        name={event.name}
        tag={event.tag}
        location={event.location}
        avatar={event.avatar}
        followers={event.stats.followers}
        views={event.stats.views}
        likes={event.stats.likes}
      />
    </div>
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
