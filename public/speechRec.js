function runSpeechRecognition(input) {
    // output and action div references
    var output = document.getElementById("output");
    var action = document.getElementById("action");
    var nextElem = document.getElementById("nextStage")
    // instantiate Speech Recognition Object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    recognition.onstart = function () {
        action.innerHTML = "<small>listening, please state your guess</small>";
    };

    recognition.onspeechend = function () {
        action.innerHTML = "<small>stopped listening, hope you are done...</small>";
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
        output.innerHTML = "<b>Detected word:</b> " + transcript + "<br>Answer was: " + input + "<br>Your answer was " + result + "!";
        output.classList.remove("hide");
        nextElem.classList.remove("hide");
    };

    recognition.start();
}