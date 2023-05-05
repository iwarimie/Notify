import './App.css';
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import MainInterface from './Components/MainInterface';
import CreateEvent from './Components/createEvent/CreateEvent';
import AdminInterface from './Components/AdminInterface/AdminInterface';

function App() {
  const [events, setevents] = useState(
    [
      {
      date: "2023-05-01",
      event: "Learnable-Sotu",
      time: '9:00'
      },

      {
        date: "2023-05-26",
        event: "Scrum",
        time: '12:00'
      },


      {
        date: "2023-06-01",
        event: "build season",
        time: '13:00'
      },

      {
        date: "2023-06-30",
        event: "Learnable Ends",
        time: '13:00'
      }
    ])

    const findEvents = (currentDate) =>{
    for(let i=0; i<events.length; i++){
      if(events[i].date === currentDate){
        return events[i].event
      }
  }}

  const returnTime = (currentDate) =>{
    for(let i=0; i<events.length; i++){
      if(events[i].date === currentDate){
        return events[i].time
      }
  }}

  const handleCreateEvent = (evt) => {
    events.push(evt)
    console.log(events)   
  }
 
  
  return (

    <div className=''>
      {console.log(events)}
      

      <Routes>
        <Route path='/' element={<MainInterface eventFind={findEvents} timeReturn={returnTime} />}/>
        <Route path='/eventCreate' element={<CreateEvent addEvent={handleCreateEvent}/>}/>
        <Route path='/admin' element={<AdminInterface/>}/>
      </Routes>

      
    </div>
    

    
  );
}

export default App;
