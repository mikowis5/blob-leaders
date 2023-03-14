import PlayerStyle from "../components/player/PlayerStyle.type";
import empty from "../assets/img/characters/empty.png";
import phraohHat from "../assets/img/characters/phraoh_hat.png";
import phraohIntroBgReg from "../assets/img/characters/phraoh_bg_2.png";
import phraohIntroBgBack from "../assets/img/characters/phraoh_bg_1.png";
import phraohIntroBgFront from "../assets/img/characters/phraoh_bg_3.png";
import cosmoHat from "../assets/img/characters/cosmo_hat.png";
import cosmoIntroBgBack from "../assets/img/characters/cosmo_bg_1.png";
import cosmoIntroBgFront from "../assets/img/characters/cosmo_bg_3.png";
import knightHat from "../assets/img/characters/knight_hat.png";
import ninjaHat from "../assets/img/characters/ninja_hat.png";

export const getCharacterStyle = (characterId: number): PlayerStyle => {
  switch(characterId) {

    case 1:
      return {
        bodyColor: '#5c00ff',
        eyeColor: '#00aeff'
      }

    case 2:
      return {
        bodyColor: '#c60df5',
        eyeColor: '#4e56f8',
        hat: phraohHat,
        introBgBack: phraohIntroBgBack,
        introBgReg: phraohIntroBgReg,
        introBgFront: phraohIntroBgFront,
      }

    case 3:
      return {
        bodyColor: '#66eeaa',
        eyeColor: '#3355ee',
        hat: cosmoHat,
        introBgBack: cosmoIntroBgBack,
        introBgReg: empty,
        introBgFront: cosmoIntroBgFront,
      }

    case 4:
      return {
        bodyColor: '#ffee44',
        eyeColor: '#3355ee',
        hat: knightHat
      }

    case 5:
      return {
        bodyColor: '#bbaacc',
        eyeColor: '#3355ee',
        hat: ninjaHat
      }

    default:
      return {
        bodyColor: '#5c00ff',
        eyeColor: '#00aeff'
      }
  
  }
};