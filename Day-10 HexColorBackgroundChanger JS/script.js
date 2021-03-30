window.onload = () => { 
    generateHexColor();
    
}
generateHexColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    document.getElementById('hex-text').innerHTML = 'HEXCOLOR ' + '#' + n.slice(0, 6);
    document.body.style.backgroundColor  = `#${n.slice(0, 6)}`
}

