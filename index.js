var drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function() {
        let audio;
        switch (drums[i].getAttribute('class')) {
            case 'w drum':
                audio = new Audio('sounds/tom-1.mp3');
                break;
            case 'a drum':
                audio = new Audio('sounds/tom-2.mp3');
                break;
            case 's drum':
                audio = new Audio('sounds/tom-3.mp3');
                break;
            case 'd drum':
                audio = new Audio('sounds/tom-4.mp3');
                break;
            case 'j drum':
                audio = new Audio('sounds/snare.mp3');
                break;
            case 'k drum':
                audio = new Audio('sounds/crash.mp3');
                break;
            case 'l drum':
                audio = new Audio('sounds/kick-bass.mp3');
                break;
            default:
                audio = new Audio('sounds/tom-1.mp3');
                break;
        }
        audio.play();
        var activeButton = drums[i];
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    });
}

document.addEventListener("keydown", function(event) {
    const key = event.key;
    console.log(key);
    switch (key) {
        case 'w':
            audio = new Audio('sounds/tom-1.mp3');
            break;
        case 'a':
            audio = new Audio('sounds/tom-2.mp3');
            break;
        case 's':
            audio = new Audio('sounds/tom-3.mp3');
            break;
        case 'd':
            audio = new Audio('sounds/tom-4.mp3');
            break;
        case 'j':
            audio = new Audio('sounds/snare.mp3');
            break;
        case 'k':
            audio = new Audio('sounds/crash.mp3');
            break;
        case 'l':
            audio = new Audio('sounds/kick-bass.mp3');
            break;
        default:
            audio = new Audio('sounds/tom-1.mp3');
            break;
    }
    var activeButton = document.querySelector(`.${key}`);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
    audio.play();
});

