import "./Juego2.css"
import { printTemplate as HOME } from "../Home/Home"

const template = () => `
<h1>bienvenido al juego de capitales</h1>
<div class="container">
    <section id="p0">
    <h3>1- ¿cual es la capital de venezuela?</h3>
    <label>
        <input type="radio" value"1">Caracas    
    </label>
    <label>
        <input type="radio" value"2">Maracaibo  
    </label>
    <label>
        <input type="radio" value"1">Valecia      
    </label>
    </section>
</div>`








const addEventListener20 =()=> {
    const homelink = document.querySelector(".home")
    homelink.addEventListener("click", () => HOME()
    );
  }
export const printTemplate = () => {
    document.querySelector("#app").innerHTML = template();
    addEventListener20()
};
