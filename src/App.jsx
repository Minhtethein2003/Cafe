import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Header(){
  return(
    <header>
      <h1>Brown Cafe</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </header>
  );
}

function Menu(){
  return(
    <main>
      <h2>Our Menu</h2>
      <div className="menu-item">
        <img src="photo/how-to-make-cappuccino-005.jpg" alt="Cappuccino" width={200} height={150}></img>
        <h3>Cuppuccino</h3>
        <p>price:11$</p>
        <button>Order Now</button>
      </div>
      <div className="menu-item">
        <img src="photo/shutterstock_686249962resize-500x500.jpg.webp" alt="Chai Tea" width={200} height={150}></img>
        <h3>Chai Tea</h3>
        <p>price:12$</p>
        <button>Order Now</button>
      </div>
      <div className="menu-item">
        <img src="photo/cheesecake-8.jpg" alt="Cheese cake" width={200} height={150}></img>
        <h3>Cheese cake</h3>
        <p>price:15$</p>
        <button>Order Now</button>
      </div>
      <div className="menu-item">
        <img src="photo/triple-chocolate-cake-4.jpg" alt="Chocolate cake" width={200} height={150}></img>
        <h3>Chocolate Cake</h3>
        <p>price:13$</p>
        <button>Order Now</button>
      </div>
      <div className="menu-item">
        <img src="photo/images.jpeg" alt="espresso" width={200} height={150}></img>
        <h3>Espresso</h3>
        <p>price:12$</p>
        <button>Order Now</button>
      </div>
      <div className="menu-item">
        <img src="photo/GoodFoodFrappe-8757348.jpg" alt="Caramel frappe" width={200} height={150}></img>
        <h3>Caramel frappe</h3>
        <p>price:10$</p>
        <button>Order Now</button>
      </div>
      <div className="menu-item">
        <img src="photo/main-header.jpg.avif" alt="donat" width={200} height={150}></img>
        <h3>Donat</h3>
        <p>price:15$</p>
        <button>Order Now</button>
      </div>
      <div className="menu-item">
        <img src="photo/Turkey-Club-Sandwich_EXPS_FT25_278726_EC_0408_5.jpg" alt="sandwish" width={200} height={150}></img>
        <h3>Sandwish</h3>
        <p>price:10$</p>
        <button>Order Now</button>
      </div>
      <div className="menu-item">
        <img src="photo/how-to-make-cappuccino-005.jpg" alt="Cappuccino" width={200} height={150}></img>
        <h3>Cuppuccino small</h3>
        <p>price:7$</p>
        <button>Order Now</button>
      </div>
    </main>
  );
}

function About(){
  return(
    <div className="about">
      <h2>About Brown Cafe</h2>
      <img src="photo/photo-1453614512568-c4024d13c247.jpeg" alt="shop" width={300} height={300}></img>
      <p> The Brown Cafe, established in 2020, is a cozy and welcoming coffee shop located in the heart of the city.
        Our mission is to provide high-quility coffee and delicious cake in a comfortable and friendly atmosphere. 
        We source our coffee beans from sustainable farms around the world and roast them in-house to ensure freshness and flavor.
        Our menu features a variety of coffee drinks, including espresso, cappuccino, latte and more, as well as a selection of teas and pastries.
        In addition to our coffee and food offerings, we also host events and workshops to bring the community together and share our love of coffee.
        Whether you"re looking for a quick pick-me-up or a place to relax and unwind, the Brown Cafe is the perfect destination.
        </p>
    </div>
  )
}

function Contact(){
  return(
    <div className="Contact">
      <input type="text" placeholder="Please Write About......" />
      <input type="tel" placeholder="Your Phone Number" />
      <input type="email" placeholder="Your Email" />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2026 Brown Cafe. All rights reserved.</p>
      <ul>
        <li><Link to="/privacy">Privacy Policy</Link></li>
        <li><Link to="/terms">Terms of Service</Link></li>
      </ul>
    </footer>
  );
}

export default function Cafe(){
  return(
    <div>
      <Header />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}