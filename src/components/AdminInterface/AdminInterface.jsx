import React from 'react';
import SideBar from '../submain/SideBar';
import TopBar from '../submain/TopBar';
import EventCalendar from '../EventCalendar';

function AdminInterface({eventFind, timeReturn}) {
  return (
    <div className='h-screen w-full flex'>
      <SideBar />
      <div className='w-5/6'>
                 <TopBar />
                 <EventCalendar findEvents={eventFind} returnTime={timeReturn} />
             </div>
    </div>
  )
}

export default AdminInterface
