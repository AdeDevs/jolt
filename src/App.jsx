import { useState } from "react";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  function close() {
    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <header>
        <nav>
          {/* <h1 id="logo"><span><img src={logo} alt="logo" /></span> Tokoo </h1> */}
          <h1>JOLT</h1>
          <input type="checkbox" id="check" checked={isMenuOpen} onChange={toggleMenu} />
          <ul className={`menu ${isMenuOpen ? "open" : "closed"}`}>
            <li> 
              <a href="#">Categories: <input type="text" placeholder="Search Product" /></a> 
              <a href="#" id="search" onClick={close}> 
                <ion-icon name="search-outline"></ion-icon> 
              </a> 
            </li>
            <label htmlFor="check" className="close-menu">
              <ion-icon name="close-outline"></ion-icon>
            </label>
          </ul>
          <label htmlFor="check" className="open-menu">
            <ion-icon name="menu-outline"></ion-icon>
          </label>
        </nav>
      </header>
    </div>
  )
}

export default App
