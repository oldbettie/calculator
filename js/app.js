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

$btn.click(function () {
	if (!$btn.prop("#clear")) {
		console.log($btn.attr("#"));
		$(".screen").append(this.innerHTML);
	}
});

//screen = screen + this.text
