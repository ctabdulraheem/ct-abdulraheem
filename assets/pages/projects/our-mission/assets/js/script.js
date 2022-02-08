$(document).ready(function () {
    new WOW().init();
    $(".menu-icon svg").click(function () {
        $("nav ul").slideToggle("navShow")
    });
});


//For animation 

$(document).ready(function(){
    $(".js-wp-2").waypoint(function(direction){
    },{
        offset: '50%'
    })
});

