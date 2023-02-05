import "./PokeApi.css";
import { printTemplate as HOME } from "../Home/Home";



const template = () => `

<div class="pokemon"><img src="../../public/pokemon.png"/></div>
<section class="poke">
<input type="text" id="searchInput" placeholder="Search..." />
<button class="selectBtn" id="botonAll">all-pokemon</button>

<section class="buttons"></section>
<nav>
  <ul>
  <li> <button class="selectBtn" id="grass">Grass</button></li>
  <li><button class="selectBtn" id="fire">Fire</button></li>
  <li><button class="selectBtn" id="water">Water</button></li>
  <li><button class="selectBtn" id="bug">Bug</button></li>
  <li><button class="selectBtn" id="normal">Normal</button></li>
  <li><button class="selectBtn" id="poison">Poison</button></li>
  <li><button class="selectBtn" id="electric">Electric</button></li>
  <li><button class="selectBtn" id="ground">Ground</button></li>
  <li><button class="selectBtn" id="fairy">Fairy</button></li>
  <li><button class="selectBtn" id="fighting">Fighting</button></li>
  <li><button class="selectBtn" id="psychic">Psychic</button></li>
  <li> <button class="selectBtn" id="rock">Rock</button></li>
  <li><button class="selectBtn" id="ghost">Ghost</button></li>
  <li><button class="selectBtn" id="ice">Ice</button></li>
  <li> <button class="selectBtn" id="dragon">Dragon</button></li>
  </ul>
</nav>

</div>
    <div class="container"></div>
  
</section>
`;
let pokebolas=[];

const getCharacters = async ()=> {  0
  for (let index = 1; index <= 150; index++){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
  const json = await res.json();
 pokebolas.push(json);
  };

/*
  const filtercharacters = pokebolas.filter((grass) => grass.types[0].type.name === "grass")
  const grassBtn = document.querySelector("#grass");
  grassBtn.addEventListener("click", () => { 
  document.querySelector(".container").innerHTML = "";
 mapCharacters(filtercharacters);
 
 })
  const filtercharacters2 = pokebolas.filter((fire) =>fire.types[0].type.name === "fire")
  const fireBtn = document.querySelector("#fire");
  fireBtn.addEventListener("click", () => {
  document.querySelector(".container").innerHTML = "";
mapCharacters(filtercharacters2)
 })

 const filterCharacters3 = pokebolas.filter((water) => water.types[0].type.name ==="water")
 const waterBtn = document.querySelector("#water");waterBtn.addEventListener("click", () =>{
  document.querySelector(".container").innerHTML = "";
  mapCharacters(filterCharacters3)
 });
 const filterCharacters4 = pokebolas.filter((bug) => bug.types[0].type.name === "bug")
 const bugBtn = document.querySelector("#bug"); bugBtn.addEventListener("click", () =>{
  document.querySelector(".container").innerHTML = "";
  mapCharacters(filterCharacters4)
 });
 const filterCharacters5 = pokebolas.filter((normal) => normal.types[0].type.name === "normal")
 const normalBtn = document.querySelector("#normal"); normalBtn.addEventListener("click", ()=>{
  document.querySelector(".container").innerHTML = "";
  mapCharacters(filterCharacters5)
 });
 const filterCharacters6 = pokebolas.filter((poison) => poison.types [0].type.name=== "poison")
 const poisonBtn = document.querySelector("#poison"); poisonBtn.addEventListener("click", () => {
  mapCharacters(filterCharacters6)
 });
 const filterCharacters7 = pokebolas.filter((electric) => electric.types [0].type.name === "electric")
 const electricBtn = document.querySelector("#electric"); electricBtn.addEventListener("click", () => {
  mapCharacters(filterCharacters7)
 });
 const filterCharacters8 = pokebolas.filter((ground) => ground.types [0].type.name === "ground")
 const groundBtn = document.querySelector("#ground"); groundBtn.addEventListener("click",() => {
  mapCharacters(filterCharacters8)
 });
 const filterCharacters9 = pokebolas.filter((fairy) => fairy.types [0].type.name === "fairy")
 const fairyBtn = document.querySelector("#fairy"); fairyBtn.addEventListener("click",() => {
  mapCharacters(filterCharacters9)
 });
 const filterCharacters10 = pokebolas.filter((psychic) => psychic.types [0].type.name === "psychic")
 const psychicBtn = document.querySelector("#psychic"); psychicBtn.addEventListener("click",() => {
  mapCharacters(filterCharacters10)
 })
 const filterCharacters11 = pokebolas.filter((rock) => rock.types [0].type.name === "rock")
 const rockBtn = document.querySelector("#rock"); rockBtn.addEventListener("click",() => {
  mapCharacters(filterCharacters11)
 })
 const filterCharacters12 = pokebolas.filter((ghost) => ghost.types [0].type.name === "ghost")
 const ghostBtn = document.querySelector("#ghost"); ghostBtn.addEventListener("click",() => {
  mapCharacters(filterCharacters12)
 })
 const filterCharacters13 = pokebolas.filter((ice) => ice.types [0].type.name === "ice")
 const iceBtn = document.querySelector("#ice"); iceBtn.addEventListener("click",() => {
  mapCharacters(filterCharacters13)
 })
 const filterCharacters14 = pokebolas.filter((dragon) => dragon.types [0].type.name === "dragon")
 const dragonBtn = document.querySelector("#dragon"); dragonBtn.addEventListener("click",() => {
  mapCharacters(filterCharacters14)
 })
 const filterCharacters15 = pokebolas.filter((fighting) => fighting.types [0].type.name === "fighting")
 const fightingBtn = document.querySelector("#fighting"); fightingBtn.addEventListener("click",() => {
  mapCharacters(filterCharacters15)
 })
 
*/
 mapCharacters(pokebolas);

}
const filterTypes = (array, type) => {
  const filteredTypes = array.filter((item) => item.type === type);
  printCharacters(filteredTypes);
  }


