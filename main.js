/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];


/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/
 

// reset button
let resetButton = document.querySelector('#reset-button');

//d6 roll
let imageD6 = document.querySelector('#d6-roll');

let meanD6 = document.querySelector('#d6-rolls-mean');

// double-d6-roll

let doubleRoll1Image = document.querySelector('#double-d6-roll-1');

let doubleRoll2Image = document.querySelector('#double-d6-roll-2');

let doubled6Mean = document.querySelector('#double-d6-rolls-mean');

// d12-roll

let d12RollImage = document.querySelector('#d12-roll');

let d12RollMean = document.querySelector('#d12-rolls-mean');

// d20-roll

let d20RollImage = document.querySelector('#d20-roll');

let d20RollMean = document.querySelector('#d20-rolls-mean');

// Median

// let d20RollMedian = document.querySelector('#median')



/*******************
 * EVENT LISTENERS *
 *******************/

//imageD6 EventListeners

imageD6.addEventListener('click', function(){
    console.log('D6 clicked');
    d6RollFunction();
});

resetButton.addEventListener('click', function(){
    console.log('Reset Clicked!');
    reset();
});

// doubleRoll EventListeners

doubleRoll1Image.addEventListener('click', function(){
    console.log('DoubleRoll1 clicked');
     d6DoubleRoll();
 });

doubleRoll2Image.addEventListener('click', function(){
    console.log('DoubleRoll2 clicked');
    d6DoubleRoll();
});

// d12Roll EventListeners

d12RollImage.addEventListener('click', function(){
    console.log('D12Roll clicked');
    d12Roll();
});

// d20Roll EventListeners

d20RollImage.addEventListener('click', function(){
    console.log('D20Roll clicked');
    d20Roll();
});










/******************
 * RESET FUNCTION *
 ******************/
// empty global arrays
function reset(){
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];

// reset images/start/images/start/d6.png
imageD6.src = './images/start/d6.png';
doubleRoll1Image.src = './images/start/d6.png';
doubleRoll2Image.src = './images/start/d6.png';
d12RollImage.src = './images/start/d12.jpeg';
d20RollImage.src = './images/start/d20.jpg';

// change text
meanD6.innerText = 'N/A';
doubled6Mean.innerText = 'N/A';
d12RollMean.innerText = 'N/A';
d20RollMean.innerText = 'N/A';
}
reset();







/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

// d6RollFunction()

function d6RollFunction(){
    let result = getRandomNumber(6);
    console.log(result);
    imageD6.src = `./images/d6/${result}.png`;

    /*
    ./images/d6/1.png
    ./images/d6/2.png
    ...
    ./images/d6/6.png
    
    */

sixes.push(result);
console.log(sixes);
meanD6.innerText = getMean(sixes);

}

// d6DoubleRoll()

function d6DoubleRoll(){
    
let result1 =  getRandomNumber(6);
let result2 =  getRandomNumber(6);
let totalResult = result1 + result2; 

    doubleRoll1Image.src = `./images/d6/${result1}.png`;
    doubleRoll2Image.src = `./images/d6/${result2}.png`;

doubleSixes.push(totalResult);
console.log(doubleSixes);
doubled6Mean.innerText = getMean(doubleSixes);

}

// d12Roll

function d12Roll(){

    let result = getRandomNumber(12);
    console.log(result);
    d12RollImage.src = `./images/numbers/${result}.png`;


twelves.push(result);
console.log(twelves);
d12RollMean.innerText = getMean(twelves);

}

// d20Roll

function d20Roll(){

    let result = getRandomNumber(20);
    console.log(result);
    d20RollImage.src = `./images/numbers/${result}.png`;

twenties.push(result);
console.log(twenties);
d20RollMean.innerText = getMean(twenties);

// Median

// d20RollMedian.innerText = "Median" + " " + getMedian(twenties);



}





/****************
 * MATH SECTION *
 ****************/

function getMean(array){
    let total = 0;
for(let i = 0; i < array.length;i++){
    total = total + array[i];
}
return total/array.length;
}

// function getMedian(array){

//     array.sort(function(a,b) {return a - b});
//      let half = Math.floor(array.length/2);
//     if(array.length % 2 === 0){
//         return array[half];
//      }else{
//         return array[half-1] + array[half] / 2.0;
//      }
// }


    
