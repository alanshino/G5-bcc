alert("hi");
var answer = Math.floor(Math.random() * 99 + 1);
var guessnumber;
var conter = 0;
var min = 1;
var max = 99;
console.log("answer = " + answer);

function setsmoke(conter) {
    switch (conter) {
        case 1:
            document.img1.src = "img/smoke.png";
            break;
        case 2:
            document.img2.src = "img/smoke.png";
            break;
        case 3:
            document.img3.src = "img/smoke.png";
            break;
        case 4:
            document.img4.src = "img/smoke.png";
            break;
        case 5:
            document.img5.src = "img/smoke.png";
            break;
        case 6:
            document.img6.src = "img/smoke.png";
            break;
    }
}

function changenum() {
    guessnumber = document.getElementById("code").value;
    console.log("guessnumber = " + guessnumber);
    if (guessnumber == answer) {
        alert("恭喜答對了!" + " 總共猜了 " + (conter + 1) + "次");
        restart();
    }
    if (guessnumber > answer) {
        max = guessnumber;
        alert(min + " ~ " + max);
        conter++;
        setsmoke(conter);
    } else if (guessnumber < answer) {
        min = guessnumber;
        alert(min + " ~ " + max);
        conter++;
        setsmoke(conter);
    }
    if (conter>6){
        alert("你輸了");
        restart();
    }
}

function restart() {
    conter = 0;
    min = 1;
    max = 99;
    var bombs = document.querySelectorAll("#bombs img");
    for (var i = 0; i < bombs.length; i++) {
        bombs[i].src = "img/bomber.png";
    }
    code.value = "";
}