import { useState } from "react";
import blackHoodieImage from '../assets/blackhoodie.png';
import greyHoodieImage from '../assets/greyhoodie.png';
import blueHoodieImage from '../assets/bluehoodie.png';
import camoHoodieImage from '../assets/camohoodie.png';
import heart from "../assets/heart-outline.svg";
import likedHeart from "../assets/heart.png";
import cart from "../assets/cart-outline.svg";
import addedCart from "../assets/cart.svg";
import "../styles/products.css";

function ProductsScreen() {
  const [showMore, setShowMore] = useState(false);
  const readMore = () => {
    setShowMore(!showMore);
  };

  const [currentImage, setCurrentImage] = useState(blackHoodieImage);

   // Handlers for changing hoodie images
  const blackHoodie = () => setCurrentImage(blackHoodieImage);
  const greyHoodie = () => setCurrentImage(greyHoodieImage);
  const blueHoodie = () => setCurrentImage(blueHoodieImage);
  const camoHoodie = () => setCurrentImage(camoHoodieImage);


  // Handler for toggling the "read more" text
  const toggleReadMore = () => setShowMore(!showMore);

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

  return (
    <div className="product-page">
      <nav></nav>
        <div className="my-product-box">
          <div className="product-nav">
            <ul className="desktop">
              <li onClick={blackHoodie} id="img-box1"></li>
              <li onClick={greyHoodie} id="img-box2"></li>
              <li onClick={blueHoodie} id="img-box3"></li>
              <li onClick={camoHoodie} id="img-box4"></li>
            </ul>
            <section
              id="product-image"
              style={{ backgroundImage: `url(${currentImage})` }}
            >
              {/* Product image section now controlled by React's state */}
            </section>
            <ul className="mobile">
              <li onClick={blackHoodie} id="img-box1"></li>
              <li onClick={greyHoodie} id="img-box2"></li>
              <li onClick={blueHoodie} id="img-box3"></li>
              <li onClick={camoHoodie} id="img-box4"></li>
            </ul>
          </div>
          <div className="about-product">
            <div className="title">
              <p>Jolt/Jackets</p>
              <h1>Boa Fleece Jackets</h1>
              <h2>
                $122.00 <del>$129.00</del> <button>5% Disc</button>
              </h2>
              <ul>
                <li>
                  <ion-icon name="star"></ion-icon>
                </li>
                <li>
                  <ion-icon name="star"></ion-icon>
                </li>
                <li>
                  <ion-icon name="star"></ion-icon>
                </li>
                <li>
                  <ion-icon name="star"></ion-icon>
                </li>
                <li>
                  <ion-icon name="star-outline"></ion-icon>
                </li>
                <li>
                  <span>(4.9)</span> 1.2K Reviews
                </li>
              </ul>
            </div>
            <div className="desc">
              <h1>Descriptions</h1>
              <p>
                Introducing the Boa Fleece Winter Jacket, designed to keep you
                warm and comfortable during the coldest winter days. Crafted
                from high-quality fleece material, this jacket offers superior
                insulation and softness, making it the perfect choice for
                outdoor activities or everyday wear. The jacket features a
                stylish and functional design, with a&nbsp;
                <span id="dots">{showMore ? "" : "..."}</span>
                <span
                  id="more"
                  style={{ display: showMore ? "inline" : "none" }}
                >
                  fleece-lined hood, durable zippers, and spacious pockets. Stay
                  warm and look great this winter with our Boa Fleece Winter
                  Jacket.&nbsp;
                </span>
                <button onClick={readMore} id="morebtn">
                  {showMore ? "Read Less" : "Read More"}
                </button>
              </p>
            </div>
            <div className="info">
              <h1>Available Colors</h1>
              <ul className="colors">
                <li>
                  <button onClick={blackHoodie}></button>
                </li>
                <li>
                  <button onClick={greyHoodie} id="grey"></button>
                </li>
                <li>
                  <button onClick={blueHoodie} id="blue"></button>
                </li>
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
        <div className="products-box">
        <div className="products">
            <div className="product-image1">
              <button id="limited">Limited</button>
              <span id="heart">
                {" "}
                <img
                  onClick={() => toggleLike(0)}
                  src={likedProducts[0] ? likedHeart : heart}
                  alt="heart icon"
                />{" "}
              </span>
            </div>
            <div className="product-info">
              <aside>
                <h2>Carabiner Set</h2>
                <h3>
                  $24.54 <del>$33.53</del>
                </h3>
              </aside>
              <span id="info-cart">
                {" "}
                <img
                  onClick={() => toggleCart(0)}
                  src={addedCarts[0] ? addedCart : cart}
                  alt="cart icon"
                />{" "}
              </span>
            </div>
          </div>
          <div className="products">
            <div className="product-image2">
              <span id="heart">
                {" "}
                <img
                  onClick={() => toggleLike(1)}
                  src={likedProducts[1] ? likedHeart : heart}
                  alt="heart icon"
                />{" "}
              </span>
            </div>
            <div className="product-info">
              <aside>
                <h2>Off-Road Shoulder Bag</h2>
                <h3>
                  $34.54 <del>$43.53</del>
                </h3>
              </aside>
              <span id="info-cart">
                {" "}
                <img
                  onClick={() => toggleCart(1)}
                  src={addedCarts[1] ? addedCart : cart}
                  alt="cart icon"
                />{" "}
              </span>
            </div>
          </div>
          <div className="products">
            <div className="product-image3">
              <span id="heart">
                {" "}
                <img
                  onClick={() => toggleLike(2)}
                  src={likedProducts[2] ? likedHeart : heart}
                  alt="heart icon"
                />{" "}
              </span>
            </div>
            <div className="product-info">
              <aside>
                <h2>Cozy Indoor Sandals</h2>
                <h3>
                  $40.54 <del>$45.53</del>
                </h3>
              </aside>
              <span id="info-cart">
                {" "}
                <img
                  onClick={() => toggleCart(2)}
                  src={addedCarts[2] ? addedCart : cart}
                  alt="cart icon"
                />{" "}
              </span>
            </div>
          </div>
          <div className="products">
            <div className="product-image4">
              <button id="limited">Limited</button>
              <span id="heart">
                {" "}
                <img
                  onClick={() => toggleLike(3)}
                  src={likedProducts[3] ? likedHeart : heart}
                  alt="heart icon"
                />{" "}
              </span>
            </div>
            <div className="product-info">
              <aside>
                <h2>Thermo Cup</h2>
                <h3>
                  $14.54 <del>$23.53</del>
                </h3>
              </aside>
              <span id="info-cart">
                {" "}
                <img
                  onClick={() => toggleCart(3)}
                  src={addedCarts[3] ? addedCart : cart}
                  alt="cart icon"
                />{" "}
              </span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ProductsScreen;