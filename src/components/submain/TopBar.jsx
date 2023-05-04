// codes to your Top bar components here

const TopBar = () => {
    return ( 
        <div className="w-full sticky top-0">
        <div className=" h-1/4 object-cover bg-no-repeat bg-tableBg flex flex-col justify-center">
            <div className="flex justify-around items-center text-lg text-white">
                <div className=" ">
                    <div className="mb-5">Today</div>
                    <div>8th May, 2023 - 11:59 am</div>
                </div>

                <div className="flex w-2/6 justify-between">
                    <div className="bg-orange-400 p-2 w-3/6 flex h-fit justify-evenly  rounded-md shadow-sm items-center">
                
                            <i className="fa-solid fa-calendar-days"></i>
                    
                        <div>Today</div>
                      
                            <i className="fa-solid fa-chevron-down p-2 w-1/4"></i>
                       
                    </div>

                    <div className="flex 3/6 items-center">
                        <i className="fa-solid fa-bell mx-5"></i>
                        <i className="fa-solid fa-share-nodes mx-5"></i>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className="p-4 h-24 w-full flex justify-around items-center text-2xl text-white font-bold bg-blue-600">
            <div className="h-full p-2">
                05
            </div>
            <div className="h-full p-2">
                03
            </div>
            <div className="h-full p-2">
                03
            </div>
            <div className="h-full p-2">
                03
            </div>
            <div className="h-full p-2">
                03
            </div>
            <div className="h-full p-2">
                03
            </div>
            <div className="h-full p-2">
                03
            </div>
            <div className="h-full p-2">
                03
            </div>
        </div>
    </div>
     );
}
 
export default TopBar;