import React from 'react';
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import Profile from '../Profile/Profile.jsx';
import Statistics from '../Statistics/Statistics.jsx';
import FriendList from '../FriendsList/FriendsList.jsx';
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx';
import s from './App.module.css';

export default function App() {
  return (
    <div className={s.App}>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
