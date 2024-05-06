
$(document).ready(function(){
    //슬라이드
    var t = 0;
    var slideCount = $(".slide ul li").length; 

    function slide() {
        t++;
    if (t >= slideCount) {
        t = 0; 
     }
        $(".slide ul").animate({ left: t * -100 + "%" }, 1000); 
    }
    setInterval(slide, 2000);
    // $(".slide ul li").click(function() {
    //     t = $(this).index(); 
    //     $(".slide ul").animate({ left: t * -100 + "%" }, 1000); 
    //   });



    //탭메뉴
    $(".tabmenu li").click(function(){
        $(".tabmenu li").removeClass('on');
        $(this).addClass('on');

        $(".notice, .gall").hide(); 

        if ($(this).index() === 0) { 
            $(".notice").show(); 
        } else { 
            $(".gall").show(); 
  }

        return false;
    })
    //팝업창
    $(".popup-trigger").click(function() {
        $(".popup").show();
      });
      
      $(".popup-close").click(function() {
        $(".popup").hide();
      });
      
    
    //메뉴
    $("nav > ul > li").mouseenter(function(){
        $(".sub").stop().slideDown();
    });

    $("nav > ul > li").mouseleave(function(){
        $(".sub").stop().slideUp();
    });
});


