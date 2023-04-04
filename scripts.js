$(document).ready(function () {
    //Filtro
    $('.filter-btn').on('click', function () {
        let type = $(this).attr('id');
        let boxes = $('.hab-box');
        $('.main-btn').removeClass('active');
        $(this).addClass('active');
        if (type == 'front-btn') {
            eachBoxes('front', boxes)
        } else if (type == 'back-btn') {
            eachBoxes('back', boxes)
        } else if (type == 'ver-btn') {
            eachBoxes('ver', boxes)
        } else if (type == 'api-btn') {
            eachBoxes('api', boxes)
        } else {
            eachBoxes('all', boxes)
        }
    });
    function eachBoxes(type, boxes) {
        if (type == 'all') {
            $(boxes).fadeIn()
        } else {
            $(boxes).each(function () {
                if (!$(this).hasClass(type)) {
                    $(this).fadeOut('slow')
                } else {
                    $(this).fadeIn()
                }
            })
        }
    }
    //Carousel
    let navBtn = $('.nav-item');
    let carouselSection = $('#carousel-main');
    let aboutSection = $('#about-area');
    let habSection = $('#hab-area');
    let projectSection = $('#project-area');
    let contactSection = $('#contact-area');
    let scrollTo = '';
    $(navBtn).click(function () {
        let btnId = $(this).attr('id');
        if (btnId == 'sobre-menu') {
            scrollTo = aboutSection
        } else if (btnId == 'hab-menu') {
            scrollTo = habSection
        } else if (btnId == 'proj-menu') {
            scrollTo = projectSection
        } else if (btnId == 'cont-menu') {
            scrollTo = contactSection
        } else {
            scrollTo = carouselSection
        }
        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo)
                .offset()
                .top - 70
        }, 1500)
    });
    //Switch
    let sun = document.getElementById("sun");
    sun.onclick = function () {
        document
            .body
            .classList
            .toggle("dark-mode");
        sun
            .classList
            .toggle("night")
    }
})