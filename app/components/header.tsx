import { Link } from "@remix-run/react";

import logo from "~/images/logo.png";

export function Header() {
  return (
    <header className="w-full px-24 pt-20 pb-6 flex justify-between items-center bg-background">
      <Nav />
      <div className="h-[160px] flex items-center justify-center">
        <img className="h-[160px] w-auto" src={logo} alt="logo" />
      </div>
      <Actions />
    </header>
  );
}

function Nav() {
  return (
    <div className="flex gap-4">
      <Link to="/" className="text-white uppercase hover:underline">
        Home
      </Link>
      <Link to="/news" className="text-white uppercase hover:underline">
        News
      </Link>
      <Link to="/about" className="text-white uppercase hover:underline">
        About
      </Link>
    </div>
  );
}

function Actions() {
  return (
    <div className="flex gap-2">
      <div className="text-white uppercase">Login</div>
      <div className="text-white uppercase">Cart</div>
      <div className="text-white uppercase">Questions</div>
    </div>
  );
}
