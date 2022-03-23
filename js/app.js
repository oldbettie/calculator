const $screen = $(".screen");
const $numbers = $(".numb");
const $clear = $("#clear");
const $percent = $("#percent");
const $divide = $("#divide");
const $times = $("#times");
const $minus = $("#minus");
const $plus = $("#plus");
const $equals = $("#equals");
const $btn = $(".button");
const $random = $("#random");
let numbers = {
	numb1: 0,
	numb2: 0,
	math: "",
};
let numb = "";
let randomNumber = 0;

// --- add to screen
$btn.click(function () {
	$screen.append(this.innerHTML);
});
// --- clear calculator memory
$clear.click(function () {
	$screen.text("");
	numb1 = 0;
	numb2 = 0;
});
// --- clears the screen for second number input
const clearScreen = function () {
	$screen.text("");
};
// --- numb = string of inputs before math
$numbers.click(function () {
	input = $(this).prop("id");
	numb += input;
});

//
// --- start of math functions ---
//
// --- divide
$divide.click(function () {
	if (numbers.numb1 < 1) {
		numbers.numb1 = parseFloat(numb);
	}
	numb = 0;
	$screen.text("/");
	numbers.math = "divide";
});
// --- multiply
$times.click(function () {
	if (numbers.numb1 < 1) {
		numbers.numb1 = parseFloat(numb);
	}
	numb = 0;
	$screen.text("x");
	numbers.math = "times";
});
// --- plus
$plus.click(function () {
	if (numbers.numb1 < 1) {
		numbers.numb1 = parseFloat(numb);
	}
	numb = 0;
	$screen.text("+");
	numbers.math = "plus";
});
// --- minus
$minus.click(function () {
	if (numbers.numb1 < 1) {
		numbers.numb1 = parseFloat(numb);
	}
	numb = 0;
	$screen.text("-");
	numbers.math = "minus";
});
$random.click(function () {
	numbers.numb1 = parseFloat(numb);
	function getRandomInt(max) {
		randomNumber = Math.floor(Math.random() * max);
	}
	getRandomInt(parseFloat(numb));
	$screen.text(`random 0 to ${numbers.numb1} = ${randomNumber}`);
	numbers.numb1 = 0;
	numbers.numb2 = 0;
	numb = 0;
});
$equals.click(function () {
	numbers.numb2 = parseFloat(numb);
	if (numbers.math === "divide") {
		$screen.text(`${numbers.numb1 / numbers.numb2} =`);
	} else if (numbers.math === "times") {
		$screen.text(`${numbers.numb1 * numbers.numb2} =`);
	} else if (numbers.math === "plus") {
		$screen.text(`${numbers.numb1 + numbers.numb2} =`);
	} else if (numbers.math === "minus") {
		$screen.text(`${numbers.numb1 - numbers.numb2} =`);
	}
	numbers.math = "";
});
// logs or errors
console.log(numbers.math);
