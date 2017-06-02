$(function(){
    
 $('a:eq(0)').click(function(){
     $('body').animate({
         scrollTop:$('#section2').offset().top
     },1000)     
 })
  $('a:eq(1)').click(function(){
     $('body').animate({
         scrollTop:$('#section3').offset().top
     },1000)     
 })
   $('a:eq(2)').click(function(){
     $('body').animate({
         scrollTop:$('#section4').offset().top
     },1000)     
 })
      $('a:eq(3)').click(function(){
     $('body').animate({
         scrollTop:$('#section5').offset().top
     },1000)     
 });
    $('p').css("opacity","0");
    
    $(window).scroll(function(){
        
        if($('body').scrollTop()>$('#section2').offset().top-300){
            $('p:eq(0)').animate({opacity:"i"},800);
        }
    })
      
 })
