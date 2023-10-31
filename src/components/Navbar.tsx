import { signOut } from "firebase/auth";
import { toast } from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
      toast.success("Logout Successfully");
    });
  };

  const menuData = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/all-books">All Books</Link>
      </li>
      <li>
        <Link to="/add-book">Add Book</Link>
      </li>
      {!user.email && (
        <>
          <button className="btn btn-primary">
            <li>
              <Link to="/sign-in">Sign In/ Sign In</Link>
            </li>
          </button>
        </>
      )}
      {user.email && (
        <>
          <li>
            <button onClick={handleLogout}>LogOut</button>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar w-full h-16 fixed top lg:px-8   backdrop-blur-lg z-10 ">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Book Trekker
          </Link>
        </div>
        <div className="navbar-end ">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            {menuData}
          </ul>
          {user.email && (
            <div className="tooltip tooltip-bottom" data-tip={user.email}>
              <label className="btn btn-ghost btn-circle ">
                <div className=" rounded-full">
                  <FaUserAlt />
                </div>
              </label>
            </div>
          )}
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
            <ul className="menu menu-sm dropdown-content right-1 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
              {menuData}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
