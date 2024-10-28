//? Components
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
//? JSON
import { username, tag, location, avatar, stats } from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
//? CSS
import 'modern-normalize';
import '../style.css';

const App = () => {
  return (
    <div>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
