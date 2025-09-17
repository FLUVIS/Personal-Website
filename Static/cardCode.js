let cards = document.querySelectorAll("div.card");
let shopWindow = document.getElementById("shopWindow");
let shopImg = document.getElementById("shopImg");
let close = document.querySelector('span#close');
let art = [['81', 50, 100, 4],['Beautiful Mistakes', 50, 100, 4],['Claw', 50, 100, 4],['Containment', 50, 100, 4],
           ['Convergence', 50, 100, 4],['Crossroads', 50, 100, 4],['Deception', 50, 100, 4],['Discovery', 50, 100, 4],
           ['Elegant Nine', 50, 100, 4],['Eleven', 50, 100, 4],['Evergreen', 50, 100, 4],['Eyeglass', 50, 100, 4],
           ['Flower Garden', 50, 100, 4],['Harmonic 5', 50, 100, 4],['Harmonic 6', 50, 100, 4],['Looper', 50, 100, 4],
           ['Lotus', 50, 100, 4],['Nine', 50, 100, 4],['Portal', 50, 100, 4],['Rings', 50, 100, 4],['Seven', 50, 100, 4],
           ['Spider', 50, 100, 4],['Starfish', 50, 100, 4],['Star Struck', 50, 100, 4],['Subharmonic 7', 50, 100, 4],
           ['Sun Burst', 50, 100, 4],['The Mark', 50, 100, 4],['The Mask', 50, 100, 4],['Transcendence', 50, 100, 4],
           ['Triangulation', 50, 100, 4]];

cards.forEach((div, index) => {
    div.addEventListener('click', () => {
        name = art[index][0];
        console.log(name);
        link = "/static/Images/CardImages/" + name + "/1.jpg";
        openModel(link);
    })
})

close.addEventListener('click', () => {
    shopWindow.style.display = "none";
})

function openModel(pic){
    shopWindow.style.display = "flex";
    shopImg.src = pic;
}