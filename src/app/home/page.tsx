export default function Home(){
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-[#1D796C]">
            <div className="flex flex-row items-center justify-center h-screen w-screen">
                <div className="flex flex-col items-center justify-center h-screen w-1/6 bg-[#1D796C] rounded-tr-lg rounded-br-lg">
                    <div className="flex flex-col items-center justify-center h-fit w-5/6 bg-[#97D779] rounded-lg shadow-lg p-8">
                        <label className="text-3xl font-bold mb-4">Home</label>
                        <label className="text-3xl font-bold mb-4">About</label>
                        <label className="text-3xl font-bold mb-4">Market</label>
                        <label className="text-3xl font-bold mb-4">Map</label>
                        <line className="border-b-2 border-[#1D796C] w-full mb-2"/>
                        <label className="text-3xl font-bold mb-4">Categories</label>
                        <label className="text-3xl font-bold mb-4">Education</label>
                        <label className="text-3xl font-bold mb-4">Help</label>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center h-[95%] w-5/6 bg-white rounded-2xl m-8">
                    
                </div>
            </div>
        </div>
    )
}