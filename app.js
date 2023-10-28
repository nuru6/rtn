// Function;
function func() {
  const d = new Date();
  d.setFullYear(2022, 11, 6);
  let hour = d.getHours();
  let min = d.getMinutes();
  // Switch Function;
  let switchFunc = (endAct, startAct) => {
    document.querySelector("." + startAct).id = "act";
    document.querySelector("." + endAct).removeAttribute("id");
  };
  // Timer Function;
  let timerFunc = (endHour, endMin, activity) => {
    let end = new Date(2022, 11, 6, endHour, endMin, 0, 0).getTime();
    let now = d.getTime();
    let sub = end - now;
    document.querySelector("." + activity).innerHTML = convertFunc(sub);
  };
  // Convert Function;
  let convertFunc = (sub) => {
    let hour = Math.floor(sub / (1000 * 60 * 60));
    let min = Math.floor((sub % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor(((sub % (1000 * 60 * 60)) % (1000 * 60)) / 1000);
    return timeAlignFunc(hour, min, sec);
  };
  // Time Align Function;
  let timeAlignFunc = (hour, min, sec) => {
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    if (hour == 0) {
      return min + " : " + sec;
    } else {
      return hour + " : " + min + " : " + sec;
    }
  };
  // Time Still Function;
  let timeStillFunc = (hour, min, activity) => {
    document.querySelector("." + activity).innerHTML = timeAlignFunc(
      hour,
      min,
      0
    );
  };
  // Set Over Function;
  let setOverFunc = (index) => {
    const activities = [
      "eep_tl",
      "ban_tl",
      "eng_tl",
      "eco_tl",
      "psy_tl",
      "ban_1st_tl",
      "eng_1st_tl",
      "eco_1st_tl",
      "psy_1st_tl",
      "ict_1st_tl",
      "civ_1st_tl",
      "soc_1st_tl",
      "ban_1st_rc_tl",
      "eng_1st_rc_tl",
      "eco_1st_rc_tl",
      "psy_1st_rc_tl",
      "ict_1st_rc_tl",
      "civ_1st_rc_tl",
      "soc_1st_rc_tl",
      "freeTime_tl",
      "ict_tl",
      "civ_tl",
      "soc_tl",
      "ban_rc_tl",
      "eng_rc_tl",
      "eco_rc_tl",
      "psy_rc_tl",
      "civ_rc_tl",
      "soc_rc_tl",
      "sle_tl",
    ];
    for (let i = 0; i < index; i++) {
      let tl = (document.querySelector("." + activities[i]).innerHTML = "Over");
    }
  };
  // Over Function;
  let overFunc = (activity) => {
    document.querySelector("." + activity).innerHTML = "Over";
  };
  // 12 AM - 3 AM;
  if (hour >= 0 && hour <= 3) {
    switchFunc("sle", "eep"); // change;
    timerFunc(4, 0, "eep_tl"); // countdown;
    timerFunc(4 + 3, 0, "sleepTime"); // overview;
    timerFunc(24, 0, "totalTime"); // overview;
  }
  // 4 AM;
  if (hour == 4) {
    setOverFunc(1); // over;
    switchFunc("eep", "ban"); // change;
    timerFunc(5, 0, "ban_tl"); // countdown;
    timerFunc(21 - 8, 0 + 30, "studyTime"); // overview ;
    timerFunc(24, 0, "totalTime"); // overview;
    timeStillFunc(3, 0, "sleepTime"); // overview;
  }
  // 5 AM;
  if (hour == 5) {
    setOverFunc(2); // over;
    switchFunc("ban", "eng"); // change;
    timerFunc(6, 0, "eng_tl"); // countdown;
    timerFunc(21 - 8, 0 + 30, "studyTime"); // overview;
    timerFunc(24, 0, "totalTime"); // overview;
    timeStillFunc(3, 0, "sleepTime"); // overview;
  }
  // 6 AM;
  if (hour == 6) {
    setOverFunc(3); // over;
    switchFunc("eng", "eco"); // change;
    timerFunc(7, 0, "eco_tl"); // countdown;
    timerFunc(21 - 8, 0 + 30, "studyTime"); // overview;
    timerFunc(24, 0, "totalTime"); // overview;
    timeStillFunc(3, 0, "sleepTime"); // overview;
  }
  // 7 AM;
  if (hour == 7) {
    setOverFunc(4); // over;
    switchFunc("eco", "psy"); // change;
    timerFunc(8, 0, "psy_tl"); // countdown;
    timerFunc(21 - 8, 0 + 30, "studyTime"); // overview;
    timerFunc(24, 0, "totalTime"); // overview;
    timeStillFunc(3, 0, "sleepTime"); // overview;
  }
  // Year 1st;
  // 8 AM;
  if (hour == 8) {
    if (min < 45) {
      setOverFunc(5); // over;
      switchFunc("psy", "ban_1st"); // change;
      timerFunc(8, 45, "ban_1st_tl"); // countdown;
    } else {
      setOverFunc(6); // over;
      switchFunc("ban_1st", "eng_1st"); // change;
      timerFunc(9, 30, "eng_1st_tl"); // countdown;
    }
    timerFunc(15, 30, "collegeTime"); // overview;
    timerFunc(24, 0, "totalTime"); // overview;
    timeStillFunc(3, 0, "sleepTime"); // overview;
    timeStillFunc(5, 30, "studyTime"); // overview;
  }
  // 9 AM;
  if (hour == 9) {
    if (min < 30) {
      setOverFunc(6); // over;
      switchFunc("ban_1st", "eng_1st"); // change;
      timerFunc(9, 30, "eng_1st_tl"); // countdown;
    } else {
      setOverFunc(7); // over;
      switchFunc("eng_1st", "eco_1st"); // change;
      timerFunc(10, 15, "eco_1st_tl"); // countdown;
    }
    timerFunc(15, 30, "collegeTime"); // overview;
    timerFunc(24, 0, "totalTime"); // overview;
    timeStillFunc(3, 0, "sleepTime"); // overview;
    timeStillFunc(5, 30, "studyTime"); // overview;
  }
  // 10 AM;
  if (hour == 10) {
    if (min < 15) {
      setOverFunc(7); // over;
      switchFunc("eng_1st", "eco_1st"); // change;
      timerFunc(10, 15, "eco_1st_tl"); // countdown;
    } else {
      setOverFunc(8); // over;
      switchFunc("eco_1st", "psy_1st"); // change;
      timerFunc(11, 0, "psy_1st_tl"); // countdown;
    }
    timerFunc(15, 30, "collegeTime"); // overview;
    timerFunc(24, 0, "totalTime"); // overview;
    timeStillFunc(3, 0, "sleepTime"); // overview;
    timeStillFunc(5, 30, "studyTime"); // overview;
  }
  // 11 AM;
  if (hour == 11) {
    if (min < 45) {
      setOverFunc(9); // over;
      switchFunc("psy_1st", "ict_1st"); // change;
      timerFunc(11, 45, "ict_1st_tl"); // countdown;
    } else {
      setOverFunc(10); // over;
      switchFunc("ict_1st", "civ_1st"); // change;
      timerFunc(12, 30, "civ_1st_tl"); // countdown;
    }
    timerFunc(15, 30, "collegeTime"); // overview;
    timerFunc(24, 0, "totalTime"); // overview;
    timeStillFunc(3, 0, "sleepTime"); // overview;
    timeStillFunc(5, 30, "studyTime"); // overview;
  }
  // 12 PM;
  if (hour == 12) {
    if (min < 30) {
      setOverFunc(10); // over;
      switchFunc("ict_1st", "civ_1st"); // change;
      timerFunc(12, 30, "civ_1st_tl"); // countdown;
    } else {
      setOverFunc(11); // over;
      switchFunc("civ_1st", "soc_1st"); // change;
      timerFunc(13, 15, "soc_1st_tl"); // countdown;
    }
    timerFunc(15, 30, "collegeTime"); // overview;
    timerFunc(24, 0, "totalTime"); // overview;
    timeStillFunc(3, 0, "sleepTime"); // overview;
    timeStillFunc(5, 30, "studyTime"); // overview;
  }
  // 1 PM;
  if (hour == 13) {
    if (min < 15) {
      setOverFunc(11); // over;
      switchFunc("civ_1st", "soc_1st"); // change;
      timerFunc(13, 15, "soc_1st_tl"); // countdown;
    } else if (min < 30) {
      setOverFunc(12); // over;
      switchFunc("soc_1st", "ban_1st_rc"); // change;
      timerFunc(13, 30, "ban_1st_rc_tl"); // countdown;
    } else if (min < 45) {
      setOverFunc(13); // over;
      switchFunc("ban_1st_rc", "eng_1st_rc"); // change;
      timerFunc(13, 45, "eng_1st_rc_tl"); // countdown;
    } else {
      setOverFunc(14); // over;
      switchFunc("eng_1st_rc", "eco_1st_rc"); // change;
      timerFunc(14, 0, "eco_1st_rc_tl"); // countdown;
    }
    timerFunc(15, 30, "collegeTime"); // overview;
    timerFunc(24, 0, "totalTime"); // overview;
    timeStillFunc(3, 0, "sleepTime"); // overview;
    timeStillFunc(5, 30, "studyTime"); // overview;
  }
  // 2 PM;
  if (hour == 14) {
    if (min < 15) {
      setOverFunc(15); // over;
      switchFunc("eco_1st_rc", "psy_1st_rc"); // change;
      timerFunc(14, 15, "psy_1st_rc_tl"); // countdown;
    } else if (min < 30) {
      setOverFunc(16); // over;
      switchFunc("psy_1st_rc", "ict_1st_rc"); // change;
      timerFunc(14, 30, "ict_1st_rc_tl"); // countdown;
    } else if (min < 45) {
      setOverFunc(17); // over;
      switchFunc("ict_1st_rc", "civ_1st_rc"); // change;
      timerFunc(14, 45, "civ_1st_rc_tl"); // countdown;
    } else {
      setOverFunc(18); // over;
      switchFunc("civ_1st_rc", "soc_1st_rc"); // change;
      timerFunc(15, 0, "soc_1st_rc_tl"); // countdown;
    }
    timerFunc(15, 30, "collegeTime"); // overview;
    timerFunc(24, 0, "totalTime"); // overview;
    timeStillFunc(3, 0, "sleepTime"); // overview;
    timeStillFunc(5, 30, "studyTime"); // overview;
  }
  // 3 PM;
  if (hour == 15) {
    if (min < 30) {
      setOverFunc(19); // over;
      switchFunc("soc_1st_rc", "freeTime"); // change;
      timerFunc(15, 30, "freeTime_tl"); // countdown;
      timerFunc(15, 30, "collegeTime"); // overview;
      timerFunc(24, 0, "totalTime"); // overview;
      timeStillFunc(3, 0, "sleepTime"); // overview;
      timeStillFunc(5, 30, "studyTime"); // overview;
    } else {
      setOverFunc(20); // over;
      switchFunc("freeTime", "ict"); // change;
      timerFunc(16, 0, "ict_tl"); // countdown;
      timerFunc(24, 0, "totalTime"); // overview;
      timeStillFunc(3, 0, "sleepTime"); // overview;
      timerFunc(21, 0, "studyTime"); // overview;
      overFunc("collegeTime"); // overview;
    }
  }
  // 4 PM;
  if (hour == 16) {
    setOverFunc(21); // over;
    switchFunc("ict", "civ"); // change;
    timerFunc(17, 0, "civ_tl"); // countdown;
    timerFunc(24, 0, "totalTime"); // overview;
    timeStillFunc(3, 0, "sleepTime"); // overview;
    timerFunc(21, 0, "studyTime"); // overview;
    overFunc("collegeTime"); // overview;
  }
  // 5 PM;
  if (hour == 17) {
    setOverFunc(22); // over;
    switchFunc("civ", "soc"); // change;
    timerFunc(18, 0, "soc_tl"); // countdown;
    timerFunc(24, 0, "totalTime"); // overview;
    timeStillFunc(3, 0, "sleepTime"); // overview;
    timerFunc(21, 0, "studyTime"); // overview;
    overFunc("collegeTime"); // overview;
  }
  // 6 PM;
  if (hour == 18) {
    if (min < 30) {
      setOverFunc(23); // over;
      switchFunc("soc", "ban_rc"); // change;
      timerFunc(18, 30, "ban_rc_tl"); // countdown;
    } else {
      setOverFunc(24); // over;
      switchFunc("ban_rc", "eng_rc"); // change;
      timerFunc(19, 0, "eng_rc_tl"); // countdown;
    }
    timerFunc(24, 0, "totalTime"); // overview;
    timeStillFunc(3, 0, "sleepTime"); // overview;
    timerFunc(21, 0, "studyTime"); // overview;
    overFunc("collegeTime"); // overview;
  }
  // 7 PM;
  if (hour == 19) {
    if (min < 30) {
      setOverFunc(25); // over;
      switchFunc("eng_rc", "eco_rc"); // change;
      timerFunc(19, 30, "eco_rc_tl"); // countdown;
    } else {
      setOverFunc(26); // over;
      switchFunc("eco_rc", "psy_rc"); // change;
      timerFunc(20, 0, "psy_rc_tl"); // countdown;
    }
    timerFunc(24, 0, "totalTime"); // overview;
    timeStillFunc(3, 0, "sleepTime"); // overview;
    timerFunc(21, 0, "studyTime"); // overview;
    overFunc("collegeTime"); // overview;
  }
  // 8 PM;
  if (hour == 20) {
    if (min < 30) {
      setOverFunc(27); // over;
      switchFunc("psy_rc", "civ_rc"); // change;
      timerFunc(20, 30, "civ_rc_tl"); // countdown;
    } else {
      setOverFunc(28); // over;
      switchFunc("civ_rc", "soc_rc"); // change;
      timerFunc(21, 0, "soc_rc_tl"); // countdown;
    }
    timerFunc(24, 0, "totalTime"); // overview;
    timeStillFunc(3, 0, "sleepTime"); // overview;
    timerFunc(21, 0, "studyTime"); // overview;
    overFunc("collegeTime"); // overview;
  }
  // 9 PM - 11 PM;
  if (hour >= 21 && hour <= 23) {
    setOverFunc(29); // over;
    switchFunc("soc_rc", "sle"); // change;
    timerFunc(24, 0, "sle_tl"); // countdown;
    timerFunc(24, 0, "totalTime"); // overview;
    timerFunc(24, 0, "sleepTime"); // overview;
    overFunc("studyTime"); // overview;
    overFunc("collegeTime"); // overview;
  }
}
// Calling Function;
func();
setInterval(func, 1000);
