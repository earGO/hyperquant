import * as CONSTANTS from './constants';


export const getData = async (dispatch) => {
    dispatch({
        type:CONSTANTS.DATA_REQUEST_PENDING
    });
    try{
        const promised = await fetch('https://raw.githubusercontent.com/pvrogov/test-tasks/master/frontend/src/data.min.json');
        const response =  promised.json();
        const data =  await response;
        dispatch({
            type:CONSTANTS.DATA_REQUEST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:CONSTANTS.DATA_REQUEST_FAILED,
            payload: error
        })
    }
};

export const timePeriodAction = (timePeriod) => ({
    type:CONSTANTS.TIME_PERIOD,
    payload:timePeriod
});
