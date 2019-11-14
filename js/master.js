// navigation background changes on scroll
jQuery(
  function() {
    var navigation = $('nav');
    var position = 0;

    $(window).scroll(() => {
      position = $(this).scrollTop();

      if (position > 30) {
        navigation.addClass('active');
      }

      if (position < 30) {
        navigation.removeClass('active');
      }
    })
  }
)


// when menu button clicked navigation slides in
jQuery(
  function() {
    var menuButton = $('.menu-container button');
    var menuBackdrop = $('.menu-backdrop');
    var menuItems = $('.menu-items');
    var menuLink = $('.menu-items a');
    var page = $('html');

    menuButton.click(
      function() {
        menuItems.toggleClass('show');
        menuBackdrop.toggleClass('show');
        page.css('overflow', 'hidden');
      }
    )

    menuBackdrop.click(
      function() {
        menuItems.removeClass('show');
        menuBackdrop.removeClass('show');
        page.css('overflow', 'scroll');
      }
    )

    menuLink.click(
      function() {
        menuItems.removeClass('show');
        menuBackdrop.removeClass('show');
        page.css('overflow', 'scroll');
      }
    )
  }
)


// multi-page application - menu link active handler
jQuery(
  function() {
    var location = window.location.pathname;
    var menuLink = $('.menu-items a');
    var href = $(this).find(menuLink).attr('href');

    console.log(location);

    
  }
)


// single page application - menu link active handler
// jQuery(
//   function() {
//     var menuLink = $('.menu-items a');
//
//     $(document).scroll(function() {
//       var position = $(this).scrollTop();
//
//       menuLink.each(function() {
//         var offset = $(this.hash).offset().top - 270;
//
//         if ( offset <= position ) {
//           $(this).parent().addClass('active');
//           $(this).parent().siblings().removeClass('active');
//         }
//       })
//     })
//   }
// )


// home background parallax effect
$(window).scroll(
  function() {
    var windowPosition = $(this).scrollTop();
    var background = $('#home');
    var content = $('#home .wrapper');

    background.css('background-position', 'left ' + (windowPosition*0.5)+'px')

    content.css('top', -5 + (windowPosition*.002)+'em');
  }
);
