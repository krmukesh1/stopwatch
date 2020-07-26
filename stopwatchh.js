$(function () {
  // variables
  var mode = 0; //App mode
  var timeCounter = 0; // time counter
  var lapCounetr = 0; // lap Counter
  var action; // variables for setIntervals
  var lapNumber = 0; //Number of Laps

  // minutes,seconds,centiseconds fot item of lap
  var timeMinutes,
    timeSeconds,
    timeCentiseconds,
    lapMinutes,
    lapSeconds,
    lapCentiseconds;

  // On App load show start and lap buttons
  hideshowButtons("#startButton", "#lapButton");

  // click on startButton
  $("#startButton").click(function () {
    // mode on
    mode = 1;
    // show stop and lap button
    hideshowButtons("#startButton", "#lapButton");
    // start counter
    startAction();
  });

  // click on stopButton
  // show resume and lap buttons
  // stop counter
  // click on resumeButton
  // show stop and lap button
  // start action
  // click on resetButton
  // reload the page
  // click on lapButton
  // if mode is ON
  // stop the action
  // resetLap and print lap details
  // start action
  // functions
  function hideshowButtons(x, y) {
    $(".control").hide();
    $(x).show();
    $(y).show();
  }

  //   start the counter
  function startAction() {
    action = setInterval(function () {
      timeCounter++;
      if (timeCounter == 100 * 60 * 100) {
        timeCounter = 0;
      }
      lapCounter++;
      if (lapCounter == 100 * 60 * 100) {
        lapCounter = 0;
      }
      updateTime();
    }, 10);
  }
  //   updateTime:converts counter to min,sec and centisec
  function updateTime() {
    //   minu= 60*100centiseconds=6000centiseconds
    timeMinutes = Math.floor(timeCounter / 6000);
    // 1sec =100centisecomds
    timeSeconds = Math.floor((timeCounter % 6000) / 100);
    timeCentiseconds = (timeCounter % 6000) % 100;
    $("#timeminute").text(format(timeMinutes));
    $("#timesecond").text(format(timeSeconds));
    $("#timecentisecond").text(format(timeCentiseconds));
    //   minu= 60*100centiseconds=6000centiseconds
    lapMinutes = Math.floor(lapCounter / 6000);
    // 1sec =100centisecomds
    lapSeconds = Math.floor((lapCounter % 6000) / 100);
    lapCentiseconds = (lapCounter % 6000) % 100;
    $("#lapminute").text(format(lapMinutes));
    $("#lapsecond").text(format(lapSeconds));
    $("#lapcentisecond").text(format(lapCentiseconds));
  }
  // format numbers
  function format(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  //addLap function: print lap details inside the lap box
  function addLap() {
    lapNumber++;
    var myLapDetails =
      '<div class="lap">' +
      '<div class="laptimetitle">' +
      "Lap" +
      lapNumber +
      "</div>" +
      '<div class="laptime">' +
      "<span>" +
      format(lapMinutes) +
      "</span>" +
      ":<span>" +
      format(lapSeconds) +
      "</span>" +
      ":<span>" +
      format(lapCentiseconds) +
      "</span>" +
      "</div>" +
      "</div>";
    $(myLapDetails).prependTo("#laps");
  }
});
