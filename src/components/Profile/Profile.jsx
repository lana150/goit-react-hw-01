import s from './Profile.module.css';
const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <img className={s.image} alt="Avatar" src={image} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.statsItemLabel}>Followers</span>
          <span className={s.statsItemSpan}>{followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.statsItemLabel}>Views</span>
          <span className={s.statsItemSpan}>{views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.statsItemLabel}>Likes</span>
          <span className={s.statsItemSpan}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;