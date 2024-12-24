import s from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.box}>
      <div className={s.contact}>
        <img className={s.img} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.tag}>{location}</p>
      </div>

      <ul className={s.ul}>
        <li className={s.li}>
          <span>Followers</span>
          <span className={s.stats}>{stats.followers}</span>
        </li>
        <li className={s.views}>
          <span>Views</span>
          <span className={s.stats}>{stats.views}</span>
        </li>
        <li className={s.li}>
          <span>Likes</span>
          <span className={s.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;









/*import s from './Profile.module.css';
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

export default Profile;*/