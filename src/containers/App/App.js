import React from 'react';
import './App.scss';
import Graph from "../../components/Graph/Graph";
import TopNav from "../../components/TopNav/TopNav";
import TradingCapital from "../../components/TradingCapital/TradingCapital";

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
