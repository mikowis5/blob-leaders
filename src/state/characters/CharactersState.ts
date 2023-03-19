import { atom } from 'jotai';

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const characters = shuffleArray(
  [...Array(20)].map((v, i) => i+1)
);
export const charactersStackAtom = atom<number[]>([...characters]);