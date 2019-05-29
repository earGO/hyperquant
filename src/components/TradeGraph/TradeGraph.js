import React from 'react';
import Graph from "../Graph/Graph";
import './TradeGraph.scss';
import TradeGraphVerticalLines from "../TradeGraphVerticalLines/TradeGraphVerticalLines";
import TradeGraphHorizontalLines from "../TradeGraphHorizontalLines/TradeGraphHorizontalLines";
import TradeGraphDateMark from "../TradeGraphDateMark/TradeGraphDateMark";
import TradeGraphMargin from "../TradeGraphMargin/TradeGraphMargin";

const TradeGraph = () => {
    return (
        <div className={'trade-graph-container'}>
            <Graph/>
            <TradeGraphVerticalLines/>
            <TradeGraphHorizontalLines/>
            <TradeGraphDateMark/>
            <TradeGraphMargin/>
        </div>

    )
};

export default TradeGraph;