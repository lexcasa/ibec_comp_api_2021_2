const MAYOR_EDAD = 18
const DISPONIBLE = 1000


const funcAlquilerAuto = function (tdcDisponible, edad, tieneLibreta, tieneSeguro){
	let puedeAlquilar = (tdcDisponible >= DISPONIBLE) && (edad >= MAYOR_EDAD) && tieneLibreta && tieneSeguro
	if(puedeAlquilar){
		return "PUEDE ALQUILAR"
	}
	return "NO PUEDE ALQUILAR"
}

const funcTest = function (output, pass, label){
	if(output === pass){
		return 'pass :: ' + label
	}
	return 'not pass :: ' + label
}

console.log( funcTest( funcAlquilerAuto(1000, 18, true, true), 	"PUEDE ALQUILAR",    'test 1' ))
console.log( funcTest( funcAlquilerAuto(999, 17, false, false), "NO PUEDE ALQUILAR", 'test 2' ))