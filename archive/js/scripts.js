// collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery Easing
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// Keep the caption content in view when focusing on buttons in keyboard only navigation

var captionLinks = $('.tc-caption__link');

for (var i = 0; i < captionLinks.length; i++) {

    captionLinks[i].onfocus = function(){
        var captionLinkParent = this.parentNode;
        // apply an inline style temporarily when focus is on the caption link element
        captionLinkParent.parentNode.style.top='0';
    };


    captionLinks[i].onblur = function(){
        var captionLinkParent = this.parentNode;
        // cross browser method for removing an inline style
        if (captionLinkParent.parentNode.style.removeProperty) {
            captionLinkParent.parentNode.style.removeProperty('top');
        } else {
            captionLinkParent.parentNode.style.removeAttribute('top');
        }

    };

}
