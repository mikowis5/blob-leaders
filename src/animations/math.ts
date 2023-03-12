export const arrayInterpolate = (valuesA: number[], valuesB: (number|string)[], alpha: number) => {
  if(alpha >= 1) return valuesB[valuesB.length - 1];

  let duration = valuesA[valuesA.length - 1];
  let current = duration * alpha;
  let i = 0;
  for(;i < valuesA.length - 1; i++) {
    if(valuesA[i+1] > current) {
      break;
    }
  }

  let currentAlpha = (current - valuesA[i]) / (valuesA[i + 1] - valuesA[i]);

  if(typeof valuesB[i] === 'string' || typeof valuesB[i + 1] === 'string') {
    return valuesB[i];
  }

  return lerp(
    <number> valuesB[i], 
    <number> valuesB[i + 1], 
    currentAlpha
  );

}

export const lerp = ( a: number, b: number, alpha: number ): number => {
  return a + alpha * (b - a);
 }
