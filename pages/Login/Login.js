import "./Login.css";
import { printTemplate as HeaderTemplate } from "../Home/Home";

const template = () => `
<section class="loginGlobal">
<h1>NEOLAND HUB-GAMES</h1>
<h3>Introduce tu nombre</h3>
<input type="text" class="inputLogin" id="loginInput"/>
<button id="loginBtn"> 👌🏽</button>
</section>
`;


const addListeners = () => {
  const loginInput = document.querySelector("#loginInput");
  document.querySelector("#loginBtn").addEventListener("click", () => {
    localStorage.setItem("user", loginInput.value);
    if(loginInput.value){
      HeaderTemplate()
    }

  });
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
};
