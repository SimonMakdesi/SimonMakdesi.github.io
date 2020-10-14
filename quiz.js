/* Oskar Johansson Osjo8879
Simon Makdesi Sima5063 */

window.onload = function(){

    //Variables
    var currentNumber = 0;
    var numberToGet = document.getElementById('numberToGet');
    var AttemptsRemainingText = document.getElementById('AttemptsRemaining');
    var numberToUseText = document.getElementById('NumberToUse');
    var CurrentNumberText = document.getElementById('CurrentNumber');
    var AttemptsRemaining = 0;
    var numberToUse = 0;
    var questionNr = 0;

    //Array that holds the answers for each question, the numbers you can use, the starting number of each question and the amout of attempts
    var answers = [5,8,0,50.5];
    var numbers = [[1,2,3,4],[8,1,16,6],[7,4,3,1],[2,10,20,5]];
    var startnumber = [0,4,84,150];
    var attempts = [4,3,5,9];

    // Button Variables with a reference from HTML file
    var addButton = document.getElementById('addButton');
    var subtractButton = document.getElementById('subtractButton');
    var divideButton = document.getElementById('divideButton');
    var multiplyButton = document.getElementById('multiplyButton');
    var Valuebutton1 = document.getElementById('Valuebutton1');
    var Valuebutton2 = document.getElementById('Valuebutton2');
    var Valuebutton3 = document.getElementById('Valuebutton3');
    var Valuebutton4 = document.getElementById('Valuebutton4');
    var helpButton = document.getElementById('Help');
    var resetButton = document.getElementById('ResetQ');

    //Sets the Questions
    SetQuestion = function(){
        AttemptsRemaining = attempts[questionNr];
        currentNumber = startnumber[questionNr];
        numberToUse = 0;
 
        Valuebutton1.value=Number(numbers[questionNr][0]);
        Valuebutton2.value=Number(numbers[questionNr][1]);
        Valuebutton3.value=Number(numbers[questionNr][2]);
        Valuebutton4.value=Number(numbers[questionNr][3]);


        numberToGet.textContent = "Goal number: "+answers[questionNr];
        AttemptsRemainingText.textContent = "Operations remaining: "+ attempts[questionNr];
        numberToUseText.textContent= "Number in use: Nothing";
        CurrentNumberText.textContent= "Your Number: "+ startnumber[questionNr];
        
        }

    SetQuestion();

    //Functions FOR valueButtons that make it possible to click the buttons and execute the code within them.
    Valuebutton1.onclick = function(){
        numberToUse = Number(Valuebutton1.value);
        numberToUseText.textContent= "Number to use: "+numberToUse;
    }
    Valuebutton2.onclick = function(){
        numberToUse = Number(Valuebutton2.value);
        numberToUseText.textContent="Number to use: "+ numberToUse;
    }
    Valuebutton3.onclick = function(){
        numberToUse = Number(Valuebutton3.value);
        numberToUseText.textContent="Number to use: "+ numberToUse;
    }
    Valuebutton4.onclick = function(){
        numberToUse = Number(Valuebutton4.value);
        numberToUseText.textContent="Number to use: "+ numberToUse;
    }

        //Functions FOR reset and help button that make it possible to click the buttons and execute the code within them.
    helpButton.onclick = function(){
        alert("The goal of the game is to get 'Your number' to be the same as the 'Goal number' with as few operations as possible");
    }

    resetButton.onclick = function(){
        SetQuestion();
    }

    //Functions FOR operator buttons that make it possible to click the buttons and execute the code within them.
    addButton.onclick = function(){
        Add(numberToUse);
    }
    subtractButton.onclick = function(){
        Subtract(numberToUse);
    }
    divideButton.onclick = function(){
        divide(numberToUse);
    }
    multiplyButton.onclick = function(){
        multiply(numberToUse);
    }

    //Functions that tell what each operator button should do.
    Add = function(numberToUse){
        if (checkForUseNumber()){
            currentNumber += numberToUse;
            updateText();
        }
    }
    Subtract = function(numberToUse){
        if (checkForUseNumber()){
            currentNumber -= numberToUse;
            updateText();
        }
    }
    divide = function(numberToUse){
        if (checkForUseNumber()){
            currentNumber /= numberToUse;
            updateText();
        }
    }
    multiply = function(numberToUse){
        if (checkForUseNumber()){
            currentNumber *= numberToUse;
            updateText();
        }
    }

    //Checks if the Player has chosen a number to use or not and returns it as true or false.
    checkForUseNumber = function(){
        if (Number(numberToUse) == 0){
            alert("you did not pick a number to use");
            return false;
        }
        return true;
    }
    
    // Updates the text for "Your number" and checks if the answer is right. This function is called whenever the player uses an operator.
    updateText = function(){
        CurrentNumberText.textContent="Your number: "+currentNumber;
        checkAnswer();
    }

    //Checks the answer every time the player uses an operator. It checks if that answer is correct or wrong and either takes the player to the next question or resets the question.
    checkAnswer = function(){
        if (Number(AttemptsRemaining) > 0){
            AttemptsRemaining --;
            AttemptsRemainingText.textContent = "Operations remaining: "+ AttemptsRemaining;

            if (Number(answers[questionNr]) == Number(currentNumber)){
                alert( "you reached the number great! \n Press ok to Proceed to the next question");
                nextQuestion();
            }
            else if (Number(AttemptsRemaining) <= 0){
                alert( "you did not reach the goal in time \n press ok to try again");
                questionNr --;
                nextQuestion();
            }
        }
    }

    //This function is used to check where the player is currently at, it it still has questions to answer or if it is finished with the Game.
    nextQuestion = function(){
        questionNr ++;
        if (questionNr > answers.length-1){
            
            reset();
        }
        else {
            SetQuestion();
        }
    }
    // A function to reset the game. 
    reset = function(){
        alert("you beat all the questions in the game. \n Press ok to restart");
        questionNr = 0;
        SetQuestion();
    }























    // the function for setting up the questions so that they can be answered
    // SetQuestion = function(){
    //     if (MathChoice == "Addition"){
    //         startingSum = Math.random(1,1000);
    //         CorrectAnswer= startingSum + rnd(1-1000)
    //         MissingNumber = CorrectAnswer - startingsum;
    //         Question = startingSum + " + X = " +CorrectAnswer;
    //     }
    //     if (MathChoice == "Subtraction"){
    //         startingSum = Math.random(1,1000);
    //         CorrectAnswer= startingSum + rnd(1-startingSum)
    //         MissingNumber = CorrectAnswer - startingsum;
    //         Question = startingSum + " - X = " +CorrectAnswer;
    //     }
    //     if (MathChoice == "Multiplication"){
    //         startingSum = Math.random(1,1000);
    //         CorrectAnswer= startingSum + rnd(1-1000)
    //         MissingNumber = CorrectAnswer - startingsum;
    //         Question = startingSum + " * X = " +CorrectAnswer;
    //     }
    // }

/* Oskar Johansson Osjo8879
Simon Makdesi Sima5063 */

window.onload = function(){

    //Variables
    var currentNumber = 0;
    var numberToGet = document.getElementById('numberToGet');
    var AttemptsRemainingText = document.getElementById('AttemptsRemaining');
    var numberToUseText = document.getElementById('NumberToUse');
    var CurrentNumberText = document.getElementById('CurrentNumber');
    var AttemptsRemaining = 0;
    var numberToUse = 0;
    var questionNr = 0;

    //Array that holds the answers for each question, the numbers you can use, the starting number of each question and the amout of attempts
    var answers = [5,8,0,50.5];
    var numbers = [[1,2,3,4],[8,1,16,6],[7,4,3,1],[2,10,20,5]];
    var startnumber = [0,4,84,150];
    var attempts = [4,3,5,9];

    // Button Variables with a reference from HTML file
    var addButton = document.getElementById('addButton');
    var subtractButton = document.getElementById('subtractButton');
    var divideButton = document.getElementById('divideButton');
    var multiplyButton = document.getElementById('multiplyButton');
    var Valuebutton1 = document.getElementById('Valuebutton1');
    var Valuebutton2 = document.getElementById('Valuebutton2');
    var Valuebutton3 = document.getElementById('Valuebutton3');
    var Valuebutton4 = document.getElementById('Valuebutton4');
    var helpButton = document.getElementById('Help');
    var resetButton = document.getElementById('ResetQ');

    //Sets the Questions
    SetQuestion = function(){
        AttemptsRemaining = attempts[questionNr];
        currentNumber = startnumber[questionNr];
        numberToUse = 0;
 
        Valuebutton1.value=Number(numbers[questionNr][0]);
        Valuebutton2.value=Number(numbers[questionNr][1]);
        Valuebutton3.value=Number(numbers[questionNr][2]);
        Valuebutton4.value=Number(numbers[questionNr][3]);


        numberToGet.textContent = "Goal number: "+answers[questionNr];
        AttemptsRemainingText.textContent = "Operations remaining: "+ attempts[questionNr];
        numberToUseText.textContent= "Number in use: Nothing";
        CurrentNumberText.textContent= "Your Number: "+ startnumber[questionNr];
        
        }

    SetQuestion();

    //Functions FOR valueButtons that make it possible to click the buttons and execute the code within them.
    Valuebutton1.onclick = function(){
        numberToUse = Number(Valuebutton1.value);
        numberToUseText.textContent= "Number to use: "+numberToUse;
    }
    Valuebutton2.onclick = function(){
        numberToUse = Number(Valuebutton2.value);
        numberToUseText.textContent="Number to use: "+ numberToUse;
    }
    Valuebutton3.onclick = function(){
        numberToUse = Number(Valuebutton3.value);
        numberToUseText.textContent="Number to use: "+ numberToUse;
    }
    Valuebutton4.onclick = function(){
        numberToUse = Number(Valuebutton4.value);
        numberToUseText.textContent="Number to use: "+ numberToUse;
    }

        //Functions FOR reset and help button that make it possible to click the buttons and execute the code within them.
    helpButton.onclick = function(){
        alert("The goal of the game is to get 'Your number' to be the same as the 'Goal number' with as few operations as possible");
    }

    resetButton.onclick = function(){
        SetQuestion();
    }

    //Functions FOR operator buttons that make it possible to click the buttons and execute the code within them.
    addButton.onclick = function(){
        Add(numberToUse);
    }
    subtractButton.onclick = function(){
        Subtract(numberToUse);
    }
    divideButton.onclick = function(){
        divide(numberToUse);
    }
    multiplyButton.onclick = function(){
        multiply(numberToUse);
    }

    //Functions that tell what each operator button should do.
    Add = function(numberToUse){
        if (checkForUseNumber()){
            currentNumber += numberToUse;
            updateText();
        }
    }
    Subtract = function(numberToUse){
        if (checkForUseNumber()){
            currentNumber -= numberToUse;
            updateText();
        }
    }
    divide = function(numberToUse){
        if (checkForUseNumber()){
            currentNumber /= numberToUse;
            updateText();
        }
    }
    multiply = function(numberToUse){
        if (checkForUseNumber()){
            currentNumber *= numberToUse;
            updateText();
        }
    }

    //Checks if the Player has chosen a number to use or not and returns it as true or false.
    checkForUseNumber = function(){
        if (Number(numberToUse) == 0){
            alert("you did not pick a number to use");
            return false;
        }
        return true;
    }
    
    // Updates the text for "Your number" and checks if the answer is right. This function is called whenever the player uses an operator.
    updateText = function(){
        CurrentNumberText.textContent="Your number: "+currentNumber;
        checkAnswer();
    }

    //Checks the answer every time the player uses an operator. It checks if that answer is correct or wrong and either takes the player to the next question or resets the question.
    checkAnswer = function(){
        if (Number(AttemptsRemaining) > 0){
            AttemptsRemaining --;
            AttemptsRemainingText.textContent = "Operations remaining: "+ AttemptsRemaining;

            if (Number(answers[questionNr]) == Number(currentNumber)){
                alert( "you reached the number great! \n Press ok to Proceed to the next question");
                nextQuestion();
            }
            else if (Number(AttemptsRemaining) <= 0){
                alert( "you did not reach the goal in time \n press ok to try again");
                questionNr --;
                nextQuestion();
            }
        }
    }

    //This function is used to check where the player is currently at, it it still has questions to answer or if it is finished with the Game.
    nextQuestion = function(){
        questionNr ++;
        if (questionNr > answers.length-1){
            
            reset();
        }
        else {
            SetQuestion();
        }
    }
    // A function to reset the game. 
    reset = function(){
        alert("you beat all the questions in the game. \n Press ok to restart");
        questionNr = 0;
        SetQuestion();
    }























    // the function for setting up the questions so that they can be answered
    // SetQuestion = function(){
    //     if (MathChoice == "Addition"){
    //         startingSum = Math.random(1,1000);
    //         CorrectAnswer= startingSum + rnd(1-1000)
    //         MissingNumber = CorrectAnswer - startingsum;
    //         Question = startingSum + " + X = " +CorrectAnswer;
    //     }
    //     if (MathChoice == "Subtraction"){
    //         startingSum = Math.random(1,1000);
    //         CorrectAnswer= startingSum + rnd(1-startingSum)
    //         MissingNumber = CorrectAnswer - startingsum;
    //         Question = startingSum + " - X = " +CorrectAnswer;
    //     }
    //     if (MathChoice == "Multiplication"){
    //         startingSum = Math.random(1,1000);
    //         CorrectAnswer= startingSum + rnd(1-1000)
    //         MissingNumber = CorrectAnswer - startingsum;
    //         Question = startingSum + " * X = " +CorrectAnswer;
    //     }
    // }

}