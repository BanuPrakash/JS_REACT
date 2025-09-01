import { useState } from "react"
import ParentComponent from "./components/ParentComponent"
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";

import './App.css'
import ProfileContextProvider from "./context/ProfileContextProvider";
import First from "./context/First";
import Counter from "./components/Counter";

function App() {
  let [userId, setUserId] = useState(1);
  return (
    <div >
      <Counter />
      <ProfileContextProvider>
        <First />
      </ProfileContextProvider>
      <ParentComponent />
      <div>
        <Users updateId={setUserId} />
        <UserDetails userId={userId} />
      </div>

    </div>
  )
}

export default App
