$(document).ready(function() {
    // Add classes to initial elements and hide unwanted journey-content
    $('.journey-section h3').addClass(function(index) {
        return 'h3-' + (index + 1);
    });

    $('.journey-section .journey-content').addClass(function(index) {
        return 'journey-content-' + (index + 1); 
    });

    $('.journey-content-2, .journey-content-3').hide();

    // Add active class to h3-1 on load
    $('.h3-1').addClass('active');

    // Handle h3 click
    $('.journey-section h3').click(function() {
        var h3Class = $(this).attr('class').split(' ')[0];  // Get the primary class of the clicked h3 

        // Remove active class from all h3 elements and add to the clicked h3
        $('.journey-section h3').removeClass('active');
        $(this).addClass('active');

        // Hide all journey sections' content
        $('.journey-content').hide();

        // Toggle visibility (with fade effect) of the corresponding journey content based on the clicked h3 class
        var contentClass = '.journey-content-' + h3Class.split('-')[1];
        $(contentClass).fadeToggle();
    });
});