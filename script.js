let today = dayjs();
const saveBtn = $(".saveBtn");
let currDate = $("#currentDay");

$(function () {
  let currHour = today.format("H");
  currDate.text(today.format("dddd, MMMM D"));

  $(".container-fluid")
    .children()
    .each(function () {
      let id = $(this)[0].id.substring(5);
      if (id <= 5) {
        id = parseInt(id, 10);
        id += 12;
      }
      if (parseInt(currHour, 10) > parseInt(id, 10)) {
        $(this).removeClass("present").removeClass("future").addClass("past");
      } else if (parseInt(currHour, 10) === parseInt(id, 10)) {
        $(this).removeClass("future").addClass("present");
      } else {
        $(this).removeClass("present").addClass("future");
      }
      const time = $(this).attr('id');
      const text = localStorage[time]
      $(this).children('textarea').val(text)
    });
    $(saveBtn).on("click", function () {
      timeBlock = $(this).parent().attr("id");
      const userText = $(this).parent().find("textarea").val();
      localStorage[timeBlock]= userText
    });
});
