import React from 'react';
import user from '../../data/user.json';
import PropTypes from 'prop-types';
import styles from './profile.module.css';

const data = user;

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={data.avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{data.username}</p>
        <p className={styles.tag}>{data.tag}</p>
        <p className={styles.location}>{data.location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{data.stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{data.stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{data.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
