// export const setUserInput = (name, value) => {
//     return {
//       type: "SET_USER_INPUT",
//       payload: {
//         name,
//         value,
//       },
//     };
//   };
  
//   export const addBooking = (booking) => {
//     return {
//       type: "ADD_BOOKING",
//       payload: booking,
//     };
//   };
  
//   export const deleteBooking = (bookingId) => {
//     return {
//       type: "DELETE_BOOKING",
//       payload: bookingId,
//     };
//   };
  

//======================

export const SET_USER_INPUT = "SET_USER_INPUT";
export const ADD_BOOKING = "ADD_BOOKING";
export const DELETE_BOOKING = "DELETE_BOOKING";

export const setUserInput = (input) => ({
  type: SET_USER_INPUT,
  payload: input,
});

export const addBooking = (booking) => ({
  type: ADD_BOOKING,
  payload: booking,
});

export const deleteBooking = (bookingId) => ({
  type: DELETE_BOOKING,
  payload: bookingId,
});
