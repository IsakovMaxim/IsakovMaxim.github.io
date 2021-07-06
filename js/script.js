$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 500,
		/* adaptiveHeidth: true, */
		/* autoplay: true, - автопереключение карусели
		autoplaySpeed: 2000, */
		fade: true,
  		cssEase: 'linear',
		prevArrow: '<button type="button" class="slick-prev"><img src="img/karusel/chevron_left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/karusel/chevron_right.png"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: false,
					arrows: false
				}
			}
		]
	  });

	  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	  });

	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__details').eq(i).toggleClass('catalog-item__details_active');
			})		  
		});
	};

	toggleSlide('.catalog-item__back');
	toggleSlide('.catalog-item__link');

	// Modal Wiondows

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('fast');
	});

	$('.modal__close').on('click', function(){
		$('.overlay, #consultation, #thanks, #order').fadeOut('fast');
	});

	$('.button_price').on('click', function() {
		$('.overlay, #order').fadeIn('fast');
	});

	$('.button_price').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('fast');
        });
    });

	//$('#consultation-form').validate();
	
	/* $('#consultation form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			  },
			phone: "required",
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: {
				required: "Пожалуйста введите своё имя!",
				minlength: jQuery.validator.format("Введите минимум {0} символа!")
			  },
			phone: "Пожалуйста введите свой номер телефона!",
			email: {
			  required: "Пожалуйста введи свой email!",
			  email: "Вы ввели не верный email!"
			}
		  }
	}); */
	
	// $('#order form').validate();

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				  },
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Пожалуйста введите своё имя!",
					minlength: jQuery.validator.format("Введите минимум {0} символа!")
				  },
				phone: "Пожалуйста введите свой номер телефона!",
				email: {
				  required: "Пожалуйста введи свой email!",
				  email: "Вы ввели не верный email!"
				}
			  }
		});
	};
	validateForms('#consultation form');
	validateForms('#consultation-form');
	validateForms('#order form');

	setTimeout(function(){
		document.body.classList.add('body_visible');
	}, 200);


		$('input[name=phone]').mask("+7(999) 999-99-99");
  });