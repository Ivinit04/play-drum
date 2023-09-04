
function keycheck(key){
    switch(key){
        case "w":
            var audio =  new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio =  new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio =  new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio =  new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio =  new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio =  new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio =  new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;

        default:
            alert("sorry! wrong key");
            break;
}
}


function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");             //add new class to existing classes
    // document.querySelector("."+key).setAttribute("class","pressed");   //sets a new class

    setTimeout(function() {
        document.querySelector("."+key).classList.remove("pressed");  

    }, 100);     //after 0.1 seconds animation will change back to original.

}


for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click" , function (){
       
        var buttonInnerHtml = this.innerHTML;
        keycheck(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    });
}

document.addEventListener("keypress",function(event){
    // console.log(event.key);  //prints the key pressed
    var eventKey = event.key;
    keycheck(eventKey);
    buttonAnimation(eventKey);
});