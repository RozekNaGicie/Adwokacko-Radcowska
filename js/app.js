$(function(){
    
    $('.small-box').on('mouseover', function(){
        $('.small-box').css('cursor', 'pointer')
        
    });
    $('.first').on('click',function(){
        window.location.href = '../about-as/index.html'
    });
    $('.second').on('click',function(){
        window.location.href = '../individual-clients/index.html'
    });
    $('.third').on('click',function(){
        window.location.href = '../bussines-client/index.html'
    });
    $('.four').on('click',function(){
        window.location.href = '../government%20-units/index.html'
    });

    $('nav').find('a').on('mouseover', function(){
        $(this).css('color','black')
        

    });
    $('nav').find('a').on('mouseout', function(){
        $(this).css('color','grey')
        
    });
   
//    if($(window).width() < 768 ){
//     $(window).on('mouseover',function(){
//         $('nav').find('img').addClass('hidden')
//     })
//    }
   
// $('#carouselSlides').on('mouseover', function(){
//     $('.fonts').css('color', 'grey');
//     $('.fonts').css('fontSize', '17px');
//     $('.fonts').css('fontWeight', 'bold');
// });
// $('#carouselSlides').on('mouseout', function(){
//     $('.fonts').css('color', 'white');
//     $('.fonts').css('fontSize', '16px');
//     $('.fonts').css('fontWeight', 'bold');
// });
   $('.dropdown').on('click', function(){
       $('.offert').toggle('slow');
    //    $('.offert').css('display', 'inline-block');       
       $('.listAbout').toggle('slow');
   })
    
});