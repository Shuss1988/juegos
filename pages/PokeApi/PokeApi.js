import "./PokeApi.css";
import { printTemplate as HOME } from "../Home/Home";

let pokebolasMapeadas = []
let pokebolas=[];

const template = () => `

<div class="pokemon">
  <img class ="pokemon2" src="../../public/pokemon.png"
  <section class="poke">
    
    <nav id="types">
      <input type="text" class="search" id="searchInput" placeholder="Search..." />
      <button class="selectBtn" id="botonAll">all</button>
    </nav>
   
    <div class="container"></div>
  </section>
</div>
`;

const getCharacters = async ()=> { 
  pokebolas = []
  for (let index = 1; index <= 150; index++){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
  const json = await res.json();
 pokebolas.push(json);
  };

 mapCharacters(pokebolas);

}
const types = ["grass", "fire", "water", "bug", "normal", "poison", "electric", "ground", "fairy", "fighting", "psychic", "rock", "ghost", "ice", "dragon"];


const mapCharacters = (pokebolas) => { 
  pokebolasMapeadas =[]
  pokebolasMapeadas = pokebolas.map((character)=>({
  name: character.name,
  imagen: character.sprites.other.dream_world.front_default,
  id: character.id,
  weight: character.weight,
  types: character.types[0].type.name,

 }));
printCharacters(pokebolasMapeadas);
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

const filterCharacters = (characters) => {
  const filteredCharacters = characters.filter((character) =>
  character.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
 printCharacters(filteredCharacters);
}
const addLists = ()=> {
  const searchInput = document.querySelector("#searchInput")
  searchInput.addEventListener("input", ()=>{
  filterCharacters(pokebolasMapeadas);
})
};

const boton = () => {
  const allBtn = document.querySelector("#botonAll");

  allBtn.addEventListener("click", () => { 
  
   document.querySelector(".container").innerHTML = "";
  printCharacters(pokebolasMapeadas);
  
  })
}
const addEventListener =()=> {
  const homelink = document.querySelector(".home")
  homelink.addEventListener("click", () => HOME()

  );
}

const filteredPokemons =(array, type)=>{
  console.log(type, "type ")
  const filteredGrass = array.filter((typ)=>
typ.types === type)

console.log("filteredGrass",filteredGrass)

printCharacters(filteredGrass);
}

const mybuttonsFunction = () => {
  const mynav = document.querySelector("#types");
  console.log("mynav " , mynav);
for (const type of types) {
const mybtn = document.createElement("button");
    mybtn.textContent = `${type}`
    mybtn.classList.add(`${type}`);
     mynav.appendChild(mybtn);
     mybtn.addEventListener("click", ()=> {
       filteredPokemons(pokebolasMapeadas, `${type}`)
   })
 };
};


export const printTemplate = () => {
document.querySelector("#app").innerHTML = template();
addEventListener();
mybuttonsFunction();
boton();
getCharacters();
addLists();
printCharacters();
filterCharacters();
addButtonsListeners();
filterTypes();
};


