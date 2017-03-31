$(function(){
    
    
//  var ideaMenu = $(".idea-menu");
//  var section2 = $("#section-2");
//    
//    ideaMenu.on('click', function(){
//        $('html, body').animate({
//            scrollTop: $(section2).offset().top
//        },1000);
//    });

 var menuItems = $('ul a');
 var section2 = ("#section-2");
 var footerSection = ("#footer-section");
 var aboutSection = $('#section-3');
 var sliderFunction = menuItems.on('click', function(){
        if($(this).is('.idea-menu')){
            $('html,body').animate({
                scrollTop: $(section2).offset().top
            },1000);
        }else if($(this).is('.footer-menu')){
            $('html,body').animate({
                scrollTop:$(footerSection).offset().top
            },1000);
        }else if($(this).is(".about-menu")){
            $('html,body').animate({
                scrollTop:$(aboutSection).offset().top
            },1000);
        }
    })  
    
    
    
    
})