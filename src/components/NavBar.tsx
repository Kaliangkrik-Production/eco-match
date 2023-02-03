export default function NavBar() {
  return (
    <div className="fixed flex h-16 w-full flex-row items-center justify-start gap-4 font-extrabold backdrop-blur-lg">
      <a
        href="/"
        className="ml-8"
      >
        LOGO
      </a>
      <a href="#home">HOME</a>
      <a href="#about">ABOUT</a>
      <a href="#market">MARKET</a>
      <a href="#map">MAP</a>
    </div>
  );
}
