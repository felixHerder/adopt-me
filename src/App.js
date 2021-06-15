import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, { name: "Bob", animal: "Dog", breed: "Labrador" }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Cockatiel",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Chino",
  //     animal: "Cat",
  //     breed: "Shorthair",
  //   }),
  // ]);
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Bob" animal="Dog" breed="Labrador" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Chino" animal="Cart" breed="Shorthair" />
    </div>
  )
};

render(<App />, document.getElementById("root"));
