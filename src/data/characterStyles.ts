import PlayerStyle from "../components/player/PlayerStyle.type";

export const getCharacterStyle = (characterId: number): PlayerStyle => {
  switch(characterId) {

    case 1:
      return {
        bodyColor: '#5c00ff',
        eyeColor: '#00aeff'
      }

    case 2:
      return {
        bodyColor: '#ffbb55',
        eyeColor: '#0040ff'
      }

    case 3:
      return {
        bodyColor: '#66eeaa',
        eyeColor: '#3355ee'
      }

    case 4:
      return {
        bodyColor: '#ffee44',
        eyeColor: '#3355ee'
      }

    case 5:
      return {
        bodyColor: '#bbaacc',
        eyeColor: '#3355ee'
      }

    default:
      return {
        bodyColor: '#5c00ff',
        eyeColor: '#00aeff'
      }
  
  }
};