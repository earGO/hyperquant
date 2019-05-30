import React from 'react';
import './App.scss';
import TopNav from "../../components/TopNav/TopNav";
import TradingCapital from "../../components/TradingCapital/TradingCapital";
import TradeGraph from "../../components/TradeGraph/TradeGraph";
import BotButtons from "../../components/BotButtons/BotButtons";
import TimeRange from "../../components/TimeRange/TimeRange";
import BottomMenu from "../../components/BottomMenu/BottomMenu";
import {connect} from "react-redux";
import { getData,timePeriodAction,botSelectionAction } from './actions';


/**

 *
 * Things to do as second pass
 * 1.
 * 2.
 * 3.
 * 4. media queries for Samsung S8
 * 6. Check all sizing and proportions once more
 *
 *
 */



const mapStateToProps = (state) =>{
    return {
        data:state.dataReduser.data,
        dataIsPending:state.dataReduser.dataIsPending,
        dataError: state.dataReduser.dataError,
        timePeriod:state.timePeriodReducer.timePeriod,
        selectedBotName:state.botSelectionReducer.selectedBotName
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchData:() => getData(dispatch), //Data fetcher
        onTimePeriodChange:(timePeriod) => dispatch(timePeriodAction(timePeriod)), //the method for switching time-periods
        onBotSelection:(botName) => dispatch(botSelectionAction(botName)) //method for selecting bots with buttons
    }
};

class  App extends React.Component {

    componentDidMount = async ()=> {
        await this.props.onFetchData();
    };

    render(){
        const {data,onTimePeriodChange,timePeriod,onBotSelection,selectedBotName} = this.props;
        const { on_hold,trading_capital,trading_capital_currency,balance,bots } = data;
        return (
            <div className="App">
                <TopNav/>
                <TradingCapital on_hold={on_hold} trading_capital={trading_capital} trading_capital_currency={trading_capital_currency} balance={balance}/>
                <TradeGraph/>
                <BotButtons bots={bots} timePeriod={timePeriod} onBotSelection={onBotSelection} selectedBotName={selectedBotName}/>
                <TimeRange onTimePeriodChange={onTimePeriodChange} timePeriod={timePeriod}/>
                <BottomMenu/>
            </div>
        );
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
