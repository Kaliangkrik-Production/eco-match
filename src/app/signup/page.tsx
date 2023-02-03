export default function Signup() {
  return (
    <div className="bg-blue-400">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
          <div className="flex flex-col w-full">
            <label className="mb-2">Email</label>
            <input
              className="border rounded-lg px-3 py-2 mb-4"
              type="email"
              placeholder="Email"
            />
            <label className="mb-2">Password</label>
            <input
              className="border rounded-lg px-3 py-2 mb-4"
              type="password"
              placeholder="Password"
            />
            <label className="mb-2">Confirm Password</label>
            <input
              className="border rounded-lg px-3 py-2 mb-4"
              type="password"
              placeholder="Confirm Password"
            />
            <button className="bg-blue-400 text-white rounded-lg px-3 py-2">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}