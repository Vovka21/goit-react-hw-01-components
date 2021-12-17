// import logo from './logo.svg';
import './App.css';

import Profile from './components/profile/profile';
import user from './components/profile/user.json';

import Statistics from './components/statistics/statistics';
import data from './components/statistics/data.json';

import FriendList from './components/friendsList/friendList';
import friends from './components/friendsList/friends.json';

import TransactionHistory from './components/tranzactionHistory/TransactionHistory';
import transactions from './components/tranzactionHistory/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
