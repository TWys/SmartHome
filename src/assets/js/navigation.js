// smooth scroll between sections
$('a[href^="#"]').on('click', function (event) {

  var $target = $(this.getAttribute('href'));

  if ($target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: $target.offset().top
    }, 750, 'easeInOutQuad');
  }
});

$(document).ready(function () {
  $('.nav li a').click(function(e) {

    $('.nav li').removeClass('active');

    var $parent = $(this).parent();
    if (!$parent.hasClass('active')) {
      $parent.addClass('active');
    }
    e.preventDefault();
  });
});
