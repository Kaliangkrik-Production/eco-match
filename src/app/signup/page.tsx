export default function Signup() {
  return (
    <main className="flex h-screen w-screen items-center justify-end bg-[url('https://cdn.discordapp.com/attachments/1071765184126914680/1072021539211464714/Sign-Up.png')] bg-cover bg-left">
      <div className="flex h-screen w-full flex-col items-center justify-center gap-24 rounded-l-[2rem] bg-white lg:w-1/2">
        <h1 className="text-6xl font-bold">Sign Up</h1>
        <div className="flex w-3/4 flex-col gap-8 text-xl font-semibold">
          <label>Email</label>
          <input
            className="h-12 rounded-lg border border-black"
            type="email"
            placeholder="        Email"
          />

          <label>Username</label>
          <input
            className="h-12 rounded-lg border border-black"
            type="email"
            placeholder="        Username"
          />

          <label className="">Password</label>
          <input
            className="h-12 rounded-lg border border-black"
            type="password"
            placeholder="        Password"
          />

          <label className="">Confirm Password</label>
          <input
            className="h-12 rounded-lg border border-black"
            type="password"
            placeholder="        Confirm Password"
          />

          <div className="flex flex-auto flex-row">
            <input
              type="checkbox"
              className="bg-[#a3e062]"
              id="remember"
              value="remember"
              name="remember"
            />
            <label htmlFor="remember">
              By signing up, you agree to the terms of service and privacy
              policy
            </label>
          </div>
          <button
            type="submit"
            className="h-12 rounded-lg bg-[#FFDF70] text-black duration-500 hover:bg-yellow-400"
          >
            Sign Up
          </button>
          <label>
            Already have an account?
            <a
              href="/signin"
              className="font-bold text-[#FE7968] hover:underline"
            >
              Sign In
            </a>
          </label>
        </div>
      </div>
    </main>
  );
}
