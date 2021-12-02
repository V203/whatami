function runSpeechRecognition(input) {
    // output and action div references
    var output = document.getElementById("output");
    var action = document.getElementById("action");
    var nextElem = document.getElementById("nextStage");
    var expElem = document.querySelector(".expSpan");
    var lvlElem = document.querySelector(".lvlSpan");
    var scrElem = document.querySelector(".scrSpan");
    // instantiate Speech Recognition Object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    recognition.onstart = function () {
        console.log(input);
        action.innerHTML = "<small>Listening, please state your guess</small>";
    };

    recognition.onspeechend = function () {
        action.innerHTML = "<small>Stopped listening, hope you are done...</small>";
        recognition.stop();
    }

    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        let result = '';
        if (transcript.toLowerCase() == input.toLowerCase()) {
            expElem.innerHTML = parseInt(expElem.innerHTML) + 1;
            scrElem.innerHTML = parseInt(scrElem.innerHTML) + 3;
            if (expElem.innerHTML == 5) {
                expElem.innerHTML = 0;
                sessionStorage.setItem('level', parseInt(sessionStorage.getItem('level')) + 1);
                lvlElem.innerHTML = sessionStorage.getItem('level');
            }
            sessionStorage.setItem('exp', parseInt(expElem.innerHTML));
            sessionStorage.setItem('score', parseInt(scrElem.innerHTML));
            result = 'Correct';
        } else {
            result = 'Incorrect';
        }
        output.classList.remove("hide");
        if (result === "Correct") {
            nextElem.classList.remove("hide");
            output.innerHTML = "<b>Detected word:</b> " + transcript + "<br>Your answer was correct! Great job!";
        } else {
            output.innerHTML = "<b>Detected word:</b> " + transcript + "<br>Your answer was a little off, please try again!";
        }
    };

    recognition.start();
}