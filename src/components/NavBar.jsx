import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ironhackLogo from "../assets/ironhack-logo.png";

/* Import Your Files Below This Line*/
import styled from "styled-components";

function NavBar() {
  /* Check Current Tab */
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <StyledNavbar>
      <ul>
        <li>
          <NavLink to={"/"}>
            <img src={ironhackLogo} alt="Ironhack Logo" />
          </NavLink>
        </li>

        <li>
          <NavLink to={"/"} className={url === "/" ? "active" : ""}>
            <h3>Home</h3>
          </NavLink>
        </li>

        <li>
          <NavLink to={"/styled"} className={url === "/styled" ? "active" : ""}>
            <h3>About Styled-Components</h3>
          </NavLink>
        </li>

        <li>
          <NavLink to={"/toasty"} className={url === "/toasty" ? "active" : ""}>
            <h3>About Toastify</h3>
          </NavLink>
        </li>
      </ul>

      <NavLink to={"/login"}>
        <button>
          <h3>Login</h3>
        </button>
      </NavLink>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
height: 7vh;
background-color: #ff5959;
display: flex;
justify-content: space-between;
align-items: center;

img{
  height: 5vh;
}

ul{
  list-style: none;
  display: flex;
  align-items: center;
}

li{
  margin-right: 2vh;
}

a{
  text-decoration: none;
  color: white;
}

a:hover,
.active{
  color: black;
}
`


export default NavBar;
