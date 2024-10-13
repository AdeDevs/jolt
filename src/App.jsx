import heart from "./assets/heart-outline.svg";
import likedHeart from "./assets/heart.png";
import cart from "./assets/cart-outline.svg";
import addedCart from "./assets/cart.svg";

import { useState } from "react";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Categories");
  const [likedProducts, setLikedProducts] = useState(Array(8).fill(false));
  const [addedCarts, setAddedCart] = useState(Array(8).fill(false));

  // Function to toggle like status
  const toggleLike = (index) => {
    const updatedLikes = [...likedProducts]; // Create a copy of the array
    updatedLikes[index] = !updatedLikes[index]; // Toggle the specific product's liked status
    setLikedProducts(updatedLikes); // Update the state
  };

  const toggleCart = (index) => {
    const updatedCart = [...addedCarts]; // Create a copy of the array
    updatedCart[index] = !updatedCart[index]; // Toggle the specific product's liked status
    setAddedCart(updatedCart); // Update the state
  };

  function close(menu) {
    setMenuOpen(false);
    setActiveMenu(menu); // Set the active menu item when clicked
  }

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

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
      <p>Our new arrivals are built to withstand your activities while keeping you looking your best</p>
        <div className="products-box">
          <div className="products">
        <div className="product-image1">
          <button id="limited">Limited</button>
          <span id="heart"> <img onClick={() => toggleLike(0)} src={likedProducts[0] ? likedHeart : heart} alt="heart icon"/> </span>
        </div>
        <div className="product-info">
          <aside>
            <h2>Carabiner Set</h2>
            <h3>$24.54 <del>$33.53</del></h3>
          </aside>
          <span id="info-cart"> <img onClick={() => toggleCart(0)} src={addedCarts[0] ? addedCart : cart} alt="cart icon"/> </span>
        </div>
          </div>
          <div className="products">
        <div className="product-image2">
          <span id="heart"> <img onClick={() => toggleLike(1)} src={likedProducts[1] ? likedHeart : heart} alt="heart icon"/> </span>
        </div>
        <div className="product-info">
          <aside>
            <h2>Off-Road Shoulder Bag</h2>
            <h3>$34.54 <del>$43.53</del></h3>
          </aside>
          <span id="info-cart"> <img onClick={() => toggleCart(1)} src={addedCarts[1] ? addedCart : cart} alt="cart icon"/> </span>
        </div>
          </div>
          <div className="products">
        <div className="product-image3">
          <span id="heart"> <img onClick={() => toggleLike(2)} src={likedProducts[2] ? likedHeart : heart} alt="heart icon"/> </span>
        </div>
        <div className="product-info">
          <aside>
            <h2>Cozy Indoor Sandals</h2>
            <h3>$40.54 <del>$45.53</del></h3>
          </aside>
          <span id="info-cart"> <img onClick={() => toggleCart(2)} src={addedCarts[2] ? addedCart : cart} alt="cart icon"/> </span>
        </div>
          </div>
          <div className="products">
        <div className="product-image4">
          <button id="limited">Limited</button>
          <span id="heart"> <img onClick={() => toggleLike(3)} src={likedProducts[3] ? likedHeart : heart} alt="heart icon"/> </span>
        </div>
        <div className="product-info">
          <aside>
            <h2>Thermo Cup</h2>
            <h3>$14.54 <del>$23.53</del></h3>
          </aside>
          <span id="info-cart"> <img onClick={() => toggleCart(3)} src={addedCarts[3] ? addedCart : cart} alt="cart icon"/> </span>
        </div>
          </div>
          <div className="products">
        <div className="product-image5">
          <span id="heart"> <img onClick={() => toggleLike(4)} src={likedProducts[4] ? likedHeart : heart} alt="heart icon"/> </span>
        </div>
        <div className="product-info">
          <aside>
            <h2>Outdoor Vest</h2>
            <h3>$34.54 <del>$43.53</del></h3>
          </aside>
          <span id="info-cart"> <img onClick={() => toggleCart(4)} src={addedCarts[4] ? addedCart : cart} alt="cart icon"/> </span>
        </div>
          </div>
          <div className="products">
        <div className="product-image6">
          <button id="limited">Limited</button>
          <span id="heart"> <img onClick={() => toggleLike(5)} src={likedProducts[5] ? likedHeart : heart} alt="heart icon"/> </span>
        </div>
        <div className="product-info">
          <aside>
            <h2>Face Cap</h2>
            <h3>$10.54 <del>$15.53</del></h3>
          </aside>
          <span id="info-cart"> <img onClick={() => toggleCart(5)} src={addedCarts[5] ? addedCart : cart} alt="cart icon"/> </span>
        </div>
          </div>
          <div className="products">
        <div className="product-image7">
          <span id="heart"> <img onClick={() => toggleLike(6)} src={likedProducts[6] ? likedHeart : heart} alt="heart icon"/> </span>
        </div>
        <div className="product-info">
          <aside>
            <h2>Fuzzy Cardigan</h2>
            <h3>$34.54 <del>$43.53</del></h3>
          </aside>
          <span id="info-cart"> <img onClick={() => toggleCart(6)} src={addedCarts[6] ? addedCart : cart} alt="cart icon"/> </span>
        </div>
          </div>
          <div className="products">
        <div className="product-image8">
          <span id="heart"> <img onClick={() => toggleLike(7)} src={likedProducts[7] ? likedHeart : heart} alt="heart icon"/> </span>
        </div>
        <div className="product-info">
          <aside>
            <h2>Swivel Chair</h2>
            <h3>$54.54 <del>$63.53</del></h3>
          </aside>
          <span id="info-cart"> <img onClick={() => toggleCart(7)} src={addedCarts[7] ? addedCart : cart} alt="cart icon"/> </span>
        </div>
          </div>
        </div>
        <button id="more-btn">See More</button>
        <div className="mid-section">
          <div className="sale"></div>
          <div className="new-store">
            <h1>Find Your Perfect Look At Jolt's Stylish New On Tokyo</h1>
            <p>
              Welcome to the newest Jolt outlet in Shibuya, Japan! Step into our stylish and trendy store to discover the latest in fashion and apparel. Come and experience the unique and vibrant atmosphere.
            </p>
            <h2>Come and Enjoy Sale!</h2>
            <h3>50%</h3>
            <button>See On Maps</button>
          </div>
        </div>
        <div className="featured-collections">
          <h1>Featured Collections</h1>
          <p>Dare to mix and match! Check out collection to level up your fashion game</p>

          <div className="collections">
                <div className="collections-box">
                    <div className="footwear">
                        <div className="text-info">
                            <h1>Footwears</h1>
                            <div className="hover-info">
                                <p>Check out our new collections. Get 10% Discount on New Seasons</p>
                                <button id="more-btn">Discover</button>
                            </div>
                        </div>
                    </div>
                    <div className="headwear">
                        <div className="text-info">
                            <h1>Headwears</h1>
                            <div className="hover-info">
                                <p>Check out our new collections. Get 10% Discount on New Seasons</p>
                                <button id="more-btn">Discover</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collections-box">
                    <div className="jacket">
                        <div className="text-info">
                            <h1>Jackets</h1>
                            <div className="hover-info">
                                <p>Check out our new collections. Get 10% Discount on New Seasons</p>
                                <button id="more-btn">Discover</button>
                            </div>
                        </div>
                    </div>
                    <div className="bags">
                        <div className="text-info">
                            <h1>Bags</h1>
                            <div className="hover-info">
                                <p>Check out our new collections. Get 10% Discount on New Seasons</p>
                                <button id="more-btn">Discover</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collections-box">
                    <div className="accessories">
                        <div className="text-info">
                            <h1>Accessories</h1>
                            <div className="hover-info">
                                <p>Check out our new collections. Get 10% Discount on New Seasons</p>
                                <button id="more-btn">Discover</button>
                            </div>
                        </div>
                    </div>
                    <div className="bottoms">
                        <div className="text-info">
                            <h1>Bottoms</h1>
                            <div className="hover-info">
                                <p>Check out our new collections. Get 10% Discount on New Seasons</p>
                                <button id="more-btn">Discover</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <footer>
        <div className="newsletter">
          <div>
            <h1>Sign Up To Our Newsletter</h1>
            <p>Get The Latest Beauty Secrets And Trends, Sign Up For Our Newsletter And Stay Informed About All Things Beauty</p>
            <form className="your-info">
              <input type="email" placeholder="Your Email"/>
              <button id="more-btn">Submit</button>
            </form>
          </div>
        </div>
        <div className="footer-box">
          <div className="brand">
            <h1>Jolt</h1>
            <p>
              Experience The Great Outdoor In Style With Jolt's. Shop Now And Gear Up For Adventure In Jolt!
            </p>
          </div>
          <div className="lists">
            <ul>
              <h1>Categories</h1>
              <li>Jackets</li>
              <li>Shirts</li>
              <li>Knits</li>
              <li>T-Shirts</li>
              <li>Bottoms</li>
              <li>Accessories</li>
            </ul>
            <ul>
              <h1>Customer Care</h1>
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Order Status</li>
              <li>Return and Exchange</li>
            </ul>
            <ul>
              <h1>Company</h1>
              <li>Privacy</li>
              <li>Guides</li>
              <li>Terms of Condition</li>
            </ul>
          </div>
          <div className="socials">
            <ul>
              <li id="facebook"><ion-icon name="logo-facebook"></ion-icon></li>
              <li id="insta"><ion-icon name="logo-instagram"></ion-icon></li>
              <li id="youtube"><ion-icon name="logo-youtube"></ion-icon></li>
              <li id="twitter"><ion-icon name="logo-twitter"></ion-icon></li>
            </ul>
          </div>
        </div>
          <p className="copyright">
            &#169; 2024 Jolt Studio, Inc. - All Rights Reserved
          </p>
      </footer>
    </div>
  );
}

export default App;
