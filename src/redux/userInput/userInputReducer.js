const initialState = {
    from: "",
    to: "",
    date: "",
    guests: "",
    ticketClass: "",
  };
  
  const userInputReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_USER_INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  };
  
  export default userInputReducer;
  