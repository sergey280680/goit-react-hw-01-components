import PropTypes from "prop-types";
import {
  CardProfile,
  Description,
  Name,
  Tag,
  Location,
  StatusList,
  StatusItem,
  Label,
} from "./UserCard.styled";

export const UserCard = ({
  name,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <CardProfile>
      <Description>
        <img src={avatar} alt="Аватар пользователя" />
        <Name>{name}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatusList>
        <StatusItem>
          <Label>Follwers</Label>
          <span>{followers}</span>
        </StatusItem>
        <StatusItem>
          <Label>View</Label>
          <span>{views}</span>
        </StatusItem>
        <StatusItem>
          <Label>Like</Label>
          <span>{likes}</span>
        </StatusItem>
      </StatusList>
    </CardProfile>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
