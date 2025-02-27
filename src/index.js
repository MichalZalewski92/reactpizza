import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App() {
    return <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
        </div>
}

function Header() {
    const style = {color: 'red', fontSize : 50, textTransform : 'uppercase'};
    return (
    <header className='header'>
        <h1 >React Pizza Co.</h1>
    </header>
    )
}

function Menu() {
  
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
    return (
    <menu className="menu">
        <h2>Our Menu</h2>
        <p>Pyszna włoska pizza !</p>

    {numPizzas > 0 ?(
    <ul className="pizzas">
          {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
          )) }

    </ul>
): <p>We still working on our menu</p>}

        
        {/* <Pizza 
        name='Pizza Spinaci' 
        ingredients='Tomato, mozarella, spinach, 
        and ricotta cheese' 
        photoName='pizzas/spinaci.jpg' 
        price={10}/>
        <Pizza 
        name='Pizza Funghi' 
        ingredients='mushroom' 
        price={20} 
        photoName='pizzas/funghi.jpg'/> */}
        
    </menu>
    );
}


function Pizza({pizzaObj}) {
   
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}> {/*JAVASCRIPT TERNARY OPARATOR - do zapamietania*/}
            <img src={pizzaObj.photoName} alt = {pizzaObj.name}/>
            <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
            </div>
        </li>
        );
}

function Footer() {

    const hour = new Date().getHours()
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if(hour >= openHour && hour <= closeHour) alert("we're currently open");
    //  else alert("sorry we re closed");

    // return React.createElement("footer",null, "We're currently open")
    return <footer className="footer">
      {isOpen ? <Order closeHour={closeHour} openHour={openHour} />
   
      :<p>We're closed see you beetwen {openHour}:00 and {closeHour}:00</p>}

    </footer>
}

function Order(props) {
  return(
  <div className="order">
  <p>
    We're open until {props.closeHour}:00. Come visit us or order online.
  </p>
  <button className="btn">Order</button>
  </div>
  )}






const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
    );

