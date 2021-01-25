var bgMusic = new Audio("../audio/music/bgm.mp3");
bgMusic.loop = true;
var grabItemSFX = new Audio("../audio/sfx/getitem.mp3");
var zipperSFX = new Audio("../audio/sfx/backpack.mp3");
var walkSFX = new Audio("../audio/sfx/walk.mp3");
var correctSFX = new Audio("../audio/sfx/correct.mp3");
var wrongSFX = new Audio("../audio/sfx/wrong.mp3");
var labCorrectSFX = new Audio("../audio/sfx/annacorrect.mp3");
var labWrongSFX = new Audio("../audio/sfx/annawrong.mp3");
var successGateSFX = new Audio("../audio/sfx/successgatelock.mp3");
var failedGateSFX = new Audio("../audio/sfx/failedgatelock.mp3");
var radioSFX = new Audio("../audio/sfx/radio.mp3");
var lockerSFX = new Audio("../audio/sfx/locker.mp3");

function playSFX(sfx) {
  sfx.pause();
  sfx.currentTime = 0;
  sfx.play();
}

$(document).ready(function () {
  setTimeout(function () {
    $(".checkPlayertwo").load("checkPlayertwo.php");
    $.ajax({
      type: "post",
      url: "playertwo.php?p=checkAnna01",
      data: { stat: dbcheck },
      dataType: "html",
      success: function (result) {
        dbcheck = result;
      },
    }).done(function () {
      setTimeout(function () {
        if (dbcheck == "1") {
          anna01 = 1;
          $(".anna01BG .indicator").css("background-color", "green");
        } else {
        }
      }, 100);
    });
  }, 1);
});

var anna01 = 0;
var isTyping = true;
var chatArrayIndex = 0;
var hide = "";
var show = "";
var dbcheck = "";

window.onload = function () {
  sceneTransition();
};

function openingEnded() {
  bgMusic.play();
  $(".openingVideoBG #vidOpening").animate({ opacity: "0" }, 300);
  setTimeout(function () {
    $(".openingVideoBG").css("display", "none");
    setTimeout(function () {
      $(".gameHUD .transitionBG").css("visibility", "hidden");
      openChatbox();
      guideArray = guideAct01;
      setTimeout(typeWriter, 300);
    }, 300);
  }, 600);
}

function changeBG(hide, show) {
  setTimeout(function () {
    sceneTransition();
    setTimeout(function () {
      setTimeout(function () {
        $(".gameHUD .transitionBG").css("visibility", "hidden");
      }, 300);
      $(".act01 " + hide).css("visibility", "hidden");
      $(".act01 " + show).css("visibility", "visible");
    }, 600);
  }, 1);
}
function changeScreen(hideScreen, showScreen) {
  setTimeout(function () {
    $(".act01 " + hideScreen).css("visibility", "hidden");
    $(".act01 " + showScreen).css("visibility", "inherit");
  }, 300);
  $(".act01 " + hideScreen).animate({ opacity: "0" }, 300);
  $(".act01 " + showScreen).animate({ opacity: "1" }, 900);
}

