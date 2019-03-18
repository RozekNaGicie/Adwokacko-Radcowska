$(function(){
    
    $('.small-box').on('mouseover', function(){
        $('.small-box').css('cursor', 'pointer')
        
    });
    $('.first').on('click',function(){
        window.location.href = 'file:///C:/Users/Mateusz/Desktop/adwokacko-radcowska.pl/about-as/index.html'
    });
    $('.second').on('click',function(){
        window.location.href = 'file:///C:/Users/Mateusz/Desktop/adwokacko-radcowska.pl/individual-clients/index.html'
    });
    $('.third').on('click',function(){
        window.location.href = 'file:///C:/Users/Mateusz/Desktop/adwokacko-radcowska.pl/bussines-client/index.html'
    });
    $('.four').on('click',function(){
        window.location.href = 'file:///C:/Users/Mateusz/Desktop/adwokacko-radcowska.pl/government%20-units/index.html'
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
   
  
   
    
});