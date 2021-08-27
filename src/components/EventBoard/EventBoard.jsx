import { Event } from "components/Event/Event";
import css from "./EventBoard.module.css";

export const EventBoard = () => {
  return (
    <div className={css.eventBoard}>
      <Event />
    </div>
  );
};
