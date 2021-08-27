import PropTypes from "prop-types";
import { Event } from "components/Event/Event";
import css from "./EventBoard.module.css";

export const EventBoard = ({ event }) => {
  return (
    <div className={css.eventBoard}>
      <Event
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

EventBoard.propTypes = {
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
