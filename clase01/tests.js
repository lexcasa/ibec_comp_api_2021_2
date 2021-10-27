const tests = {
	funcTest: function (output, pass, label){
		if(output === pass){
			return 'pass :: ' + label
		}
		return 'not pass :: ' + label
	},
	alumnosTest: function (arr, cantidad, label){
		if(arr.length === cantidad){
			return 'pass :: ' + label
		}
		return 'not pass :: ' + label
	}
}
// Transformar el objeto "tests" en un modulo
// Reutilizable
module.exports = tests