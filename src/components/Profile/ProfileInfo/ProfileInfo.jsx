import React from 'react';
import s from './ProfileInfo.module.css';

function ProfileInfo() {
  return (
    <div className={s.profileInfo}>
      <div>Profile</div>
      <img className={s.main_img} src="http://www.bluemaize.net/im/baby/beach-photos-3.jpg" alt="" />
      <div className={s.descriptionBlock}>
        ds
      </div>
    </div>
  );
}

export default ProfileInfo;