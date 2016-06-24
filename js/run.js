$(document).ready(function(){
	
	var gameInProgress = true;

	restart();

	function restart(){
		$('.x, .o').removeClass('x o');
		gameInProgress = true;
	}

	$('.newGame').on('click', function(){
		restart();
	})

	$('.square').on('click', function(){
		if (!gameInProgress) {
			return;
		}
		
		$(this).addClass('x');

		setTimeout(testSolutions); 
		setTimeout(computer, 500);
	})

	function computer(){
		if (!gameInProgress) {
			return;
		}
		
		var availableSpaces = $('.square').not('.x, .o');
		var number = Math.floor(Math.random() * availableSpaces.length);

		availableSpaces.eq(number).addClass('o');
		
		setTimeout(testSolutions, 50);
	}


	var solutions = [
		// rows
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		// diag
	 	[2, 4, 6],
		[0, 4, 8],
		// cols
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
	];

	// Grab all cells
	var $cells = $('.square');

	function testSolutions(){
		var solved = false;
		
		// Goes through each solution
		solutions.forEach(function(solution) {
			solved = checkSolution(solution);
			if (solved) {
				//winner
				alert(solved + ' is the winner!');
				gameInProgress = false;
				return;
	  	}
		})
	}

	function checkSolution(map) {
		var $solutionCells = $cells.filter(function(index) {
			return map.indexOf(index) != -1;
		});

		if ($solutionCells.filter('.x').length === 3) {
			console.log('checkSolution', 'XXX', map);
			return 'X';
		}
		if ($solutionCells.filter('.o').length === 3) {
			console.log('checkSolution', 'OOO', map);
			return 'O';
		}
	  
	  return false;
	}

});
