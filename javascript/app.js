
$(document).ready(function () {
    let game = {
        timeLeft: 41,
        rightAnswers: 0,
        wrongAnswers: 0,
        unaswered: 0,
        intervalId: null,
        userAnswers: [],
        questionNum: 0

    }

    // questions
    let questions = [
        {
            question: 'What color is the French wine Beaujolais?',
            choices: ['Red color', 'White color', 'Yellow color', 'Green color'],
            answer: 'Red color'

        },

        {
            question: 'Which nuts are used in marzipan?',
            choices: ['Peanuts', 'Cashews', 'Almonds', 'Walnuts'],
            answer: 'Almonds'

        },

        {
            question: 'From which country does pitta bread originate?',
            choices: ['France', 'Greece', 'Italy', 'Spain'],
            answer: 'Greece'

        },

        {
            question: 'How many calories does a glass of water contain?',
            choices: ['15', '20', '5', '0'],
            answer: '0'

        },

        {
            question: 'Which cheese is traditionally used for pizzas?',
            choices: ['Provolone', 'Mozzarella', 'Colby', 'Cheddar'],
            answer: 'Mozzarella'

        },

        {
            question: 'Which country is the origin of the cocktail Mojito?',
            choices: ['Japan', 'Panama', 'Cuba', 'Thailand'],
            answer: 'Cuba'

        },

        {
            question: 'Which vitamin is the only one that you will not find in an egg?',
            choices: ['Vitamin C', 'Vitamin A', 'Vitamin B', 'Vitamin D'],
            answer: 'Vitamin C'

        },

        {
            question: 'What is a banana called in Malaysia?',
            choices: ['Pichang', 'Pusang', 'Pesang', 'Pisang'],
            answer: 'Pisang'

        },

    ];
    // hide everything
    $('#questions').hide();
    $('#gameOver').hide();
    $('#doneButton').hide();
    $('#timeRemaining').hide();


    // populate user answers
    function populateUserAnswers() {
        for (let i = 0; i < questions.length; i++) {
            game.userAnswers.push()
        }
    }

    populateUserAnswers();




    //rightAnswers

    function checkUserAnswers() {
        for (let i = 0; i < game.userAnswers.length; i++) {
            if (game.userAnswers[i] === questions[i].answer) {
                game.rightAnswers++
            } else if (game.userAnswers[i] !== questions[i].answer) {
                game.wrongAnswers++
            }
            else {
                game.unanswered++
            }
        }


    }
    // CReating the questions on the html page with the choices
    function createQuestions() {
        if (game.questionNum >= questions.length) {
            gameOver();

            return;
        }

        let currentQuestion = questions[game.questionNum];

        $('#questions').text(currentQuestion.question);

        for (let i = 0; i < currentQuestion.choices.length; i++) {
            let choiceButton = $('<div>').text(currentQuestion.choices[i]);
            choiceButton.on('click', function () {
                let choice = $(this).text();
                game.userAnswers.push(choice);
                game.questionNum++
                $('#choices').empty();
                createQuestions();
            })


            $('#choices').append(choiceButton);


        }
        console.log(currentQuestion);
    }






    function startTimer() {
        clearInterval(game.intervalId);
        game.intervalId = setInterval(decrement, 1000);
    }
// function to start the Game
    function startGame() {
        $('#gameOver').hide();
        $('#startTheGame').hide();
        createQuestions();
        $('#questions').show();
        $('doneButton').show();
        $('#timeRemaining').show();
        $('#choices').show();
        startTimer();
        decrement();
    }


// when the User pushes Start game starts 
    $('#startTheGame').on('click', function () {
        startGame();

    })


// Countdown
    function decrement() {
        if (game.timeLeft === 0) {
            gameOver();
        }
        game.timeLeft--;
        $('#timeRemaining').html('<h3>' + game.timeLeft);


    }
// if User pushes Done game ends
    $('#doneButton').on('click', gameOver);
// function for game Over
    function gameOver() {

        clearInterval(game.intervalId);
        game.timeLeft = 41;
        game.questionNum = 0;
        checkUserAnswers();

        $('#questions').hide();
        $('#choices').hide();
        $('#rightAnswers').text(game.rightAnswers);
        $('#wrongAnswers').text(game.wrongAnswers);
        $('#unanswered').text(game.unanswered);
        $('#gameOver').show();
        $('#timeRemaining').hide();

    }
    
    //ask if wants to play again
// need help to set the game back to the start game 
    $('#playAgain').on('click', function(){
        startGame();
        game.userAnswers = [];
    })

   
    



})



//wrongAnswers
// only one answer can be picked
// end of the game => time ran out, answered all questions
