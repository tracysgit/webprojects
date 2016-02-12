// ======== JQuery Slider =========

var sliderInt = 1;
var sliderNext = 3;
var $sliderimg = $('#slider > img');
var count, loop, id;

$(document).ready(function(){
    // load slider image
    $sliderimg.fadeIn(300);
    startSlider();
    
});

//------ loop slider images ------
function startSlider(){
    count = $sliderimg.size();
    
    loop = setInterval(function(){      
        if(sliderNext > count){
            sliderNext = 2;
            sliderInt = 1;
        }
     
        $sliderimg.fadeOut(300);
        $('#slider > img#' + sliderNext).fadeIn(300);
        
        sliderInt = sliderNext;
        sliderNext += 1;      
    },3000);
}

//------ show previous image ------
function prev(){
    newSlide = sliderInt - 1;
    showSlide(newSlide);
}

//------ show next image ------
function next(){
    newSlide = sliderInt + 1;
    showSlide(newSlide);    
}

//------ stops slider loop ------
function stopLoop(id){
    window.clearInterval(loop);
}

//------ show slide ------
function showSlide(id){
     stopLoop();
     if(id > count){
            id = 1;
     } else if(id < 1){
            id = count;
     }
     
     $sliderimg.fadeOut(300);
     $('#slider > img#' + id).fadeIn(300);
        sliderInt = id;
        sliderNext = id + 1;   
     startSlider();
}

//------ hover on slider ------
$sliderimg.hover(
    function(){
        stopLoop();
    },
    function(){
        startSlider();
    }
);

