jQuery(document).ready(function($) {
var $carousel = $('.client_says .clientSlide').owlCarousel({
items: 3.5,
loop: true,
margin: 40,
autoplay:true,	
autoplayTimeout:2000,
autoplayHoverPause:true,
nav: true,
dots: false,
navText: [
"<svg width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M7 13L1 7L7 1' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg> <span class='visually-hidden'>Prev</span>",
"<svg width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 13L7 7L0.999999 1' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg> <span class='visually-hidden'>Next</span>"
],
responsive: {
0: {
items: 1.2,
margin: 20,
nav: false,
dots: true,
},
600: {
items: 2.5,
margin: 20,
},
1024: {
items: 2.5,
margin: 30,
},
1200: {
items: 3.5,
}
},
});
jQuery('.client_says .clientSlide .owl-prev').attr('aria-label', 'Previous Slide');
jQuery('.client_says .clientSlide .owl-next').attr('aria-label', 'Next Slide');
jQuery('.client_says .clientSlide .owl-prev').removeAttr('role');
jQuery('.client_says .clientSlide .owl-next').removeAttr('role');
// Listen for change and refresh events to manage nav button states
$carousel.on('changed.owl.carousel refreshed.owl.carousel', function(event) {
var current = event.item.index;
var total = event.item.count;
var visible = event.page.size;
// Disable next if we reached the end
if (current + visible >= total) {
$('.client_says .owl-next').addClass('disabled');
} else {
$('.client_says .owl-next').removeClass('disabled');
}
// Disable prev if we are at the start
if (current === 0) {
$('.client_says .owl-prev').addClass('disabled');
} else {
$('.client_says .owl-prev').removeClass('disabled');
}
});
});


jQuery(document).ready(function($) {
$('.industries_workArea .clientSlide').owlCarousel({
items: 4,
loop: true,
margin: 0,
autoplay:true,	
autoplayTimeout:2000,
autoplayHoverPause:true,
nav: true,
dots: false,
navText: [
"<svg width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M7 13L1 7L7 1' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg> <span class='visually-hidden'>Prev</span>",
"<svg width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 13L7 7L0.999999 1' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg> <span class='visually-hidden'>Next</span>"
],
responsive: {
0: {
items: 1.2,
nav: false,
dots: true,
},
600: {
items: 2,
},
1024: {
items: 3,
},
1200: {
items: 4
}
}
});
jQuery('.industries_workArea .clientSlide .owl-prev').attr('aria-label', 'Previous Slide');
jQuery('.industries_workArea .clientSlide .owl-next').attr('aria-label', 'Next Slide');
jQuery('.industries_workArea .clientSlide .owl-prev').removeAttr('role');
jQuery('.industries_workArea .clientSlide .owl-next').removeAttr('role');
jQuery('.clientSlide.owl-carousel').each(function() {
jQuery(this).find('.owl-dot').each(function(index) {
jQuery(this).attr('aria-label', index + 1);
jQuery(this).attr('type', 'button');
});
});
});