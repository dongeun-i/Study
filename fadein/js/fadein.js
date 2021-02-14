$(document).ready(function(){
    console.log($(document).scrollTop());
    // console.log($('.test').offset().top);
    console.log($(window).height()/2);

    // $(document).scroll(function(){
    //     $scroll = $(document).scrollTop();
    //     $top = $('.test').offset().top
    //     $windowH = ($(window).height()/1.5)
        
    //     if($scroll >= $top - $windowH){
    //         if(!$(this).hasClass('scrollEvent')){
    //         }
    //         $(this).addClass('scrollEvent');
    //         $(this).fadeIn(500)
    //     }else{
    //         $(this).removeClass('scrollEvent');
    //     }
    //     });
    // $('.test').click(function){
    //     $(this).fadeOut(500);
    // }
})