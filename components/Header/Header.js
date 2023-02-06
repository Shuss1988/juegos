
import "./Header.css";

//Configuramos el template que queremos pintar
const template = () => `
<nav>
  <button id="myBtn"><img id="colores" src="../../public/imagenes/colors.webp"/></button>
  <button class="home">🔙</button>
  <button class="logOut"><img src="../../public/salida.png"></button>

</nav>
`;

//Configuramos la funcionalidad que queremos otorgarle al template
const addListeners = () => {
  const btn = document.querySelector("#myBtn")
    btn.addEventListener("click", () => {document.body.style.background = getRandomColor();
        });
    } ;
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


export const printTemplate = () => {
  document.querySelector("header").innerHTML = template();
addListeners();
};
