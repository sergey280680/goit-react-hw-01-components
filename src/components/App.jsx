import friends from "../friends.json";
import { UserBoard } from "components/UserBoard/UserBoard";
import statisticalData from "../statistical-data.json";
import { Statistics } from "components/Statistics/Statistics";
import transactions from "../transaction-history.json";
import { Transactions } from "components/Transactions/Transactions";
import user from "../user.json";
import { FriendsBoard } from "components/FriendsBoard/FriendsBoard";

export const App = () => {
  return (
    <>
      <FriendsBoard events={friends} />
      <Statistics title="Upload stats" items={statisticalData} />
      <Transactions events={transactions} />
      <UserBoard event={user} />
    </>
  );
};
