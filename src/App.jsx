import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Diego Fernandes'
            content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis velit porro quas, perferendis dolorum sit quisquam! Ad, error et dolore expedita corrupti molestiae deserunt debitis sit soluta odit fugiat possimus.'
          />
          <Post author='Gabriel Buzzi' content='Um novo post muito legal' />
        </main>
      </div>
    </div>
  );
}
