import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<StrictMode></StrictMode>);

function Card(promps) {
  return (
    <div className="mycard">
      <h2>{promps.name}</h2>
      <img src={promps.img} alt="avar img" />
      <p> {promps.tel}</p>
      <p> {promps.email}</p>
    </div>
  );
}

root.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://cdn.britannica.com/51/188751-050-D4E1CFBC/Beyonce-2010.jpg?w=400&h=300&c=crop"
      tel="+44 32342211"
      email="beyonce@gmail.com"
    />
    <Card
      name="Leonardo"
      img="https://s.abcnews.com/images/International/Leonardo-da-vinci-file-gty-ml-190502_hpMain_4x3_608.jpg"
      tel="+44 32342211"
      email="leonardo@gmail.com"
    />
  </div>
);
