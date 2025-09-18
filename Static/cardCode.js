let cards = document.querySelectorAll("div.card");
let shopWindow = document.getElementById("shopWindow");
let popWindow = document.getElementById("popWindow");
let close = document.querySelector('span#close');
let closePop = document.querySelector('span#closePop');
let popImg = document.getElementById("popImg");
let carouselInner = document.getElementById('cInner');
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
        numPics = art[index].at(-1);
        addSlides(name, numPics);
        shopWindow.style.display = "inline";
    })
})

close.addEventListener('click', () => {
    shopWindow.style.display = "none";
    clearSlides();
})

closePop.addEventListener('click', () => {
    popWindow.style.display = "none";
})

function clearSlides(){
    items = document.querySelectorAll('#myCarousel .carousel-item');
    for(i = 0; i < items.length; i++){
        items[i].remove();
    }
}

function addSlides(name, numPics){
    for(i = 1; i <= numPics; i++){
        newItem = document.createElement('div');
        newItem.classList.add('carousel-item');
        if(i === 1){
            newItem.classList.add('active');
        }
        newItem.innerHTML = '<img src="/static/Images/CardImages/' + name + '/' + i + '.jpg" class="d-block w-100 shopImg">';
        newItem.addEventListener('click', () => {
            img = document.querySelector('div#myCarousel div.active img.shopImg');
            link = img.src;
            popImg.src = link;
            console.log(link);
            popWindow.style.display = "inline";
        })
        carouselInner.appendChild(newItem);
    }
}