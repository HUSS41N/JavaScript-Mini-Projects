const secondHand = document.querySelector('.second-hand')
const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.min-hand')
setDate = () =>{
    const now = new Date();
    const seconds = now.getSeconds();
    const hour  = now.getHours();
    const minute = now.getMinutes()
    const secondsDegree = ((seconds / 60)*360)+90
    const minuteDegree =  ((minute / 60)*360)+90
    const hourDegree =    ((hour / 60)*360) + 90
    secondHand.style.transform = `rotate(${secondsDegree}deg)`
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`
    hourHand.style.transform = `rotate(${hourDegree}deg)`
}
setInterval(setDate,1000)