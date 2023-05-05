// codes to your Sid bar components here
<<<<<<< HEAD

import Logo from "../../assets/Logo.png";
import { SideBarData } from "./SidebarData";

const SideBar = () => {
  return (
    <div className=" hidden lg:block h-full w-1/4">
      <div className=" bg-gray-100 p-10 h-[100vh]">
        <div className="flex justify-between items-center">
          <img
            src={Logo}
            alt="learnable-logo"
          />
          <i className="fa-solid fa-bars py-4 px-6"></i>
        </div>

        <div className="p-4 border-b-2 border-black mt-16">
          <div className="font-bold">TODOs</div>
        </div>
        <div className="mt-96 h-40 w-full"></div>
        <ul className="w-full p-0 flex flex-col">
        {SideBarData.map((value, key) => {
          return (
            <li
              key={key}
              className=" flex flex-row justify-center items-center p-1" 
            >
              <div className="grid place-items-center flex-[30%]">{value.icon}</div>
              <div className="flex-[70%]">{value.name}</div>
            </li>
          );
        })}
      </ul>
        
      </div>
    </div>
  );
};

export default SideBar;
=======
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png"
import SideBarPill from "./SideBarPill";

const SideBar = ({text}) => {
    return ( 
        <div className=" hidden lg:block h-full w-1/4">        
            <div className=" bg-gray-100 p-10">
            <div className="flex justify-between items-center">
                    <img src={Logo} alt="learnable-logo" />
                    <i className="fa-solid fa-bars py-4 px-6"></i>
            </div>

             <div className="p-4 border-b-2 border-black mt-16">
                <div className="font-bold">
                    TODOs
                </div>
                
                
             </div>
             <Link to='/eventCreate'><SideBarPill text={text}/></Link>
             <div className="mt-96 h-40 w-full">
            </div>
            
             </div>

            
         </div>
  
     );
}
 
export default SideBar;
>>>>>>> a8ee14e92f127d916d714d4c7bed543a1ed50432
