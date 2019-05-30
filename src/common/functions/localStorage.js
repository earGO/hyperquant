export const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null){
            return undefined;
        } else {
            return JSON.parse(serializedState).state;
        }
    }
    catch (e) {
        return undefined;
    }
};

export const saveState = (state) =>{
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state',serializedState);
        console.log('saved to localStorage:',JSON.parse(localStorage.getItem('state')))
    }
    catch (e) {
        //Don't wanna log theese
    }
}