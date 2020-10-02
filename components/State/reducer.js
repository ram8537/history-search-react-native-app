//what the data layer looks like (it's basically an object)

export const intitialState = {
    term: null
}

//the action to fire off on event
export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
}

//state = state of data layer, action will fire something into the data layer 
//reducer's job is to listen for any dispatched actions
export default function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            // ... state = spread operator, meaning it will return whatever was already there
            // and then it will add our new term
            return {
                ...state,
                term: action.term,
            };
        //if it doesn't know what action was fired/no action fired, it will just return the state as is
        default:
            return state;
    }
}