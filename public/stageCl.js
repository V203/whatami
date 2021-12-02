var expElem = document.querySelector(".expSpan");
var lvlElem = document.querySelector(".lvlSpan");
var scrElem = document.querySelector(".scrSpan");

lvlElem.innerHTML = sessionStorage.getItem("level");
scrElem.innerHTML = sessionStorage.getItem("score");
expElem.innerHTML = sessionStorage.getItem("exp");