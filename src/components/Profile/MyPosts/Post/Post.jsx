import React from 'react';
import s from './Post.module.css';

function Post(props) {
  return (
    <div className={s.post}>
      <img src="http://cdn.onlinewebfonts.com/svg/img_568656.png" alt="" />
      <div className={s.message}>
        <p>{props.message}</p>
      </div>
      <div className={s.like}>{props.likesCount}</div>
    </div>
  );
}

export default Post;