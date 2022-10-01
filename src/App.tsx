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
const Persons: iPerson[] =[
  { name: "John", age: 20 },
  { name: "Jane", age: 21 },
  { name: "Jack", age: 22 },
];

const Friends :iFriend[] = [
  {name: "Jahangir", age: 20, gender: "Male"},
  {name: "Sorna", age: 18, gender: "Female"},
]

function App() {
 
  return (
    <>
      <div className="App">
      {
        Persons.map(person=><Person name= {person.name} age= {person.age}/>)
      }
      {Friends.map(friend=><Friend name={friend.name} age={friend.age} gender={friend.gender}/> )}
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

function Friend({name,age,gender}: iFriend) {
  return (
    <>
      <div className="friend">
        <h1>{name}</h1>
        <p>Age : {age}</p>
        <p>Gender : {gender}</p>
      </div>
    </>
  );
}

export default App;
