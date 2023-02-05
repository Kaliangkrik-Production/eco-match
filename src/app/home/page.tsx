export default function Home(){
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-[#1D796C]">
            <div className="flex flex-row items-center justify-center h-screen w-screen">
                <div className="flex flex-col items-center justify-center h-screen w-1/6 bg-[#1D796C] rounded-tr-lg rounded-br-lg">
                    <div className="flex flex-col items-end justify-start h-fit w-5/6 bg-[#97D779] rounded-lg shadow-black shadow-lg pb-8 pt-8">
                        {/* Navbar Button */}
                        {/* Home, About, Market, Map */}
                        <div className="w-[95%] mb-6 text-center text-2xl font-bold h-1/7 hover:bg-white rounded-l-full">
                            <a href="#home" className="mr-3">Home</a>
                        </div>
                        <div className="w-[95%] mb-6 text-center text-2xl font-bold h-1/7 hover:bg-white rounded-l-full">
                            <a href="#about" className="mr-3">About</a>
                        </div>
                        <div className="w-[95%] mb-6 text-center text-2xl font-bold h-1/7 hover:bg-white rounded-l-full">
                            <a href="#market" className="mr-3">Market</a>
                        </div>
                        <div className="w-[95%] mb-6 text-center text-2xl font-bold h-1/7 hover:bg-white rounded-l-full">
                            <a href="#map" className="mr-3">Map</a>
                        </div>
                        <line className="border-b-2 border-[#1D796C] w-full mb-8 mt-2"/>
                        {/* Categories, Education, Help */}
                        <div className="w-[95%] mb-6 text-center text-2xl font-bold h-1/7 hover:bg-white rounded-l-full">
                            <a href="#categories" className="mr-3">Categories</a>
                        </div>
                        <div className="w-[95%] mb-6 text-center text-2xl font-bold h-1/7 hover:bg-white rounded-l-full">
                            <a href="#education" className="mr-3">Education</a>
                        </div>
                        <div className="w-[95%] mb-6 text-center text-2xl font-bold h-1/7 hover:bg-white rounded-l-full">
                            <a href="#help" className="mr-3">Help</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center h-[95%] w-5/6 bg-white rounded-2xl m-6">
                    <div className="flex flex-col items-center justify-center h-[97%] w-[98%]">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}