import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {

  let postsElement = props.postsData.map( p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>

      <div className={s.postAdd}>
        <textarea name="" id="" cols="30" rows="3"></textarea>
        <button>Add</button>
      </div>

      <div className={s.posts}>

        {postsElement}

      </div>
    </div>
  );
}

export default MyPosts;