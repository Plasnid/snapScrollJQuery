let navOffset = $("nav").innerHeight();
//function for the animated nav scroll
$("nav a[href^='#']").click(function(e){
    e.preventDefault();
    console.log(e.target);
    let idPosNav = $($(this).attr("href")).offset().top - navOffset;
    $("body, html").animate({scrollTop: idPosNav}, 1000, "easeInOutQuad");
});
//new: function that runs as the user scrolls
$(window).scroll(function(){
    
    //for highlighting the nav of the viewable section

    ////find the position of the content just under the nav
    let topContentArea = $(window).scrollTop() + navOffset +20;

    //looping functions for updating nav
    $("section").each(function(){
        //find the top position of each section
        let secTopPos = $(this).offset().top;
        //find the bottom position of each section
        let secBottomPos = $(this).offset().top + $(this).innerHeight();
        //finds the id of the current section
        let secID = $(this).attr("id");

        //checks if the current section is visible in viewport
        if(topContentArea>=secTopPos && topContentArea<=secBottomPos){
            //adds class to the related section nav
            $("nav a[href='#"+secID+"']").addClass("active");
        }else{
            //remove the class from the related section navOffset
            $("nav a[href='#"+secID+"']").removeClass("active");
        }
    });

    //animate content on the screen
    //check the location of each element to animate in
    $(".revealElement").each(function(e){
        //finding the bottom of the object
        let bottomOfObject = $(this).offset().top + $(this).innerHeight();

        //finding the position of the bottom of the window
        let bottomOfWindow = topContentArea + $(window).height();

        //if the object is completely visible in the window, animate it in
        if(bottomOfObject<bottomOfWindow){
            $(this).animate({
                opacity:1,
                'margin-left': 0
            }, 1000, "easeInOutQuad");
        }
    });
});

//animation the intro content on page load
$("#introTitle").delay(250).animate(
    {opacity:1},
    500,
    "easeInOutQuad"
);

$("#introParagraph1").delay(500).animate(
    {opacity:1,'margin-right':0},
    500,
    "easeInOutQuad"
);

$("#introParagraph2").delay(750).animate(
    {opacity:1, 'margin-left':0},
    500,
    "easeInOutQuad"
);

