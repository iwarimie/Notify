import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const EventCalendar = ({findEvents, returnTime}) => {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(value.getDate());

  useEffect(()=>{
  setDate(value.getDate())
  },
  [value, date])

    return ( 
        <div className='flex flex-col w-full mt-5 items-center justify-center'>
          <div>
          <Calendar 
            onChange={onChange} 
            value={value}
            className={"bg-red-700 shadow-lg rounded-md"} />
          </div>
     

      <div className='w-full md:w-2/3 h-20 mt-20 font-bold'>
        <div className='w-full h-full bg-gray-100 border-t-8 border-green-600 rounded-lg shadow-sm flex justify-around items-center'>
          <div>
            {findEvents(value.toLocaleDateString("default", {year: "numeric"}) + '-' +
                        value.toLocaleDateString("default", {month: "2-digit"}) + '-' +
                        value.toLocaleDateString("default", {day: "2-digit"}))
              ||   "No events for this date"} 
          </div>
          <div className='text-sm'>
              {/*value.toJSON().slice(0, 10)*/}
              { }
            </div>
          <div>
            {returnTime(value.toLocaleDateString("default", {year: "numeric"}) + '-' +
                        value.toLocaleDateString("default", {month: "2-digit"}) + '-' +
                        value.toLocaleDateString("default", {day: "2-digit"}))
              ||   value.toLocaleDateString()}
          </div>
        </div>
      </div>
    {/*
      <div className='w-full md:w-2/3 h-20 mt-20 font-bold'>
        <div className='w-full h-full bg-gray-100 border-t-8 border-green-600 rounded-lg shadow-sm flex justify-around items-center'>
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
    */}

    </div>
     );
}
 
export default EventCalendar;