const mapCharacters = (pokemons) => { 
  pokebolas = pokemons.map((character)=>({
  name: character.name,
  imagen: character.sprites.other.dream_world.front_default,
  id: character.id,
  weight: character.weight,
  types: character.types[0].type.name,

 }));
printCharacters(pokebolas);
};

const printCharacters = (characters) => {
const container = document.querySelector(".container");
container.innerHTML = "";
for (const character of characters) {
  const figure = document.createElement("figure");
  figure.classList.add(`${character.types}`)
  figure.innerHTML = `
  <h2>${character.id}</h2>
  <img src=${character.imagen} alt=${character.name}/>
  <h2>${character.name}</h2>
  <p>${character.weight}</p>
  <h2>${character.types}</h2>`;
  container.appendChild(figure);
}
};

const addButtonsListeners = () => {
//recuperamos todos los botones
const allBtns = document.querySelectorAll(".selectBtn");
//le añadimos un addEventListener a cada uno de ellos
for (const btn of allBtns){
  console.log({allBtns});
  btn.addEventListeners("click", () => {
  getCharacters(target.id);
  type = target.id;
  }); 
}
}

const filterCharacters = (characters) => {
  const filteredCharacters = characters.filter((character) =>
  character.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
 printCharacters(filteredCharacters);
}
const addLists = ()=> {
  const searchInput = document.querySelector("#searchInput")
searchInput.addEventListener("input", ()=>{
  filterCharacters(pokebolas);
})
};

const boton = () => {
  const allBtn = document.querySelector("#botonAll");
  allBtn.addEventListener("click", () => {
   document.querySelector(".container").innerHTML = "";
  getCharacters();
  })
}

const addEventListener =()=> {
  const homelink = document.querySelector(".home")
  homelink.addEventListener("click", () => HOME()

  );
}

export const printTemplate = () => {
document.querySelector("#app").innerHTML = template();
addEventListener()
getCharacters();
addLists();
printCharacters();
boton();
filterCharacters();
addButtonsListeners();
filterTypes()
};


