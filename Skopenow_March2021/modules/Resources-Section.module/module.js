$(document).ready(function() {
    // Function to display the blog content based on the selected option
    function displayBlogContent(blogId) {
      if (blogId === "all") {
        $("#blog-content-row .column").show();
         $("#bspoke-load-more").show();
        $("#blog-content-row .blog-item-main").hide();
         $('#blog-content-row .blog-item-main:lt(9)').show();
      } else {
        $("#blog-content-row .column").hide();
        $("#blog-content-row .column[data-blog-id='" + blogId + "']").show();
      }
    }

    // Event listener for the dropdown change event
    $("#filter-select").change(function() {
      var selectedBlogId = $(this).val();
      $("#bspoke-load-more").hide();
      displayBlogContent(selectedBlogId);
      
    });

    // Initial display of all blog content
    displayBlogContent("all");
    
  });

$(document).ready(function() {
  // Function to filter blog content based on the search query
  function filterBlogContent(searchQuery) {
    var resultsCount = 0;

    // Loop through each blog item
    $("#blog-content-row .column").each(function() {
      var blogItemText = $(this).text().toLowerCase();
      // Show or hide the blog item based on the search query match
      if (blogItemText.includes(searchQuery.toLowerCase())) {
        $(this).show();
        resultsCount++;
      } else {
        $(this).hide();
      }
    });

    // Display "No results" message if there are no matching blog items
    if (resultsCount === 0) {
      $(".no-results").show();
    } else {
      $(".no-results").hide();
    }
  }

  // Event listener for the search input keyup event
  $("#search-input").keyup(function() {
    var searchQuery = $(this).val();
    filterBlogContent(searchQuery);
  });

  // Event listener for the search icon click event
  $(".fa-search").click(function() {
    var searchQuery = $("#search-input").val();
    filterBlogContent(searchQuery);
  });
});

 $(document).ready(function () {
    $("#blog-content-row .blog-item-main").hide();
    size_li = $("#blog-content-row .blog-item-main").size();
    x=9;
    $('#blog-content-row .blog-item-main:lt('+x+')').show();
    $('#bspoke-load-more').click(function () {
        x= (x+9 <= size_li) ? x+9 : size_li;
        $('#blog-content-row .blog-item-main:lt('+x+')').fadeIn(300);
        if(x == size_li){
        $('#bspoke-load-more').hide();
        }
    });
});
