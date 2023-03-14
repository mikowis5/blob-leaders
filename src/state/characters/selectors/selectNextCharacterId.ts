import { charactersStackAtom } from "../CharactersState";
import { atom } from 'jotai';

export const selectNextCharacterId = atom(null, (get, set) => {

  const stack = get(charactersStackAtom);
  const characterId = stack.shift();
  if(characterId) {
    stack.push(characterId);
    set(charactersStackAtom, stack);
  }
  return characterId;

});