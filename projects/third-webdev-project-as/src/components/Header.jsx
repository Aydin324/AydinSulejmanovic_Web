/* import { Outlet, Link } from "react-router-dom";

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
 */

import { Outlet, Link } from "react-router-dom";
import { Typography } from "@mui/material"; // Import Typography from Material-UI

function Header() {
  return (
    <>
      <nav id="nav">
        {/* CarEnthusiast Logo */}
        <Typography variant="h6" component="div" id="logos">
          CarEnthusiast
        </Typography>
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
