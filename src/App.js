import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Bob", animal: "Dog", breed: "Labrador" }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Chino",
      animal: "Cat",
      breed: "Shorthair",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
