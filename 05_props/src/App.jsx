import Card from './components/Card'
import './App.css'

function App() {

  let myObj={
    name: "dipak",
    age: 22,
    email: "dipak@gmail.com"
  }

  let newArr = [1,2,3,4,5,6]
  return (
<>
<Card username="Chai aur code" btnText='visit me'/>
<Card username="Dipak"/>
</>
   
  )
}

export default App
