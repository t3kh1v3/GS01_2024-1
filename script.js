document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.querySelector('#groupCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000
    });
});