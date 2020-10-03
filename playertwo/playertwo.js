$(document).ready(function () {
  setTimeout(function () {
    $(".checkPlayertwo").load("checkPlayertwo.php");
    $(".anna01Counter").load("playertwo.php?p=checkAnna01");
    setTimeout(function () {
      if ($(".anna01Counter").html() == "1") {
        anna01 = 1;
        $(".anna01BG .indicator").css("background-color", "green");
      }
    }, 1000);
  }, 1);
});



var anna01 = 0;
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
var guideY = 0;
var guideZ = 0;
var guideAct01 = [
  "Oh crap, where am I..?",
  "Looks like a security room..",
  "I should look around...",
  "What should I do now...",
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
    if (anna01 == 1) {
      chatArrayIndex = 3;
    } else {
      chatArrayIndex = 2;
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

    if (act01intro == 1 || guideZ == 3) {
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
function addItem() {
  $(".gameHUD .itemBox" + inventoryIndex).css("background-image", acquiredItem);
  $(".gameHUD .itemBox").css(
    "background-image",
    $(".gameHUD .itemBox" + inventoryIndex).css("background-image")
  );
  inventoryIndex++;
  acquiredItem = "";
}

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
    if (
      parseInt($(".anna01BG .input01").text()) == 6 &&
      parseInt($(".anna01BG .input02").text()) == 8 &&
      parseInt($(".anna01BG .input03").text()) == 9 &&
      parseInt($(".anna01BG .labInput01").text()) == 0 &&
      parseInt($(".anna01BG .labInput02").text()) == 5 &&
      parseInt($(".anna01BG .labInput03").text()) == 1
    ) {
      $(".anna01BG .indicator").animate({ backgroundColor: "green" }, 100);
      anna01 = 1;
      $.ajax({
        type: "post",
        url: "playertwo.php?p=anna01",
        data: { stat: 1 },
      });
    } else {
      $(".anna01BG .indicator").animate({ backgroundColor: "red" }, 100);
      $(".anna01BG .indicator").animate({ backgroundColor: "#333" }, 5000);
    }
  }
});

$(".btnAnna01").click(function () {
  setTimeout(function () {
    sceneTransition();
    setTimeout(function () {
      setTimeout(function () {
        $(".gameHUD .transitionBG").css("visibility", "hidden");
      }, 300);
      $(".act01 .anna01BG").css("visibility", "visible");
    }, 600);
  }, 1);
});

$(".anna01BG .btnBack").click(function () {
  setTimeout(function () {
    sceneTransition();
    setTimeout(function () {
      setTimeout(function () {
        $(".gameHUD .transitionBG").css("visibility", "hidden");
      }, 300);
      $(".act01 .anna01BG").css("visibility", "hidden");
    }, 600);
  }, 1);
});

function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  hour = updateTime(hour);
  min = updateTime(min);
  if (hour < 10) {
    hour -= 0;
    document.getElementById("hourTime").innerText = "0 " + hour;
  } else if (hour < 20) {
    hour -= 10;
    document.getElementById("hourTime").innerText = "1 " + hour;
  } else {
    hour -= 20;
    document.getElementById("hourTime").innerText = "2 " + hour;
  }
  if (min < 10) {
    min -= 0;
    document.getElementById("minuteTime").innerText = "0 " + min;
  } else if (min < 20) {
    min -= 10;
    document.getElementById("minuteTime").innerText = "1 " + min;
  } else if (min < 30) {
    min -= 20;
    document.getElementById("minuteTime").innerText = "2 " + min;
  } else if (min < 40) {
    min -= 30;
    document.getElementById("minuteTime").innerText = "3 " + min;
  } else if (min < 50) {
    min -= 40;
    document.getElementById("minuteTime").innerText = "4 " + min;
  } else if (min < 60) {
    min -= 50;
    document.getElementById("minuteTime").innerText = "5 " + min;
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
