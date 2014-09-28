$(document).ready(function() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	$('#wrapper').css({'height': (windowHeight * .80) + 'px', 'width': (windowWidth * .70) + 'px'});
	$('#main-wrapper').css('width', (windowWidth * .70) + 'px');

	var numSquaresPerRow = 100;	
	var squareSidePx = ($('#wrapper').width() / numSquaresPerRow);	
	var numRows = ($('#wrapper').height() / squareSidePx);
	//alert(numRows);
	//$('.square').css({'height': squareSize, 'width': squareSize});
	populateSquares(numSquaresPerRow, numRows);

	$('.square').on('mouseenter', function() {
		$(this).addClass('fill');
	});

});

function populateSquares(numSquaresPerRow, numRows) {
		var squareSize = ($('#wrapper').width() / numSquaresPerRow) +'px';	
	
		for(var i = 0; i < (numSquaresPerRow * numRows); i++) {
			//console.log("TERST");
			$('#wrapper').append('<div class=\'square\'></div>'); 
		}		
		$('.square').css({'height': squareSize, 'width': squareSize});
	}

