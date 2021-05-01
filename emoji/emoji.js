// Owner: Aakash Jha
// Version: 1.0.0
// SVG Morph Animation using anim.js

const sadPath = "M36 157L166 137M44 199H159C181.091 199 199 181.091 199 159V44C199 21.9086 181.091 4 159 4H44C21.9086 4 4 21.9086 4 44V159C4 181.091 21.9086 199 44 199ZM90 70C90 83.8071 78.8071 95 65 95C51.1929 95 40 83.8071 40 70C40 56.1929 51.1929 45 65 45C78.8071 45 90 56.1929 90 70ZM160 70C160 83.8071 148.807 95 135 95C121.193 95 110 83.8071 110 70C110 56.1929 121.193 45 135 45C148.807 45 160 56.1929 160 70Z" ;
const happyPath = "M36 157V157C83.4319 184.405 144.291 162.916 164.5 112V112M44 199H159C181.091 199 199 181.091 199 159V44C199 21.9086 181.091 4 159 4H44C21.9086 4 4 21.9086 4 44V159C4 181.091 21.9086 199 44 199ZM90 70C90 83.8071 78.8071 95 65 95C51.1929 95 40 83.8071 40 70C40 56.1929 51.1929 45 65 45C78.8071 45 90 56.1929 90 70ZM160 70C160 83.8071 148.807 95 135 95C121.193 95 110 83.8071 110 70C110 56.1929 121.193 45 135 45C148.807 45 160 56.1929 160 70Z" ;
const newPath = 'M160 70C160 83.8071 148.807 95 135 95C121.193 95 110 83.8071 110 70C110 56.1929 121.193 45 135 45C148.807 45 160 56.1929 160 70Z'

const svgIcon = document.querySelector('#emoji')
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
        targets: '#smile',
        d: [{value: isAnimated ? sadPath : happyPath}]
    })
    // change background color
    .add({
        targets: '.animation',
        backgroundColor: isAnimated ? 'rgb(6, 21, 27)' : 'rgb(235, 141, 18)'
    }, '-= 450')

    // adding toggle for animation / morphing
    if (!isAnimated) {
        isAnimated = true
    } else {
        isAnimated = false
    }
})