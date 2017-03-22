var currentSlideShowIndex = 1;
function incrementSlideShow()
{
	showSlideShow(currentSlideShowIndex + 1);
}

function decrementSlideShow()
{
	showSlideShow(currentSlideShowIndex - 1);
}

function showSlideShow(zeIndex)
{
	var x = document.getElementsByClassName("mySlides");
	if (zeIndex > x.length || zeIndex < 1) {return;}    
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	x[zeIndex-1].style.display = "block";
 	currentSlideShowIndex = zeIndex;
}