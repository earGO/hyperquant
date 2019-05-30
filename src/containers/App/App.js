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
 * 1. Check TradingGraphMark position in Iphone Layout
 * 2. LOCAL STORAGE!!!!
 * 3.
 * 4. media queries for Samsung S8
 * 5. Gradient bulb at the top of the screen, above the Dashboard
 * 6. Check all sizing and proportions once more
 * 7. Figure out BottomMenu active items highlight
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

    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     if(nextState){
    //         localStorage.setItem('data', JSON.stringify(nextState.data))
    //     } else {
    //         localStorage.setItem('data', JSON.stringify(nextProps.data))
    //     }
    //
    // }

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