function closeChatBlockTouch() {
  radioSFX.pause();
  radioSFX.currentTime = 0;
  $(".gameHUD .chatBlockTouch").css("display", "none");
  $(".gameHUD .chatBlockTouch").css("opacity", "0");
}
function openChatBlockTouch() {
  $(".gameHUD .chatBlockTouch").css("display", "block");
  $(".gameHUD .chatBlockTouch").animate({ opacity: "50%" }, 300);
}
function openChatbox() {
  $(".gameHUD .chatBox").css("visibility", "visible");
  $(".gameHUD .chatBox").animate({ opacity: "1" }, 300);
  openChatBlockTouch();
}
function closeChatbox() {
  $(".gameHUD .chatBox").css("visibility", "hidden");
  $(".gameHUD .chatBox").animate({ opacity: "0" }, 300);
  closeChatBlockTouch();
}
function openInventorybox() {
  $(".gameHUD .inventoryBox").css("visibility", "visible");
  $(".gameHUD .inventoryBox").animate({ opacity: "1" }, 300);
  openChatBlockTouch();
}
function closeInventorybox() {
  $(".gameHUD .inventoryBox").css("visibility", "hidden");
  $(".gameHUD .inventoryBox").animate({ opacity: "0" }, 300);
  closeChatBlockTouch();
}
function openItemAcquired() {
  playSFX(grabItemSFX);
  $(".gameHUD .itemAcquiredName").html(acquiredItemName);
  $(".gameHUD .itemAcquiredImage").css("background-image", acquiredItem);
  $(".gameHUD .itemAcquiredBox").css("visibility", "visible");
  $(".gameHUD .itemAcquiredBox").animate({ opacity: "1" }, 300);
  openChatBlockTouch();
}
function closeItemAcquired() {
  $(".gameHUD .itemAcquiredBox").css("visibility", "hidden");
  $(".gameHUD .itemAcquiredBox").animate({ opacity: "0" }, 300);
}

function closeUniversal() {
  if ($(".gameHUD .chatBox").css("visibility") != "visible") {
    closeInventorybox();
    closeLocker();
    closeJanitor();
    closeItemAcquired();
  }
}

function sceneTransition() {
  $(".gameHUD .transitionBG").css("visibility", "visible");
  $(".gameHUD .transitionBG").animate({ opacity: "1" }, 300);
  $(".gameHUD .transitionBG").delay(300).animate({ opacity: "0" }, 300);
}
function clickTrusChatPopUp(chatArrayIndex) {
  guideZ = chatArrayIndex;
  openChatbox();
  setTimeout(typeWriter, 300);
}
function openLocker() {
  $(".act01 .lockerBG").css("visibility", "visible");
  $(".act01 .lockerBG").animate({ opacity: "1" }, 300);
  openChatBlockTouch();
}
function closeLocker() {
  $(".act01 .lockerBG").css("visibility", "hidden");
  $(".act01 .lockerBG").animate({ opacity: "0" }, 300);
  closeChatBlockTouch();
}
var guideY = 0;
var guideZ = 0;
var guideAct01 = [
  //! final
  // "Oh crap, where am I..?",
  // "Looks like a security room..",
  // "I should look around...", 
  //? trial
  "Welcome to the Trial for the Final Stage of the 8th NPLC!",
  "Teamwork and communication is the key to solve the puzzle.",
  "Goodluck and have fun!",
  //3
  "There's so many computers here..", //4
  "...*bzzt* '-ELLO!'",
  "*crack* ..*bzzt*",
  "..'is any' ..*bzzt* '-one there?'",
  "..'in case-' *crack* '-nyone is hearing this'",
  "'I'm M-' ..'from the Agency of-' *bzzt*",
  "'You need to get-' *bzzt* 'QUICKLY!'",
  "'BE CAREFUL-' *crack* *bzzt* 'THE PROFESSOR!'",
  "'GO TO THE STATION AND GET OUT!'",
  "*bzzzzzzzt*",
  "...", //14
  "Just an ordinary book.", //15
  "I still need to do something else.", //16
  "This symbol is equal to the letter 'A'.",
  "This symbol is equal to the letter 'B'.",
  "This symbol is equal to the letter 'C'.",
  "This symbol is equal to the letter 'D'.",
];
var guideArray = [];

function typeWriter() {
  if (guideY < guideArray[guideZ].length) {
    document.getElementById("chatGuide").innerHTML += guideArray[guideZ].charAt(
      guideY
    );
    guideY++;
    if (guideY == guideArray[guideZ].length) {
      isTyping = false;
    }
    if (isTyping != false) {
      setTimeout(typeWriter, 50);
    }
  }
}

