
var request = $.ajax({
	url: '/php/dirlist.php',
	type: 'get',
	data: '/assets/images/slideshow/'
});

request.done(function(response,textStat,jqXHR){
	
	var slides = $.get(response);
	
	if(slides!=null) {
		
		var slide_index = 0;
		
		$(function(){
			setInterval(function(){
				console.log("attempting to find: "+slides[slide_index%slides.length]);
				$("#slideshow img").prop('src',slides[slide_index%slides.length]);
			},1000);
		});

	} else {
		console.error("failed to load slideshow from response");
	}
	
});

request.fail(function(jqXHR,textStat,error){
	console.error("failed to load slideshow");
});
