document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.querySelector('#groupCarousel');
    new bootstrap.Carousel(myCarousel, {
        interval: 0
    });
});