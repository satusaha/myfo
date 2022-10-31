// $(function(){
//     let menuTop =$('.customNav').offset().top;
//     alert(menuTop);


// })


// $(function(){
//     let menuTop =$('.customNav').offset().top;
    
//     //scorll effect
//     $(window).on('scroll' , function(){
//         let scrollToTop = $(window).scrollTop();

//        //menu fixed
//        if(scrollToTop > menuTop){ 
//        $('.customNav').addClass('menuFix');
//     }else{
//         $('.customNav').removeClass('menuFix');
//        } 
//     }); 

// })


//menu fixedf js
$(function(){

    let menuTop = $('.customNav').offset().top;
    
    //scroll effect
    $(window).on('scroll' , function(){
        let scrollToTop = $(window).scrollTop();
        
        //menu fixed
        if(scrollToTop > menuTop){
            $('.customNav').addClass('menuFix'); 
        }else{
            $('.customNav').removeClass('menuFix');
        }

        //back to top
        if(scrollToTop > 400){
             $('.backTop').fadeIn(1000);

        }else{
            $('.backTop').fadeOut(1000);
        }
        
    })
    // back to top click
    $('.backTop').on('click' , function(){
        $("html,body").animate({
            scrollTop:0
        },1200);
    })
})
