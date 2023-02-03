export default function Login(){
    return (
        <div className="flex h-screen w-full flex-row bg-white"
        id="home">
            <div className="flex flex-col w-1/2 bg-white">
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="flex flex-col items-center justify-center bg-blue-400 rounded-lg shadow-lg p-8">
                        <h1 className="text-3xl font-bold mb-4">Login</h1>
                        <div className="flex flex-col w-full">
                            <label className="mb-2">Email</label>
                            <input className="border rounded-lg px-3 py-2 mb-4" type="email" placeholder="Email"/>
                            <label className="mb-2">Password</label>
                            <input className="border rounded-lg px-3 py-2 mb-4" type="password" placeholder="Password"/>
                            <div className="flex flex-row flex-auto">
                                <input type="checkbox" className="mr-2" id="remember" value="remember" name="remember"/>
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <button type="submit" 
                            className="bg-white text-black rounded-lg px-3 py-2 mt-4">Login</button>
                            <label className="mt-4">Don't have an account? <a href="/signup" className="text-white">Sign up</a></label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-1/2 bg-black"/>            
        </div>
    )
}
