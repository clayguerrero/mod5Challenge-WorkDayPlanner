let hour9 = $("#hour-9");
let hour10 = $("#hour-10");
let hour11 = $("#hour-11");
let hour12 = $("#hour-12");
let hour1 = $("#hour-1");
let hour2 = $("#hour-2");
let hour3 = $("#hour-3");
let hour4 = $("#hour-4");
let hour5 = $("#hour-5");
let hour;
let today = dayjs();
let saveBtn = $(".saveBtn");
let textArea = $(".description");
// let times = [];
let header = $("header");
let currDate = $("#currentDay");

// DONE
// TODO: Add code to display the current date in the header of the page.
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function?
// How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

// TODO
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
$(function () {
  let currHour = today.format("H");
  currDate.text(today.format("dddd, MMMM D"));
  // $(".container-fluid")
  //   .children()
  //   .find("hour")
  //   .each(function () {
  //     times.push(id);
  //   });

  $(".container-fluid")
    .children()
    .each(function (idx) {
      let id = $(this)[0].id;
      if (id.length === 6) {
        id = id.split("").pop();
      } else if (id.length === 7) {
        id = id.substring(5, 7);
      }
      if (id <= 5) {
        id = parseInt(id, 10);
        id += 12;
      }
      if (parseInt(currHour, 10) > parseInt(id, 10)) {
        $(this).removeClass("present");
        $(this).removeClass("future")
        $(this).addClass("past");
      } else if (parseInt(currHour, 10) === parseInt(id, 10)) {
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).addClass("future");
      }
      // console.log(currHour)
    });

  $(saveBtn).on("click", function () {
    hour = $(this).parent().attr("id");
    let userText = $(this).parent().find(textArea).val();
    // localStorage.setItem(hour, userText);
    localStorage.hour = userText;
    console.log(localStorage.hour);

    // console.log(hour)
    // console.log(localStorage.getItem(hour));
    // console.log(localStorage.hour);
    $(this).prev().innerHTML = localStorage.hour;
    // console.log($(this).prev().val())
    // localStorage.clear()
  });
  // textArea.innerHTml =  localStorage.getItem(hour)
});
