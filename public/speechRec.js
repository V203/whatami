function runSpeechRecognition(input) {
    console.log(input);
    // output and action div references
    var output = document.getElementById("output");
    var action = document.getElementById("action");
    var nextElem = document.getElementById("nextStage")
    // instantiate Speech Recognition Object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    recognition.onstart = function () {
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