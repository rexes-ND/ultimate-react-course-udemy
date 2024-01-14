import { useState } from "react";

import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  function handleClick(num) {
    curOpen === num ? setCurOpen(null) : setCurOpen(num);
  }

  return (
    <div className="accordion">
      {/* <ul> */}
      {data.map((faq, num) => (
        <AccordionItem
          item={faq}
          num={num}
          isOpen={curOpen === num}
          handleClick={handleClick}
          key={faq.title}
        />
      ))}
      {/* </ul> */}
    </div>
  );
}

function AccordionItem({ num, item, isOpen, handleClick }) {
  return (
    <div
      className={isOpen ? "item open" : "item"}
      onClick={() => handleClick(num)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{item.title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{item.text}</div>}
    </div>
  );
}
