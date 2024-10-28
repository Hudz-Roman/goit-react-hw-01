import s from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusFriends = isOnline ? s.online : s.offline;
  return (
    <li className={s.fr_card}>
      <img src={avatar} alt='Avatar' width='48' />
      <p>{name}</p>
      <p className={`${statusFriends}`}>{isOnline ? 'Online' : 'Offline'}</p>
    </li>
  );
};

export default FriendListItem;
