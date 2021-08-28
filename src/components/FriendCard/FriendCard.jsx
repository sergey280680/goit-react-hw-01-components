import PropTypes from "prop-types";
import css from "./FriendCard.module.css";

export const FriendCard = ({ avatar, name, isOnline }) => {
  let onLineStatus = isOnline ? css.onLine : css.ofLine;

  return (
    <li className={css.item}>
      <span className={`${css.status} ${onLineStatus}`}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
