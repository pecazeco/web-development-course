
// Detects clicked letter 
var drums = document.querySelectorAll(".drum")
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener('click', function(){
        chooseSound(this.textContent)
        pressingAnimation(this.textContent)
    });
}

// Detects pressed key
document.addEventListener('keydown', function(letter){
    chooseSound(letter.key)
    pressingAnimation(letter.key)
});


function chooseSound(letter){
    switch (letter) {
        case 'w':
            var audio = new Audio('sounds/crash.mp3')
            audio.play()
            break;
        case 'a':
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play()
            break;
        case 's':
            var audio = new Audio('sounds/snare.mp3')
            audio.play()
            break;
        case 'd':
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play()
            break;
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play()
            break;
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play()
            break;
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play()
            break;
    }
}

function pressingAnimation(letter){
    document.querySelector('.'+letter).classList.add('pressed')
    setTimeout(() => {document.querySelector('.'+letter).classList.remove('pressed')}, 200)
}

