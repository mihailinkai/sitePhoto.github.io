



//Horizontal slider with slick plugin - Follow me Block

	$(document).ready(function() {

			$('.thing').slick({

				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,

			});

		});




//Switch slides - Reviews Block - clean JS
//	 чистый JS

	var slides = document.querySelectorAll('#slides .slide');
		var currentSlide = 0;
		var slideInterval = setInterval(nextSlide, 2000);

		function nextSlide() {
			slides[currentSlide].className = 'slide';
			currentSlide = (currentSlide + 1) % slides.length;
			slides[currentSlide].className = 'slide showing';
		};



// SLider -  project

	$(document).ready(function() {

	$('.slides').slick({
		
	infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
			
	});
				
		});



