/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Link from "../../../../components/link/link";
import Post from "../../components/post/post";

import styles from "./row_style.module.scss";

const Row = ({ row }) => {
  return (
    <div className={styles.row}>
      <div className={styles.row__header}>
        <h2 className="h2">{row.title}</h2>
        <ul className={styles.categories}>
          {row.categories.map((category) => (
            <li key={category}>
              <a href="#">{category}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.row__posts}>
        {row.posts.map((post) => (
          <Post className={styles.post} key={post.title} post={post} />
        ))}
      </div>
      <Link
        content="See More"
        weight="bold"
        className={`clr--primary fw--600 ${styles.more}`}
      />
    </div>
  );
};
export default Row;