$(".gameHUD .chatBtn").click(function () {
  $(".checkPlayertwo").load("checkPlayertwo.php");
  if (guideArray == guideAct01) {
    if (anna01 == 1) {
      chatArrayIndex = 2;
    } else {
      chatArrayIndex = 3;
    }
  }
  clickTrusChatPopUp(chatArrayIndex);
});

$(".chatBox").click(function () {
  if (guideArray[guideZ] != document.getElementById("chatGuide").innerHTML) {
    //ini buat lansung ngefullin textbox dibawah.
    guideY = 1000;
    document.getElementById("chatGuide").innerHTML = "";
    document.getElementById("chatGuide").innerHTML = guideArray[guideZ];
  } else {
    guideZ++;
    guideY = 0;
    isTyping = true;
    document.getElementById("chatGuide").innerHTML = "";

    if (
      guideZ == 3 ||
      guideZ == 4 ||
      guideZ == 14 ||
      guideZ == 15 ||
      guideZ == 16 ||
      guideZ == 17 ||
      guideZ == 18 ||
      guideZ == 19 ||
      guideZ == 20
    ) {
      closeChatbox();
      closeUniversal();
    } else {
      setTimeout(typeWriter, 50);
    }
  }
});
$(".gameHUD .chatBlockTouch").click(function () {
  if ($(".gameHUD .inventoryBox").css("visibility") == "visible") {
    closeInventorybox();
  }
  closeUniversal();
});

var inventoryIndex = 2;
var acquiredItem = "";

$(".inventoryBtn").click(function () {
  playSFX(zipperSFX);
  openInventorybox();
});
function addItem() {
  openItemAcquired();
  $(".gameHUD .itemBox" + inventoryIndex).css("background-image", acquiredItem);
  inventoryIndex++;
  acquiredItem = "";
}
function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  hour = updateTime(hour);
  min = updateTime(min);
  if (hour < 10) {
    hour -= 0;
    $(".hourTime").text("0 " + hour);
  } else if (hour < 20) {
    hour -= 10;
    $(".hourTime").text("1 " + hour);
  } else {
    hour -= 20;
    $(".hourTime").text("2 " + hour);
  }
  if (min < 10) {
    min -= 0;
    $(".minuteTime").text("0 " + min);
  } else if (min < 20) {
    min -= 10;
    $(".minuteTime").text("1 " + min);
  } else if (min < 30) {
    min -= 20;
    $(".minuteTime").text("2 " + min);
  } else if (min < 40) {
    min -= 30;
    $(".minuteTime").text("3 " + min);
  } else if (min < 50) {
    min -= 40;
    $(".minuteTime").text("4 " + min);
  } else if (min < 60) {
    min -= 50;
    $(".minuteTime").text("5 " + min);
  }
  var t = setTimeout(function () {
    currentTime();
  }, 1000);
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}

currentTime();
// ini yang ada komputer buat njawab riddlenya anna
$(".anna01BG .btn01").click(function () {
  if (parseInt($(".anna01BG .input01").text()) == 9) {
    $(".anna01BG .input01").html(1);
  } else {
    $(".anna01BG .input01").html(parseInt($(".anna01BG .input01").html()) + 1);
  }
});
$(".anna01BG .btn02").click(function () {
  if (parseInt($(".anna01BG .input02").text()) == 9) {
    $(".anna01BG .input02").html(1);
  } else {
    $(".anna01BG .input02").html(parseInt($(".anna01BG .input02").html()) + 1);
  }
});
$(".anna01BG .btn03").click(function () {
  if (parseInt($(".anna01BG .input03").text()) == 9) {
    $(".anna01BG .input03").html(1);
  } else {
    $(".anna01BG .input03").html(parseInt($(".anna01BG .input03").html()) + 1);
  }
});

