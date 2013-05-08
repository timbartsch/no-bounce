var vector = function(){
	var module = {};
	
	module.subtraction = function(v1, v2){
		return {
			x: v1.x - v2.x,
			y: v1.y - v2.y
		};
	};

	module.length = function(v) {
		return Math.sqrt((v.x * v.x) + (v.y * v.y));
	};

	module.unit = function(v){
		var length = module.length(v);
		v.x /= length;
		v.y /= length;
	};

	module.skalarMult = function(v, s) {
		v.x *= s;
		v.y *= s;
	};

	return module;
}();


