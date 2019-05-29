import React from 'react';
import './App.scss';
import TopNav from "../../components/TopNav/TopNav";
import TradingCapital from "../../components/TradingCapital/TradingCapital";
import TradeGraph from "../../components/TradeGraph/TradeGraph";

function App() {
  return (
    <div className="App">
        <TopNav/>
        <TradingCapital/>
        <TradeGraph/>
    </div>
  );
}

export default App;
