import { Link } from "react-router-dom";

export default function Navbar() {
  const menuData = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Products</Link>
      </li>
      <li>
        <Link to="/">Checkout</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar w-full h-16 fixed top lg:px-8   backdrop-blur-lg z-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuData}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Happy Shopping</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuData}</ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}