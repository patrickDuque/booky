import React from 'react';
import { DatePicker } from '@material-ui/pickers';

import '../scss/DatePicker.scss';

export default props => (
  <div id='DatePickerComponent'>
    <DatePicker
      label='From'
      value={props.checkIn}
      onChange={e => props.setCheckIn(e.toISOString().split('T')[0])}
      minDate={new Date()}
      autoOk	
    />
    <DatePicker
      label='To'
      value={props.checkOut}
      onChange={e => props.setCheckOut(e.toISOString().split('T')[0])}
      minDate={props.checkIn}
      minDateMessage={`Please pick a date after ${props.checkIn}`}
      autoOk
    />
  </div>
);
