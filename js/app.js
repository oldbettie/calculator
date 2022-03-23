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
const $allInputs = $(".all-inputs");
let numbers = {
	numb1: 0,
	numb2: 0,
	math: "",
};
let numb = "";
let randomNumber = 0;
let total = 0;

// --- add to screen
$btn.click(function () {
	$screen.append(this.innerHTML);
	$allInputs.append(this.innerHTML);
});
// --- clear calculator memory
$clear.click(function () {
	$screen.text("");
	$allInputs.text("");
	numbers.numb1 = 0;
	numbers.numb2 = 0;
	numb = 0;
	numbers.math = "";
	$screen.removeClass("screen-lol");
});
// --- numb = string of inputs before math
$numbers.click(function () {
	input = $(this).prop("id");
	numb += input;
	console.log(numb);
});
// --- percent of whole number
$percent.click(function () {
	if (numbers.numb1 < 1) {
		numbers.numb1 = parseFloat(numb);
	}
	numb = 0;
	numbers.numb1 = numbers.numb1 / 100;
	$screen.text(`% ${numbers.numb1}`);
	numbers.math = "%";
});
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
	if (numbers.numb1 === 80085) {
		$screen.addClass("screen-lol");
	}
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
// typing a number then hitting rand will returna random numb between 0 and selected numb
$random.click(function () {
	numbers.numb1 = parseFloat(numb);
	randomNumber = Math.floor(Math.random() * numbers.numb1);
	$screen.text(`0 - ${numbers.numb1} = ${randomNumber}`);
});
// --- math logic
$equals.click(function () {
	numbers.numb2 = parseFloat(numb);
	if (numbers.math === "divide") {
		numbers.numb1 = numbers.numb1 / numbers.numb2;
		$screen.text(`${numbers.numb1} =`);
		$allInputs.append(numbers.numb1);
		numbers.numb2 = 0;
	} else if (numbers.math === "times") {
		numbers.numb1 = numbers.numb1 * numbers.numb2;
		$screen.text(`${numbers.numb1} =`);
		$allInputs.append(numbers.numb1);
		numbers.numb2 = 0;
	} else if (numbers.math === "plus") {
		numbers.numb1 = numbers.numb1 + numbers.numb2;
		$screen.text(`${numbers.numb1} =`);
		$allInputs.append(numbers.numb1);
		numbers.numb2 = 0;
	} else if (numbers.math === "minus") {
		numbers.numb1 = numbers.numb1 - numbers.numb2;
		$screen.text(`${numbers.numb1} =`);
		$allInputs.append(numbers.numb1);
		numbers.numb2 = 0;
	}
});
