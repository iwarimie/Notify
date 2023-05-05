import React from 'react'
import { useState } from 'react'
import styles from './createEvent.module.css'

function CreateEvent({addEvent}) {
 const [event, setEvent] = useState('');
 const [date, setDate] =  useState('');
 const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()

    addEvent({date, event, time})
    setEvent('')
    setDate('')
    setTime('')
  }

  return (
    <div className={styles['container']}>
      <h1>Create Event</h1>
      <form action="" onSubmit={handleSubmit} className={styles['form-container']}>
        <label htmlFor="eventname">Event Title</label>
        <input 
          type="text" 
          id='eventname'
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          />

        <label htmlFor="date">Date</label>
        <input 
          type="date"  
          id='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          />
        
          <label htmlFor="">Time</label>
        <input 
          type="time"  
          id="time"
          className={styles['time-input']}
          value={time}
          onChange={(e) => setTime(e.target.value)}
          />
          <button>Submit</button>
      </form>
    </div>
  )
}

export default CreateEvent
