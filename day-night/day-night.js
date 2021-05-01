// Owner: Aakash Jha
// Version: 1.0.0
// SVG Morph Animation using anim.js

const sunPath = "M95 47.5C95 73.7335 73.7335 95 47.5 95C21.2665 95 0 73.7335 0 47.5C0 21.2665 21.2665 0 47.5 0C73.7335 0 95 21.2665 95 47.5Z" ;
const moonPath = "M26.5 47.5C26.5 73.7335 47.5 95 47.5 95C21.2665 95 0 73.7335 0 47.5C0 21.2665 21.2665 0 47.5 0C47.5 0 26.5 21.2665 26.5 47.5Z";

const svgIcon = document.querySelector('#sun')
let isAnimated = false;

// adding an event listner to identify click action on SVG
svgIcon.addEventListener('click', () => {
    
    // initializing anime.js timeline function to create a timeline for animations
    const tl = anime.timeline({
        duration: 750,
        easeing: 'easeOutExpo',
    });

    // morph: sun => moon
    tl.add({
        targets: '#sun-path',
        d: [{value: isAnimated ? sunPath : moonPath}]
    })
    // add rotation to morphing
    .add({
        targets: '#sun',
        rotate: 320
    }, '-= 550')
    // change background color
    .add({
        targets: '.animation',
        backgroundColor: isAnimated ? 'rgb(135, 206, 235)' : 'rgb(3, 20, 27)'
    }, '-= 550')

    // adding toggle for animation / morphing
    if (!isAnimated) {
        isAnimated = true
    } else {
        isAnimated = false
    }
})