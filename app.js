function func() {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    //
    if (h == 6 || h == 7) {
        document.querySelector(".n1").classList.add("act");
    } else if (h == 8) {
        document.querySelector(".n1").classList.remove("act");
        if (m < 30) {
            document.querySelector(".b1").classList.add("act");
        } else {
            document.querySelector(".b1").classList.remove("act");
            document.querySelector(".n2").classList.add("act");
        };
    } else if (h == 9) {
        document.querySelector(".n2").classList.add("act");  
    } else if (h == 10) {
        if (m < 30) {
            document.querySelector(".n2").classList.add("act");
        } else {
            document.querySelector(".n2").classList.remove("act");
            document.querySelector(".n3").classList.add("act");
        };
    } else if (h == 11) {
        document.querySelector(".n3").classList.add("act");
    } else if (h == 12) {
        document.querySelector(".n3").classList.remove("act");
        if (m < 30) {
            document.querySelector(".b2").classList.add("act");
        } else {
            document.querySelector(".b2").classList.remove("act");
            document.querySelector(".n4").classList.add("act");
        };
    } else if (h == 13) {
        document.querySelector(".n4").classList.add("act");
    } else if (h == 14) {
        if (m < 30) {
            document.querySelector(".n4").classList.add("act");
        } else {
            document.querySelector(".n4").classList.remove("act");
            document.querySelector(".b3").classList.add("act");
        };
    } else if (h == 15 || h == 16) {
        document.querySelector(".b3").classList.remove("act");
        document.querySelector(".n5").classList.add("act");
    } else if (h == 17) {
        document.querySelector(".n5").classList.remove("act");
        if (m < 30) {
            document.querySelector(".b4").classList.add("act");
        } else {
            document.querySelector(".b4").classList.remove("act");
            document.querySelector(".n61").classList.add("act");
        };
    } else if (h == 18) {
        if (m < 30) {
            document.querySelector(".n61").classList.add("act");
        } else {
            document.querySelector(".n61").classList.remove("act");
            document.querySelector(".b51").classList.add("act");
        };
    } else if (h == 19) {
        document.querySelector(".b51").classList.remove("act");
        document.querySelector(".n62").classList.add("act");
    } else if (h == 20) {
        document.querySelector(".n62").classList.remove("act");
        if (m < 30) {
            document.querySelector(".b52").classList.add("act");
        } else {
            document.querySelector(".b52").classList.remove("act");
            document.querySelector(".b53").classList.add("act");
        };
    } else if (h == 21 || h == 22) {
        document.querySelector(".b53").classList.remove("act");
        document.querySelector(".n7").classList.add("act");
    } else {
        document.querySelector(".n7").classList.remove("act");
    };
};
func();
setInterval(func, 1000);
