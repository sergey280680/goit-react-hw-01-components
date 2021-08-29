import PropTypes from "prop-types";
import { Card, Avatar, UserName, OnLineStatus } from "./FriendCard.styled";

export const FriendCard = ({ avatar, name, isOnline }) => {
  return (
    <Card>
      <OnLineStatus status={isOnline}></OnLineStatus>
      <Avatar src={avatar} alt={name} />
      <UserName>{name}</UserName>
    </Card>
  );
};

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
