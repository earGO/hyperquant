import React from 'react';
import './App.scss';
import TopNav from "../../components/TopNav/TopNav";
import TradingCapital from "../../components/TradingCapital/TradingCapital";
import TradeGraph from "../../components/TradeGraph/TradeGraph";
import BotButtons from "../../components/BotButtons/BotButtons";
import TimeRange from "../../components/TimeRange/TimeRange";
import BottomMenu from "../../components/BottomMenu/BottomMenu";
import {connect} from "react-redux";
import { getData,timePeriodAction } from './actions';


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

const dataMock={
    balance: 14630,
    bots: {
        0: {
            name: "yellow_bot",
            cost: 10000,
            '24h': 3.15,
            '7d': 0.065,
            '30d': 4.1,
        },
    },
        on_hold: 8300,
        trading_capital: 3.081,
        trading_capital_currency: "eth"
};


const mapStateToProps = (state) =>{
    return {
        data:state.dataReduser.data,
        dataIsPending:state.dataReduser.dataIsPending,
        dataError: state.dataReduser.dataError,
        timePeriod:state.timePeriodReducer.timePeriod
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchData:() => getData(dispatch), //Data fetcher
        onTimePeriodChange:(timePeriod) => dispatch(timePeriodAction(timePeriod)), //the method for switching time-periods
    }
};

class  App extends React.Component {

    componentDidMount = async ()=> {
        await this.props.onFetchData();
        console.log(this.props);
    }

    render(){
        const {data,onTimePeriodChange,timePeriod} = this.props;
        const { on_hold,trading_capital,trading_capital_currency,balance,bots } = data;
        console.log(onTimePeriodChange);
        return (
            <div className="App">
                <TopNav/>
                <TradingCapital on_hold={on_hold} trading_capital={trading_capital} trading_capital_currency={trading_capital_currency} balance={balance}/>
                <TradeGraph/>
                <BotButtons bots={bots}/>
                <TimeRange onTimePeriodChange={onTimePeriodChange} timePeriod={timePeriod}/>
                <BottomMenu/>
            </div>
        );
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
