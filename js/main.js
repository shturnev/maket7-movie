$('ul.slider').slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    dots: true,
    appendDots: $(".forDots")
});

$('[data-js="open-full-info"]').on("click", function () {

    $(this).parents('.wr').find('.full-info').fadeToggle('fast');

    return false;
});


$('[data-js="close-full-info"]').on("click", function () {

    $(this).parents('.full-info').fadeOut('fast');
    
    return false;
});

