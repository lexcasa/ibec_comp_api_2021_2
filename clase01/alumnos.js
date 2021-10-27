const MAYOR_EDAD  = 18
const edades 	  = [10, 15, 22, 18, 23]

const clasificaEdades = function (edades){
	let edadesMayor   = []
	for (let i = 0; i < edades.length; i++){
		if(edades[i] >= MAYOR_EDAD){
			edadesMayor.push( edades[i] )
		}
	}
	return edadesMayor
}

const funcTest = require('./tests').alumnosTest

console.log(funcTest( clasificaEdades(edades), 3, 'test 1'))
console.log(funcTest( clasificaEdades([]), 0, 'test 2'))