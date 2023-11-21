import PropTypes from 'prop-types';
import { useState } from 'react';
import Swal from 'sweetalert2';
const BookingRow = ({booking}) => {
    const {name,price,serviceDate,duration,image,availability,email,bookingTime,bookingDate} = booking;
    const [bookingText, setBookingText] = useState("Please Confirm");
    // function 
    const handleConfirm =()=>{
        if(bookingText=="Please Confirm"){
            Swal.fire({
                title: "Are you sure to Confirm?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Confirm it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    setBookingText("Confirmed");
                  Swal.fire({
                    title: "Confirmed!",
                    text: "Your booking is confirmed now!",
                    icon: "success"
                  });
                }
              });
        }
        else{
            Swal.fire({
                title: "Already confirmed the booking!",
                text: "",
                icon: 'info'
            })
        }
    }
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="w-28">
                        <img className='rounded-2xl' src={image} alt="service image" />
                    </div>
                    </div>
            </td>
            <td>{name}</td>
            <td>{bookingDate}<br/>{bookingTime}</td>
            <td>₹ {price}</td>
            <td>{serviceDate || bookingDate}</td>
                <th>
                    {
                       bookingText=="Please Confirm" ? <button onClick={handleConfirm}
                        className="btn btn-ghost btn-xs text-red-600">{
                        bookingText}</button> : <button onClick={handleConfirm}
                        className="btn btn-ghost btn-xs text-green-600">{
                        bookingText}</button>
                    }
                </th>
            </tr>
    );
};
// Added proptypes 
BookingRow.propTypes={
    booking: PropTypes.object.isRequired,
}
export default BookingRow;