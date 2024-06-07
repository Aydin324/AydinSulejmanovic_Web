import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav id="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/write">Write</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Header;
