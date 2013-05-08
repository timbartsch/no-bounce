var noBounce = function(){
	var module = {};

  var settings = {
    preventDefault: true,
    animate: true
  };

	var track = [];

	var velocity = {
		x: 0,
		y: 0
	};

  var vector = {
    subtraction: function(v1, v2){
      return {
        x: v1.x - v2.x,
        y: v1.y - v2.y
      };
    },
    length: function(v) {
		  return Math.sqrt((v.x * v.x) + (v.y * v.y));
	  },
    unit: function(v){
      var length = vector.length(v);
      v.x /= length;
      v.y /= length;
    },
    skalarMult: function(v, s) {
      v.x *= s;
      v.y *= s;
    }
  };

  var requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

	function handleTouchStart (evt){
    if(settings.preventDefault){
      evt.preventDefault();
    }
		var point,
			touch;

		touch = evt.changedTouches[0];
		point = {
			x: touch.clientX,
			y: touch.clientY,
			timeStamp: evt.timeStamp
		};
		track = [point];
	}

	function handleTouchMove (evt){	
		var point,
			touch;

		touch = evt.changedTouches[0];
		point = {
			x: touch.clientX,
			y: touch.clientY,
			timeStamp: evt.timeStamp
		};
		track.push(point);
    doScroll();
	}

	function handleTouchEnd (evt){
		if(track.length > 2 && settings.animate){
			velocity = calcVelocity();
      requestAnimFrame(animate);
		}
	}

	function calcVelocity(){
		var p1,
        p2,
        v,
        timeDiff,
        length;

		p1 = track[0];
		p2 = track[track.length-1];
		timeDiff = p2.timeStamp - p1.timeStamp;
		v = vector.subtraction(p2, p1);
		length = vector.length(v);
		vector.unit(v);
		vector.skalarMult(v, length / timeDiff * 20);
		return v;
	}

  function doScroll(){
    var p1,
        p2,
        x,
        y;

    if(track.length > 1){
      p1 = track[track.length -1];
      p2 = track[track.length -2];
      x = p2.x - p1.x;
      y = p2.y - p1.y;
      window.scrollBy(x, y);
    }
  }

  function animate(){
    scrollBy(-velocity.x, -velocity.y);
    vector.skalarMult(velocity, 0.95);
    if(vector.length(velocity) > 0.2){
      requestAnimFrame(animate);
    }
  }

  module.init = function(options){
    if(typeof options.preventDefault === "boolean"){
      settings.preventDefault = options.preventDefault;
    }
    if(typeof options.animate === "boolean"){
      settings.animate = options.animate;
    }

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("touchcancel", handleTouchEnd);
    document.addEventListener("touchleave", handleTouchEnd);
  };

	return module;
}();

