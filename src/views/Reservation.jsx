import React from 'react';
import DatePicker from '../components/DatePicker';

export default props => {
  const onClickHandler = () => {
    console.log(props.checkIn);
    console.log(props.checkOut);
    const checkInDays = props.checkIn.split('-')[2];
    const checkOutDays = props.checkOut.split('-')[2];
    console.log(checkOutDays - checkInDays);
  };

  return (
    <div>
      <DatePicker
        checkIn={props.checkIn}
        checkOut={props.checkOut}
        setCheckOut={props.setCheckOut}
        setCheckIn={props.setCheckIn}
      />

      <button onClick={onClickHandler} className='uk-button uk-button-default'>
        See Available Vehicles
      </button>
    </div>
  );
};
