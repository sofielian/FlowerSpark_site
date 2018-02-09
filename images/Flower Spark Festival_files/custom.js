$( ".first_popup").load(function() {
  if ( $( this ).height() > 500) {
    $( this ).addClass( "first_popup" );
  }
});

$('#image').mouseover(function(){
    $(this).addClass('flipped');
}).mouseleave(function(){
    $(this).removeClass('flipped');
});

if( jQuery(".toggle .toggle-title").hasClass('active') ){
    jQuery(".toggle .toggle-title.active").closest('.toggle').find('.toggle-inner').show();
  }
  jQuery(".toggle .toggle-title").click(function(){
    if( jQuery(this).hasClass('active') ){
      jQuery(this).removeClass("active").closest('.toggle').find('.toggle-inner').slideUp(200);
    }
    else{ jQuery(this).addClass("active").closest('.toggle').find('.toggle-inner').slideDown(200);
    }
  });