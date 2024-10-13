import { useState } from "react";
import "../styles/index.css";

function SiteFooter() {
  return (
    <div>
      <footer>
        <div className="newsletter">
          <div>
            <h1>Sign Up To Our Newsletter</h1>
            <p>
              Get The Latest Beauty Secrets And Trends, Sign Up For Our
              Newsletter And Stay Informed About All Things Beauty
            </p>
            <form className="your-info">
              <input type="email" placeholder="Your Email" />
              <button id="more-btn">Submit</button>
            </form>
          </div>
        </div>
        <div className="footer-box">
          <div className="brand">
            <h1>Jolt</h1>
            <p>
              Experience The Great Outdoor In Style With Jolt's. Shop Now And
              Gear Up For Adventure In Jolt!
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
              <li id="facebook">
                <ion-icon name="logo-facebook"></ion-icon>
              </li>
              <li id="insta">
                <ion-icon name="logo-instagram"></ion-icon>
              </li>
              <li id="youtube">
                <ion-icon name="logo-youtube"></ion-icon>
              </li>
              <li id="twitter">
                <ion-icon name="logo-twitter"></ion-icon>
              </li>
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

export default SiteFooter;
