$(function(){
    
 var first=$('.topLeftInfo');  
 var second=$('.topRightInfo');   
 var thrid=$('.footLeftInfo');  
 var fourth=$('.studSolomiya');  
 var fifth=$('.DreamUSA');  
 var sixth=$('.paragraph');  
 var seventh=$('.learns');  
 var eighth=$('.rulesBlue');  
 var nineth=$('.rulesRed'); 
    
var duration=800;    
    

    function animate(e,e2,e3){
     if(scrollTop()>e.offset().top-700){
        e.animate({opacity:1},duration);
         if(e2!=undefined){
          e2.animate({opacity:1},duration);
         }
         if(e3!=undefined){
          e3.animate({opacity:1},duration);
         }
    }
} 
    
    var scrollTop = function(){ return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;} 
    
    $('.opacity').css({opacity:"0"});
$(window).scroll(function(){
    animate(first,second);
    animate(thrid);
    animate(fourth);
    animate(fifth);
    animate(sixth);
    animate(seventh,eighth,nineth);
})    
 
   
})