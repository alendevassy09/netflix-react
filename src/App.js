import React from "react";
import Banner from "./Components/Banner/banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import {originals,action} from './urls'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost  url={originals} title='Netflix Originals'/>
      <RowPost  url={action} title='Action Movies' isSmall/>
    </div>
  );
}

export default App;
