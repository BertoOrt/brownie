
$( document ).ready(function () {

  //have dropdowns show selected item
  $(".dropdown-menu li a").click(function(){
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
  });

  //get the value of selected dropdown
  // $("#btnSearch").click(function(){
  // 	alert($('.btn-select').text()+", "+$('.btn-select2').text());
  // });

  //Show the order on an overlay
  $('#bba-order-156').click(function() {
    $('#bba-blank-modal-pane').fadeIn(100);
  });

  //when sign-in button is clicked, an overlay fades in
  $('#bba-sign-in-button').click(function() {
    $('#bba-blank-modal-pane').fadeIn(100);


  });

  //closes login pane
  $('#bba-close-login-pane').click(function() {
    $('#bba-blank-modal-pane').fadeOut(100);
    //$('#ep-blank-modal-pane').hide();
  });

  // Use enter to submit search field
  $('#bba-search-bar').keypress(function (e) {

    alert('ep val:' + $('#ep-search-bar').text());

    if (e.which == 13) {
      //$('form#login').submit();
      //return false;    //<---- Add this line
      $(location).attr('href','search-results.html');
    }
  });

  // Activate Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  /*
  Auto scrolling to internal links
  */
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 700);
          return false;
        }
      }
    });
  });

  /*
  Fade in selected divs
  */
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

      /* Check the location of each desired element */
      $('.bba-hideme').each( function(i){
          var top_of_object = $(this).offset().top + 10;
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is partially visible in the window, fade it it */
          if( bottom_of_window > top_of_object ){

              $(this).animate({'opacity':'1'},900);
          }
      });
  });

  // Check if the item is loaded onto the page & fade in
  $(window).on( "load", function(){

      /* Check the location of each desired element */
      $('.bba-hideme').each( function(i){
          var top_of_object = $(this).offset().top + 10;
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is partially visible in the window, fade it it */
          if( bottom_of_window > top_of_object ){

              $(this).animate({'opacity':'1'},400);
          }
      });
  });

});
