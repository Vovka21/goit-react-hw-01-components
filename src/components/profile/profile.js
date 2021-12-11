import React from 'react';
import user from './user.json';
import PropTypes from 'prop-types';

const data = user;

const Profile = () => {
  return (
    <div className="profile">
      <div className="description">
        <img src={data.avatar} alt="User avatar" className="avatar" />
        <p className="name">{data.username}</p>
        <p className="tag">{data.tag}</p>
        <p className="location">{data.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{data.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{data.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{data.stats.likes}</span>
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
