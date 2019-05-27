


//горизонтальный слайдер на follow me с помощью  плагина slick

	$(document).ready(function() {

			$('.thing').slick({

				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,

			});

		});




//переключение слайдов на отзывых
//	 чистый JS

	var slides = document.querySelectorAll('#slides .slide');
		var currentSlide = 0;
		var slideInterval = setInterval(nextSlide, 2000);

		function nextSlide() {
			slides[currentSlide].className = 'slide';
			currentSlide = (currentSlide + 1) % slides.length;
			slides[currentSlide].className = 'slide showing';
		};



// слайдер в project

	$(document).ready(function() {

	$('.slides').slick({
		
		
	infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
		
		
	});
			
			
			
			
			
		});



