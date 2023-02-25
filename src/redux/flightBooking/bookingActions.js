export const setUserInput = (name, value) => {
  return {
    type: "SET_USER_INPUT",
    payload: {
      name,
      value,
    },
  };
};

export const addBooking = (booking) => {
  return {
    type: "ADD_BOOKING",
    payload: booking,
  };
};

export const deleteBooking = (bookingId) => {
  return {
    type: "DELETE_BOOKING",
    payload: bookingId,
  };
};
