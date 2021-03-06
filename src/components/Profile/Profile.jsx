import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  return (
    <div className={s.content}>

      <ProfileInfo />
      <MyPosts postsData={props.postsData} />

    </div>
  );
}

export default Profile;