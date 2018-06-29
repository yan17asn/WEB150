//make sure the html elements is loaded
$(document).ready(function(){
//run when an h2 heading is clicked
$("#faqs").toggle(
    function(){
        $(this).toggleClass("minus");
        $(this).next().slideDown(1000);
    },
    function(){
        $(this).toggleClass("minus");
        $(this).next().slideUp(1000);
    }
        
);
//run the page is ready
    $("#faqs h1").animate({fontSize: "450%", opacity: 1, left: "+=375"},1000).animate({fontSize:"175%" ,left: "-200"},1000);
    
    
});//end document ready