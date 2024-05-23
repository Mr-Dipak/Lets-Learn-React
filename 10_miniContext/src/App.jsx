import UserContextProvider from "./context/UserContextProvider"
import Login from './components/Login'
import Profile from './components/Profile'

UserContextProvider
function App() {


  return (
    <UserContextProvider>
    <h1>Mini Context</h1>
      <Login/>
      <Profile/>
    
   </UserContextProvider>
  )
}

export default App
