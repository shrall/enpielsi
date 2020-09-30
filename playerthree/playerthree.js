$(document).ready(function () {
  setTimeout(function () {
    $(".checkPlayerthree").load("checkPlayerthree.php");
  }, 1);
});

var isTyping = true;
var act01intro = 0;

window.onload = function () {
  sceneTransition();
  setTimeout(function () {
    setTimeout(function () {
      $(".act01 .transitionBG").css("visibility", "hidden");
      openChatbox();
      guideArray = guideAct01;
      setTimeout(typeWriter, 300);
    }, 300);
  }, 600);
};

function closeChatBlockTouch() {
  $(".act01 .chatBlockTouch").css("display", "none");
  $(".act01 .chatBlockTouch").css("opacity", "0");
}
function openChatBlockTouch() {
  $(".act01 .chatBlockTouch").css("display", "block");
  $(".act01 .chatBlockTouch").animate({ opacity: "50%" }, 300);
}
function openChatbox() {
  $(".act01 .chatBox").css("visibility", "visible");
  $(".act01 .chatBox").animate({ opacity: "1" }, 300);
  openChatBlockTouch();
}
function closeChatbox() {
  $(".act01 .chatBox").css("visibility", "hidden");
  $(".act01 .chatBox").animate({ opacity: "0" }, 300);
  closeChatBlockTouch();
}
function openInventorybox() {
  $(".act01 .inventoryBox").css("visibility", "visible");
  $(".act01 .inventoryBox").animate({ opacity: "1" }, 300);
  openChatBlockTouch();
}
function closeInventorybox() {
  $(".act01 .inventoryBox").css("visibility", "hidden");
  $(".act01 .inventoryBox").animate({ opacity: "0" }, 300);
  closeChatBlockTouch();
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
function closeUniversal() {
  if (
    $(".act01 .janitorBG").css("visibility") == "visible" &&
    $(".act01 .chatBox").css("visibility") != "visible"
  ) {
    closeJanitor();
  }
}
function sceneTransition() {
  $(".act01 .transitionBG").css("visibility", "visible");
  $(".act01 .transitionBG").animate({ opacity: "1" }, 300);
  $(".act01 .transitionBG").delay(300).animate({ opacity: "0" }, 300);
}

$(".chatBtn").click(function () {
  guideZ = 3;
  openChatbox();
  setTimeout(typeWriter, 300);
});

var guideY = 0;
var guideZ = 0;
var guideAct01 = [
  "Oh damn, what was that?",
  "Crap, the door's blocked.",
  "Urgh.. Why did I drink that hot sauce...",
  "What should I do now...",

  "Ooh.. a screwdriver.. this could be handy..",
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
$(".chatBlockTouch").click(function () {
  if ($(".act01 .inventoryBox").css("visibility") == "visible") {
    closeInventorybox();
  }
  closeUniversal();
});

$(".inventoryBtn").click(function () {
  openInventorybox();
});
$(".btnJanitor").click(function () {
  openJanitor();
});

var inventoryIndex = 2;
var acquiredItem = "";
var itemChecking = "";
var screwdriver = "url(../playerthree/img/janitortoolboxclicked.webp)";
function addItem() {
  $(".itemBox" + inventoryIndex).css("background-image", acquiredItem);
  $(".itemBox").css(
    "background-image",
    $(".itemBox" + inventoryIndex).css("background-image")
  );
  inventoryIndex++;
  acquiredItem = "";
}
function checkItem(checkedItem) {
  for (checki = 1; checki <= inventoryIndex; checki++) {
    if ($(".itemBox" + checki).css("background-image") == checkedItem) {
      return true;
    } else {
      return false;
    }
  }
}
$(".janitorToolbox").click(function () {
  acquiredItem = "url(../playerthree/img/janitortoolboxclicked.webp)";
  $(".janitorToolbox").css(
    "background-image",
    "url(../playerthree/img/janitortoolboxclicked.webp)"
  );
  $(".janitorToolbox").css("cursor", "default");
  guideZ = 4;
  openChatbox();
  addItem();
  setTimeout(typeWriter, 300);
});

$(".toiletBG .btnVent").click(function () {
  itemChecking = checkItem(screwdriver);
  itemChecking = true;
  if (itemChecking == true) {
    setTimeout(function () {
      sceneTransition();
      setTimeout(function () {
        setTimeout(function () {
          $(".act01 .transitionBG").css("visibility", "hidden");
        }, 300);
        $(".act01 .toiletBG .btnVent").css("visibility", "hidden");
        $(".act01 .toiletVentBG").css("visibility", "visible");
      }, 600);
    }, 1);
  }
});

$(".toiletVentBG .btnBack").click(function () {
  setTimeout(function () {
    sceneTransition();
    setTimeout(function () {
      setTimeout(function () {
        $(".act01 .transitionBG").css("visibility", "hidden");
      }, 300);
      $(".act01 .toiletBG .btnVent").css("visibility", "visible");
      $(".act01 .toiletVentBG").css("visibility", "hidden");
    }, 600);
  }, 1);
});
$(".btnLeft").click(function () {
  setTimeout(function () {
    sceneTransition();
    setTimeout(function () {
      setTimeout(function () {
        $(".act01 .transitionBG").css("visibility", "hidden");
      }, 300);
      $(".act01 .btnLeft").css("visibility", "hidden");
      $(".act01 .toiletVentLeftBG").css("visibility", "visible");
    }, 600);
  }, 1);
});
$(".btnRight").click(function () {
  setTimeout(function () {
    sceneTransition();
    setTimeout(function () {
      setTimeout(function () {
        $(".act01 .transitionBG").css("visibility", "hidden");
      }, 300);
      $(".act01 .btnRight").css("visibility", "hidden");
      $(".act01 .toiletVentRightBG").css("visibility", "visible");
    }, 600);
  }, 1);
});
