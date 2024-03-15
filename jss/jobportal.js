//Start Top To Scroll Button
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#02416a ${scrollValue}%, #f9a908 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// Preloader
var preLoder = $(".preloader");
preLoder.fadeOut(0);

// Start 1st page Sticky Menu
$(window).on("scroll", function () {
  var ScrollBarPostion = $(window).scrollTop();
  if (ScrollBarPostion > 150) {
    $(".jpl-second-menu").addClass("header-sticky");
  } else {
    $(".jpl-second-menu").removeClass("header-sticky");
  }
});

// Start Wow  Animitian
new WOW().init();


// Active Filter side bar
// $(window).on("scroll", function () {
// 	var ScrollBarPostion = $(window).scrollTop();
// 	if (ScrollBarPostion > 650) {
// 	   $(".text").addClass("active-sticky");
// 	} else {
// 	   $(".text").removeClass("active-sticky");
// 	}
//  });



// side bar
 $(window).on("scroll", function () {
	var ScrollBarPostion = $(window).scrollTop();
	if (ScrollBarPostion > 330) {
	   $(".jpl-active-icons").addClass("sidebar-sticky");
	} else {
	   $(".jpl-active-icons").removeClass("sidebar-sticky");
	}
 });



 // side bar for e_learning page
 $(window).on("scroll", function () {
	var ScrollBarPostion = $(window).scrollTop();
	if (ScrollBarPostion > 330) {
	   $(".courses_filter").addClass("sidebar-sticky");
	} else {
	   $(".courses_filter").removeClass("sidebar-sticky");
	}
 });


//Posted Job Pages (Top Google Add Remove)
$(".jpl-hide-top-google-add").on("click", function () {
  $(".jpl-google-header-adds").hide("slow");
});

// Start Brand
$(".jpl-brand-slider").slick({
  slidesToShow: 8,
  autoplay: true,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});

