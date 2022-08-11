import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"

function App() {
const [people, setPeople] = useState([])
useEffect(() => {
async function getData() {
return await fetch("https://localhost:5000/people")
}
const data = getData()
setPeople(data)
console.log(data, people)
}, [])
return (
  <div>
    <h1>People</h1>
  </div>
 );
}

export default App;
