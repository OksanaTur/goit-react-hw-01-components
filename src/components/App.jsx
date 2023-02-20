import { AppStyled } from "./AppStyled";
import { GlobalStyle } from "./Profile/GlobalStyle";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import friends from '../components/FriendList/friends';
import transactions from '../components/TransactionHistory/transactions.json';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
  <AppStyled>
      <GlobalStyle/>
      <Profile /> <Statistics /> <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </AppStyled>
  );
};
