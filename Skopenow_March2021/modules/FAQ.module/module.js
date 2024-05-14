$('#faq_search_form input').on('keyup', function() {
  var value = $(this).val();
  var patt = new RegExp(value, "i");

  $('.faq-items').find('.faq_section').each(function() {
    var $table = $(this);

    if (!($table.text().search(patt) >= 0)) {
      $table.not('.t_head').hide();
    }
    if (($table.text().search(patt) >= 0)) {
      $(this).show();
    }

  });

});