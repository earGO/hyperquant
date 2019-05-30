import React from 'react';
import './App.scss';
import TopNav from "../../components/TopNav/TopNav";
import TradingCapital from "../../components/TradingCapital/TradingCapital";
import TradeGraph from "../../components/TradeGraph/TradeGraph";
import BotButtons from "../../components/BotButtons/BotButtons";
import TimeRange from "../../components/TimeRange/TimeRange";
import BottomMenu from "../../components/BottomMenu/BottomMenu";


/**
 * Frontend logic:
 * 1. clickable bots buttons (just to change them style)
 * 2. Load JSONfile with data
 * 3. Make timerange buttons clickable
 * 4. Change bots margin numbers when diffrent timeRange buttons R clicked
 *5. Make bots buttons generable by some kind of state (bot name, bot color - both from data)
 *
 * Things to do as second pass
 * 1. gradient and different styling of active bot button
 * 2. long sparkles from MegaBot
 * 3. Empty bot button
 * 4. media queries for Samsung S8
 * 5. Gradient bulb at the top of the screen, above the Dashboard
 * 6. Check all sizing and proportions once more
 * 7. Figure out BottomMenu active items highlight
 *
 * If U won't sleep and will make it on time
 * 1. Clickable bottom nav with mocked screens
 *
 */


function App() {
  return (
    <div className="App">
        <TopNav/>
        <TradingCapital/>
        <TradeGraph/>
        <BotButtons/>
        <TimeRange/>
        <BottomMenu/>
    </div>
  );
}

export default App;
