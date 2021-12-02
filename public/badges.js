const badges = JSON.parse(sessionStorage.getItem('trophy'));
const listElem = document.querySelector('.list');

for (i=0;i<badges.length;i++) {
    listElem.innerHTML += "<li class='listItem prizeImg" + badges[i]+ " src='/prize.svg'></li>";
};