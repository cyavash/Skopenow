$(document).ready(function() {
  // Hide all .span4 items that are beyond the 9th index
  $(".resource-item-wrap:gt(8)").hide();

  // When clicking the .see-more link, show all .span4 items and hide the link itself
  $(".see-more").click(function(e) {
    e.preventDefault();
    $(".resource-item-wrap").show();
    $(this).hide();
  });
});