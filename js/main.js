$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        adaptiveHeight: true,
        centerPadding: '0',
        Infinity: true,
        responcive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });
});