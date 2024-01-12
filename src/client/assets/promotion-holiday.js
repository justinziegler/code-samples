var mobile;
function detectmob() {
    if(window.screen.width <= 500 && window.screen.height <= 880) {
      mobile = true;
    } else {
      mobile = false;
    }
}
function lockScreenPosition() {
    // Lock screen position on mobile when modal shows; resume position when it's hidden
    var savedScrollPosition;
    $(document).on('show.bs.modal', '.modal', function() {
        savedScrollPosition = $(window).scrollTop();
    });
    $(document).on('hidden.bs.modal', '.modal', function() {
        window.scrollTo(0, savedScrollPosition);
    });
}
$(document).ready(function(){
    detectmob();
    var mySwiper = new Swiper ('#value-props .swiper-container', {
        // Optional parameters
        //direction: 'vertical',
        //loop: true,
        effect: 'flip',
        flipEffect: {
            slideShadows: false
        },
        grabCursor: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
    
        // If we need pagination
        pagination: {
          el: '#value-props .swiper-pagination',
          clickable: true,
        },
        on: {
            init: function () {
                //console.dir(mobile);
                var currentIndex = this.activeIndex;
                if ((currentIndex == 0) && (mobile === false)) {
                    $('#value-props .slide-content .vp.one').fadeIn();
                    $('#value-props').attr('class', '').addClass('slide-one');
                }
                if (mobile === true) {
                    return;
                } else {
                    this.removeSlide([2,3]);
                    $('#value-props .slide-content .vp.three h2').html('The Mattress Worth <span>Obsessing Over</span>');
                    $('#value-props .slide-content .vp.three p').html('Fall asleep fast, stay asleep,<br class="visible-xs"> and wake up ready to take on the day.');
                }
            },
            slideChange: function () {
                var currentIndex = this.activeIndex;
                //console.dir(currentIndex);
                if (mobile === false) {
                    $('#value-props .slide-content .vp').fadeOut();
                    if (currentIndex == 0) {
                        $('#value-props .slide-content .vp.one').fadeIn();
                        $('#value-props').attr('class', '').addClass('slide-one');
                    }
                    if(currentIndex == 1) {
                        $('#value-props .slide-content .vp.two').fadeIn();
                        $('#value-props').attr('class', '').addClass('slide-two');
                    }
                    if(currentIndex == 2) {
                        $('#value-props .slide-content .vp.three').fadeIn();
                        $('#value-props').attr('class', '').addClass('slide-three');
                    }
                    if (currentIndex == 3) {
                        $('#value-props .slide-content .vp.four').fadeIn();
                        $('#value-props').attr('class', '').addClass('slide-four');
                    }
                }
            },
        },
    })
    var reviewsSwiper = new Swiper ('.swiper-container-reviews', {
        loop: true,
        grabCursor: true,
        breakpointsInverse: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 0
            },
        },
        // If we need pagination
        pagination: {
          el: '.reviews .swiper-pagination',
          clickable: true,
        }
    })
    
    // Second value-props swiper - does not display on mobile
    if (mobile === true) {
        return;
    } else {
        var secondSwiper = new Swiper ('#value-props-deux .swiper-container-deux', {
            effect: 'flip',
            flipEffect: {
                slideShadows: false
            },
            grabCursor: true,
            pagination: {
              el: '#value-props-deux .swiper-pagination',
              clickable: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
            },
            on: {
                init: function () {
                    var currentIndex = this.activeIndex;
                    if (currentIndex == 0) {
                        $('#value-props-deux .slide-content .vp.two').fadeIn();
                        $('#value-props-deux').attr('class', '').addClass('slide-two');
                    }
                },
                slideChange: function () {
                    var currentIndex = this.activeIndex;
                    //console.dir(currentIndex);
                    $('#value-props-deux .slide-content .vp').fadeOut();
                    if (currentIndex == 0) {
                        $('#value-props-deux .slide-content .vp.two').fadeIn();
                        $('#value-props-deux').attr('class', '').addClass('slide-two');
                    }
                    if(currentIndex == 1) {
                        $('#value-props-deux .slide-content .vp.one').fadeIn();
                        $('#value-props-deux').attr('class', '').addClass('slide-one');
                    }
                },
            },
        })
    }
});

;(function($, win) {        
    $.fn.inViewport = function(cb) {       
        return this.each(function(i,el){       
            function visPx(){      
                var H = $(this).height(),      
                r = el.getBoundingClientRect(), t=r.top, b=r.bottom;       
                return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));         
            } visPx();     
            $(win).on("resize scroll", visPx);     
        });        
    };     
}(jQuery, window));

var videoModal = '#video-modal';
var videoModalFrame = '#video-modal iframe';
var videoModalSrc;

function showModal() {
    lockScreenPosition();
    $(videoModalFrame).attr('src', videoModalSrc);
    $(videoModal).modal('show');
}

$('.know-lull .play').click(function() {
    videoModalSrc = 'https://www.youtube.com/embed/3qZN76kh4xM?autoplay=1&rel=0';
    showModal();
})
$('.collage1 .play').click(function() {
    videoModalSrc = 'https://www.youtube.com/embed/NW-9nWML06E?autoplay=1&rel=0';
    showModal();
})
$('.collage5 .play').click(function() {
    videoModalSrc = 'https://www.youtube.com/embed/U1Fw6NOUAtI?autoplay=1&rel=0';
    showModal();
})
$('.collage6 .play').click(function() {
    videoModalSrc = 'https://www.youtube.com/embed/dSjH9-HB0z0?autoplay=1&rel=0';
    showModal();
})
$('.collage9 .play').click(function() {
    videoModalSrc = 'https://www.youtube.com/embed/wujNIrlYa4I?autoplay=1&rel=0';
    showModal();
})

$(videoModal).on('hide.bs.modal', function() {
    $(videoModalFrame).attr('src', '');
});



//Smooth Scroll Arrow
// Select all links with hashes
// This would normally be ('a[href*="#"]'), but that conflicts with this page's accordion scripts
$('a[class="down-arrow"]') 
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });