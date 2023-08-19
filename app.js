function func() {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    // Morning Shift;
    if (h == 6) {
        document.querySelector(".n1").classList.add("act");
    } else {
        document.querySelector(".n1").classList.remove("act");
    }
    // Afternoon Shift;
    if (h == 13) {
        if (m >= 30) {
            document.querySelector(".n2").classList.add("act");
        }
    } else if (h == 14) {
        if (m <= 15) {
            document.querySelector(".n2").classList.add("act");
        } else if (m <= 25) {
            document.querySelector(".n2").classList.remove("act");
            document.querySelector(".b1").classList.add("act");
        } else {
            document.querySelector(".b1").classList.remove("act");
            document.querySelector(".n3").classList.add("act");
        };
    } else if (h == 15) {
        if (m <= 10) {
            document.querySelector(".n3").classList.add("act");
        } else if (m <= 20) {
            document.querySelector(".n3").classList.remove("act");
            document.querySelector(".b2").classList.add("act");
        } else {
            document.querySelector(".b2").classList.remove("act");
            document.querySelector(".n4").classList.add("act");
        }
    } else if (h == 16) {
        if (m <= 5) {
            document.querySelector(".n4").classList.add("act");
        } else {
            document.querySelector(".n4").classList.remove("act");
        }
    }
    // Evening Shift;
    if (h == 20) {
        if (m <= 45) {
            document.querySelector(".n5").classList.add("act");
        } else if (m <= 55) {
            document.querySelector(".n5").classList.remove("act");
            document.querySelector(".b4").classList.add("act");
        } else {
            document.querySelector(".b4").classList.remove("act");
            document.querySelector(".n6").classList.add("act");
        }
    } else if (h == 21) {
        if (m <= 40) {
            document.querySelector(".n6").classList.add("act");
        } else if (m <= 50) {
            document.querySelector(".n6").classList.remove("act");
            document.querySelector(".b5").classList.add("act");
        } else {
            document.querySelector(".b5").classList.remove("act");
            document.querySelector(".n7").classList.add("act");
        }
    } else if (h == 22) {
        if (m <= 35) {
            document.querySelector(".n7").classList.add("act");
        } else {
            document.querySelector(".n7").classList.remove("act");
        }
    }
};
func();
setInterval(func, 1000);