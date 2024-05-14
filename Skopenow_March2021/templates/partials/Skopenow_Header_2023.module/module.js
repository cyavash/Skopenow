$('.menu-wrap').click(function() {
  $(this).toggleClass('active');
  $('.menu-wrapper').toggleClass('menu');
  $('.sap-header').toggleClass('menus');
  $('#overlay').toggleClass('open');
});


$('.menu-grp.mega-nav > a').after(' <div class="child-trigger"><i></i></div>');
$('.menu-wrap').click(function() {
  $(this).next('.menu-wrapper').slideToggle(250);
  $('body').toggleClass('mobile-open');
  $('.child-trigger').removeClass('child-open');
  $('.mega-wrapper').slideUp(250);
  return false;
});

$('.child-trigger').click(function() {
				$(this).parent().siblings('.mega-wrapper').find('.mega-wrapper').slideUp(250);
				$(this).next('.mega-wrapper').slideToggle(250);
				$(this).next('.mega-wrapper').children('.menu-item-has-children').find('.mega-wrapper').slideUp(250);
				
				return false;
			});

// Start child-trigger modifcations
// New code to make '.mega-nav > a' also trigger the child menu
$('.mega-nav > a').click(function(event) {
    var childTrigger = $(this).siblings('.child-trigger');
    if (childTrigger.length > 0) {  // Check if .child-trigger exists as a sibling
        childTrigger.click();  // Simulate a click on .child-trigger
        event.preventDefault();  // Prevent default behavior only if .child-trigger exists
    }
    // If there's no .child-trigger, act as a normal link, so we don't call event.preventDefault();
});


// Function to handle child menu toggling
function toggleChildMenu(triggerElement) {
    triggerElement.parent().siblings('.mega-wrapper').find('.mega-wrapper').slideUp(250);
    triggerElement.next('.mega-wrapper').slideToggle(250);
    triggerElement.next('.mega-wrapper').children('.menu-item-has-children').find('.mega-wrapper').slideUp(250);
}

// End Code


/**/
$(document).ready(function() {
    $(window).on("scroll", function() {
        var header = $(".header-wrapper");
        
        if ($(this).scrollTop() > 0) {
            header.addClass("scroll");
        } else {
            header.removeClass("scroll");
        }
    });
});

/**/
$(document).ready(function() {

  function initializeClickHandlers() {
    // Remove any existing handlers to avoid duplication
    $('.menu-grp > a').off('click');

    // Check screen width to apply correct click handler
    if ($(window).width() < 1000) { // For Mobile
      
      $('.menu-grp > a').on('click', function(event) {
        const hasChildTrigger = $(this).siblings(".child-trigger").length > 0;
        if (hasChildTrigger) {
          event.preventDefault();
          $(this).siblings('.child-trigger').trigger('click');
        }
      });

    } else { // For Desktop
      $('.menu-grp > a').on('click', function(event) {
        const hasChildTrigger = $(this).siblings(".child-trigger").length > 0;
        if (hasChildTrigger) {
          event.preventDefault(); // Prevent default action only if there's a child-trigger
          // You can add more desktop-specific logic here, if needed.
        }
      });
    }
  }

  // Initialize click handlers
  initializeClickHandlers();

  // Update click handlers when window is resized
  $(window).resize(function() {
    initializeClickHandlers();
  });

  // For demo, let's log something when .child-trigger is clicked
  $('.child-trigger').on('click', function() {
    console.log("Child Trigger clicked!");
  });
});