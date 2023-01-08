import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author='Diego Fernandes'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sequi consectetur amet repellat neque vitae perspiciatis. Corporis, amet obcaecati ipsa, ea eos eveniet repellat omnis dolorum commodi, molestias sint magni?'
      />
      <Post author='Gabriel Buzzi' content='Um novo post muito legal' />
    </div>
  );
}
