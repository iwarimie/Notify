// link the components from submain folder {Top and Side bar}
import SideBar from '../Components/submain/SideBar';
import TopBar from '../Components/submain/TopBar';

import EventCalendar from '../Components/EventCalendar';

const MainInterface = ({eventFind, timeReturn}) => {
    return ( 
        <div className=' w-full flex'>
            <SideBar />
             <div className='w-full'>
                 <TopBar />
                 <EventCalendar findEvents={eventFind} returnTime={timeReturn} />
                 <div className='flex flex-col items-center justify-center'>
                     <EventCalendar />
                 </div>
                
             </div>
        </div>
     );
}
 
export default MainInterface;