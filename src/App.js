import React from "react";
import Banner from "./Components/Banner/banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import {originals,action, comedy, horror} from './urls'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost  url={originals} title='Netflix Originals'/>
      <RowPost  url={action} title='Action Movies' isSmall/>
      <RowPost  url={comedy} title='Comedy Movies' isSmall/>
      <RowPost  url={horror} title='Horror Movies' isSmall/>
    </div>
  );
}

export default App;
