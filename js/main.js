let main = document.getElementsByClassName('main')[0]
function starRandom(x, y) {
    return (Math.round(x - (Math.random() * (x - y))))
}
for (let i = 0; i < 20; i++)
    main.innerHTML += `<div class="star" style="top: ${starRandom(0, 100)}%; left: ${starRandom(0, 100)}%; animation-duration: ${starRandom(2, 5)}s;"><img src="./images/star_one.png" alt="star"></div>`

$('.menu__btn').on('click', function (e) {
    e.preventDefault;
    $('.menu__item').toggleClass('menu__item--active')
    $('.menu__btn-span').toggleClass('menu__btn-span--active')
    $('.menu__link').toggleClass('menu__link--active')
    $(this).toggleClass('menu__btn--active')
})

$('.block-top__btn').on('click', function (e) {
    let src = $(this).children().attr('src')
    let title = $(this).children().attr('title')
    let text = $(this).children().attr('text')
    $('.block-bottom__img').attr('src', src)
    $('.block-bottom__title').text(title)
    $('.block-bottom__text').text(text)
})


$(document).ready(function () {
    $(document).snowfall({ image: "../images/snow_one.png", minSize: 10, maxSize: 10, flakeCount: 20 });
    setTimeout(() => {
        $('.main__tooltip').css('opacity', 1)
    }, 3000)
    $('#fullpage').fullpage({
        autoScrolling: true,
        loopTop: true,
        loopBottom: true,
        responsiveWidth: 1024
    });
});