// link the components from submain folder {Top and Side bar}
import SideBar from '../components/submain/SideBar';
import TopBar from '../components/submain/TopBar';
import EventCalendar from '../components/EventCalendar';

const MainInterface = () => {
    return ( 
        <div className='h-screen w-full flex'>
            <SideBar />
             <div className='w-5/6'>
                 <TopBar />
                 <EventCalendar />
             </div>
        </div>
     );
}
 
export default MainInterface;