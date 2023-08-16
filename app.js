const d = new Date();
let t = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
let t1 = t.slice(0, 2);
let t2 = t.slice(3, 5);
//
if (t1 == 1) {
    if (t2 >= 30) {
        document.querySelector(".n1").classList.add("act");
    } else {
        alert("Chill..It's not your study time!");
    }
} else if (t1 == 2) {
    if (t2 <= 15) {
        document.querySelector(".n1").classList.add("act");
    } else if (t2 <= 24) {
        document.querySelector(".b1").classList.add("act");
    } else {
        document.querySelector(".n2").classList.add("act");
    };
} else if (t1 == 3) {
    if (t2 <= 9) {
        document.querySelector(".n2").classList.add("act");
    } else if (t2 <= 18) {
        document.querySelector(".b2").classList.add("act");
    } else {
        document.querySelector(".n3").classList.add("act");
    }
} else if (t1 == 4) {
    if (t2 <= 3) {
        document.querySelector(".n3").classList.add("act");
    } else {
        alert("Chill..It's not your study time!");
    }
} else if (t1 == 8) {
    if (t2 <= 45) {
        document.querySelector(".n4").classList.add("act");
    } else if (t2 <= 54) {
        document.querySelector(".b4").classList.add("act");
    } else {
        document.querySelector(".n5").classList.add("act");
    }
} else if (t1 == 9) {
    if (t2 <= 39) {
        document.querySelector(".n5").classList.add("act");
    } else if (t2 <= 48) {
        document.querySelector(".b5").classList.add("act");
    } else {
        document.querySelector(".n6").classList.add("act");
    }
} else if (t1 == 10) {
    if (t2 <= 33) {
        document.querySelector(".n6").classList.add("act");
    } else if (t2 <= 42) {
        document.querySelector(".b6").classList.add("act");
    } else {
        document.querySelector(".n7").classList.add("act");
    }
} else if (t1 == 11) {
    if (t2 <= 27) {
        document.querySelector(".n7").classList.add("act");
    } else {
        alert("Chill..It's not your study time!");
    }
} else {
    alert("Chill..It's not your study time!");
}