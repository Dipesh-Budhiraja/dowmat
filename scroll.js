$(document).ready(function() {
    $(".main").onepage_scroll({
        sectionContainer: "section",
        easing: "ease-in-out",
        animationTime: 400,
        pagination: true,
        loop: false,
        responsiveFallback: 600,
        direction: "vertical",
        keyboard: true
        
    });

    $("#contact").on('click', function(){
        $(".main").moveTo(2);
    });

    $("#about").on('click', function(){
        $(".main").moveTo(3);
    });
   
});