// changes background depending on the page the navigation is displayed
$(document).ready(
  function() {
    var navigation = $('nav');
    var page = window.location.pathname.split("/").pop();

    if ( page !== "index.html" ) {
      navigation.addClass('dark');
    }

    if ( page == "index.html" ) {
      navigation.removeClass('dark');
    }
  }
)

// navigation background changes on scroll
jQuery(
    $(document).ready(
        function () {
          var position = 0;

          $(document).scroll(() => {
            var navigation = $('nav');
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
  $(document).ready(
    function() {
      var location = window.location.pathname.split("/").pop();

      var target = $(' nav a[href="'+location+'"] ');
      target.addClass('active');
    }
  )
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
$(document).ready(
    $(window).scroll(
      function() {
        var windowPosition = $(this).scrollTop();
        var background = $('#home');
        var content = $('#home .wrapper');

        background.css('background-position', 'left ' + (windowPosition*0.5)+'px')

        content.css('top', -5 + (windowPosition*.002)+'em');
      }
    )
)

