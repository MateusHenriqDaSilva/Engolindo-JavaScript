const mibr = ['coldzera','taco', 'fer', 'fallen', 'fnx']
console.log('1 temporada',mibr)
mibr.pop() //remove o ultimo elemento do array
mibr.push('felps') // adiciona o elemento no array
console.log('2 temporada',mibr)
mibr.shift(mibr) // remove o primeiro elemento do array
console.log('3 temporada', mibr)
mibr.unshift('kngv')
console.log('4 temporada', mibr)

mibr.splice(4, 1, 'trk')
console.log(mibr)
mibr.sort()
console.log(mibr)

const retirados = mibr.slice(2)
console.log(retirados)
retirados.splice(1,1)
console.log(retirados)

const theLastDance = mibr.slice(0,4)
console.log(theLastDance)
theLastDance.splice(2,1,'boltz','fnx')
console.log(theLastDance)