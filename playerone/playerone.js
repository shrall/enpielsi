var isTyping = true;
var act01intro = 0;
var chatArrayIndex = 0;
var hide = "";
var show = "";
var guideY = 0;
var guideZ = 0;
var guideArray = [];
var guideAct01 = [
  "Uh oh, that doesn't sound good..",
  "Huh? Wait. Where's Mr. Clark?",
  "Uh... the door's closed...",
  "I should look around...",
];
var guideOutside = [
  "Where should I go now..",
];

$(document).ready(function () {
  setTimeout(function () {
    $(".checkPlayerone").load("checkPlayerone.php");
  }, 1);
});

window.onload = function () {
  sceneTransition();
  setTimeout(function () {
    setTimeout(function () {
      $(".gameHUD .transitionBG").css("visibility", "hidden");
      openChatbox();
      guideArray = guideAct01;
      setTimeout(typeWriter, 300);
    }, 300);
  }, 600);
};

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
function closeChatBlockTouch() {
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
function closeUniversal() {
  if ($(".gameHUD .chatBox").css("visibility") != "visible") {
    closeInventorybox();
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
function addItem() {
  $(".gameHUD .itemBox" + inventoryIndex).css("background-image", acquiredItem);
  $(".gameHUD .itemBox").css(
    "background-image",
    $(".gameHUD .itemBox" + inventoryIndex).css("background-image")
  );
  inventoryIndex++;
  acquiredItem = "";
}

//ngoding

$(".gameHUD .chatBtn").click(function () {
  if (guideArray == guideAct01) {
    chatArrayIndex = 3;
  }
  if (guideArray == guideOutside) {
    chatArrayIndex = 0;
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

    if (act01intro == 1 || guideZ == 4) {
      act01intro = 1;
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
  openInventorybox();
});

$(".btnAnna01Note").click(function () {
  hide = ".labBG";
  show = ".labNoteBG";
  changeBG(hide, show);
});

$(".labNoteBG .btnBack").click(function () {
  hide = ".labNoteBG";
  show = ".labBG";
  changeBG(hide, show);
});
var dbcheck = "";
$(".labBG .btnBack").click(function () {
    $.ajax({
      type: "post",
      url: "playerone.php?p=checkanna01",
      data: { stat: dbcheck },
      dataType: "html",
      success: function (result) {
        dbcheck = result;
      },
    });
    setTimeout(function () {
      if (dbcheck == "1") {
        guideArray = guideOutside;
        hide = ".labBG";
        show = ".outsideLab";
        changeBG(hide, show);
      } else {
        chatArrayIndex = 2;
        clickTrusChatPopUp(chatArrayIndex);
      }
    }, 100);
});

// outside

$(".outsideLab .btnRight").click(function () {
  hide = ".outsideLab";
  show = ".threeLab";
  changeBG(hide, show);
});

// pertigaan

$(".threeLab .btnRight").click(function () {
  hide = ".threeLab";
  show = ".doorToBridge";
  changeBG(hide, show);
});
$(".threeLab .btnDown").click(function () {
  hide = ".threeLab";
  show = ".outsideLab";
  changeBG(hide, show);
});

// otw ke bridge

$(".doorToBridge .btnDown").click(function () {
  hide = ".doorToBridge";
  show = ".threeLab";
  changeBG(hide, show);
});