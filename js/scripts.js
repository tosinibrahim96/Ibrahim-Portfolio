$(document).ready(() => {
  $('#portfolio-button').click(() => {
    $('html,body').animate(
      {
        scrollTop: $('#portfolio-section').offset().top
      },
      1500
    );
  });

  $('#hero-unit-section').fadeTo(3000, 1);
});
