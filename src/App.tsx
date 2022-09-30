import React from "react";
import "./App.css";

interface iPerson {
  name: string;
  age?: number;
}
interface iFriend{
  name: string;
  age: number;
  gender?: string;
}

function App() {
  return (
    <>
      <div className="App">
        <h1>React Typescript</h1>
        
        <Person name="John" age ={19}></Person>
        <Person name="Jane" age={20} />
        <Friend name="Ali" age={21} gender="Male"/>
        <Friend name="Kodom" age={22} gender="Female"/>
      </div>
    </>
  );
}
function Person(props: iPerson) {
  return (
    <>
      <div className="person">
        <h1>Name : {props.name} </h1>
        <p>Age : {props.age}</p>
      </div>
    </>
  );
}

function Friend(props: iFriend) {
  return (
    <>
      <div className="friend">
        <h1>{props.name}</h1>
        <p>Age : {props.age}</p>
        <p>Gender : {props.gender}</p>
      </div>
    </>
  );
}

export default App;
