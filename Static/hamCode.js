var menuOpen = false;

function openBurger(){
    var hamImage = document.getElementById('hamImage');
    var hamList = document.getElementById('hamList');
    if(menuOpen == false){
        hamImage.src = '/static/Images/Icons/X.png';
        hamList.style.display = 'inline-block';
        menuOpen = true;
    }
    else{
        hamImage.src = '/static/Images/Icons/Ham.png';
        hamList.style.display = 'none';
        menuOpen = false;
    }
}