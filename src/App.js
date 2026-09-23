import React from 'react'
import { useEffect } from 'react';
import './App.css';
import Navebar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Reserve from './components/Reserve';
import Footer from './components/Footer';
function App() {
   useEffect(() => {
    document.title = "La Bella Cucina";
  }, []);


   const menuItems = [
  {
    id: 1,
    tag: "Pizza",
    title: "Margherita Classica",
    desc: "San Marzano tomatoes, buffalo mozzarella, fresh basil, extra virgin olive oil on a wood-fired crust.",
    price: "Rs. 1,850",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80"
  },
  {
    id: 2,
    tag: "Pasta",
    title: "Spaghetti Carbonara",
    desc: "Slow-cured guanciale, Pecorino Romano, farm egg yolks, cracked black pepper. A Roman classic.",
    price: "Rs. 1,650",
    img: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80"
  },
  {
    id: 3,
    tag: "Grill",
    title: "Bistecca Fiorentina",
    desc: "Premium T-bone steak, rosemary infused butter, roasted garlic, seasonal greens.",
    price: "Rs. 3,900",
    img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80" 
  },
   {
    id: 4,
    tag: "Starte",
    title: "Bruschetta al Pomodoro",
    desc: "Grilled sourdough, heirloom tomatoes, aged balsamic reduction, shaved Parmesan.",
    price: "Rs. 850",
    img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80" 
  },
   {
    id: 5,
    tag: "Dessert",
    title: "Tiramisù Originale",
    desc: "Mascarpone cream, espresso-soaked ladyfingers, dark cocoa, a touch of Marsala.",
    price: "Rs. 950",
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80" 
  },
   {
    id: 6,
    tag: "Main",
    title: "Risotto ai Funghi",
    desc: "Arborio rice, wild porcini mushrooms, white wine, aged Parmigiano-Reggiano, truffle oil.",
    price: "Rs. 2100",
    img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80" 
  },
];


  return (
    <div className='App'>
      <Navebar restaurantFirst="La" restaurantSecond="Bella" />
      <Hero />
      <About />
      <Menu items= {menuItems} />
      <Gallery />
      <Reviews />
      <Reserve />
      <Footer />
    </div>

  )
}

export default App;
