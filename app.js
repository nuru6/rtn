// Function;
function perSecFunc() {
  const d = new Date();
  d.setFullYear(2022, 11, 6);
  let hour = d.getHours();
  let min = d.getMinutes();
  // actFunc;
  let actFunc = (startAct, endAct) => {
    document.querySelector("." + startAct).classList.add("act");
    document.querySelector("." + endAct).classList.remove("act");
  };
  // timesLeftFunc;
  let timesLeftFunc = (index) => {
    const activities = [
      "eep_tl",
      "ban_tl",
      "eng_tl",
      "eco_tl",
      "clg_tl",
      "ict_tl",
      "psy_tl",
      "civ_tl",
      "soc_tl",
      "sle_tl",
    ];
    for (let i = 0; i < index; i++) {
      let tl = (document.querySelector("." + activities[i]).innerHTML =
        "Over");
    }
  };
  // Over Function;
  let overFunc = (activity) => {
    let timesLeft = document.querySelector("." + activity);
    timesLeft.innerHTML = "Over";
  };
  // Convert Function;
  let convertFunc = (left) => {
    let hour = Math.floor(left / (1000 * 60 * 60));
    let min = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
    return timeAlignFunc(hour, min);
  };
  // Time align Function;
  let timeAlignFunc = (hour, min) => {
    if (hour > 1) {
      if (min > 1) {
        return hour + " Hours " + min + " Mins";
      } else {
        return hour + " Hours " + min + " Min";
      }
    } else if (hour == 1) {
      if (min > 1) {
        return hour + " Hour " + min + " Mins";
      } else {
        return hour + " Hour " + min + " Min";
      }
    } else {
      if (min > 1) {
        return min + " Mins";
      } else {
        return min + " Min";
      }
    }
  };
  // Timer Function;
  let timerFunc = (endHour, endMin, activity) => {
    let end = new Date(2022, 11, 6, endHour, endMin, 0, 0).getTime();
    let now = d.getTime();
    let left = end - now;
    let timesLeft = document.querySelector("." + activity);
    timesLeft.innerHTML = convertFunc(left);
  };
  // Fix Time Function;
  let fixTimeFunc = (activity, hour, min) => {
    let timesLeft = document.querySelector("." + activity);
    timesLeft.innerHTML = timeAlignFunc(hour, min);
  };
  // 12 AM - 2 AM;
  if (hour >= 0 && hour <= 2) {
    actFunc("eep", "sle");
    timerFunc(3, 30, "eep_tl");
    timerFunc(3 + 3, 30 + 30, "sleepTime");
    timerFunc(24, 0, "totalTime");
  }
  // 3 AM;
  if (hour == 3) {
    if (min < 30) {
      actFunc("eep", "sle");
      timerFunc(3, 30, "eep_tl");
      timerFunc(3 + 3, 30 + 30, "sleepTime");
      timerFunc(24, 0, "totalTime");
    } else {
      actFunc("ban", "eep");
      timerFunc(5, 0, "ban_tl");
      timesLeftFunc(1);
      fixTimeFunc("sleepTime", 3, 30);
      timerFunc(24, 0, "totalTime");
      timerFunc(8 + 5, 0, "studyTime");
    }
  }
  // 4 AM;
  if (hour == 4) {
    actFunc("ban", "eep");
    timerFunc(5, 0, "ban_tl");
    timesLeftFunc(1);
    fixTimeFunc("sleepTime", 3, 30);
    timerFunc(24, 0, "totalTime");
    timerFunc(8 + 5, 0, "studyTime");
  }
  // 5 AM;
  if (hour == 5) {
    actFunc("eng", "ban");
    timerFunc(6, 30, "eng_tl");
    timesLeftFunc(2);
    fixTimeFunc("sleepTime", 3, 30);
    timerFunc(24, 0, "totalTime");
    timerFunc(8 + 5, 0, "studyTime");
  }
  // 6 AM;
  if (hour == 6) {
    if (min < 30) {
      actFunc("eng", "ban");
      timerFunc(6, 30, "eng_tl");
      timesLeftFunc(2);
      fixTimeFunc("sleepTime", 3, 30);
      timerFunc(24, 0, "totalTime");
      timerFunc(8 + 5, 0, "studyTime");
    } else {
      actFunc("eco", "eng");
      timerFunc(8, 0, "eco_tl");
      timesLeftFunc(3);
      fixTimeFunc("sleepTime", 3, 30);
      timerFunc(24, 0, "totalTime");
      timerFunc(8 + 5, 0, "studyTime");
    }
  }
  // 7 AM;
  if (hour == 7) {
    actFunc("eco", "eng");
    timerFunc(8, 0, "eco_tl");
    timesLeftFunc(3);
    fixTimeFunc("sleepTime", 3, 30);
    timerFunc(24, 0, "totalTime");
    timerFunc(8 + 5, 0, "studyTime");
  }
  // 8 AM - 2 PM;
  if (hour >= 8 && hour < 15) {
    actFunc("clg", "eco");
    timerFunc(15, 30, "clg_tl");
    timesLeftFunc(4);
    fixTimeFunc("sleepTime", 3, 30);
    timerFunc(24, 0, "totalTime");
    fixTimeFunc("studyTime", 5, 0);
    timerFunc(15, 30, "collegeTime");
  }
  // 3 PM;
  if (hour == 15) {
    if (min < 30) {
      actFunc("clg", "eco");
      timerFunc(15, 30, "clg_tl");
      timesLeftFunc(4);
      fixTimeFunc("sleepTime", 3, 30);
      timerFunc(24, 0, "totalTime");
      fixTimeFunc("studyTime", 5, 0);
      timerFunc(15, 30, "collegeTime");
    } else {
      actFunc("ict", "clg");
      timerFunc(16, 0, "ict_tl");
      timesLeftFunc(5);
      fixTimeFunc("sleepTime", 3, 30);
      timerFunc(24, 0, "totalTime");
      timerFunc(20, 30, "studyTime");
      overFunc("collegeTime");
    }
  }
  // 4 PM;
  if (hour == 16) {
    actFunc("psy", "ict");
    timerFunc(17, 30, "psy_tl");
    timesLeftFunc(6);
    fixTimeFunc("sleepTime", 3, 30);
    timerFunc(24, 0, "totalTime");
    timerFunc(20, 30, "studyTime");
    overFunc("collegeTime");
  }
  // 5 PM;
  if (hour == 17) {
    if (min < 30) {
      actFunc("psy", "ict");
      timerFunc(17, 30, "psy_tl");
      timesLeftFunc(6);
      fixTimeFunc("sleepTime", 3, 30);
      timerFunc(24, 0, "totalTime");
      timerFunc(20, 30, "studyTime");
      overFunc("collegeTime");
    } else {
      actFunc("civ", "psy");
      timerFunc(19, 0, "civ_tl");
      timesLeftFunc(7);
      fixTimeFunc("sleepTime", 3, 30);
      timerFunc(24, 0, "totalTime");
      timerFunc(20, 30, "studyTime");
      overFunc("collegeTime");
    }
  }
  // 6 PM;
  if (hour == 18) {
    actFunc("civ", "psy");
    timerFunc(19, 0, "civ_tl");
    timesLeftFunc(7);
    fixTimeFunc("sleepTime", 3, 30);
    timerFunc(24, 0, "totalTime");
    timerFunc(20, 30, "studyTime");
    overFunc("collegeTime");
  }
  // 7 PM;
  if (hour == 19) {
    actFunc("soc", "civ");
    timerFunc(20, 30, "soc_tl");
    timesLeftFunc(8);
    fixTimeFunc("sleepTime", 3, 30);
    timerFunc(24, 0, "totalTime");
    timerFunc(20, 30, "studyTime");
    overFunc("collegeTime");
  }
  // 8 PM;
  if (hour == 20) {
    if (min < 30) {
      actFunc("soc", "civ");
      timerFunc(20, 30, "soc_tl");
      timesLeftFunc(8);
      fixTimeFunc("sleepTime", 3, 30);
      timerFunc(24, 0, "totalTime");
      timerFunc(20, 30, "studyTime");
      overFunc("collegeTime");
    } else {
      actFunc("sle", "soc");
      timerFunc(24, 0, "sle_tl");
      timesLeftFunc(9);
      fixTimeFunc("sleepTime", 3, 30);
      timerFunc(24, 0, "totalTime");
      overFunc("studyTime");
      overFunc("collegeTime");
    }
  }
  // 9 PM - 11 PM;
  if (hour >= 21 && hour <= 23) {
    actFunc("sle", "soc");
    timerFunc(24, 0, "sle_tl");
    timesLeftFunc(9);
    timerFunc(24, 0,"sleepTime");
    timerFunc(24, 0, "totalTime");
    overFunc("studyTime");
    overFunc("collegeTime");
  }
}
// Calling Function;
perSecFunc();
setInterval(perSecFunc, 1000);
