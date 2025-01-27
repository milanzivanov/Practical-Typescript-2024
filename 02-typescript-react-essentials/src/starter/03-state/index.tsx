/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    url: "https://reactjs.org",
    text: "react docs"
  },
  {
    id: 2,
    url: "https://reactrouter.com",
    text: "react router docs"
  },
  {
    id: 3,
    url: "https://reacttraining.com",
    // remove text property to see the error
    text: "react training"
  }
];

function Component() {
  const [text, setText] = useState("shakeAndBake");
  const [number, setNumber] = useState(5);
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);

  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setText("text");
          setNumber(19);
          setList(["hello", "Milan"]);
          setLinks([...links, { id: 4, url: "hello", text: "text" }]);
        }}
      >
        Click me
      </button>
      <div>
        {text} and {number} and {list.join(" ")}
        <ul>
          {links.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Component;
