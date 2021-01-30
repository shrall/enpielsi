var dbresult = "";
$(document).ready(function () {
  document.getElementById("vidA").pause();
  document.getElementById("vidB").pause();
  document.getElementById("vidC").pause();
  document.getElementById("vidTransition").pause();
  setInterval(function () {
    $.ajax({
      type: "post",
      url: "final.php?p=finalpone",
      data: { stat: dbresult },
      dataType: "html",
      success: function (result) {
        dbresult = result;
      },
    }).done(function () {
      if (dbresult == "1") {
        $(".indicatorPlayerOne .indicatorLight").css(
          "background-color",
          "#39B54A"
        );
      } else {
        $(".indicatorPlayerOne .indicatorLight").css(
          "background-color",
          "#D96368"
        );
      }
    });
    $.ajax({
      type: "post",
      url: "final.php?p=finalptwo",
      data: { stat: dbresult },
      dataType: "html",
      success: function (result) {
        dbresult = result;
      },
    }).done(function () {
      if (dbresult == "1") {
        $(".indicatorPlayerTwo .indicatorLight").css(
          "background-color",
          " #39B54A"
        );
      } else {
        $(".indicatorPlayerTwo .indicatorLight").css(
          "background-color",
          "#D96368"
        );
      }
    });
    $.ajax({
      type: "post",
      url: "final.php?p=finalpthree",
      data: { stat: dbresult },
      dataType: "html",
      success: function (result) {
        dbresult = result;
      },
    }).done(function () {
      if (dbresult == "1") {
        $(".indicatorPlayerThree .indicatorLight").css(
          "background-color",
          " #39B54A"
        );
      } else {
        $(".indicatorPlayerThree .indicatorLight").css(
          "background-color",
          "#D96368"
        );
      }
    });
  }, 1000);
  setTimeout(function () {
    $(".nameOne").load("final.php?p=ponename");
    $(".nameTwo").load("final.php?p=ptwoname");
    $(".nameThree").load("final.php?p=pthreename");
    $(".checkPlayerthree").load("checkPlayerthree.php");
  }, 1);
});

window.onload = function () {
  sceneTransition();
};

function openingEnded() {
  $(".openingVideoBG #vidOpening").animate({ opacity: "0" }, 300);
  openChatBlockTouch();
  setTimeout(function () {
    $(".openingVideoBG").css("display", "none");
    setTimeout(function () {
      $(".gameHUD .transitionBG").css("visibility", "hidden");
      openPromptMenu();
    }, 300);
  }, 600);
}

function sceneTransition() {
  $(".gameHUD .transitionBG").css("visibility", "visible");
  $(".gameHUD .transitionBG").animate({ opacity: "1" }, 300);
  $(".gameHUD .transitionBG").delay(300).animate({ opacity: "0" }, 300);
}
function closeChatBlockTouch() {
  $(".gameHUD .chatBlockTouch").css("display", "none");
  $(".gameHUD .chatBlockTouch").css("opacity", "0");
}
function openChatBlockTouch() {
  $(".gameHUD .chatBlockTouch").css("display", "block");
  $(".gameHUD .chatBlockTouch").animate({ opacity: "50%" }, 300);
}
function openPromptMenu() {
  $(".finalStage .promptMenu").css("visibility", "visible");
  $(".finalStage .promptMenu").animate({ opacity: "1" }, 300);
}
function closePromptMenu() {
  $(".finalStage .promptMenu").css("visibility", "hidden");
  $(".finalStage .promptMenu").animate({ opacity: "0" }, 300);
}
function openChoiceMenu() {
  $(".finalStage .finalChoiceMenu").css("visibility", "visible");
  $(".finalStage .finalChoiceMenu").animate({ opacity: "1" }, 1000);
}
function closeChoiceMenu() {
  $(".finalStage .finalChoiceMenu").css("visibility", "hidden");
  $(".finalStage .finalChoiceMenu").animate({ opacity: "0" }, 300);
}
var hide = "";
var show = "";

function changeBG(hide, show) {
  setTimeout(function () {
    sceneTransition();
    setTimeout(function () {
      setTimeout(function () {
        $(".gameHUD .transitionBG").css("visibility", "hidden");
      }, 300);
      $(".finalStage " + hide).css("visibility", "hidden");
      $(".finalStage " + show).css("visibility", "visible");
    }, 600);
  }, 1);
}

// waiting for other players
var p1choicecounter = 0;
var p2choicecounter = 0;
var p3choicecounter = 0;
var p1choice = 0;
var p2choice = 0;
var p3choice = 0;
var continuebuttoncounter = 0;

$(".finalPromptBG .btnStart").click(function () {
  $.ajax({
    type: "post",
    url: "final.php?p=checkfinal",
    data: { stat: dbresult },
    dataType: "html",
    success: function (result) {
      dbresult = result;
    },
  }).done(function () {
    if (dbresult == "111") {
      closePromptMenu();
      closeChatBlockTouch();
      hide = ".finalPromptBG";
      show = ".finalTransitionBG";
      changeBG(hide, show);
      document.getElementById("vidTransition").play();
    }
  });
});

