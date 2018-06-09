//document ready
$(document).ready(function () {

    $('#won').hide();
    $('#lost').hide();

    function firstGame() {
        alert('Objective: Click the crystals to get Link his $$$');
    };

    setTimeout(firstGame, 250);

    //define global variables here

    let correctNumber = Math.floor((Math.random() * 101) + 19);
    //random number for correct is 19-120, so range is 101 numbers starting at 19.
    let crystal1 = Math.floor((Math.random() * 12) + 1);
    let crystal2 = Math.floor((Math.random() * 12) + 1);
    let crystal3 = Math.floor((Math.random() * 12) + 1);
    let crystal4 = Math.floor((Math.random() * 12) + 1);
    //random crystal number is 1-12.
    let counter = 0;

    console.log(correctNumber);
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);

    //needs reset random # function
    function resetGame() {

        $('h1:nth-child(2)').show();
        $('#won').hide();
        $('#lost').hide();
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

        // $("#crystal1").on('click', function() {
        //     counter +=parseFloat(crystal1);
        //     $("#counter").text(counter);
        //     console.log(`counter1: ${counter}`)
        // });

        // $("#crystal2").on('click', function() {
        //     counter +=parseFloat(crystal2);
        //     $("#counter").text(counter);
        //     console.log(`counter2: ${counter}`)
        // });

        // $("#crystal3").on('click', function() {
        //     counter +=parseFloat(crystal3);
        //     $("#counter").text(counter);
        //     console.log(`counter3: ${counter}`)
        // });

        // $("#crystal4").on('click', function() {
        //     counter +=parseFloat(crystal4);
        //     $("#counter").text(counter);
        //     console.log(`counter4: ${counter}`)
        // });

        counter = 0;

        $('#counter').html(counter);
        $("#correct-number").text(correctNumber);

    }







    //needs reset game function
    // in reset function, when counter === correct-number, you will get win prompt and random values will re-assign.
    //in reset function, when counter > correct-number, you will fet lose prompt and random values will re-assign.


    //game function
    //The game function will add the clicked crystals value to the counter on.'click' and then check if reset function should be ran or game continues. (reset functions runs in case of win or lose), game continues if counter < correc-number.

    $("#crystal1").on('click', function () {
        counter += parseFloat(crystal1);
        $("#counter").text(counter);
        console.log(`counter1: ${counter}`)
    });

    $("#crystal2").on('click', function () {
        counter += parseFloat(crystal2);
        $("#counter").text(counter);
        console.log(`counter2: ${counter}`)
    });

    $("#crystal3").on('click', function () {
        counter += parseFloat(crystal3);
        $("#counter").text(counter);
        console.log(`counter3: ${counter}`)
    });

    $("#crystal4").on('click', function () {
        counter += parseFloat(crystal4);
        $("#counter").text(counter);
        console.log(`counter4: ${counter}`)
    });

    //console.log(`parseFloat: ${parseFloat(counter)}`);

    $('body').on('click', function () {
        console.log(correctNumber);
        if (parseFloat(counter) === parseFloat(correctNumber)) {
            console.log('you have won');
            $('h1:nth-child(2)').hide();
            $('#won').show();
            setTimeout(resetGame, 2000);
        } else if (parseFloat(counter) > parseFloat(correctNumber)) {
            console.log('lost');
            $('h1:nth-child(2)').hide();
            $('#lost').show();
            setTimeout(resetGame, 2000);
        };


    });




    //display out
    $("#correct-number").text(correctNumber);
    $("#counter").text(counter);

});