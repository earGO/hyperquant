import React from 'react';
import Graph from "../Graph/Graph";
import './TradeGraph.scss';
import TradeGraphVerticalLines from "../TradeGraphVerticalLines/TradeGraphVerticalLines";

const TradeGraph = () => {
    return (
        <div className={'trade-graph-container'}>
            <Graph/>
            <TradeGraphVerticalLines/>
        </div>

    )
};

export default TradeGraph;