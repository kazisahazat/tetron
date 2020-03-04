$(function(){
//Typed Js
$(".typed").typed({
    strings: [" Designer.", " Devloper.", " Photographer."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    infinite:true,
    // false = infinite
    loopCount:50,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
});

//animation scroll js
var html_body = $('html, body');
$('.navbar a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 90
            }, 1500,);
            return false;
        }
    }
});
    
//animation scroll js 2
var html_body = $('html, body');
$('.about-slid a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 90
            }, 1500,);
            return false;
        }
    }
});
    
//WOW js
new WOW().init();    

//Navbar bg
$(window).scroll(function(){
var scrolling = $(this).scrollTop();
if(scrolling>225){
    $('.navbar').addClass('bg');
}
else{
    $('.navbar').removeClass('bg');
}
});    

    
//Counter up
$('.counter').counterUp({
    delay: 10,
    time: 3000
});

//Skill bar
$(document).ready(function(){
    $('#bar1').barfiller();
});
    
$(document).ready(function(){
    $('#bar2').barfiller();
}); 
    
$(document).ready(function(){
    $('#bar3').barfiller();
}); 
    
$(document).ready(function(){
    $('#bar4').barfiller();
});     
    
    
    
});
