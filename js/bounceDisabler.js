var bounceDisabler = function(){
	var module = {};

	var track = [];

	var velocity = {
		x: 0,
		y: 0
	};

	function handleTouchStart (evt){
		evt.preventDefault();
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
		if(track.length > 2){
			velocity = calcVelocity();
		}
		console.log(velocity);
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
		vector.skalarMult(v, length / timeDiff * 4);
		return v;
	}

  function doScroll(){
    var pos1,
        pos2,
        x,
        y;
    if(track.length > 1){
      pos1 = track[track.length -1];
      pos2 = track[track.length -2];
      x = pos2.x - pos1.x;
      y = pos2.y - pos1.y;
      window.scrollBy(x, y);
    }
  }

	document.addEventListener("touchstart", handleTouchStart);
	document.addEventListener("touchmove", handleTouchMove);
	document.addEventListener("touchend", handleTouchEnd);
	document.addEventListener("touchcancel", handleTouchEnd);
	document.addEventListener("touchleave", handleTouchEnd);
	
	return module;
}();

