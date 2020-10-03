//what the data layer looks like (it's basically an object)

export const initialState = {
    term: null,
    item_number: null,
    filter: false,
}

//the action to fire off on event
export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
    SET_ITEM_NUMBER: "SET_ITEM_NUMBER",
    SET_FILTER_STATE: "SET_FILTER_STATE",
}

//state = state of data layer, action will fire something into the data layer 
//reducer's job is to listen for any dispatched actions
export default function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term,
            };
        case actionTypes.SET_ITEM_NUMBER:
            return {
                ...state,
                item_number: action.item_number,
            };
        case actionTypes.SET_FILTER_STATE:
            return {
                ...state,
                filter: action.filter,
            };
        //if it doesn't know what action was fired/no action fired, it will just return the state as is
        default:
            return state;
    }
}