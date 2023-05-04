// link the components from submain folder {Top and Side bar}
import SideBar from '../components/submain/SideBar';
import TopBar from '../components/submain/TopBar';
import EventCalendar from '../components/EventCalendar';

const MainInterface = () => {
    return ( 
        <div className=' w-full flex'>
            <SideBar />
             <div className='w-full'>
                 <TopBar />
                 <div className='flex flex-col items-center justify-center'>
                     <EventCalendar />
                 </div>
                
             </div>
        </div>
     );
}
 
export default MainInterface;