$(".anna01BG .labBtn01").click(function () {
  if (parseInt($(".anna01BG .labInput01").text()) == 9) {
    $(".anna01BG .labInput01").html(0);
  } else {
    $(".anna01BG .labInput01").html(
      parseInt($(".anna01BG .labInput01").html()) + 1
    );
  }
});
$(".anna01BG .labBtn02").click(function () {
  if (parseInt($(".anna01BG .labInput02").text()) == 9) {
    $(".anna01BG .labInput02").html(0);
  } else {
    $(".anna01BG .labInput02").html(
      parseInt($(".anna01BG .labInput02").html()) + 1
    );
  }
});
$(".anna01BG .labBtn03").click(function () {
  if (parseInt($(".anna01BG .labInput03").text()) == 9) {
    $(".anna01BG .labInput03").html(0);
  } else {
    $(".anna01BG .labInput03").html(
      parseInt($(".anna01BG .labInput03").html()) + 1
    );
  }
});

$(".anna01BG .btnSubmit").click(function () {
  if ($(".anna01BG .indicator").css("background-color") == "rgb(51, 51, 51)") {
    dbcheck =
      $(".anna01BG .labInput01").text() +
      $(".anna01BG .labInput02").text() +
      $(".anna01BG .labInput03").text() +
      $(".anna01BG .input01").text() +
      $(".anna01BG .input02").text() +
      $(".anna01BG .input03").text();
    $.ajax({
      type: "post",
      url: "playertwo.php?p=anna01pw",
      data: { stat: dbcheck },
      dataType: "html",
      success: function (result) {
        dbcheck = result;
      },
    }).done(function () {
      setTimeout(function () {
        if (dbcheck == "yes") {
          playSFX(labCorrectSFX);
          $(".anna01BG .indicator").animate({ backgroundColor: "green" }, 100);
          anna01 = 1;
          $.ajax({
            type: "post",
            url: "playertwo.php?p=anna01",
            data: { stat: 1 },
          });
        } else {
          playSFX(labWrongSFX);
          $(".anna01BG .indicator").animate({ backgroundColor: "red" }, 100);
          $(".anna01BG .indicator").animate({ backgroundColor: "#333" }, 5000);
        }
      }, 100);
    });
  }
});

$(".anna01BG .btnBack").click(function () {
  hide = ".anna01BG";
  show = ".controlRoomBG";
  changeBG(hide, show);
});

// ini control room yang ada locker dllnya
$(".controlRoomBG .btnAnna01").click(function () {
  hide = ".controlRoomBG";
  show = ".anna01BG";
  changeBG(hide, show);
});
$(".controlRoomBG .btnLocker").click(function () {
  playSFX(lockerSFX);
  openLocker();
});

$(".controlRoomBG .btnControlPanel").click(function () {
  hide = ".controlRoomBG";
  show = ".controlPanelBG";
  changeBG(hide, show);
});
$(".controlRoomBG .btnLeft").click(function () {
  playSFX(walkSFX);
  hide = ".controlRoomBG";
  show = ".radioRoomBG";
  changeBG(hide, show);
});
$(".controlRoomBG .lockerBook").click(function () {
  $(".checkPlayertwo").load("checkPlayertwo.php");
  chatArrayIndex = 14;
  clickTrusChatPopUp(chatArrayIndex);
});

$(".controlRoomBG .btnGate").click(function () {
  $.ajax({
    type: "post",
    url: "playertwo.php?p=checkall",
    data: { stat: dbcheck },
    dataType: "html",
    success: function (result) {
      dbcheck = result;
    },
  }).done(function () {
    if (dbcheck == "8") {
      $.ajax({
        type: "post",
        url: "playertwo.php?p=finalptwo",
        data: { stat: dbcheck },
        dataType: "html",
        success: function (result) {
          dbcheck = result;
        },
      }).done(function () {
        window.open("finalstage.html");
      });
    } else {
      $(".checkPlayertwo").load("checkPlayertwo.php");
      chatArrayIndex = 15;
      clickTrusChatPopUp(chatArrayIndex);
    }
  });
});

