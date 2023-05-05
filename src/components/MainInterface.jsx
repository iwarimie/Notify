// link the components from submain folder {Top and Side bar}
import SideBar from '../Components/submain/SideBar';
import TopBar from '../Components/submain/TopBar';

import EventCalendar from '../Components/EventCalendar';

const MainInterface = ({eventFind, timeReturn}) => {
    return ( 
        <div className='h-screen w-full flex'>
            <SideBar />
             <div className='w-5/6'>
                 <TopBar />
                 <EventCalendar findEvents={eventFind} returnTime={timeReturn} />
             </div>
        </div>
     );
}
 
export default MainInterface;