import './style.css'

import { printTemplate as LoginTemplate } from "./pages/Login/Login";
import { printTemplate as HomeTemplate } from "./pages/Home/Home";
import { printTemplate as HeaderTemplate } from "./components/Header/Header";
import { printTemplate as PokeApi} from './pages/PokeApi/PokeApi';
import { printTemplate as PiedraPapelTijera } from './pages/PiedaPapelTijera/PiedraPapelTijera';


export const initContent = (route) => {
  switch (route) {
    case undefined:
      localStorage.getItem("user") ? HomeTemplate() : LoginTemplate();
      break;
      case "pokeApi":
      PokeApi();
      break;
      case "quiz":
        PiedraPapelTijera();
      break;
      case "login":
      LoginTemplate();
    
      
  }
};

  initContent();
  HeaderTemplate();

