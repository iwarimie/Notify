// link the components from submain folder {Top and Side bar}
// import { Link } from 'react-router-dom';
import SideBar from '../components/submain/SideBar';
import TopBar from '../components/submain/TopBar';

import EventCalendar from '../components/EventCalendar';

const MainInterface = ({eventFind, timeReturn}) => {
    return ( 
        <div className=' w-full flex'>
             <SideBar/>
             <div className='w-full'>
                 <TopBar />
                 
                 <div className='flex flex-col items-center justify-center'>
                     <EventCalendar findEvents={eventFind} returnTime={timeReturn} />
                 </div>
                
             </div>
        </div>
     );
}
 
export default MainInterface;