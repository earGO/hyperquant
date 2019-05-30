import React from 'react';
import './App.scss';
import TopNav from "../../components/TopNav/TopNav";
import TradingCapital from "../../components/TradingCapital/TradingCapital";
import TradeGraph from "../../components/TradeGraph/TradeGraph";
import BotButtons from "../../components/BotButtons/BotButtons";
import TimeRange from "../../components/TimeRange/TimeRange";

function App() {
  return (
    <div className="App">
        <TopNav/>
        <TradingCapital/>
        <TradeGraph/>
        <BotButtons/>
        <TimeRange/>
    </div>
  );
}

export default App;
