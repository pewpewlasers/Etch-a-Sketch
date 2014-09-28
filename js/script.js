$(document).ready(function() {
	$('#reset').on('click', function() {
		setUpPage();
	});
	setUpPage();
});

function setUpPage() {	

	var numSquaresPerRow;
	var acceptableNumber = false;

	while(!acceptableNumber) {
		var response = prompt('How many squares per row?');
		if((response > 200) || (response < 3)) {
			alert("Please choose a number greater than 3 and less than 200.");
		}
		else {
			acceptableNumber = true;
			numSquaresPerRow = response;
		}	
	}	

	clearBoard();

	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var wrapperTargetWidth = windowWidth * .70;
	var wrapperTargetHeight = windowHeight * .70;
	var squareSize = wrapperTargetWidth / numSquaresPerRow;
	var numRows = Math.floor(wrapperTargetHeight / squareSize);

	$('header').fadeIn(900);

	$('#main-wrapper').css('width', (squareSize * numSquaresPerRow) + 'px');
	$('#wrapper').css({'height': (squareSize * numRows) + 'px', 'width': (squareSize * numSquaresPerRow) + 'px'});

	populateSquares(numSquaresPerRow, numRows, squareSize);

	$('.square').on('mouseenter', function() {
		$(this).addClass('fill');
	});
}

function populateSquares(numSquaresPerRow, numRows, squareSize) {
		for(var i = 0; i < (numSquaresPerRow * numRows); i++) {
			$('#wrapper').append('<div class=\'square\'></div>'); 
		}		
		$('.square').css({'height': squareSize, 'width': squareSize});
}

function clearBoard() {
	$('.square').remove();
}

