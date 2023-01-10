import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://avatars.githubusercontent.com/u/94336147?v=4' />
          <div className={styles.authorInfo}>
            <strong>Dynylson Junior</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='9 de Janeiro às 11:26' dateTime='2023-01-09 11:26:31'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
