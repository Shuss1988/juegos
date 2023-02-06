import "./PiedraPapelTijera.css"
import { printTemplate as HOME } from "../Home/Home"

const template = ()=> `

<button id="repeat">"player de nuevo"</button>
<section class="ppt">
<div class="player1-game2">
<h2>PLAYER1</h2>
<button id="rock-player1">👊🏽</button>
<button id="paper-player1">🖐🏽</button>
<button id="scissors-player1">✌🏽</button>
</div>
<div class="result-game2">
<button id="result-player1"></button>
<button id="result-player2"></button>
</div>
<div class="player2-game2">
<h2>PLAYER2</h2>
<button id="rock-player2">👊🏽</button>
<button id="paper-player2">🖐🏽</button>
<button id="scissors-player2">✌🏽</button>
</div>
</section>
<div id="winner-game2">
</div>`



  

const repeatGame = ()=>{
  document.querySelector("#repeat").addEventListener("click", () =>{
    printTemplate()
  });
  
  }
  

let player1 = [];
let player2 = [];

const comparation = () => {
  if (
    (player1 == 1 && player2 == 1) ||
    (player1 == 2 && player2 == 2) ||
    (player1 == 3 && player2 == 3)
  ) {
    document.querySelector("#winner-game2").innerHTML = "NO WINNERS";

    player1 = [];
    player2 = [];
  } else if (
    (player1 == 1 && player2 == 3) ||
    (player1 == 2 && player2 == 1) ||
    (player1 == 3 && player2 == 2)
  ) {
    document.querySelector("#winner-game2").innerHTML = "PLAYER 1 WINNER";
    player1 = [];
    player2 = [];
  } else if (
    (player1 == 1 && player2 == 2) ||
    (player1 == 2 && player2 == 3) ||
    (player1 == 3 && player2 == 1)
  ) {
    document.querySelector("#winner-game2").innerHTML = "PLAYER 2 WINNER";
    player1 = [];
    player2 = [];
  }
};
const rock1 = () => {
  player1 = [];
  document.querySelector("#rock-player1").addEventListener("click", () => {
    document.querySelector("#result-player1").innerHTML = "👊🏽";
    player1.push(1);
    comparation();
  });
};
const paper1 = () => {
  player1 = [];
  document.querySelector("#paper-player1").addEventListener("click", () => {
    document.querySelector("#result-player1").innerHTML = "🖐🏽";
    player1.push(2);
    comparation();
  });
};
const scissors1 = () => {
  player1 = [];
  document.querySelector("#scissors-player1").addEventListener("click", () => {
    document.querySelector("#result-player1").innerHTML = "✌🏽";
    player1.push(3);
    comparation();
  });
};
const rock2 = () => {
  player2 = [];
  document.querySelector("#rock-player2").addEventListener("click", () => {
    document.querySelector("#result-player2").innerHTML = "👊🏽";
    player2.push(1);
    comparation();
  });
};
const paper2 = () => {
  player2 = [];
  document.querySelector("#paper-player2").addEventListener("click", () => {
    document.querySelector("#result-player2").innerHTML = "🖐🏽";
    player2.push(2);
    comparation();
  });
};
const scissors2 = () => {
  player2 = [];
  document.querySelector("#scissors-player2").addEventListener("click", () => {
    document.querySelector("#result-player2").innerHTML = "✌🏽";
    player2.push(3);
    comparation();
  });
};


 const addEventListener =()=> {
    const homelink = document.querySelector(".home")
    homelink.addEventListener("click", () => HOME()
    );
  }
export const printTemplate = () => {
    document.querySelector("#app").innerHTML = template();
    addEventListener()
    rock1();
    rock2();
    paper1();
    paper2();
    repeatGame();
    scissors1();
    scissors2();
  

};
