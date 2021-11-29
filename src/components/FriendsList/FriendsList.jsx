import React from 'react';
import s from './FriendsList.module.css';
import { PropTypes } from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ status, avatar, name, isOnline, id }) => (
        <li className={s.item} key={id}>
          <span className={s.status + ' ' + (isOnline ? s.on : s.off)} />
          <img className={s.avatar} src={avatar} alt={name} width="48" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
