module.exports = function(params, fn){
	return function* (){
		fn(params);
	}

}
