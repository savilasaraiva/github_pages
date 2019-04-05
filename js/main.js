/* Voltar ao Topo */
$(document).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('.smoothscroll-top').addClass('show');
    } else {
        $('.smoothscroll-top').removeClass('show');
    }
});
$('.smoothscroll-top').on('click', scrollToTop);

function scrollToTop() {
    verticalOffset = typeof (verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({ scrollTop: offsetTop }, 600, 'linear').animate({ scrollTop: 25 }, 200).animate({ scrollTop: 0 }, 150).animate({ scrollTop: 0 }, 50);
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}