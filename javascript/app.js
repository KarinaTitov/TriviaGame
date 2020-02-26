
$(document).ready(function () {
    let game = {
        timeLeft: 41,
        rightAnswers: 0,
        wrongAnswers: 0,
        intervalId: null,
        userAnswers: []
        

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
    $('#submitButton').hide();


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
            } else {
                game.wrongAnswers++
            }
        }


    }
// Create quiz with variants of answer
    function createQuestions() {
        for (let i = 0; i < questions.length; i++) {
            let wrap = $('<div>').addClass('questions q-wrap').attr('id', 'question-' + i);
            let question = $('<p>').addClass('q-text').text(questions[i].question);
            let optionWrap = $('<div>').addClass('o-wrap');
            for (let j = 0; j < questions[i].choices.length; j++) {
                let options = questions[i].choices;
                let radioOption = '<input type="radio" data-index="' + i + ' "class="option" id="o-' + j + '" name="question' + i + '" value="' + options[j] + '">' + options[j];
                $(optionWrap).append(radioOption);
            }

            $(wrap).append(question, optionWrap);
            displayQuestions(wrap);
        }


    }
    function displayQuestions(wrap){
        $('#questions').append(wrap)
    }

    // update users answer for each question on change
    $('#questions').on('change', '.option', function(event){
        let selectedOptionName = $(this).attr('name');
        let userAnswer = $('input[name='+selectedOptionName+']:checked').val();
        let index = $(this).data('index');
        game.userAnswers.splice(index,1, userAnswer);
    });

    function startTimer() {
        clearInterval(game.intervalId);
        game.intervalId = setInterval(decrement, 1000);
    }

function startGame(){
    $('#startTheGame').hide();
    createQuestions();
    $('#questions').show();
    $('doneButton').show();
}

startTimer();
decrement();

$('startTheGame').on('click', function(){
    startGame();
})

function decrement(){
    game.timeLeft--;
    $('#timeRemaining').html('<h3>'+ game.timeLeft)
}


})



//wrongAnswers
// only one answer can be picked
// end of the game => time ran out, answered all questions
