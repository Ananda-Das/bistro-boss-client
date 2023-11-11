import { Link } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <Link to="/">
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link to="/menu">
        <li>
          <a>Our Menu</a>
        </li>
      </Link>
      <Link>
        <li>
          <a>Contact Us</a>
        </li>
      </Link>
    </>
  );

  return (
    <div>
      <div className="navbar bg-black bg-opacity-40 fixed text-white max-w-screen-xl z-50 px-7 py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLink}
            </ul>
          </div>
          <a className="normal-case text-xl  text-center">
            <span className="text-3xl font-extrabold">BISTRO BOSS</span> <br />{" "}
            <span className="uppercase text-2xl font-bold tracking-widest">Restaurant</span>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
            {/* <a className="btn">Button</a> */}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
