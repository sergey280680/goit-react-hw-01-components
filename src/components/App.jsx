import { EventBoard } from "components/EventBoard/EventBoard";
import user from "../user.json";

export const App = () => {
  return (
    <div>
      <EventBoard event={user} />
    </div>
  );
};
