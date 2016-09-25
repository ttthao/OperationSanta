// Hide Header on on scroll down
var didScroll;

// Prev scroll position
var lastScrollTop = 0;

// Scroll threshold for hiding
var delta = 5;

// Navbar height
var navbarHeight = $('header').outerHeight();

// Flag if scroll occured
$(window).scroll(function(event){
    didScroll = true;
});

// If scrolled, hide/show navbar and reset flag
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

// Determine hide/show
function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-hide.
    // This is necessary so you never see what is "behind" the navbar.
    console.log()
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-show').addClass('nav-hide');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-hide').addClass('nav-show');
        }
    }

    lastScrollTop = st;
}
