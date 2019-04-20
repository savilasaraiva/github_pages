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

/* Tabs - Menu (Cardapio) */
function openPratos(evt, namePratos) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(namePratos).style.display = "block";
    evt.currentTarget.className += " active";
}

/* Ver Mais */
$('button.accordion').click(function () {
    $(this).parent().find('div.accordion').slideToggle("slow");
    var el = $(this);
    if (el.text() == el.data("text-swap")) {
        el.text(el.data("text-original"));
        el.addClass("active");
    } else {
        el.data("text-original", el.text());
        el.text(el.data("text-swap"));
        el.removeClass("active");
    }
});
