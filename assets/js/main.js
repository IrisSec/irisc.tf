const animationDuration = 2000;  // ms
const stepSizeInt = 25;
const stepSizeFloat = 0.21;
var animationFlipSwitch = false;

$(document).ready(function()
{
	check_animate_counting_once();
});

$(window).scroll(function()
{
	check_animate_counting_once();
});

/* Check if we should animate counting, and if so then animate only once. */
function check_animate_counting_once()
{
	if (animationFlipSwitch == false && is_in_view("#highlights"))
	{
		animationFlipSwitch = true;

		$(".highlight-data-int").map(function()
		{
			count_animation_int(this);

		}).get();

		$(".highlight-data-float").map(function()
		{
			count_animation_float(this);

		}).get();
	}
}

/* Counting up animation for integers. */
function count_animation_int(target)
{
	let i = 0;
	let end = parseInt(target.innerHTML);
	let frameDuration = stepSizeInt*animationDuration/end;

	setInterval(function()
	{
		if (i > end)  target.innerHTML = end;
		else          target.innerHTML = i;
		i += stepSizeInt;

	}, frameDuration);
}

/* Counting up animation for float. */
function count_animation_float(target)
{
	let i = 0.0;
	let end = parseFloat(target.innerHTML);
	let frameDuration = stepSizeFloat*animationDuration/end;

	setInterval(function()
	{
		if (i > end)  target.innerHTML = end.toFixed(2);
		else          target.innerHTML = i.toFixed(2);
		i += stepSizeFloat;

	}, frameDuration);
}

/* Check if an element is in view. */
function is_in_view(id)
{
	let scrollBottom = $(window).scrollTop() + $(window).height();
	let itemTop = $(id).offset().top;
	return itemTop < scrollBottom;
}
