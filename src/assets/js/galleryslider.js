// Reakcja na kliknięcie w link do Galerii

document.getElementById("gallery_link").addEventListener("click", function () {
  Slider();
});

// Blokowanie odświeżania

function disableF5(keyboard) {
  if ((keyboard.which || keyboard.keyCode) == 116 || (keyboard.which || keyboard.keyCode) == 82) {
    keyboard.preventDefault();
  }
};

$(document).ready(function(){
  $(document).on("keydown", disableF5);
});

// Obsługa Slidera

function Slider () {

  // Cache
  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');
  var $slideImg = $slides.find('img');
  var $toggleLeft = $slider.find('#toggle-left');
  var $toggleRight = $slider.find('#toggle-right');
  var $pauseBtn = $slider.find('#pause-btn');
  var $playBtn = $slider.find('#play-btn');
  var $sliderPaging = $('#slider-paging');
  var $sliderPages = $sliderPaging.find('.slider-pages');
  var $sliderPage = $sliderPages.find('.slider-page');

  // Konfiguracja parametrów
  var width = $slider.width();
  var animationSpeed = 0;
  var pause = 6000;
  var currentSlide = 1;

  var interval;

  $slideContainer.css('width', width * $slides.length);
  $slideImg.css('width', width);

  // Uruchomienie pokazu
  $playBtn.click(function () {
    startSlider();
    $playBtn.toggle();
    $pauseBtn.toggle();
  });

  // W lewo
  $toggleLeft.click(function () {
    stopSlider();

    if (currentSlide === 1) {
      currentSlide = $slides.length;
      $slideContainer.css({
        'margin-left': '-' + width * ($slides.length - 1) + 'px'
      });

      $slideContainer.animate({
        'margin-left': '+=' + width
      }, animationSpeed, function () {
        currentSlide--;
      });
    }

    else {
      $slideContainer.animate({
        'margin-left': '+=' + width
      }, animationSpeed, function () {
        currentSlide--;
      });
    }
    startSlider();
  });

  // W prawo
  $toggleRight.click(function () {
    stopSlider();
    $slideContainer.animate({
      'margin-left': '-=' + width
    }, animationSpeed, function () {
      currentSlide++;

      if (currentSlide === $slides.length) {
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
      }
    });
    startSlider();
  });

  $sliderPage.click(function (){
    var pageId = $(this).attr('id');
    var pageNum = pageId.split('-').pop().trim();
    stopSlider();
    $slideContainer.animate({'margin-left': '-'+(width * (pageNum - 1))}, animationSpeed, function(){
      currentSlide = pageNum;

      if (currentSlide === $slides.length) {
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
      }
    });
    startSlider();
  });

  function startSlider() {
    interval = setInterval(function () {
      $slideContainer.animate({
        'margin-left': '-=' + width
      }, animationSpeed, function () {
        currentSlide++;

        if (currentSlide === $slides.length) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    }, pause);
  }

  function stopSlider() {
    clearInterval(interval);
  }

}

