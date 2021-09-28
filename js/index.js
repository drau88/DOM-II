//VARIABLE / SELECTOR DECLARATIONs

const funBus = document.querySelector('.container .intro img');
const welcomeHeader = document.querySelector('.container .intro h2');
const mainHeader = document.querySelector('.logo-heading');
const mapImg = document.querySelector('.container .img-content img');

// Doing a thing with the bus (make it go right and back on mouseover.. also the heading underneath tells you the bus is getting away).

document.addEventListener('mouseover', function goRight(event){
   if (event.target === funBus) {
       funBus.style.marginLeft = '100px';
       welcomeHeader.textContent = 'Oh no, the bus is getting away!';
       console.log('Zoom zoom!');
   } else {
       funBus.style.marginLeft = '';
       welcomeHeader.textContent = 'Welcome To Fun Bus!';
   }
})   

// Doing a thing with the main heading (main heading becomes bigger on use of mousewheel, decreases when mousewheel is used anywhere else)
document.addEventListener('wheel', function biggerHeader(event){
    if (event.target === mainHeader){
        mainHeader.style.fontSize = '10rem';
    } else if (event.target !== mainHeader){
        mainHeader.style.fontSize = '';
    }
} )

// Doing a thing with the map image (map disappears after double clicking on it and makes fun of you in the console, map returns upon double clicking anywhere else on the page)
document.addEventListener('dblclick', function noMap(event){
    if (event.target === mapImg) {
        mapImg.style.display = 'none';
        console.log('No map for you!');
    } else if (event.target !== mapImg){
        mapImg.style.display = '';
        console.log('Oh, it came back.');
    }
})
