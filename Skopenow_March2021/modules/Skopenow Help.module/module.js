

$('section.skopenow_help .sub_help span').mouseenter(function(e){
  $(e.target).find(".sub_help_hover").addClass("sub_help_hover_show")

})
$('section.skopenow_help .sub_help span').mouseleave(function(e){
  $(e.target).find(".sub_help_hover").removeClass("sub_help_hover_show")
})