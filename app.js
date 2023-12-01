let day = new Date().getDay();
if (day == 5) {
  document.querySelector(".friday").classList.remove("d-none");
} else if (day == 6) {
  document.querySelector(".holiday").classList.remove("d-none");
} else {
  let response = confirm(`Press "Ok" if it is holiday. Otherwise cancle it.`);
  if (response == true) {
    document.querySelector(".holiday").classList.remove("d-none");
  } else {
    document.querySelector(".college").classList.remove("d-none");
  }
}