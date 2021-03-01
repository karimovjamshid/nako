$('.hero__slider').slick({
    autoplay: true,
    infinite: true,
    dots:true,
    arrows:false,
    autoplaySpeed: 4000
});


$('.banners').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 4000
});

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
     arrows: false,
   dots: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    prevArrow: '<img src="img/icons/arrow-left.svg" alt="" class="arrow-left">',
    nextArrow: '<img src="img/icons/arrow-right.svg" alt="" class="arrow-right">',
  centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
             breakpoint: 400,
            settings: {
                arrows: false,
                dots: false
            }
        }
       
    ]
});


// *************** Burger menu ***************  
const menuBtn = document.querySelector('.burger');
const miniHeader = document.querySelector('.mini-header');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('burger__open');
    miniHeader.classList.toggle('active')
})



// Sticky navbar
    let header = $('#header');
    let scrollPos = $(window).scrollTop();
    let miniNav = $('#mini-nav');

    $(window).on('scroll load resize', function(){
        scrollPos = $(this).scrollTop();

        if(scrollPos > 5){
          header.addClass('fixed');
          miniNav.addClass('fixed');
        }else{
          header.removeClass('fixed');
          miniNav.removeClass('fixed');
        }
    });

   // Smooth scroll
$("[data-scroll]").on('click', function(event){
  event.preventDefault();

  let elemID = $(this).data('scroll');
  let elemOffSet = $(elemID).offset().top;

  $('html, body').animate({
      scrollTop: elemOffSet - 90
  });

});

const miniHeaderLink = $('.mini-header__link');

miniHeaderLink.on('click', function(event){
  event.preventDefault();
    miniHeader.classList.remove('active');
    menuBtn.classList.remove('burger__open');
})

// To top
let topBtn = $('#toTop');
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 30) {
    topBtn.addClass('show');
  } else {
    topBtn.removeClass('show');

  }
});