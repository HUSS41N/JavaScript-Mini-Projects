window.addEventListener('keydown',(event)=>{
    play(event)
})
function play(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    if (!audio) return; // If no audio associated with the key is found Function will terminate
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend',removeTransition))

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

