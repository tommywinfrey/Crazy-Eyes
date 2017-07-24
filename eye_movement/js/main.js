$(function() {
	var $face = $('.face');
	var $eyeball = $('.eyeball');
	var $body = $('body');
	var windowHeight = window.screen.availHeight;
	var windowLeft = window.screen.availWidth;
	var $eye = $('.eye');

	$face.css( { 'top': + (windowHeight / 4)});
	$face.css( { 'left': + ((windowLeft - 110) / 3) })
	
	$(window).on('click', function() {
		$eye.velocity({ height: 10 });
		$eye.velocity('reverse', { duration: 1000 });
	});
	
	$(window).mousemove(function(e) {
		var pageX = e.pageX;
		var pageY = e.pageY;
		var $iris = $('.iris');

		$iris.velocity({'top': + (pageY / 20) + 'px', 'left': + (pageX / 20) + 'px'}, { duration: 1});
			if (pageX > (windowLeft / 2)) {
				$eyeball.velocity({ 'left': + (pageX / 50) + 'px'}, { duration: 1});
			}

			
	})

	var $crossEye = $('.cross-eye');

	$crossEye.hover(function() {
		var $eyeballLeft = $('.left');
		var $eyeballRight = $('.right');
		var $irisLeft = $('.iris_left');
	
		
		$eyeballLeft.velocity({ 'left': '50px'}, {duration: 1}, 'spring');
		$eyeballRight.velocity({ 'left': '-50px'}, {duration: 1}, 'spring');
		$irisLeft.velocity({'translateX': '-15px'}, {duration: 1}, 'spring');
	}, function() {
		var $eyeballLeft = $('.left');
		var $eyeballRight = $('.right');
		var $irisLeft = $('.iris_left');
	
		$eyeballLeft.velocity('reverse', {duration: 50}, 'spring');
		$eyeballRight.velocity('reverse', {duration: 50},'spring');
		$irisLeft.velocity('reverse', {duration: 1}, 'spring');
	})



});














