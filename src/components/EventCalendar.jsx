import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EventCalendar = () => {

  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(value.getDate());

  useEffect(()=>{
  setDate(value.getDate())
  console.log("date is: " + date)
  },
  [value, date])

    return ( 
        <div className='flex flex-col w-full md:items-center justify-center'>
          <div className='w-1/2'>
          <Calendar onChange={onChange} value={value} className={" shadow-lg rounded-md"} />
          </div>
     

      <div className='w-full md:w-2/3 h-20 mt-20 font-bold flex flex-col items-center'>
        <div className='w-5/6 md:w-full h-full bg-gray-100 border-t-8 border-green-600 rounded-lg shadow-sm flex  justify-around items-center'>
          <div>
            SOTU MEETING
          </div>
          <div className='text-sm'>
            Every Monday
          </div>
          <div>
            9AM
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default EventCalendar;