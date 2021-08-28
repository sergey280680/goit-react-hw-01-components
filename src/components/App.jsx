import friends from "../friends.json";
import { UserBoard } from "components/UserBoard/UserBoard";
import user from "../user.json";
import { FriendsBoard } from "components/FriendsBoard/FriendsBoard";

export const App = () => {
  return (
    <div>
      <FriendsBoard events={friends} />
      <UserBoard event={user} />
    </div>
  );
};
