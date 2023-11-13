import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return <article>
    <h1>Hello Article</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium in quam. Quod incidunt temporibus sint, minus, dicta maiores optio eligendi vero reiciendis fugit dolorem eos? Non dignissimos architecto ipsum?
    </p>
  </article>;
}
