import logo from './logo.svg';
import './App.css';
import PersonCard from './home'

function App() {

  return (
    <div className="App">
    <PersonCard firstname={"Doe"} lastname={"Janne"} age={"45"} haircolor={"black"}/>
    <PersonCard firstname={"Smith"} lastname={"Jonn"} age={"88"} haircolor={"brown"}/>
    <PersonCard firstname={"fillmore"} lastname={"millard"} age={"50"} haircolor={"brown"}/>
    <PersonCard firstname={"smith"} lastname={"Maria"} age={"66"} haircolor={"brown"}/>
    </div>
  );
}

export default App;
