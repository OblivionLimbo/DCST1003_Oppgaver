setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerText = 'button'
    btn.style.position = 'absolute'
    btn.style.left = '50px'
    btn.style.top = '50px'
    btn.onclick = () => {
        btn.style.left = '100px'
        btn.style.top = '100px'
        console.log("Mouse position:", event.clientX, event.clientY)
    }
    document.body.appendChild(btn);
}, 2000);

setInterval(() => {
    document.body.style.backgroundColor = `rgb(0,0,${Math.floor(Math.random(0) * 255)+1})`;
}, 1000);
