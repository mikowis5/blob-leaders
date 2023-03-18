import PlayerStyle from "../components/player/PlayerStyle.type";
import empty from "../assets/img/characters/empty.png";
import phraohHat from "../assets/img/characters/phraoh_hat.png";
import phraohIntroBgReg from "../assets/img/characters/phraoh_bg_2.png";
import phraohIntroBgBack from "../assets/img/characters/phraoh_bg_1.png";
import phraohIntroBgFront from "../assets/img/characters/phraoh_bg_3.png";
import phraohLeaderBg from "../assets/img/characters/phraoh_leader_1.png";
import phraohLeaderImg from "../assets/img/characters/phraoh_leader_2.png";
import cosmoHat from "../assets/img/characters/cosmo_hat.png";
import cosmoIntroBgBack from "../assets/img/characters/cosmo_bg_1.png";
import cosmoIntroBgFront from "../assets/img/characters/cosmo_bg_3.png";
import cosmoLeaderBg from "../assets/img/characters/cosmo_leader_1.png";
import cosmoLeaderImg from "../assets/img/characters/cosmo_leader_2.png";
import knightHat from "../assets/img/characters/knight_hat.png";
import knightLeaderBg from "../assets/img/characters/knight_leader_1.png";
import knightLeaderImg from "../assets/img/characters/knight_leader_2.png";
import knightIntroBgBack from "../assets/img/characters/knight_bg_1.png";
import knightIntroBgReg from "../assets/img/characters/knight_bg_2.png";
import ninjaHat from "../assets/img/characters/ninja_hat.png";
import ninjaLeaderBg from "../assets/img/characters/ninja_leader_1.png";
import ninjaLeaderImg from "../assets/img/characters/ninja_leader_2.png";
import ninjaIntroBgReg from "../assets/img/characters/ninja_bg_2.png";
import ninjaIntroBgBack from "../assets/img/characters/ninja_bg_1.png";
import ninjaIntroBgFront from "../assets/img/characters/ninja_bg_3.png";
import cowboyHat from "../assets/img/characters/cowboy_hat.png";
import cowboyIntroBgReg from "../assets/img/characters/cowboy_bg_2.png";
import cowboyIntroBgBack from "../assets/img/characters/cowboy_bg_1.png";
import cowboyLeaderBg from "../assets/img/characters/cowboy_leader_1.png";
import cowboyLeaderImg from "../assets/img/characters/cowboy_leader_2.png";

export const getCharacterStyle = (characterId: number): PlayerStyle => {
  switch(characterId) {

    case 1:
      return {
        name: 'Blob',
        bodyColor: '#5c00ff',
        eyeColor: '#00aeff',
        leaderBg: phraohLeaderBg,
        leaderImg: phraohLeaderImg
      }

    case 2:
      return {
        name: 'Phraoh',
        bodyColor: '#c60df5',
        eyeColor: '#4e56f8',
        hat: phraohHat,
        introBgBack: phraohIntroBgBack,
        introBgReg: phraohIntroBgReg,
        introBgFront: phraohIntroBgFront,
        leaderBg: phraohLeaderBg,
        leaderImg: phraohLeaderImg
      }

    case 3:
      return {
        name: 'Cosmo',
        bodyColor: '#66eeaa',
        eyeColor: '#3355ee',
        hat: cosmoHat,
        introBgBack: cosmoIntroBgBack,
        introBgReg: empty,
        introBgFront: cosmoIntroBgFront,
        leaderBg: cosmoLeaderBg,
        leaderImg: cosmoLeaderImg
      }

    case 4:
      return {
        name: 'Knight',
        bodyColor: '#ffee44',
        eyeColor: '#3355ee',
        hat: knightHat,
        introBgBack: knightIntroBgBack,
        introBgReg: knightIntroBgReg,
        leaderBg: knightLeaderBg,
        leaderImg: knightLeaderImg,
        introBgFront: empty
      }

    case 5:
      return {
        name: 'Ninja',
        bodyColor: '#bbaacc',
        eyeColor: '#3355ee',
        hat: ninjaHat,
        introBgBack: ninjaIntroBgBack,
        introBgReg: ninjaIntroBgReg,
        introBgFront: ninjaIntroBgFront,
        leaderBg: ninjaLeaderBg,
        leaderImg: ninjaLeaderImg
      }

    case 6:
      return {
        name: 'Cowboy',
        bodyColor: '#f5900e',
        eyeColor: '#f84e7e',
        hat: cowboyHat,
        leaderBg: cowboyLeaderBg,
        leaderImg: cowboyLeaderImg,
        introBgBack: cowboyIntroBgBack,
        introBgReg: cowboyIntroBgReg,
        introBgFront: empty
      }

    default:
      return {
        name: 'Blob',
        bodyColor: '#5c00ff',
        eyeColor: '#00aeff',
        leaderBg: phraohLeaderBg,
        leaderImg: phraohLeaderImg
      }
  
  }
};