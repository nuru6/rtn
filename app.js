// Function;
function perSecFunc() {
  const d = new Date();
  let hour = d.getHours();
  let min = d.getMinutes();
  // rtn-0.2v;
  let convertFunc = (left) => {
    let hour = Math.floor(left / (1000 * 60 * 60));
    let min = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
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
  // Calculation;
  let endsInFunc = (endHour, endMin, activity) => {
    let end = new Date(
      "Dec 6, 2022 " + endHour + ":" + endMin + ":00"
    ).getTime();
    d.setFullYear(2022, 11, 6);
    let now = d.getTime();
    let left = end - now;
    let timesLeft = document.querySelector("." + activity + "_tl");
    timesLeft.innerHTML = convertFunc(left);
  };
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
        "0 Min");
    }
  };
  // 12 AM - 2 AM;
  if (hour >= 0 && hour <= 2) {
    actFunc("eep", "sle");
    endsInFunc(3, 30, "eep");
  }
  // 3 AM;
  if (hour == 3) {
    if (min < 30) {
      actFunc("eep", "sle");
      endsInFunc(3, 30, "eep");
    } else {
      actFunc("ban", "eep");
      endsInFunc(5, 0, "ban");
      timesLeftFunc(1);
    }
  }
  // 4 AM;
  if (hour == 4) {
    actFunc("ban", "eep");
    endsInFunc(5, 0, "ban");
    timesLeftFunc(1);
  }
  // 5 AM;
  if (hour == 5) {
    actFunc("eng", "ban");
    endsInFunc(6, 30, "eng");
    timesLeftFunc(2);
  }
  // 6 AM;
  if (hour == 6) {
    if (min < 30) {
      actFunc("eng", "ban");
      endsInFunc(6, 30, "eng");
      timesLeftFunc(2);
    } else {
      actFunc("eco", "eng");
      endsInFunc(8, 0, "eco");
      timesLeftFunc(3);
    }
  }
  // 7 AM;
  if (hour == 7) {
    actFunc("eco", "eng");
    endsInFunc(8, 0, "eco");
    timesLeftFunc(3);
  }
  // 8 AM - 2 PM;
  if (hour >= 8 && hour < 15) {
    actFunc("clg", "eco");
    endsInFunc(15, 30, "clg");
    timesLeftFunc(4);
  }
  // 3 PM;
  if (hour == 15) {
    if (min < 30) {
      actFunc("clg", "eco");
      endsInFunc(15, 30, "clg");
      timesLeftFunc(4);
    } else {
      actFunc("ict", "clg");
      endsInFunc(16, 0, "ict");
      timesLeftFunc(5);
    }
  }
  // 4 PM;
  if (hour == 16) {
    actFunc("psy", "ict");
    endsInFunc(17, 30, "psy");
    timesLeftFunc(6);
  }
  // 5 PM;
  if (hour == 17) {
    if (min < 30) {
      actFunc("psy", "ict");
      endsInFunc(17, 30, "psy");
      timesLeftFunc(6);
    } else {
      actFunc("civ", "psy");
      endsInFunc(19, 0, "civ");
      timesLeftFunc(7);
    }
  }
  // 6 PM;
  if (hour == 18) {
    actFunc("civ", "psy");
    endsInFunc(19, 0, "civ");
    timesLeftFunc(7);
  }
  // 7 PM;
  if (hour == 19) {
    actFunc("soc", "civ");
    endsInFunc(20, 30, "soc");
    timesLeftFunc(8);
  }
  // 8 PM;
  if (hour == 20) {
    if (min < 30) {
      actFunc("soc", "civ");
      endsInFunc(20, 30, "soc");
      timesLeftFunc(8);
    } else {
      actFunc("sle", "soc");
      endsInFunc(23, 59, "sle");
      timesLeftFunc(9);
    }
  }
  // 9 PM - 11 PM;
  if (hour >= 21 && hour <= 23) {
    actFunc("sle", "soc");
    endsInFunc(23, 59, "sle");
    timesLeftFunc(9);
  }
}
// Calling Function;
perSecFunc();
setInterval(perSecFunc, 1000);
