const calculadora = {
	suma: function (a, b){
		return a + b
	},
	resta: function (a, b){
		return a - b
	},
	multiplicacion: function (a, b){
		return a * b
	},
	division: function (a, b){
		if(b !== 0){
			return a/b
		}
		return 'error'
	}
}

// Importamos el modulo de tests
const { funcTest } = require('./tests')

console.log( funcTest( calculadora.suma(1,1),  2, 'test 1') )
console.log( funcTest( calculadora.resta(1,1), 0, 'test 2') )
console.log( funcTest( calculadora.multiplicacion(1,1), 1, 'test 3') )
console.log( funcTest( calculadora.division(1,0), 'error', 'test 4') )
console.log( funcTest( calculadora.division(1,1), 1, 'test 5') )