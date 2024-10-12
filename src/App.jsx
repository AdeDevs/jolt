import { useState } from "react";
import blackHoodieImage from './assets/blackhoodie.png';
import greyHoodieImage from './assets/greyhoodie.png';
import blueHoodieImage from './assets/bluehoodie.png';
import camoHoodieImage from './assets/camohoodie.png';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Categories");
  const [showMore, setShowMore] = useState(false);

  const readMore = () => {
    setShowMore(!showMore);
  };

  function close(menu) {
    setMenuOpen(false);
    setActiveMenu(menu); // Set the active menu item when clicked
  }

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  const [currentImage, setCurrentImage] = useState(blackHoodieImage);

  // Handlers for changing hoodie images
  const blackHoodie = () => setCurrentImage(blackHoodieImage);
  const greyHoodie = () => setCurrentImage(greyHoodieImage);
  const blueHoodie = () => setCurrentImage(blueHoodieImage);
  const camoHoodie = () => setCurrentImage(camoHoodieImage);

  // Handler for toggling the "read more" text
  const toggleReadMore = () => setShowMore(!showMore);

  return (
    <div>
      <header>
        <nav>
          <div className="first">
            <h1>JOLT</h1>
            <input
              type="checkbox"
              id="check"
              checked={isMenuOpen}
              onChange={toggleMenu}
            />
            <ul className={`menu ${isMenuOpen ? "open" : "closed"}`}>
              <li
                className={activeMenu === "Categories" ? "active" : ""}
              >
                <a onClick={() => close("Categories")} href="#">Categories</a>
              </li>
              <li
                className={activeMenu === "Collections" ? "active" : ""}
              >
                <a onClick={() => close("Collections")} href="#">Collections</a>
              </li>
              <li
                className={activeMenu === "Store" ? "active" : ""}
              >
                <a onClick={() => close("Store")} href="#">Store</a>
              </li>
              <li
                className={activeMenu === "Blog" ? "active" : ""}
              >
                <a onClick={() => close("Blog")} href="#">Blog</a>
              </li>
              <li
                className={activeMenu === "Find Store" ? "active" : ""}
              >
                <a onClick={() => close("Find Store")} href="#">Find Store</a>
              </li>
              <li id="login-mob">
                <a onClick={() => close("Login")} href="#">Login</a>
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
              <ion-icon name="search-outline"></ion-icon> <span id="search">Search</span>
            </li>
            <li>
              <ion-icon name="cart-outline"></ion-icon> <span id="cart">Cart (0)</span>
            </li>
            <li id="login-desk">Login</li>
          </ul>
        </nav>
        <div className="landing">
          <div>
          <section className="text">
            <h1>Jolt Sport Project</h1>
            <p>
              Introducing our latest collection, designed specifically for outdoor enthusiasts. Features a range of high-performance outwear with a range of bold and vibrant colors and patterns to choose from.
            </p>
          </section>
          <button>Shop Now</button>
          </div>
        </div>
      </header>
      <main>
        <h1>Trending Products</h1>
        <div className="my-product-box">
      <div className="product-nav">
        <ul className="desktop">
          <li onClick={blackHoodie} id="img-box1"></li>
          <li onClick={greyHoodie} id="img-box2"></li>
          <li onClick={blueHoodie} id="img-box3"></li>
          <li onClick={camoHoodie} id="img-box4"></li>
        </ul>
        <section id="product-image" style={{ backgroundImage: `url(${currentImage})` }}>
          {/* Product image section now controlled by React's state */}
        </section>
        <ul className="mobile">
          <li onClick={blackHoodie} id="img-box1"></li>
          <li onClick={greyHoodie} id="img-box2"></li>
          <li onClick={blueHoodie} id="img-box3"></li>
          <li onClick={camoHoodie} id="img-box4"></li>
        </ul>
      </div>
      <div className="product-info">
        <div className="title">
          <p>Jolt/Jackets</p>
          <h1>Boa Fleece Jackets</h1>
          <h2>$122.00 <del>$129.00</del> <button>5% Disc</button></h2>
          <ul>
            <li><ion-icon name="star"></ion-icon></li>
            <li><ion-icon name="star"></ion-icon></li>
            <li><ion-icon name="star"></ion-icon></li>
            <li><ion-icon name="star"></ion-icon></li>
            <li><ion-icon name="star-outline"></ion-icon></li>
            <li><span>(4.9)</span> 1.2K Reviews</li>
          </ul>
        </div>
        <div className="desc">
        <h1>Descriptions</h1>
        <p>
          Introducing the Boa Fleece Winter Jacket, designed to keep you warm and comfortable during the coldest winter days. 
          Crafted from high-quality fleece material, this jacket offers superior insulation and softness, making it the perfect 
          choice for outdoor activities or everyday wear. The jacket features a stylish and functional design, with a&nbsp;
          <span id="dots">{showMore ? "" : "..."}</span>
          <span id="more" style={{ display: showMore ? "inline" : "none" }}>
            fleece-lined hood, durable zippers, and spacious pockets. Stay warm and look great this winter with our Boa Fleece Winter Jacket.&nbsp;
          </span>
          <button onClick={readMore} id="morebtn">{showMore ? "Read Less" : "Read More"}</button>
        </p>
      </div>
        <div className="info">
          <h1>Available Colors</h1>
          <ul className="colors">
            <li><button onClick={blackHoodie}></button></li>
            <li><button onClick={greyHoodie} id="grey"></button></li>
            <li><button onClick={blueHoodie} id="blue"></button></li>
          </ul>

          <h1>Size</h1>
          <ul className="size">
            <li>S</li>
            <li id="selected">M</li>
            <li>L</li>
            <li id="xl">XL</li>
          </ul>
        </div>
      </div>
    </div>
      </main>
    </div>
  );
}

export default App;
