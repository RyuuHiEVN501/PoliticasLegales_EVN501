//Ir arriba
$(document).ready(function () {

	$('.ir-arriba').click(function () {
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});

//ScrollReveal

ScrollReveal().reveal('.textos-header', { delay: 500 });
ScrollReveal().reveal('.contenido-textos', { delay: 1000 });
ScrollReveal().reveal('.imagen-about-us', { delay: 1500 });
ScrollReveal().reveal('.grid', { delay: 1000 });
ScrollReveal().reveal('.content-foo', { delay: 500 });
ScrollReveal().reveal('.servicio-cont', { delay: 1000 });
ScrollReveal().reveal('#Inicio', { delay: 1000 });
ScrollReveal().reveal('#Objetivos', { delay: 1000 });
ScrollReveal().reveal('#Beneficios', { delay: 1000 });
