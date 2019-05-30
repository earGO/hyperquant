import * as CONSTANTS from './constants';

const initialData = {
    data:{},
    dataIsPending:false,
    dataError: ''
};

export const dataReduser = (state=initialData,action={})=> {
    switch(action.type){
        case CONSTANTS.DATA_REQUEST_PENDING:
            return {...state,dataIsPending:true};
        case CONSTANTS.DATA_REQUEST_SUCCESS:
            return {...state,data:action.payload,dataIsPending:false};
        case CONSTANTS.DATA_REQUEST_FAILED:
            return {...state,dataError:action.payload,dataIsPending:false};
        default:
            return state;
    }
};

const initialTimePeriod = {
    timePeriod:'all_time'
};

export const timePeriodReducer = (state=initialTimePeriod,action={})=> {
    switch(action.type){
        case CONSTANTS.TIME_PERIOD:
            return {...state,timePeriod:action.payload};
        default:
            return state;
    }
}