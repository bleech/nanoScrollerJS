$(function(){

  $("#main").find('.description').load("readme.html", function(){
    window.test = $(".nano").nanoScroller({
      externalScrollbar: false,
      preventPageScrolling: true
    });
  });


});

