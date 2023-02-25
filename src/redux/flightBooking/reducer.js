// const initialState = {
//     from: "",
//     to: "",
//     date: "",
//     guests: "",
//     ticketClass: "",
//   };
  
//   const userInputReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "SET_USER_INPUT":
//         return {
//           ...state,
//           [action.payload.name]: action.payload.value,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default userInputReducer;

//============================================>

import { ADD_BOOKING, DELETE_BOOKING, SET_USER_INPUT } from "./actions";

const initialState = {
  userInput: {
    from: "",
    to: "",
    date: "",
    guests: "",
    ticketClass: "",
  },
  bookings: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INPUT:
      return {
        ...state,
        userInput: action.payload,
      };
    case ADD_BOOKING:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    case DELETE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;

  