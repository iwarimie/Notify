// codes to your Sid bar components here

import Logo from "../../assets/Logo.png"
import sideBarPill from "./sideBarPill";

const SideBar = () => {
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
             <div className="mt-96 h-40 w-full">

</div>
             </div>

            
         </div>
  
     );
}
 
export default SideBar;