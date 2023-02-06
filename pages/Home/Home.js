import { initContent } from "../../main";

import "./Home.css";
let name;
const template = () => `
<section class="home">
   
    <h2>BIENVENID@ ${name}</h2>
   
    <ul>
      <li>
      <button class="logOut"></button>
      </li>
      <li>
        <button id="pokeApi"><img src="/public/pokeApi.png"</button>
      </li>
      <li>
        <button id="quiz">QuizGame</button>
      </li>
 
    </ul>

</section>
`;
const addListeners = () => {
  const pokeApi = document.querySelector("#pokeApi")
  console.log(pokeApi)
  pokeApi.addEventListener("click", () => initContent("pokeApi"))
  
  const quizGame = document.querySelector("#quiz")
 quizGame.addEventListener("click", () => initContent("quiz"));
 const buttonLogOut = document.querySelector(".logOut");
buttonLogOut.addEventListener("click", () =>{
  localStorage.removeItem("user");
  initContent("login");
})
};


export const printTemplate = () => { 
  name = localStorage.getItem("user")
  document.querySelector("#app").innerHTML = template();
  addListeners();
  

};
