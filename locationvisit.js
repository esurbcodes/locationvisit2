// CREATED BY ETHAN SURBER AND JAMES SURBER
var img1 = "https://momento360.com/e/u/afa11a5b487b45cf934125602c4a71f8?utm_campaign=embed&utm_source=other&heading=69.79&pitch=6.42&field-of-view=75&size=medium&display-plan=true";
var img2 = "https://momento360.com/e/u/f5bf1a82d2c64eabbfd9682ea9e8ca9f?utm_campaign=embed&utm_source=other&heading=104.52&pitch=-17.96&field-of-view=75&size=medium&display-plan=true";
var img3 = "https://momento360.com/e/u/766ed0159a7541ff890dfa6ba1795932?utm_campaign=embed&utm_source=other&heading=62.84&pitch=6.93&field-of-view=75&size=medium&display-plan=true";
var img4 = "https://momento360.com/e/u/89b991f62e0a4f869e4592bb9ca62e33?utm_campaign=embed&utm_source=other&heading=63.08&pitch=12.11&field-of-view=75&size=medium&display-plan=true";
var img5 = "https://momento360.com/e/u/9f2c3db0e6914b63827987c4d9ae37c1?utm_campaign=embed&utm_source=other&heading=66.18&pitch=12.58&field-of-view=75&size=medium&display-plan=true";
var img6 = "https://momento360.com/e/u/dbd8fc6385fe450093b58f0b6d19153c?utm_campaign=embed&utm_source=other&heading=15.71&pitch=15.85&field-of-view=100&size=medium&display-plan=true";
var img7 = "https://momento360.com/e/u/f2f12f89304841368376d17068bcefe9?utm_campaign=embed&utm_source=other&heading=22.3&pitch=10.97&field-of-view=75&size=medium&display-plan=true";
var img8 = "https://momento360.com/e/u/13a990441efc4facb04b7d901a935449?utm_campaign=embed&utm_source=other&heading=421.39&pitch=9.22&field-of-view=56.47&size=medium&display-plan=true"
var img9 = "https://momento360.com/e/u/8e8eb1fb88614f4a8bcb8e647eefcc0a?utm_campaign=embed&utm_source=other&heading=337.38&pitch=4.61&field-of-view=75&size=medium&display-plan=true"
var img10 = "https://momento360.com/e/u/70279bdccdb449cba409958c71411722?utm_campaign=embed&utm_source=other&heading=70.96&pitch=4.06&field-of-view=100&size=medium&display-plan=true"
var images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
let curindex = 0;

var compassN = "compassN.png";
var compassE = "compassE.png";
var compassS = "compassS.png";
var compassW = "compassW.png";

var next = document.getElementById("forarrow");
var previous = document.getElementById("prevarrow");
var mapstart = document.getElementById("startbut");
var map1 = document.getElementById("but1");
var map2 = document.getElementById("but2");
var map3 = document.getElementById("but3");
var map4 = document.getElementById("but4");
var map5 = document.getElementById("but5");
var map6 = document.getElementById("but6");
var map7 = document.getElementById("but7");
var map8 = document.getElementById("but8");
var map9 = document.getElementById("but9");
var curimg = document.getElementById("mapimg");
var comimg = document.getElementById("compass");


// Forward and Backward functions
next.addEventListener('click', () => {
    curindex = (curindex + 1) % images.length;
    curimg.setAttribute('src', images[curindex]);
    if (curindex === 0) {
        comimg.setAttribute('src', compassE);
    } else if (curindex === 1) {
        comimg.setAttribute('src', compassW);

    } else if (curindex === 2) {
        comimg.setAttribute('src', compassS);

    } else if (curindex === 3) {
        comimg.setAttribute('src', compassS);

    } else if (curindex === 4) {
        comimg.setAttribute('src', compassS);

    } else if (curindex === 5) {
        comimg.setAttribute('src', compassW);
    } else if (curindex === 6) {
        comimg.setAttribute('src', compassS);
    } else if (curindex === 7) {
        comimg.setAttribute('src', compassS);
    } else if (curindex === 8) {
        comimg.setAttribute('src', compassW);
    } else {
        comimg.setAttribute('src', compassW);
    }

})

previous.addEventListener('click', () => {
    curindex = (curindex - 1) % images.length;
    curimg.setAttribute('src', images[curindex]);
    if (curindex <= 0) {
        curindex = 0;
        curimg.setAttribute('src', images[0]);
        comimg.setAttribute('src', compassE);
    }
})
//

// Map Buttons
mapstart.addEventListener('click', () => {
    curindex = 0;
    curimg.setAttribute('src', images[0]);
    comimg.setAttribute('src', compassE);

})
map1.addEventListener('click', () => {
    curindex = 1;
    curimg.setAttribute('src', images[1]);
    comimg.setAttribute('src', compassW);

})
map2.addEventListener('click', () => {
    curindex = 2;
    curimg.setAttribute('src', images[2]);
    comimg.setAttribute('src', compassS);

})
map3.addEventListener('click', () => {
    curindex = 3;
    curimg.setAttribute('src', images[3]);
    comimg.setAttribute('src', compassS);

})
map4.addEventListener('click', () => {
    curindex = 4;
    curimg.setAttribute('src', images[4]);
    comimg.setAttribute('src', compassS);

})
map5.addEventListener('click', () => {
    curindex = 5;
    curimg.setAttribute('src', images[5]);
    comimg.setAttribute('src', compassW);

})
map6.addEventListener('click', () => {
    curindex = 6;
    curimg.setAttribute('src', images[6]);
    comimg.setAttribute('src', compassS);

})
map7.addEventListener('click', () => {
    curindex = 7;
    curimg.setAttribute('src', images[7]);
    comimg.setAttribute('src', compassS);

})
map8.addEventListener('click', () => {
    curindex = 8;
    curimg.setAttribute('src', images[8]);
    comimg.setAttribute('src', compassW);

})
map9.addEventListener('click', () => {
    curindex = 9;
    curimg.setAttribute('src', images[9]);
    comimg.setAttribute('src', compassW);

})
//
