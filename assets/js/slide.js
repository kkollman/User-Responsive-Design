$(function () {


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
    var sliderFunction = menuItems.on('click', function () {
        if ($(this).is('.idea-menu')) {
            $('html,body').animate({
                scrollTop: $(section2).offset().top
            }, 1000);
        } else if ($(this).is('.footer-menu')) {
            $('html,body').animate({
                scrollTop: $(footerSection).offset().top
            }, 1000);
        } else if ($(this).is(".about-menu")) {
            $('html,body').animate({
                scrollTop: $(aboutSection).offset().top
            }, 1000);
        }
    })
    
    
    var gitBtn1 = $('.git-user-btn-1');
    var gitBtn2 = $('.git-user-btn-2');
    
    gitBtn1.on('click', function(){
       window.open('https://github.com/kkollman'); 
    });
    gitBtn2.on('click', function(){
       window.open('https://github.com/rafalwawrzyk') 
    });
    
    
    

//    var githubLink = $('.github-link');
//    
//  var githubLinkFunc = githubLink.on('click', function () {
////        var rafal = window.open('https://github.com/rafalwawrzyk');
////        var kamil = window.open('https://github.com/kkollman');
//
//        
//            swal({
//                    title: "Watch us on Github!",
//                    text: "Click to see our github accounts",
//                    type: "success",
//                    showCancelButton: true,
//                    allowOutsideClick: false,
//                    confirmButtonColor: "#62e229",
//                    confirmButtonText: "Kamil",
//                    cancelButtonText: "Rafal",
//                    cancelButtonColor:"#DD6B55",
//                    closeOnConfirm: true,
//                    closeOnCancel: true
//                },
//                function (isConfirm) {
//                    if (isConfirm) {
//
//
//                         window.open('https://github.com/kkollman');
//
//
//                    } else  {
//                        window.open('https://github.com/rafalwawrzyk');
//                    }
//                });
//        
////        return false
//    })




})