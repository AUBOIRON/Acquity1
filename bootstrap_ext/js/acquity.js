function marquee(idWrapper,idMarquee,vitesse)
 
{
    var oIdWrapper=$('#'+idWrapper);
    var oIdMarquee=$('#'+idMarquee);
 
    var width=oIdMarquee.width()/2;
    var width2=oIdWrapper.width()/2;
 
    id_inst=setTimeout(function() {marquee(idWrapper,idMarquee,vitesse)},vitesse);
  
    var l=parseInt(oIdMarquee.css('left'));
    oIdMarquee.css({left:(l-1)+'px'});
 
    if((-parseInt(oIdMarquee.css('left')))>=(width))
    {
        oIdMarquee.css({left:(width2)+'px'});
    }
}
 
$(document).ready(
function(){
    marquee('marquee-wrapper','marquee',2); //changer le chiffre 10 pour modifier la vitesse <img src="../../bundles/tinymce/vendor/tiny_mce/plugins/emotions/img/clin.png" title=";)" alt=";)">
}
);
$(document).ready(function(){
     $("#marquee-wrapper").hover(function(){
        clearTimeout(id_inst);
    }, function(){
        marquee("marquee-wrapper","marquee",2);
    });
});

(function($) {
    "use strict"; // Start of use strict
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 56
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function(e) {
      $('.navbar').addClass('d-none');
    })
    $('.portfolio-modal').on('hidden.bs.modal', function(e) {
      $('.navbar').removeClass('d-none');
    })
  
  })(jQuery); // End of use strict


 


  
