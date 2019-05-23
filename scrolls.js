/*
    navOffset holds the height of the navigation
    $ in this project refers to the jQuery library
    $("nav") will grab the nav tag in the index.html file
    .innerHeight() will take the hight of the nav as defined by the css
*/
let navOffset = $("nav").innerHeight();

/*
    "nav a" looks for the "a" tags inside of the "nav" tag
    a[^='#'] means the code specifically looks for the "a" tags that have an href that starts with #.  This means that #one, #two, and #three are all selected

    .click refers to the event.  if #one, #two, or #three are clicked, this command listens to the event

    .click() is a function that takes a function as its parameter.  The function is anonymous(as it is just refered to as function)

    function(e){} takes the event from the click and calls that event "e"
*/
$("nav a[href^='#']").click(function(e){
    //the line below makes the link not reload the page(which is the default action)
    e.preventDefault();

    /*
        idPosNav gets the position of the one, two or three sections(depending on what you click)
        
        $(this) refers to what the user clicked on (a#one, a#two, or a#three)
        
        .attr("href") refers to the attribute of what was clicked on, which is everything after the "#", so "one", "two", or "three"
        
        .offset() is a function that gets the vertical co-ordinate of the section we are going to
    */
    let idPosNav = $($(this).attr("href")).offset().top - navOffset;

    /*
        $("body, html") gets jQuery to create a reference to the body and html tags

        .animate() is a function that takes an object(which says what to change, in this case scrolltop), then a time for the change to happen(in this case 1000ms, or 1s) and finally how the value should change(in this case "easeInOutQuad")
    */
    $("body, html").animate({scrollTop: idPosNav}, 1000, "easeInOutQuad");
});