const ban = document.querySelector(".ban");
const eng = document.querySelector(".eng");
const eco = document.querySelector(".eco");
const clg = document.querySelector(".clg");
const ict = document.querySelector(".ict");
const psy = document.querySelector(".psy");
const civ = document.querySelector(".civ");
const soc = document.querySelector(".soc");
const sle = document.querySelector(".sle");
const d = new Date();
// Function;
function perSecFunc() {
  let hour = d.getHours();
  let min = d.getMinutes();
  // 3 AM;
  if (hour == 3) {
    if (min < 30) {
      sle.classList.add("act");
    } else {
      sle.classList.remove("act");
      ban.classList.add("act");
    }
  }
  // 4 AM;
  if (hour == 4) {
    ban.classList.add("act");
  }
  // 5 AM;
  if (hour == 5) {
    ban.classList.remove("act");
    eng.classList.add("act");
  }
  // 6 AM;
  if (hour == 6) {
    if (min < 30) {
      eng.classList.add("act");
    } else {
      eng.classList.remove("act");
      eco.classList.add("act");
    }
  }
  // 7 AM;
  if (hour == 7) {
    eco.classList.add("act");
  }
  // 8 AM - 2 PM;
  if (hour >= 8 && hour < 15) {
    eco.classList.remove("act");
    clg.classList.add("act");
  }
  // 3 PM;
  if (hour == 15) {
    if (min < 30) {
      clg.classList.add("act");
    } else {
      clg.classList.remove("act");
      ict.classList.add("act");
    }
  }
  // 4 PM;
  if (hour == 16) {
    ict.classList.remove("act");
    psy.classList.add("act");
  }
  // 5 PM;
  if (hour == 17) {
    if (min < 30) {
      psy.classList.add("act");
    } else {
      psy.classList.remove("act");
      civ.classList.add("act");
    }
  }
  // 6 PM;
  if (hour == 18) {
    civ.classList.add("act");
  }
  // 7 PM;
  if (hour == 19) {
      civ.classList.remove("act");
      soc.classList.add("act");
    }
  // 8 PM;
  if (hour == 20) {
    if (min < 30) {
      soc.classList.add("act");
    } else {
      soc.classList.remove("act");
      sle.classList.add("act");
    }
  }
}
perSecFunc();
setInterval(perSecFunc, 1000);
