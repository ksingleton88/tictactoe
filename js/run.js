
var userTurn;

$(document).ready(function(){

	restart();

	function restart(){
		$('.x, .o').removeClass('x o');
	}

	$('.newGame').on('click', function(){
		restart();
	})

	$('.square').on('click', function(){
		var className = userTurn ? 'x' : 'o';
		//same as: if(userTurn){className='x;} else{className='o'}
		userTurn =! userTurn //tells us whose turn it is (toggles)
		$(this).addClass('x');

		setTimeout(computer, 1000);

	})

	function computer(){
		var availableSpaces = $('.square').not('.x, .o');
		var number = Math.floor(Math.random() * availableSpaces.length);

		availableSpaces.eq(number).addClass('o');
	}


	var solutions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
	 	[2, 4, 6],
		[0, 4, 8],
		[0, 3, 6],
		[2, 5, 8],
	];

	// Grab all cells
	var $cells = $('.square');

	// Goes through each solution
	solutions.forEach(function(solution) {
		if (checkSolution(solution)) {
			debugger;
   		 alert('winner');
  		}
	});

	function checkSolution(map) {
	  var solved = true;
	  var firstCellId = map.shift();
	  var matcher;
	  
	  if ($cells.eq(firstCellId).hasClass('x')) {
	    matcher = 'x';
	  }
	  else if ($cells.eq(firstCellId).hasClass('o')) {
	    matcher = 'o';
	  }
	  
	  if (!matcher) {
	    return false;
	  }
	  
	  // [4, 5]
	  map.forEach(function(cellId) {
	    if (!$cells.eq(cellId).hasClass(matcher)) {
	      return false;
	    }
	  });
	  
	  return solved;
	}

});


