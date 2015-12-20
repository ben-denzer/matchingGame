$(function() {

	$('#error').hide();
	$('#win').hide();
	var tempValOne;
	var tempValTwo;
	var setBlue;
	var cardsUp = 0;
	var match = 6; 
	var cardArray = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F'] 
	var cardOne = $('#cOne');
	var cardTwo = $('#cTwo');
	var cardThree = $('#cThree');
	var cardFour = $('#cFour');
	var cardFive = $('#cFive');
	var cardSix = $('#cSix');
	var cardSeven = $('#cSeven');
	var cardEight = $('#cEight');
	var cardNine = $('#cNine');
	var cardTen = $('#cTen');
	var cardEleven = $('#cEleven');
	var cardTwelve = $('#cTwelve');
	
//RANDOMIZE LETTERS
	function cardText(array) {
		
		for (var i = array.length - 1; i > 0; i --) {
			var j = Math.floor(Math.random() * ( i + 1 ));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	return array;
	}
	cardText(cardArray);
// FUNCTION TO ADD LETTERS TO CARDS
	var cardName;
	var cardLetter;
	function CardFunc( cardName, cardLetter ) {
		if (cardName.hasClass('white') && cardName.text('')) {
						cardName.append('<br>' + cardArray[cardLetter]);
		}	
	}
	
//FLIP CARDS BACK OVER (USED IN ONCLICK)
	var blue = function() {
		$('.card').removeClass('white').text("");
	}


//CLEAR ALL	
	var clear = function() {
		cardsUp = 0;
		tempValOne = 0;
		tempValTwo = 0;
	}

//ONCLICK
	$('.card').click(function() {
	
		cardsUp += 1;
		
//STOPPING ERRORS	

		if (cardsUp < 3) {
				
			if ($(this).hasClass('white')) {
				return;
			}

//FUNCTIONALITY
				
			$(this).addClass('white');
				new CardFunc( cardOne, 0 );			 
				new CardFunc( cardTwo, 1 );
				new CardFunc( cardThree, 2 );
				new CardFunc( cardFour, 3 );
				new CardFunc( cardFive, 4 );
				new CardFunc( cardSix, 5 );
				new CardFunc( cardSeven, 6 );
				new CardFunc( cardEight, 7 );
				new CardFunc( cardNine, 8 );
				new CardFunc( cardTen, 9 );
				new CardFunc( cardEleven, 10 );
				new CardFunc( cardTwelve, 11 );

//SEE IF IT MATCHES

			tempValOne = tempValTwo;
			tempValTwo = $(this).text();
			
			if (cardsUp === 2) {
					
				if (tempValOne === tempValTwo) {
					$('.white').fadeOut(1000);
					match -= 1;
					clear();
					
					if (match === 0) {
						$('#win').show('slow');
					}
					
				}
				
				else {
					setTimeout(clear, 1000);
					setTimeout(blue, 1000);
					
				}

			}
		}
			
	});
	
	$('#restart').click(function() { 
		$('.card').removeClass('white').text('').show();
		match = 6;
		cardsUp = 0;
		clear();
		$('#error').hide();
		$('#win').hide();
		cardText(cardArray);
	});

});





	
	



