import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusFriends = isOnline ? s.online : s.offline;
  return (
    <div className={s.card}>
      <img src={avatar} alt="Avatar" width="120" />
      <p className={s.name}>{name}</p>
      <p className={`${s.status} ${statusFriends}`}>
        {isOnline ? 'online' : 'offline'}
      </p>
    </div>
  );
};

export default FriendListItem;