import './App.css'
import CustomerList from './components/CustomerList'
import ParentComponent from './trial/ParentComponent'

// XML rule --> should a only one root element
// returns JSX
function App() {
  return (
    <div>
      <h1>Customer Application</h1>
      <CustomerList />
      {/* <ParentComponent /> */}
    </div>
  )
}

export default App
