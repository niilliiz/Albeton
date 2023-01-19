import React from "react";
import styles from "./post_style.module.scss";

const CATEGORY_COLOR = {
  Video: "#da77f2",
  Artists: "#ff0956",
  Packs: "#00ffaf",
  Loop: "#3bc9db",
  Downloads: "#FF764D",
  Tutorials: "#00A2B0",
};

const Post = ({ className = "", post }) => {
  return (
    <div className={`${styles.post} ${className}`}>
      <div
        className={styles.post__bgImg}
        style={{ backgroundImage: `url(${post.img})` }}
      />
      <span
        className={styles.category}
        style={{ color: CATEGORY_COLOR[post.category] }}
      >
        {post.category}
      </span>
      <h4 className="h4">{post.title}</h4>
    </div>
  );
};
export default Post;
