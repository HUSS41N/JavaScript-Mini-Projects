
getMessage = () => {
    let message = document.getElementById('message').value;
    if (message == ''){
        alert('You can not send a empty message')
    }
    else{
        const makeItVisible = document.getElementById('visibility');   
        notificationPopUP(makeItVisible)
        const fadeOutJS = document.querySelector('.fadeout')
        fadeOutJS.innerHTML = message
        fadeOutLastMessage(fadeOutJS)
        messageClear()
    }

}
notificationPopUP = (element) => {
    element.style.visibility = 'visible'
    setTimeout(()=>{
        element.style.visibility = 'hidden'
    },2000)
    
}
function fadeOutLastMessage(element) {
    setTimeout(() => {
        element.classList.add('fadeoutx')
    }, 1000);
    element.classList.remove('fadeoutx')
}

messageClear =() => {
    document.getElementById('message').value = ''
}