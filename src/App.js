import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";

const App = () => {
  return (
    <div>
      <PersonList />
    </div>
  );
};

const PersonList = () => {
  const people = [
    { img: 65, name: "bob", job: "developer" },
    { img: 17, name: "tim", job: "artist" },
    { img: 19, name: "rick", job: "designer" }
  ];

  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
        dolorum.
      </Person>
      <Person person={people[2]} />
    </section>
  );
};

const Person = props => {
  const { img, name, job } = props.person;
  const { children } = props;

  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="portrait" />

      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};

export default App;
