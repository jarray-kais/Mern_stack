import logo from './logo.svg';
import './App.css';
import PersonCard from './home'

const peopleArr = [
  {
    firstName: "Joe",
    lastName: "Smith",
    age: 28,
    hairColor: "blonde",
  },
  {
    firstName: "Matilda",
    lastName: "Jones",
    age: 33,
    hairColor: "brown",
  },
  {
    firstName: "Jane",
    lastName: "Johnson",
    age: 34,
    hairColor: "blonde",
  },
  {
    firstName: "Hal",
    lastName: "Moore",
    age: 90,
    hairColor: "grey",
  },
];

function App() {
  return (
    <div className="App">
      {peopleArr.map((personObj, index) => (
        <PersonCard
          key={index}
          firstName={personObj.firstName}
          lastName={personObj.lastName}
          age={personObj.age}
          hairColor={personObj.hairColor}
        />
      ))}
    </div>
  );
}

export default App;