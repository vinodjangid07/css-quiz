
let answerOne = document.getElementById('option4of1');
let answerTwo = document.getElementById('option3of2');
let answerThree = document.getElementById('option2of3');
let answerFour = document.getElementById('option4of4');
let answerFive = document.getElementById('option2of5');
let answerSix = document.getElementById('option2of6');
let answerSeven = document.getElementById('option1of7');
let answerEight = document.getElementById('option4of8');
let answerNine = document.getElementById('option1of9');
let answerTen = document.getElementById('option2of10');




var score = 0;

function submitscore(){
    if (score <= 4) {
        document.body.innerHTML = ` <div class="bodycontainer">
        <div class="scorecontainer">
            <article id="article" class="badscore">"Your score is ${score}"</article>
            <a href="index.html"><button class="retake">Retake!</button></a>
        </div>
    </div>`

    }
    if (score > 4 && score <= 7) {
        document.body.innerHTML = ` <div class="bodycontainer">
        <div class="scorecontainer">
            <article id="article" class="averagescore">"Your score is ${score}"</article>
            <a href="index.html"><button class="retake">Retake!</button></a>
        </div>
    </div>`
}
    if (score > 7 && score <= 10) {
        document.body.innerHTML = ` <div class="bodycontainer">
        <div class="scorecontainer">
            <article id="article" class="goodscore">"Your score is ${score}"</article>
            <a href="index.html"><button class="retake">Retake!</button></a>
        </div>
    </div>`

    }
   
}
 function submitquiz(){
    if (answerOne.checked) {
        score++;
    }
    if (answerTwo.checked) {
        score++;
    }
    if (answerThree.checked) {
        score++;
    }
    if (answerFour.checked) {
        score++;
    }
    if (answerFive.checked) {
        score++;
    }
    if (answerSix.checked) {
        score++;
    }
    if (answerSeven.checked) {
        score++;
    }
    if (answerEight.checked) {
        score++;
    }
    if (answerNine.checked) {
        score++;
    }
    if (answerTen.checked) {
        score++;
    }
    

    submitscore();
   


    
 }


