import friends from "data/friends.json";
import { UserBoard } from "components/UserBoard/UserBoard";
import statisticalData from "data/statistical-data.json";
import { Statistics } from "components/Statistics/Statistics";
import transactions from "data/transaction-history.json";
import { Transactions } from "components/Transactions/Transactions";
import user from "data/user.json";
import { FriendsBoard } from "components/FriendsBoard/FriendsBoard";
import { Container } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <FriendsBoard events={friends} />
      <Statistics title="Upload stats" items={statisticalData} />
      <Transactions events={transactions} />
      <UserBoard event={user} />
    </Container>
  );
};
//