// ini control panel yang gede
$(".controlPanelBG .btnBack").click(function () {
  hide = ".controlPanelBG";
  show = ".controlRoomBG";
  changeBG(hide, show);
});
$(".controlPanelBG .btnByU").click(function () {
  hide = ".controlPanelBG";
  show = ".byUBG";
  changeBG(hide, show);
});

//ini notesnya byu
$(".byUBG .btnBack").click(function () {
  hide = ".byUBG";
  show = ".controlPanelBG";
  changeBG(hide, show);
});

// ini screen yang pas mau login
$(".panelLoginScreen .panelPassInput").keypress(function (event) {
  var panelans = $(".panelPassInput")
    .val()
    .replace(/\s+/g, "")
    .toLowerCase();
  if (event.key === "Enter") {
    $.ajax({
      type: "post",
      url: "playertwo.php?p=panelpw",
      data: { stat: panelans },
      dataType: "html",
      success: function (result) {
        dbcheck = result;
      },
    }).done(function () {
      setTimeout(function () {
        if (dbcheck == "yes") {
          playSFX(correctSFX);
          setTimeout(function () {
            $(".act01 .panelLoginScreen").animate({ opacity: "0" }, 300);
            setTimeout(function () {
              setTimeout(function () {
                $(".act01 .panelLoginScreen").css("visibility", "hidden");
              }, 300);
              $(".act01 .panelLoggedinScreen").css("visibility", "inherit");
              $(".act01 .panelLoggedinScreen").animate({ opacity: "1" }, 300);
            }, 600);
          }, 1);
        } else {
          playSFX(wrongSFX);
        }
      }, 1000);
    });
  }
});

$(".panelLoginScreen .submitInput").click(function () {
  $.ajax({
    type: "post",
    url: "playertwo.php?p=panelpw",
    data: { stat: $(".panelPassInput").val() },
    dataType: "html",
    success: function (result) {
      dbcheck = result;
    },
  }).done(function () {
    setTimeout(function () {
      if (dbcheck == "yes") {
        playSFX(correctSFX);
        setTimeout(function () {
          $(".act01 .panelLoginScreen").animate({ opacity: "0" }, 300);
          setTimeout(function () {
            setTimeout(function () {
              $(".act01 .panelLoginScreen").css("visibility", "hidden");
            }, 300);
            $(".act01 .panelLoggedinScreen").css("visibility", "inherit");
            $(".act01 .panelLoggedinScreen").animate({ opacity: "1" }, 300);
          }, 600);
        }, 1);
      } else {
        playSFX(wrongSFX);
      }
    }, 1000);
  });
});

// ini yang abis login di control panel
$(".panelLoggedinScreen .panelFloorBtn").click(function () {
  hideScreen = ".panelLoggedinScreen";
  showScreen = ".panelFloorSelectionScreen";
  changeScreen(hideScreen, showScreen);
});

// ini yang waktu milih floor dan cuma bisa milih floor 5
$(".panelFloorSelectionScreen .btnScreenBack").click(function () {
  hideScreen = ".panelFloorSelectionScreen";
  showScreen = ".panelLoggedinScreen";
  changeScreen(hideScreen, showScreen);
});
$(".panelFloorSelectionScreen .floor5btn").click(function () {
  hideScreen = ".panelFloorSelectionScreen";
  showScreen = ".panelAccessPointsScreen";
  changeScreen(hideScreen, showScreen);
});

// ini yang di tempat buat ngisi passwordnya gate
$(".panelAccessPointsScreen .btnScreenBack").click(function () {
  hideScreen = ".panelAccessPointsScreen";
  showScreen = ".panelFloorSelectionScreen";
  changeScreen(hideScreen, showScreen);
});

