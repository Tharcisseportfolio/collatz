import "bootstrap/dist/css/bootstrap.min.css?inline";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'
import './App.css'


function App() {

  return (
    <div className="App custom-background p-4 w-10">
      <NavBar/>
      <Home />
    </div>
  )
}

export default App
