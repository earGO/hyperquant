import React from 'react';
import './App.scss';
import TopNav from "../../components/TopNav/TopNav";
import TradingCapital from "../../components/TradingCapital/TradingCapital";
import TradeGraph from "../../components/TradeGraph/TradeGraph";
import BotButtons from "../../components/BotButtons/BotButtons";

function App() {
  return (
    <div className="App">
        <TopNav/>
        <TradingCapital/>
        <TradeGraph/>
        <BotButtons/>
    </div>
  );
}

export default App;
