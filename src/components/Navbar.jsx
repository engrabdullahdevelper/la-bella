import { useState } from "react";
function Navebar(props) {
    const [isMenuOpen , setIsMenuOpen] = useState (false);
    return(
        <>
<nav>
    <a href="#" className="nav-logo">{props.restaurantFirst} <span>{props.restaurantSecond}</span></a>
<ul className="nav-links">
  <li><a href="#about">About</a></li>
  <li><a href="#menu">Menu</a></li>
  <li><a href="#gallery">Gallery</a></li>
  <li><a href="#reviews">Reviews</a></li>
  <li><a href="#reserve" className="nav-cta">Reserve</a></li>
</ul>
<button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
  <span></span>
  <span></span>
  <span></span>
</button>
</nav>
{isMenuOpen && (
  <div className="mobile-menu open">
    <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
    <a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a>
    <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
    <a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a>
    <a href="#reserve" onClick={() => setIsMenuOpen(false)}>Reserve a Table</a>
  </div>
)}
</>
    );
}

 export default Navebar;