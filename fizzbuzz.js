var count, fizzer, buzzer, fizzbuzzer;

	count = function(start, end) {

	// initilaize the output
	var output = buzzer(fizzer(fizzbuzzer (start)));

	// modify output to conatin desired sequence

	for (var i = start; i < end; i += 1) {
		output = output + " " + buzzer(fizzer(fizzbuzzer (i + 1)));

	}

	return output;

};

fizzer = function(num) {
	return 0 === num % 3 ? "fizz" : num;
	};

buzzer = function(num) {
	return 0 === num % 5 ? "buzz" : num;
	};

fizzbuzzer = function(num) {
	return 0 === (num % 3 + num % 5) ? "fizzbuzz" : num;
	};

	module.exports = {

		count: count, 
		fizzer: fizzer,
		buzzer: buzzer,
		fizzbuzzer: fizzbuzzer,
	};