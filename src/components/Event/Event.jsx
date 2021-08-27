// import PropTypes from "prop-types";
import css from "./Event.module.css";
import user from "user.json";
const { name, tag, location, avatar, stats } = user;

export const Event = () => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="Аватар пользователя" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Follwers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>View</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Like</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Event.propTypes = {
//     name: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.number.isRequired,
//   //   followers: PropTypes.number.isRequired,
//   //   views: PropTypes.number.isRequired,
//   //   likes: PropTypes.number.isRequired,
// };
