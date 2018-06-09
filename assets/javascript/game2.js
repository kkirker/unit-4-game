//document ready
$(document).ready(function() {

setTimeout(firstGame, 250);

console.log(correctNumber);
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);

function crystalClick() {
    $("#counter").text(counter);
};

$("#crystal1").on('click', function() {
    counter +=parseFloat(crystal1);
    crystalClick();
});

$("#crystal2").on('click', function() {
    counter +=parseFloat(crystal2);
    crystalClick();
});

$("#crystal3").on('click', function() {
    counter +=parseFloat(crystal3);
    crystalClick();
});

$("#crystal4").on('click', function() {
    counter +=parseFloat(crystal4);
    crystalClick();
});


//console.log(`parseFloat: ${parseFloat(counter)}`);

$('body').on('click', function() {
if ( parseFloat(counter) === parseFloat(correctNumber)) {
    console.log('you have won');
    $('h1:nth-of-type(2)').html('You have won');
    setTimeout(resetGame, 2500);
}   else if ( parseFloat(counter) > parseFloat(correctNumber)) {
    console.log('lost');
    $('h1:nth-of-type(2)').html('Take this "L", it is dangerous to go alone');
    setTimeout(resetGame, 2500);
};


}) ;

function firstgame() {
    alert('Objective: Click the crystals to get Link his $$$');
    let correctNumber = Math.floor((Math.random() * 101) + 19);
    let crystal1 = Math.floor((Math.random() * 12) + 1);
    let crystal2 = Math.floor((Math.random() * 12) + 1);
    let crystal3 = Math.floor((Math.random() * 12) + 1);
    let crystal4 = Math.floor((Math.random() * 12) + 1);
    let counter = 0;
};

function resetGame() {
    console.log('reset game is running');
    correctNumber = 0;
    crystal1 = 0;
    crystal2 = 0;
    crystal3 = 0;
    crystal4 = 0;
    correctNumber = Math.floor((Math.random() * 101) + 19);
    crystal1 = Math.floor((Math.random() * 12) + 1);
    crystal2 = Math.floor((Math.random() * 12) + 1);
    crystal3 = Math.floor((Math.random() * 12) + 1);
    crystal4 = Math.floor((Math.random() * 12) + 1);
    console.log(correctNumber);
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);

    $("#crystal1").on('click', function() {
        counter +=parseFloat(crystal1);
        $("#counter").text(counter);
        console.log(`counter1: ${counter}`)
    });
    
    $("#crystal2").on('click', function() {
        counter +=parseFloat(crystal2);
        $("#counter").text(counter);
    });
    
    $("#crystal3").on('click', function() {
        counter +=parseFloat(crystal3);
        $("#counter").text(counter);
    });
    
    $("#crystal4").on('click', function() {
        counter +=parseFloat(crystal4);
        $("#counter").text(counter);
    });
    let counter = 0;
    
    $('h1:nth-of-type(2)').html('You have: ' + counter + ' Crystals');
}


//display out
$("#correct-number").text(correctNumber);
$("#counter").text(counter);


}) ;