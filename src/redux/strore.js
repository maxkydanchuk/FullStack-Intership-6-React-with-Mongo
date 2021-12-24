import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {peopleReducer} from "./people/peopleReducer";
import {starshipsReducer} from "./starships/starshipsReducer";
import {combineReducers} from "redux";

const combinedReducers = combineReducers({
    people: peopleReducer,
    starships: starshipsReducer
});
    const store = createStore(peopleReducer, applyMiddleware(thunk));

export default store;