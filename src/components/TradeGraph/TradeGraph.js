import React from 'react';
import Graph from "../Graph/Graph";
import './TradeGraph.scss';
import TradeGraphVerticalLines from "../TradeGraphVerticalLines/TradeGraphVerticalLines";
import TradeGraphHorizontalLines from "../TradeGraphHorizontalLines/TradeGraphHorizontalLines";

const TradeGraph = () => {
    return (
        <div className={'trade-graph-container'}>
            <Graph/>
            <TradeGraphVerticalLines/>
            <TradeGraphHorizontalLines/>
        </div>

    )
};

export default TradeGraph;