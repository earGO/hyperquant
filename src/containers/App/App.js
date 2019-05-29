import React from 'react';
import './App.scss';
import Graph from "../../conponents/Graph/Graph";
import TopNav from "../../conponents/TopNav/TopNav";
import TradingCapital from "../../conponents/TradingCapital/TradingCapital";

function App() {
  return (
    <div className="App">
        <TopNav/>
        <TradingCapital/>
        <Graph/>
    </div>
  );
}

export default App;
