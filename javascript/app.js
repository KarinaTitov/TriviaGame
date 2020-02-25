
$(document).ready(function(){
    let game = {
        timeLeft: 31,
        rightAnswers: 0,
        wrongAnswers: 0,
        userAnswers: []

    }
// questions
    let questions = [
        {
            question:'',
            choices: [],
            answer:''

        }

    ];
    // hide everything



    // populate user answers
    function populateUserAnswers(){
        for(let i = 0; i < questions.length; i++){
            game.userAnswers.push()
        }
    }

    populateUserAnswers();


//rightAnswers

function checkUserAnswers(){
    for(let i = 0; i < game.userAnswers.length; i++){
        if(game.userAnswers[i]===questions[i].answer){
            game.rightAnswers++
        }else {
            game.wrongAnswers++
        }
    }
}

    })



//wrongAnswers
// only one answer can be picked
// end of the game => time ran out, answered all questions
