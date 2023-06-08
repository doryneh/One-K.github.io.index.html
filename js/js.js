/****
 Navbar Scroll function
 ****/

/****
Colors Card Hover
******/
$('.CardColorGroup .card').hover(
    function() {
      $('.CardColorGroup .card').not(this).css('opacity', '0.2');
      $('.CardColorGroup .card').not(this).css('transform', 'scale(0.9)');
  
    },
    function() {
      $('.CardColorGroup .card').not(this).css('opacity', '');
      $('.CardColorGroup .card').not(this).css('transform', 'scale(1)');
    }
  );



  /***
   Carousel Color function
   */
   $(document).ready(function() {
    $('.carousel-indicators button').click(function() {
      var index = $(this).data('bs-slide-to');
      $('#carouselExampleFade').carousel(index);
    });
  });