import React, { useState } from "react";
import { useDispatch } from "react-redux";
import frame from "../img/icons/Frame.svg";
import { addBooking } from "../redux/flightBooking/actions";

const BookingForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date,setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [ticketClass, setTicketClass] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBooking = {
      from,
      to,
      date,
      guests,
      ticketClass,
    };

    dispatch(addBooking(newBooking));
    setFrom("");
    setTo("");
    setDate("");
    setGuests("");
    setTicketClass("");
  };
  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
      
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src="../img/icons/Frame.svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                value={from}
                onChange={(event) => setFrom(event.target.value)}
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src={frame} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                value={to}
                onChange={(event) => setTo(event.target.value)}
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
          </div> 
          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src="../img/icons/Vector (1).svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                value={guests}
                onChange={(event) => setGuests(event.target.value)}
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

           
             <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src="../img/icons/Vector (3).svg" alt="" />
              <select className="outline-none px-2 py-2 w-full" 
              name="ticketClass" id="lws-ticketClass"
              value={ticketClass}
              onChange={(event) => setTicketClass(event.target.value)}
              required>
                <option value="" hidden>Please Select</option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>
          {/* !border-r-0 */}

          <button className="addCity" type="submit" id="lws-addCity">
          <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span className="text-sm">Book</span>
        </button>
          {/* <button className="addCity" type="submit" id="lws-addCity">
            <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className="text-sm">Book</span>
          </button> */}
       </form>
      </div>
    </div>
);

//   return (
//     <div className="booking-form">
//       <h2 className="form-title">Add a Booking</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="hotel">Hotel:</label>
//           <input
//             type="text"
//             id="hotel"
//             name="hotel"
//             value={hotel}
//             onChange={(event) => setHotel(event.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="location">Location:</label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             value={location}
//             onChange={(event) => setLocation(event.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="price">Price:</label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             value={price}
//             onChange={(event) => setPrice(event.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="start-date">Start Date:</label>
//           <input
//             type="date"
//             id="start-date"
//             name="start-date"
//             value={startDate}
//             onChange={(event) => setStartDate(event.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="end-date">End Date:</label>
//           <input
//             type="date"
//             id="end-date"
//             name="end-date"
//             value={endDate}
//             onChange={(event) => setEndDate(event.target.value)}
//             required
//           />
//         </div>

    //button
//       </form>
//     </div>
//   );
};

export default BookingForm;
