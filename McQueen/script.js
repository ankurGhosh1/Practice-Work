//full screen effect on click
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var imgList= document.querySelectorAll('.img-hol img');

var i;
for (i=0; i<imgList.length; i++){
    imgList[i].addEventListener('dblclick', function(){
        this.requestFullscreen();
        
        var elm = document.createElement('button');
        elm.style.color = 'red';
        elm.style.border = '2px solid yellow';
    });
}

var imgList= document.querySelectorAll('.img-hol img');

var i;
for (i=0; i<imgList.length; i++){
    imgList[i].removeEventListener('dblclick', function(){
        this.exitFullscreen();
    });
}

// $(".img-hol img").on('click', function() {
//     this.requestFullscreen();
// })

// scroll on drag

const slider = document.querySelector('.img-hol');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});