var gateSelected = "a";
$(".panelAccessPointsScreen .gate05a").click(function () {
  $(".panelAccessPointsScreen .gateName").html("05A");
  gateSelected = "a";
});
$(".panelAccessPointsScreen .gate05b").click(function () {
  $(".panelAccessPointsScreen .gateName").html("05B");
  gateSelected = "b";
});
$(".panelAccessPointsScreen .gate05c").click(function () {
  $(".panelAccessPointsScreen .gateName").html("05C");
  gateSelected = "c";
});
$(".panelAccessPointsScreen .gate05d").click(function () {
  $(".panelAccessPointsScreen .gateName").html("05D");
  gateSelected = "d";
});
$(".panelAccessPointsScreen .gate05e").click(function () {
  $(".panelAccessPointsScreen .gateName").html("05E");
  gateSelected = "e";
});
$(".panelAccessPointsScreen .gate05f").click(function () {
  $(".panelAccessPointsScreen .gateName").html("05F");
  gateSelected = "f";
});
$(".panelAccessPointsScreen .gate05g").click(function () {
  $(".panelAccessPointsScreen .gateName").html("05G");
  gateSelected = "g";
});
$(".panelAccessPointsScreen .gate05h").click(function () {
  $(".panelAccessPointsScreen .gateName").html("05H");
  gateSelected = "h";
});
$(".panelAccessPointsScreen .gate05i").click(function () {
  $(".panelAccessPointsScreen .gateName").html("05I");
  gateSelected = "i";
});

$(".gatePasswordWindow .submitInput").click(function () {
  var gatepassans = $(".gatePassInput").val().replace(/\s+/g, "").toLowerCase();
  $.ajax({
    type: "post",
    url: "playertwo.php?p=gate05" + gateSelected,
    data: { stat: gatepassans },
    dataType: "html",
    success: function (result) {
      dbcheck = result;
    },
  }).done(function () {
    setTimeout(function () {
      if (dbcheck == "yes") {
        //kalo bener
        playSFX(successGateSFX);
        playSFX(correctSFX);
        $(".gate05" + gateSelected + " .lock").css(
          "background-image",
          "url(../playertwo/img/unlocked.webp)"
        );
      } else {
        //kalo submit trus salah
        playSFX(wrongSFX);
      }
    }, 1000);
  });
});

// ini radio room
$(".radioRoomBG .btnRight").click(function () {
  playSFX(walkSFX);
  hide = ".radioRoomBG";
  show = ".controlRoomBG";
  changeBG(hide, show);
});
$(".radioRoomBG .btnRadio").click(function () {
  playSFX(radioSFX);
  $(".checkPlayertwo").html("???");
  chatArrayIndex = 4;
  clickTrusChatPopUp(chatArrayIndex);
});
$(".radioRoomBG .btnGlyphs").click(function () {
  hide = ".radioRoomBG";
  show = ".glyphBoardBG";
  changeBG(hide, show);
});

// ini glyphboard
$(".glyphBoardBG .btnBack").click(function () {
  hide = ".glyphBoardBG";
  show = ".radioRoomBG";
  changeBG(hide, show);
});

//?trial

$(".clueBG .btnA").click(function () {
  $(".checkPlayertwo").load("checkPlayertwo.php");
  chatArrayIndex = 16;
  clickTrusChatPopUp(chatArrayIndex);
});
$(".clueBG .btnB").click(function () {
  $(".checkPlayertwo").load("checkPlayertwo.php");
  chatArrayIndex = 17;
  clickTrusChatPopUp(chatArrayIndex);
});
$(".clueBG .btnC").click(function () {
  $(".checkPlayertwo").load("checkPlayertwo.php");
  chatArrayIndex = 18;
  clickTrusChatPopUp(chatArrayIndex);
});
$(".clueBG .btnD").click(function () {
  $(".checkPlayertwo").load("checkPlayertwo.php");
  chatArrayIndex = 19;
  clickTrusChatPopUp(chatArrayIndex);
});