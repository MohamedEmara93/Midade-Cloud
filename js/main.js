/////////////////////////////// HEADER SECTION /////////////////////////////
$('.carousel').owlCarousel({
    loop: true,
    nav: true,
    rtl: true,
    // autoplay: true,
    // autoplayTimeout: 2000,
    // autoplayHoverPause: true,
    // margin: 32,
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
/////////////////////////////// خدمات اضافيه /////////////////////////////
$('.services').owlCarousel({
    loop: true,
    nav: true,
    rtl: true,
    // autoplay: true,
    // autoplayTimeout: 2000,
    // autoplayHoverPause: true,
    margin: 32,
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

