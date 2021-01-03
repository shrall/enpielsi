var dbresult = "";
$(document).ready(function () {
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
    $(".checkPlayertwo").load("checkPlayertwo.php");
  }, 1);
});

window.onload = function () {
  sceneTransition();
  openChatBlockTouch();
  setTimeout(function () {
    setTimeout(function () {
      $(".gameHUD .transitionBG").css("visibility", "hidden");
      openPromptMenu();
    }, 300);
  }, 600);
};

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
      hide = ".finalPromptBG";
      show = ".podStationBG";
      changeBG(hide, show);
      openChoiceMenu();
    }
  });
});

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
});
