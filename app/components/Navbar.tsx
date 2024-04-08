import Drawer from "./Drawer";

export default function Navbar() {
  return (
    <header className=" ">
      <nav className="flex justify-between">
        <h2>Hello Friend!</h2>
        {/* <h3>mine</h3> */}
        <Drawer />
      </nav>
    </header>
  );
}
