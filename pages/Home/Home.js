import { printTemplate as PokeApi } from "../PokeApi/PokeApi";
import { printTemplate as Juego2 } from "../Juego2/Juego2";
import "./Home.css";

let name;
const template = () => `
<section class="home">
   
    <h2>BIENVENID@ ${name}</h2>
    <ul>
      <li>
        <a href="#" id="homelink"><img src="..//../public/imagenes/pokebola.gif"/></a>
      </li>
      <li>
        <a href = "#" id="juego2Link">hola</a>
      </li>
    </ul>
</section>
`;

const addListeners2 = () => {
  const homelink = document.querySelector("#homelink")
  homelink.addEventListener("click", () => PokeApi());

};
const addListeners3 = () => {
  const juego2Link = document.querySelector("#juego2Link")
  juego2Link.addEventListener("click", () => Juego2());
}

export const printTemplate = () => { 
  name = localStorage.getItem("user")
  document.querySelector("#app").innerHTML = template();
  addListeners2()
  addListeners3()
};
