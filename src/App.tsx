import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';

function App() {

  // example:
  // const [number, setNumber] = useState<number | string | boolean>(5);

  // const changeNumber = () => {
  //   setNumber(10);
  // }

  // const [people, setPeople] = useState([
  //   {
  //     name: 'LeBron James',
  //     url:'',
  //     age: 36,
  //     note: 'Allegeric to staying on the same team'
  //   },
  //   {
  //     name: 'Kobe Bryant',
  //     url:'',
  //     age: 36
  //   }
  // ]);

   interface IState {
    people: {
      name: string
      age: number
      url: string
      note?: string 
      // ? means optional
    }[]//means array of object
  }

  // const [people, setPeople] = useState<{age:number, name: string}[]>([
      
  // ]);

  const [people, setPeople] = useState<IState["people"]>([
      {
        name: "LeBron James",
        url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
        age: 36,
        note: 'Allegeric to staying on the same team'
      }

  ]);

  // people.map(person => {
  //   person.name
  // })

  return (
    <div className="App">
        <h1>People Invited to my Party</h1>
        <List people={people}/>
        <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
