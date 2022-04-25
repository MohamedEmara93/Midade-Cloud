/////////////////////////////// NAVBAR /////////////////////////////
let videoOffset = $('#video').offset().top;
$(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    if (wScroll > videoOffset - 200) {
        $('#nav').addClass('position-fixed')
        $('#nav').css('backgroundColor', '#fff')
        $('#nav').css('box-shadow', '0 -13px 20px 0 #306a6c')
        $('#nav').css('transition', 'all .3s ease')
    } else {
        $('#nav').removeClass('position-fixed')
        $('#nav').css('backgroundColor', '#fff')
    }
})
/////////////////////////////// HEADER SECTION /////////////////////////////
$('.carousel').owlCarousel({
    loop: true,
    nav: true,
    navText: [
        "<i class='fa fa-angle-right'></i>",
        "<i class='fa fa-angle-left'></i>"
    ],
    rtl: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
});
/////////////////////////////// VIDEO /////////////////////////////
let layer = document.querySelector('.layer');
let play = document.querySelector('#video .play');
let exit = document.querySelector('.exit');

play.addEventListener('click', function () {
    layer.classList.remove('hidden');
    $(window).scrollTop(videoOffset);
})

const closeVideo = function () {
    layer.classList.add('hidden');
}
//// Close The Video By Close icon
exit.addEventListener('click', closeVideo);

//// Close The Video By Keyboard
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !layer.classList.contains('hidden')) {
        closeVideo();
    }
})
/////////////////////////////// خدمات اضافيه /////////////////////////////
$('.services').owlCarousel({
    loop: true,
    nav: true,
    rtl: true,
    navText: [
        "<i class='fa fa-angle-right'></i>",
        "<i class='fa fa-angle-left'></i>"
    ],
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 30,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
});
///////////////////////////////////////

