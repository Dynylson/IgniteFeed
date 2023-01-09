import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src='https://avatars.githubusercontent.com/u/94336147?v=4'
          />
          <div className={styles.authorInfo}>
            <strong>Dynylson Junior</strong>
            <strong>Web Developer</strong>
          </div>
        </div>

        <time title='9 de Janeiro às 11:26' dateTime='2023-01-09 11:26:31'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            👉<a href='#'>jane.design/doctorcare</a>{" "}
          </p>
          <p>
            <a href='#'>#novoprojeto #nlw #rocketseat</a>
          </p>
        </p>
      </div>
    </article>
  );
}
