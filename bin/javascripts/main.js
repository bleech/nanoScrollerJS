$(function(){

  $("#main").find('.description').load("readme_short.html", function(){
    window.test = $(".nano").nanoScroller({
      externalScrollbar: true,
      preventPageScrolling: true
    });
  });


});

