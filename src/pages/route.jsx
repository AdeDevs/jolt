import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [activeMenu, setActiveMenu] = useState("Categories");
  const [isMenuOpen, setMenuOpen] = useState(false);

  function close(menu) {
    setMenuOpen(false);
    setActiveMenu(menu); // Set the active menu item when clicked
  }

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div className="nav-page">
      <header>
        <nav>
          <div className="first">
            <h1><NavLink to="/"> JOLT </NavLink></h1>
            <input
              type="checkbox"
              id="check"
              checked={isMenuOpen}
              onChange={toggleMenu}
            />
            <ul className={`menu ${isMenuOpen ? "open" : "closed"}`}>
              <li className={activeMenu === "Categories" ? "active" : ""}>
                <a onClick={() => close("Categories")} href="#">
                  Categories
                </a>
              </li>
              <li className={activeMenu === "Collections" ? "active" : ""}>
                <a onClick={() => close("Collections")} href="#">
                  Collections
                </a>
              </li>
              <li className={activeMenu === "Store" ? "active" : ""}>
                <a onClick={() => close("Store")} href="#">
                  Store
                </a>
              </li>
              <li className={activeMenu === "Blog" ? "active" : ""}>
                <a onClick={() => close("Blog")} href="#">
                  Blog
                </a>
              </li>
              <li className={activeMenu === "Find Store" ? "active" : ""}>
                <a onClick={() => close("Find Store")} href="#">
                  Find Store
                </a>
              </li>
              <li id="login-mob">
                <a onClick={() => close("Login")} href="#">
                  Login
                </a>
              </li>
              <label htmlFor="check" className="close-menu">
                <ion-icon name="close-outline" color="light"></ion-icon>
              </label>
            </ul>
            <label htmlFor="check" className="open-menu">
              <ion-icon name="menu-outline" color="light"></ion-icon>
            </label>
          </div>
          <ul>
            <li>
              <ion-icon name="search-outline"></ion-icon>{" "}
              <span id="search">Search</span>
            </li>
            <li>
              <ion-icon name="cart-outline"></ion-icon>{" "}
              <span id="cart">Cart (0)</span>
            </li>
            <li id="login-desk">
                <ion-icon name="person-circle-outline"></ion-icon>
                <span id="login">Login</span>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
