// Test specification for the fizzbuzz program
var fb = require('../fizzbuzz');

describe("A program that implements fizzbuzz", function() {

	it("can count from 1 to 5", function() {
		expect(fb.count(1,5)).toBe("1 2 fizz 4 buzz");
		expect(fb.count(10,15)).toBe("buzz 11 fizz 13 14 fizzbuzz");
	});

	it("it can convert multiples of 3 into Fizz", function() {
		expect(fb.fizzer(3)).toBe('fizz');
		expect(fb.fizzer(5)).toBe(5);
		expect(fb.fizzer(17)).toBe(17);
		
	});	

	it("it can convert multiples of 5 into 'buzz' ", function() {
		expect(fb.buzzer(3)).toBe(3);
		expect(fb.buzzer(5)).toBe('buzz');
		expect(fb.buzzer(17)).toBe(17);
		
	});	

	it("it can convert multiples of 3 and 5 into 'fizzbuzz' ", function() {
		expect(fb.fizzbuzzer(2)).toBe(2);
		expect(fb.fizzbuzzer(5)).toBe(5);
		expect(fb.fizzbuzzer(15)).toBe('fizzbuzz');
		
	});	
});