function distancia(min,max, variedade = 1) {
    const n1 = max === undefined ? 1 : min
    const n2 = max === undefined ? min : max
    const array = [];
  if (n1 < n2) {
    for (let contador = n1; contador <= n2; contador += variedade) {
      array.push(contador);
    }
  }else{
      for(let contador = n1; contador >= n2; contador -= variedade){
          array.push(contador)
      }
  }
  return array
}
console.log(distancia(5));
console.log(distancia(6,11));
console.log(distancia(10,19,2));
console.log(distancia(6,2));
console.log(distancia(8,-3,4));
