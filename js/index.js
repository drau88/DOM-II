//VARIABLE / SELECTOR DECLARATIONs

const funBus = document.querySelector('.container .intro img');
const welcomeHeader = document.querySelector('.container .intro h2');
const mainHeader = document.querySelector('.logo-heading');
const mapImg = document.querySelector('.container .img-content img');
const adventureImg = document.querySelector('.container .img-content:nth-of-type(1) img');
const adventureP = document.getElementById('adventureH');
console.log(adventureP);
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


// Doing a thing with the adventure image (changes border of the adventure image on click based on the results of a random number generator)
document.addEventListener('click', function border(event){
    if (event.target === adventureImg) {
        const random = Math.floor((Math.random() * 3) + 1);
        if (random === 1){
        adventureImg.style.border = '5px solid red';
        } else if (random === 2) {
            adventureImg.style.border = '10px solid blue';
        } else {
            adventureImg.style.border = '15px dotted green';
        }
    }
})

// Doing a thing with the adventure heading
document.addEventListener('drag', function adventureThief(event){
    if (event.target === adventureImg) {
        adventureP.textContent = "Hey, stop trying to steal my adventure!"
    } 
    
})