// Start Testimonial
$(".jpl-testimonial-slider").slick({
  slidesToShow: 1,
  autoplay: true,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// Mobile Menu
$(window).on("resize", function () {
  var windowWidth = $(window).width();

  if (windowWidth > 768) {
    $(".jpl-mobile-menu.jpl-mobile-menu-active").removeClass(
      "jpl-mobile-menu-active"
    );
  }
});

$(".jpl-mobile-menu-toggle").on("click", function () {
  $(".jpl-mobile-menu").addClass("jpl-mobile-menu-active");
});

$(".jpl-has-mobile-submenu a").each(function () {
  $(this).on("click", function () {
    $(this).siblings("ul").slideToggle("swing");
  });
});

$(".jpl-close-menu").on("click", function () {
  $(".jpl-mobile-menu").removeClass("jpl-mobile-menu-active");
});

// Start Hero
$(".jpl-hero-slider").slick({
  slidesToShow: 1,
  autoplay: true,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

//  Start Counter js
$(".counter-cc").counterUp({
  time: 1000,
});






$(".category-dropdown .dropdown-menu select").each(function () {
  $(this).on("click", function () {
    var selected_value = $(this).text();
    $(this)
      .parents(".category-dropdown")
      .find(".ct-dropdown-btn")
      .text(selected_value);
  });
});





// Implementation by Tanvir

// Hide-show Button slideToggle



// keyword
// $(document).ready(function(){ $("#keyword").click(function(){
//   $("#showSearch").slideToggle();
// });
// });
// Category
// $(document).ready(function(){ $("#category").click(function(){
//   $("#category-form").slideToggle();
// });
// });
// industry
// $(document).ready(function(){ $("#industry").click(function(){
//   $("#industry-form").slideToggle();
// });
// });
// location
// $(document).ready(function(){ $("#location").click(function(){
//   $("#location-form").slideToggle();
// });
// });
// Date/time
// $(document).ready(function(){ $("#time").click(function(){
//   $("#time-form").slideToggle();
// });
// });
// newspaper
// $(document).ready(function(){ $("#newspaper").click(function(){
//   $("#newspaper-form").slideToggle();
// });
// });
// others filter
// $(document).ready(function(){ $("#filter").click(function(){
//   $("#filter-form").slideToggle();
// });
// });








//  search bar filtering part
$(document).ready(function () {
  $("#keyword").on("click", function () {
    $("#showSearch").addClass("jpl-full-search-box-forbg_open");
    //  remove
    $("#category-form").removeClass("jpl-full-category-box2-form_open");
    $("#industry-form").removeClass("jpl-industry-form_open");
    $("#location-form").removeClass("jpl-location-form_open");
    $("#time-form").removeClass("jpl-time-form_open");
    $("#newspaper-form").removeClass("jpl-newspaper-form_open");
    $("#filter-form").removeClass("jpl-filter-form_open");
  });

  $("#cancel").on("click", function () {
    $("#showSearch").removeClass("jpl-full-search-box-forbg_open");
    return false;
  });
});








//  category bar filtering part
$(document).ready(function () {
  $("#category").on("click", function () {
    $("#category-form").addClass("jpl-full-category-box2-form_open");
    //  remove
    $("#showSearch").removeClass("jpl-full-search-box-forbg_open");
    $("#industry-form").removeClass("jpl-industry-form_open");
    $("#location-form").removeClass("jpl-location-form_open");
    $("#time-form").removeClass("jpl-time-form_open");
    $("#newspaper-form").removeClass("jpl-newspaper-form_open");
    $("#filter-form").removeClass("jpl-filter-form_open");
  });

  $("#category_close").on("click", function () {
    $("#category-form").removeClass("jpl-full-category-box2-form_open");
    return false;
  });
});

//  industry bar filtering part
$(document).ready(function () {
  $("#industry").on("click", function () {
    $("#industry-form").addClass("jpl-industry-form_open");
    //  remove
    $("#showSearch").removeClass("jpl-full-search-box-forbg_open");
    $("#category-form").removeClass("jpl-full-category-box2-form_open");
    $("#location-form").removeClass("jpl-location-form_open");
    $("#time-form").removeClass("jpl-time-form_open");
    $("#newspaper-form").removeClass("jpl-newspaper-form_open");
    $("#filter-form").removeClass("jpl-filter-form_open");
  });

  $("#industry_close").on("click", function () {
    $("#industry-form").removeClass("jpl-industry-form_open");
    return false;
  });
});
//  location bar filtering part
$(document).ready(function () {
  $("#location").on("click", function () {
    $("#location-form").addClass("jpl-location-form_open");
    //  remove
    $("#showSearch").removeClass("jpl-full-search-box-forbg_open");
    $("#category-form").removeClass("jpl-full-category-box2-form_open");
    $("#showSearch").removeClass("jpl-full-search-box-forbg_open");
    $("#industry-form").removeClass("jpl-industry-form_open");
    $("#time-form").removeClass("jpl-time-form_open");
    $("#newspaper-form").removeClass("jpl-newspaper-form_open");
    $("#filter-form").removeClass("jpl-filter-form_open");
  });

  $("#location_close").on("click", function () {
    $("#location-form").removeClass("jpl-location-form_open");
    return false;
  });
});
//  time bar filtering part
$(document).ready(function () {
  $("#time").on("click", function () {
    $("#time-form").addClass("jpl-time-form_open");
    //  remove
    $("#showSearch").removeClass("jpl-full-search-box-forbg_open");
    $("#category-form").removeClass("jpl-full-category-box2-form_open");
    $("#showSearch").removeClass("jpl-full-search-box-forbg_open");
    $("#industry-form").removeClass("jpl-industry-form_open");
    $("#location-form").removeClass("jpl-location-form_open");
    $("#newspaper-form").removeClass("jpl-newspaper-form_open");
    $("#filter-form").removeClass("jpl-filter-form_open");
  });

  $("#time_close").on("click", function () {
    $("#time-form").removeClass("jpl-time-form_open");
    return false;
  });
});
//  newspaper filtering part
$(document).ready(function () {
  $("#newspaper").on("click", function () {
    $("#newspaper-form").addClass("jpl-newspaper-form_open");
    //  remove
    $("#showSearch").removeClass("jpl-full-search-box-forbg_open");
    $("#category-form").removeClass("jpl-full-category-box2-form_open");
    $("#showSearch").removeClass("jpl-full-search-box-forbg_open");
    $("#industry-form").removeClass("jpl-industry-form_open");
    $("#location-form").removeClass("jpl-location-form_open");
    $("#time-form").removeClass("jpl-time-form_open");
    $("#filter-form").removeClass("jpl-filter-form_open");
  });

  $("#newspaper_close").on("click", function () {
    $("#newspaper-form").removeClass("jpl-newspaper-form_open");
    return false;
  });
});
//  filter filtering part
$(document).ready(function () {
  $("#filter").on("click", function () {
    $("#filter-form").addClass("jpl-filter-form_open");
    //  remove
    $("#showSearch").removeClass("jpl-full-search-box-forbg_open");
    $("#category-form").removeClass("jpl-full-category-box2-form_open");
    $("#showSearch").removeClass("jpl-full-search-box-forbg_open");
    $("#industry-form").removeClass("jpl-industry-form_open");
    $("#location-form").removeClass("jpl-location-form_open");
    $("#time-form").removeClass("jpl-time-form_open");
    $("#newspaper-form").removeClass("jpl-newspaper-form_open");
  });

  $("#filter_close").on("click", function () {
    $("#filter-form").removeClass("jpl-filter-form_open");
    return false;
  });
});
//  clear filtering part
$(document).ready(function () {
  $("#clear").on("click", function () {
    //  remove
    $("#showSearch").removeClass("jpl-full-search-box-forbg_open");
    $("#category-form").removeClass("jpl-full-category-box2-form_open");
    $("#showSearch").removeClass("jpl-full-search-box-forbg_open");
    $("#industry-form").removeClass("jpl-industry-form_open");
    $("#location-form").removeClass("jpl-location-form_open");
    $("#time-form").removeClass("jpl-time-form_open");
    $("#newspaper-form").removeClass("jpl-newspaper-form_open");
    $("#filter-form").removeClass("jpl-filter-form_open");
  });
});



/* Start employer_Signin */

var scrollArrowRight = document.getElementById("scroll-arrow-right");
var scrollArrowLeft = document.getElementById("scroll-arrow-left");

var par1 = document.getElementById("p-1");
var par2 = document.getElementById("p-2");
var par3 = document.getElementById("p-3");
var par4 = document.getElementById("p-4");

var slider = [par1, par2, par3, par4];
var currentIndex = -2;

//On load, show the first slide
loadPage(0);

function loadPage(i) {
  //Check if index is valid
  if (slider[i]) {
    slider[i].removeAttribute('hidden');
  } else {
    return;
  }

  //Hide previous slide
  if (slider[currentIndex]) {
    slider[currentIndex].setAttribute('hidden', '');
  }

  currentIndex = i;
}

scrollArrowRight.onclick = function() {
  loadPage(currentIndex + 1);
}

scrollArrowLeft.onclick = function() {
  loadPage(currentIndex - 1);
}




// Start job-details Page 


// View this company's open positions













  // End job-details Page 




 // Start  e_learning
var candidate = $('.candidate_active');

if(candidate.length){
  candidate.owlCarousel({
  loop:true,
  margin:30,
  autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
  dots:false,
  autoplayHoverPause: true,
  autoplaySpeed: 800,
    responsive:{
        0:{
            items:1,
            dots:false,
            nav:false,
        },
        767:{
            items:3,
            dots:false,
            nav:false,
        },
        992:{
            items:4,
            nav:true
        },
        1200:{
            items:4,
            nav:true
        },
        1500:{
            items:4
        }
    }
  });
}


// start Image slider







// End e_learning





// Start course-detail






// End course-detail