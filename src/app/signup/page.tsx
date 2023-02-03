export default function Signup() {
  return (
    <div className="flex h-screen w-full flex-row bg-white" id="home">
      <div className="flex flex-col w-1/2 bg-black"/>
      <div className="flex flex-col w-1/2 bg-white">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex flex-col items-center justify-center bg-[#97D779] rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4">Sign up</h1>
            <div className="flex flex-col w-full">
              <label className="mb-2">Email</label>
              <input className="border rounded-lg px-3 py-2 mb-4" type="email" placeholder="Email" />
              <label className="mb-2">Username</label>
              <input className="border rounded-lg px-3 py-2 mb-4" type="text" placeholder="Username" />
              <label className="mb-2">Password</label>
              <input className="border rounded-lg px-3 py-2 mb-4" type="password" placeholder="Password" />
              <label className="mb-2">Confirm password</label>
              <input className="border rounded-lg px-3 py-2 mb-4" type="password" placeholder="Confirm password" />
              <div className="flex flex-row flex-auto">
                <input type="checkbox" className="mr-2 bg-[#a3e062]" id="agreeTOS" value="agreeTOS" name="agreeTOS" />
                <label htmlFor="agreeTOS">I agree to the <a href="/tos" className="text-white font-semibold hover:underline">Terms of Service</a></label>
              </div>
              <button type="submit" className="bg-[#FFDF70] text-black rounded-lg px-3 py-2 mt-4 hover:bg-yellow-400">Sign up</button>
              <label className="mt-4">Already have an account? <a href="/login" className="text-[#FE7968] font-bold hover:underline">Login</a></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}