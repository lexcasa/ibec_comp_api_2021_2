const MAYOR_EDAD = 18

// Variables del problema
let pasaporte   = true
let cedula 	    = true
let pcrNegativo = false
let edad 	    = 29

const funcPuedeViajar = function (pasaporte, cedula, pcrNegativo, edad){
	let puedeViajar = (pasaporte || cedula) && pcrNegativo && (edad >= MAYOR_EDAD)
	if(puedeViajar){
		return "PUEDE VIAJAR"
	} else {
		return "NO PUEDE VIAJAR"
	}
}


const funcTest = function (output, pass, label){
	if(output === pass){
		return 'pass :: ' + label
	}
	return 'not pass :: ' + label
}

let test1 = funcTest( funcPuedeViajar(true, false, true, 18), 	"PUEDE VIAJAR", 	'test 1')
let test2 = funcTest( funcPuedeViajar(true, false, false, 18), 	"NO PUEDE VIAJAR",  'test 2')
let test3 = funcTest( funcPuedeViajar(true, true, true, 18), 	"PUEDE VIAJAR",     'test 3')
let test4 = funcTest( funcPuedeViajar(false, false, false, 17), "NO PUEDE VIAJAR",  'test 4')

console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)