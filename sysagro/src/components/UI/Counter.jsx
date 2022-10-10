import React from "react";
import "../../styles/counter.css";

const counterData = [
  {
    number: "5k",
    text: "Clientes",
  },
  {
    number: 350,
    text: "Clientes",
  },
  {
    number: 900,
    text: "Clientes",
  },
];

const Counter = () => {
  return (
    <section className="counter">
      <div className="container">
        <div className="counter__wrapper">
          {counterData.map((item, index) => (
            <div className="counter__item">
              <h3 className="counter__number">{item.number}</h3>
              <h4 className="counter__title">{item.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
