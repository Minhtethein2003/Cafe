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
        <img src="" alt="Cappuccino" width={200} height={150}></img>
        <h3>Cuppuccino</h3>
        <p>price:15$</p>
        <button>Order Now</button>
      </div>
      <div className="menu-item">
        <img src="" alt="Cappuccino" width={200} height={150}></img>
        <h3>Cuppuccino</h3>
        <p>price:15$</p>
        <button>Order Now</button>
      </div>
      <div className="menu-item">
        <img src="" alt="Cappuccino" width={200} height={150}></img>
        <h3>Cuppuccino</h3>
        <p>price:15$</p>
        <button>Order Now</button>
      </div>
      <div className="menu-item">
        <img src="" alt="Cappuccino" width={200} height={150}></img>
        <h3>Cuppuccino</h3>
        <p>price:15$</p>
        <button>Order Now</button>
      </div>
      <div className="menu-item">
        <img src="" alt="Cappuccino" width={200} height={150}></img>
        <h3>Cuppuccino</h3>
        <p>price:15$</p>
        <button>Order Now</button>
      </div>
      <div className="menu-item">
        <img src="" alt="Cappuccino" width={200} height={150}></img>
        <h3>Cuppuccino</h3>
        <p>price:15$</p>
        <button>Order Now</button>
      </div>
      <div className="menu-item">
        <img src="" alt="Cappuccino" width={200} height={150}></img>
        <h3>Cuppuccino</h3>
        <p>price:15$</p>
        <button>Order Now</button>
      </div>
      <div className="menu-item">
        <img src="" alt="Cappuccino" width={200} height={150}></img>
        <h3>Cuppuccino</h3>
        <p>price:15$</p>
        <button>Order Now</button>
      </div>
      <div className="menu-item">
        <img src="" alt="Cappuccino" width={200} height={150}></img>
        <h3>Cuppuccino</h3>
        <p>price:15$</p>
        <button>Order Now</button>
      </div>
    </main>
  );
}

function About(){
  return(
    <div className="about">
      <h2>About Brown Cafe</h2>
      <img src="" alt="" width={300} height={300}></img>
      <p></p>
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
      <Footer />
    </div>
  );
}