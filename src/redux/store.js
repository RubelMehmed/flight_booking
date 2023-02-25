// import { combineReducers, createStore } from "redux";
// import bookingReducer from "./bookingReducer";
// import userInputReducer from "./userInputReducer";

// const rootReducer = combineReducers({
//   userInput: userInputReducer,
//   booking: bookingReducer,
// });

// const store = createStore(rootReducer);

// export default store;


//========================================>


import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import reducer from "../redux/flightBooking/reducer";



const store = createStore( reducer, composeWithDevTools(applyMiddleware(logger)) )


export default store;


// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


