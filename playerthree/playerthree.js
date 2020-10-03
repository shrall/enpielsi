$(document).ready(function () {
  setTimeout(function () {
    $(".checkPlayerthree").load("checkPlayerthree.php");
  }, 1);
});

var isTyping = true;
var act01intro = 0;
var chatArrayIndex = 0;

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
  if (
    $(".act01 .janitorBG").css("visibility") == "visible" &&
    $(".gameHUD .chatBox").css("visibility") != "visible"
  ) {
    closeJanitor();
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

function openJanitor() {
  $(".act01 .janitorBG").css("visibility", "visible");
  $(".act01 .janitorBG").animate({ opacity: "1" }, 300);
  openChatBlockTouch();
}
function closeJanitor() {
  $(".act01 .janitorBG").css("visibility", "hidden");
  $(".act01 .janitorBG").animate({ opacity: "0" }, 300);
  closeChatBlockTouch();
}
var guideY = 0;
var guideZ = 0;
var guideAct01 = [
  "Oh damn, what was that?",
  "Crap, the door's blocked.",
  "Urgh.. Why did I drink that hot sauce...",
  "What should I do now...",

  "Ooh.. a screwdriver.. this could be handy..",
  "Urgh.. it's screwed tight..",
  "It won't budge..",
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
  if (guideArray == guideAct01) {
    chatArrayIndex = 3;
  }
  clickTrusChatPopUp(chatArrayIndex);
});

$(".gameHUD .chatBox").click(function () {
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
var screwdriver = 0;

$(".inventoryBtn").click(function () {
  openInventorybox();
});


function addItem() {
  $(".gameHUD .itemBox" + inventoryIndex).css("background-image", acquiredItem);
  $(".gameHUD .itemBox").css(
    "background-image",
    $(".gameHUD .itemBox" + inventoryIndex).css("background-image")
  );
  inventoryIndex++;
  acquiredItem = "";
}
$(".act01 .btnJanitor").click(function () {
  openJanitor();
});

$(".janitorToolbox").click(function () {
  if (screwdriver != 1) {
    acquiredItem = "url(../playerthree/img/screwdriver.webp)";
    $(".janitorToolbox").css(
      "background-image",
      "url(../playerthree/img/janitortoolboxclicked.webp)"
    );
    $(".janitorToolbox").css("cursor", "default");
    screwdriver = 1;
    addItem();
    chatArrayIndex = 4;
    clickTrusChatPopUp(chatArrayIndex);
  }
});

$(".toiletBG .btnVent").click(function () {
  if (screwdriver == 1) {
    setTimeout(function () {
      sceneTransition();
      setTimeout(function () {
        setTimeout(function () {
          $(".gameHUD .transitionBG").css("visibility", "hidden");
        }, 300);
        $(".act01 .toiletVentBG").css("visibility", "visible");
      }, 600);
    }, 1);
  } else {
    chatArrayIndex = 5;
    clickTrusChatPopUp(chatArrayIndex);
  }
});

$(".toiletVentBG .btnBack").click(function () {
  setTimeout(function () {
    sceneTransition();
    setTimeout(function () {
      setTimeout(function () {
        $(".gameHUD .transitionBG").css("visibility", "hidden");
      }, 300);
      $(".act01 .toiletVentBG").css("visibility", "hidden");
    }, 600);
  }, 1);
});

$(".toiletVentBG .btnLeft").click(function () {
  setTimeout(function () {
    sceneTransition();
    setTimeout(function () {
      setTimeout(function () {
        $(".gameHUD .transitionBG").css("visibility", "hidden");
      }, 300);
      $(".act01 .toiletVentLeftBG").css("visibility", "visible");
    }, 600);
  }, 1);
});
$(".toiletVentBG .btnRight").click(function () {
  setTimeout(function () {
    sceneTransition();
    setTimeout(function () {
      setTimeout(function () {
        $(".gameHUD .transitionBG").css("visibility", "hidden");
      }, 300);
      $(".act01 .toiletVentRightBG").css("visibility", "visible");
    }, 600);
  }, 1);
});

$(".toiletVentLeftBG .btnBack").click(function () {
  setTimeout(function () {
    sceneTransition();
    setTimeout(function () {
      setTimeout(function () {
        $(".gameHUD .transitionBG").css("visibility", "hidden");
      }, 300);
      $(".act01 .toiletVentLeftBG").css("visibility", "hidden");
    }, 600);
  }, 1);
});
$(".toiletVentRightBG .btnBack").click(function () {
  setTimeout(function () {
    sceneTransition();
    setTimeout(function () {
      setTimeout(function () {
        $(".gameHUD .transitionBG").css("visibility", "hidden");
      }, 300);
      $(".act01 .toiletVentRightBG").css("visibility", "hidden");
    }, 600);
  }, 1);
});

$(".toiletVentLeftBG .btnVent").click(function () {
  chatArrayIndex = 6;
  clickTrusChatPopUp(chatArrayIndex);
});

$(".toiletVentRightBG .btnVent").click(function () {
  setTimeout(function () {
    sceneTransition();
    setTimeout(function () {
      setTimeout(function () {
        $(".gameHUD .transitionBG").css("visibility", "hidden");
      }, 300);
      $(".act01 .toiletWomenBG").css("visibility", "visible");
    }, 600);
  }, 1);
});
$(".toiletWomenBG .btnVent").click(function () {
  setTimeout(function () {
    sceneTransition();
    setTimeout(function () {
      setTimeout(function () {
        $(".gameHUD .transitionBG").css("visibility", "hidden");
      }, 300);
      $(".act01 .toiletWomenBG").css("visibility", "hidden");
      $(".act01 .toiletVentRightBG").css("visibility", "hidden");
      $(".act01 .toiletVentBG").css("visibility", "hidden");
    }, 600);
  }, 1);
});
