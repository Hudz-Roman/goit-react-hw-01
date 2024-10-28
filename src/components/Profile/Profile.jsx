import clsx from 'clsx';
import s from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={clsx(s.profile, 'container')}>
      <div>
        <img className={s.avatar} src={image} alt='User avatar' />
        <p className={s.name}>{name}</p>
        <p className={s.info}>@{tag}</p>
        <p className={s.info}>{location}</p>
      </div>
      <ul className={s.list}>
        <li className={s.list_item}>
          <span className={s.stat_el}>Followers</span>
          <span className={s.stat_num}>{followers}</span>
        </li>
        <li className={clsx(s.list_item, s.center_item)}>
          <span className={s.stat_el}>Views</span>
          <span className={s.stat_num}>{views}</span>
        </li>
        <li className={s.list_item}>
          <span className={s.stat_el}>Likes</span>
          <span className={s.stat_num}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
