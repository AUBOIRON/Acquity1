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
  
  function defilImgHrz(el,srcs,pas,tps) {
    if(typeof el=="string") { el = document.getElementById(el); }
    var tps = tps || 50;
    var pas = pas || 1;
    var imgs = [];
    var offset = 0;
    for(var i=0,l=srcs.length;i<l;i++) {
      var img = new Image();
      img.src = srcs[i];
      imgs.push(img);
      img.style.height=el.offsetHeight+"px";
      img.style.position = "absolute";
      img.style.left = offset+"px";
      el.appendChild(img);
      offset += img.offsetWidth;
    }
    var first = 0;
    var last = imgs.length-1;
   
    (function d() {
      for(var i=0,l=imgs.length;i<l;i++) {
        var left = parseInt(imgs[i].style.left,10);
        imgs[i].style.left = (left-pas)+"px";
        if(i==first && (left-pas+imgs[i].offsetWidth)<0) {
          imgs[i].style.left = 
          (parseInt(imgs[last].style.left,10)+imgs[last].offsetWidth-(i==0?pas:0))+"px";
          last = first++;
          if(first>imgs.length-1) { first = 0; }
        }
      }
      setTimeout(d,tps);
    })();
  }
   
  // Fonction de défilement verticale
  function defilImgVrt(el,srcs,pas,tps) {
    if(typeof el=="string") { el = document.getElementById(el); }
    var tps = tps || 50;
    var pas = pas || 1;
    var imgs = [];
    var offset = 0;
    for(var i=0,l=srcs.length;i<l;i++) {
      var img = new Image();
      img.src = srcs[i];
      imgs.push(img);
      img.style.width=el.offsetWidth+"px";
      img.style.position = "absolute";
      img.style.top = offset+"px";
      el.appendChild(img);
      offset += img.offsetHeight;
    }
    var first = 0;
    var last = imgs.length-1;
   
    (function d() {
      for(var i=0,l=imgs.length;i<l;i++) {
        var top = parseInt(imgs[i].style.top,10);
        imgs[i].style.top = (top-pas)+"px";
        if(i==first && (top-pas+imgs[i].offsetHeight)<0) {
          imgs[i].style.top = (parseInt(imgs[last].style.top,10)+imgs[last].offsetHeight-(i==0?pas:0))+"px";
          last = first++;
          if(first>imgs.length-1) { first = 0; }
        }
      }
      setTimeout(d,tps);
    })();
  }
  // Appel des deux fonctions de défilement au chargement de ma page .
  window.onload=function() {
    defilImgVrt('bandeau_vertical',[
    "images/Solocal.png",
      "images/ensam.png",
      "images/CH LEZIGNAN.png",
    "images/Bein_sport.png"
     
    ]);
    defilImgHrz('bandeau_Horizontal',[
      "images/Solocal.png",
      "images/ensam.png",
      "images/CH LEZIGNAN.png",
    "images/Bein_sport.png"
    ]);
  };

 


  