function transitionEnded() {
  hide = ".finalTransitionBG";
  show = ".podStationBG";
  changeBG(hide, show);
  openChoiceMenu();
  openChatBlockTouch();
  setInterval(function () {
    $.ajax({
      type: "post",
      url: "final.php?p=finalchoicepone",
      data: { stat: dbresult },
      dataType: "html",
      success: function (result) {
        dbresult = result;
      },
    }).done(function () {
      if (dbresult != "0") {
        p1choicecounter = 1;
        p1choice = dbresult;
      } else {
      }
    });
    $.ajax({
      type: "post",
      url: "final.php?p=finalchoiceptwo",
      data: { stat: dbresult },
      dataType: "html",
      success: function (result) {
        dbresult = result;
      },
    }).done(function () {
      if (dbresult != "0") {
        p2choicecounter = 1;
        p2choice = dbresult;
      } else {
      }
    });
    $.ajax({
      type: "post",
      url: "final.php?p=finalchoicepthree",
      data: { stat: dbresult },
      dataType: "html",
      success: function (result) {
        dbresult = result;
      },
    }).done(function () {
      if (dbresult != "0") {
        p3choicecounter = 1;
        p3choice = dbresult;
      } else {
      }
    });
    if (
      p1choicecounter == 1 &&
      p2choicecounter == 1 &&
      p3choicecounter == 1 &&
      continuebuttoncounter == 0
    ) {
      $(".finalWaitBG .btnContinue").css("visibility", "inherit");
      $(".finalWaitBG .btnContinue").animate({ opacity: "1" }, 300);
    }
  }, 1000);
}

// final choice
var choice = 0;

$(".podStationBG .framePlayerOne").click(function () {
  choice = 1;
  $(".podStationBG .framePlayerOne").css(
    "background-image",
    "url(../final/img/ahl.webp)"
  );
  $(".podStationBG .framePlayerTwo").css(
    "background-image",
    "url(../final/img/b.webp)"
  );
  $(".podStationBG .framePlayerThree").css(
    "background-image",
    "url(../final/img/c.webp)"
  );
});
$(".podStationBG .framePlayerTwo").click(function () {
  choice = 2;
  $(".podStationBG .framePlayerOne").css(
    "background-image",
    "url(../final/img/a.webp)"
  );
  $(".podStationBG .framePlayerTwo").css(
    "background-image",
    "url(../final/img/bhl.webp)"
  );
  $(".podStationBG .framePlayerThree").css(
    "background-image",
    "url(../final/img/c.webp)"
  );
});
$(".podStationBG .framePlayerThree").click(function () {
  choice = 3;
  $(".podStationBG .framePlayerOne").css(
    "background-image",
    "url(../final/img/a.webp)"
  );
  $(".podStationBG .framePlayerTwo").css(
    "background-image",
    "url(../final/img/b.webp)"
  );
  $(".podStationBG .framePlayerThree").css(
    "background-image",
    "url(../final/img/chl.webp)"
  );
});

$(".podStationBG .btnConfirm").click(function () {
  if (choice != 0) {
    $.ajax({
      type: "post",
      url: "final.php?p=finalchoice",
      data: { stat: choice },
      dataType: "html",
      success: function (result) {
        dbresult = result;
      },
    }).done(function () {
      closeChoiceMenu();
      hide = ".podStationBG";
      show = ".finalWaitBG";
      changeBG(hide, show);
    });
  }
});

var ending = "";

$(".finalWaitBG .btnContinue").click(function () {
  //!load video ending
  if (
    p1choice + "" + p2choice + "" + p3choice == "312" ||
    p1choice + "" + p2choice + "" + p3choice == "231"
  ) {
    ending = "good";
  } else if (
    p1choice + "" + p2choice + "" + p3choice == "123" ||
    p1choice + "" + p2choice + "" + p3choice == "132" ||
    p1choice + "" + p2choice + "" + p3choice == "321" ||
    p1choice + "" + p2choice + "" + p3choice == "213" ||
    p1choice + "" + p2choice + "" + p3choice == "113" ||
    p1choice + "" + p2choice + "" + p3choice == "121" ||
    p1choice + "" + p2choice + "" + p3choice == "223" ||
    p1choice + "" + p2choice + "" + p3choice == "122" ||
    p1choice + "" + p2choice + "" + p3choice == "133" ||
    p1choice + "" + p2choice + "" + p3choice == "323"
  ) {
    ending = "bad";
  } else {
    ending = "normal";
  }
  $.ajax({
    type: "post",
    url: "final.php?p=endingresult",
    data: { stat: ending },
    dataType: "html",
    success: function (result) {
      dbresult = result;
    },
  }).done(function () {
    continuebuttoncounter = 1;
  });
  $(".finalWaitBG .waitTitle").css("visibility", "hidden");
  $(".finalWaitBG .waitTitle").animate({ opacity: "0" }, 300);
  $(".finalWaitBG .btnContinue").css("visibility", "hidden");
  $(".finalWaitBG .btnContinue").animate({ opacity: "0" }, 300);
  closeChatBlockTouch();
  if (
    p1choice + "" + p2choice + "" + p3choice == "312" ||
    p1choice + "" + p2choice + "" + p3choice == "231"
  ) {
    $(".finalWaitBG #vidA").css("visibility", "visible");
    $(".finalWaitBG #vidA").animate({ opacity: "1" }, 300);
    document.getElementById("vidA").play();
  } else if (
    p1choice + "" + p2choice + "" + p3choice == "123" ||
    p1choice + "" + p2choice + "" + p3choice == "132" ||
    p1choice + "" + p2choice + "" + p3choice == "321" ||
    p1choice + "" + p2choice + "" + p3choice == "213"
  ) {
    $(".finalWaitBG #vidC").css("visibility", "visible");
    $(".finalWaitBG #vidC").animate({ opacity: "1" }, 300);
    document.getElementById("vidC").play();
  } else {
    $(".finalWaitBG #vidB").css("visibility", "visible");
    $(".finalWaitBG #vidB").animate({ opacity: "1" }, 300);
    document.getElementById("vidB").play();
  }
});
