$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:2,
		autoplay:true,
		speed:300,
		autoplaySpeed:2000,
		responsive:[
			{
				breakpoint: 576,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow:4
				}
			}
		],
		mobileFirst:true,
	});
});

