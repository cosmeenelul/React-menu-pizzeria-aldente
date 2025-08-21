import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Paine cu ulei de masline italian si rozmarin",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Rosii si mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza cu Spanac",
    ingredients: "Rosii, mozarella, spanac, si branza ricotta",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Rosii, mozarella, ciuperci, si ceapa",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Rosii, mozarella, si pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Rosii, mozarella, sunca, aragula, si branza burata",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Pizzeria Aldente</h1>
    </header>
  );
}

function Menu() {
  // const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>MENIU</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Bucatarie Italieneasca. 6 preparate delicioase din care poti alege.
            Toate vin direct de pe vatra, organice si delicioase.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut)
  //   return (
  //     <li className="pizza sold-out">
  //       <img src={pizzaObj.photoName} alt={pizzaObj.name} />
  //       <div>
  //         <h3>{pizzaObj.name}</h3>
  //         <p>{pizzaObj.ingredients}</p>
  //       </div>
  //       <span>SOLD OUT</span>
  //     </li>
  //   );
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
      </div>
      <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  console.log(isOpen);
  // const verify =
  //   hour > openHour && hour < closeHour
  //     ? alert("We're currently opened")
  //     : alert("Sorry we're closed");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          Suntem bucurosi sa te primim intre {openHour} si {closeHour}, acum
          este inchis
        </p>
      )}
    </footer>
  );
}
function Order({ closeHour }) {
  return (
    <div className="order">
      <p>Suntem deschisi pana la {closeHour}:00</p>
      <button className="btn">Comanda</button>
    </div>
  );
}
// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
