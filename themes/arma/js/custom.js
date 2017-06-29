(function ($, Drupal, window, document) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
      // Behavior вызывается несколько раз на странице, не забывайте использовать функцию .once().
      $('.view-slaider .view-content').once().slick({
      	 autoplay: true,
  		 autoplaySpeed: 4000,
      	 dots: true,
      	 arrows: false,
      	 adaptiveHeight: true
      });

      if (window.matchMedia('screen and (max-width: 767px)').matches) {
        $('.menu').once().addClass('collapse');
      }
      $("#block-produkcia-menu").once().click(function() {
        if (window.matchMedia('screen and (max-width: 767px)').matches) {
          $('.menu').collapse('toggle');
        }
      });
    }
  };
})(jQuery, Drupal, this, this.document);

