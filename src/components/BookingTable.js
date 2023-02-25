import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBooking } from '../redux/flightBooking/actions';

const BookingTable = () => {
  const bookings = useSelector(state => state.bookings);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBooking(id));
  };

  return (
    <div>
    <table className="w-full">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            From
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            To
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Date
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Guests
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Class
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {bookings.map((booking) => (
          <tr key={booking.id}>
            <td className="px-6 py-4 whitespace-nowrap">{booking.from}</td>
            <td className="px-6 py-4 whitespace-nowrap">{booking.to}</td>
            <td className="px-6 py-4 whitespace-nowrap">{booking.date}</td>
            <td className="px-6 py-4 whitespace-nowrap">{booking.guests}</td>
            <td className="px-6 py-4 whitespace-nowrap">{booking.ticketClass}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button
                className="text-red-600 hover:text-red-900"
                onClick={() => handleDelete(booking.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <p>this is the original one to show the data</p>

    {/* // here is the genuine one to show the data in the ui

    //========================================> */}

    <div class="table-container">
    <table class="booking-table">
      <thead class="bg-gray-100/50">
        <tr class="text-black text-left">
          <th>Destination From</th>
          <th>Destination To</th>
          <th class="text-center">Journey Date</th>
          <th class="text-center">Guests</th>
          <th class="text-center">Class</th>
          <th class="text-center">Delete</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-300/20"                id="lws-previewBooked">
      {bookings.map((booking) => (
         <tr key={booking.id}
         class="lws-bookedTable text-black">
         <td class="px-6 py-4">
           <div class="flex items-center space-x-3">
             <p class="lws-bookedFrom">{booking.from}</p>
           </div>
         </td>
         <td class="px-6 py-4">
           <p class="lws-bookedTo">{booking.to}</p>
         </td>
         <td class="px-6 py-4 text-center">
           <p class="lws-bookedDate">{booking.date}</p>
         </td>
         <td class="px-6 py-4 text-center">
           <p class="lws-bookedGustes">{booking.guests}</p>
         </td>
         <td class="px-6 py-4 text-center">
           <span class="lws-bookedClass"> {booking.ticketClass}</span>
         </td>
         <td class="px-6 py-4 text-center">
           <div class="flex justify-center gap-4">
             <button class="lws-remove"
                     onClick={() => handleDelete(booking.id)}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round"
                   d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
               </svg>
             </button>
           </div>
         </td>
       </tr>
      ))}
       

      </tbody>
    </table>
    </div>
  </div>
  );
};

export default BookingTable;
