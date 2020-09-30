$(document).ready(function () {
  setInterval(function () {
    $(".playertwo-counter").load("playerone.php");
    if ($(".playertwo-counter").html() == "11") {
      $(".playertwostage01indicator").css("background-color", "green");
      $(".playerthreestage01indicator").css("background-color", "green");
    } else if ($(".playertwo-counter").html() == "10") {
      $(".playertwostage01indicator").css("background-color", "green");
      $(".playerthreestage01indicator").css("background-color", "#333");
    } else if ($(".mplayertwo-counter").html() == "01") {
      $(".playertwostage01indicator").css("background-color", "#333");
      $(".playerthreestage01indicator").css("background-color", "green");
    } else {
      $(".playertwostage01indicator").css("background-color", "#333");
      $(".playerthreestage01indicator").css("background-color", "#333");
    }
  }, 1000);
  setTimeout(function () {
    $(".checkPlayerone").load("checkPlayerone.php");
    $(".anna01Counter").load("playerone.php?p=anna01");
  }, 1);
  $(".logoutBtn").click(function () {
    $(".checkPlayerone").load("../logout.php");
  });
});

$(".nextStageBtn").click(function () {
  if ($(".playertwo-counter").html() == "11") {
    $(".stage01hint").html("Stage 01 Clear!");
    $.ajax({
      type: "post",
      url: "../scoring.php?p=add",
      data: { stage01: 1 },
    });
    $.ajax({
      type: "post",
      url: "playerone.php?p=add",
      data: { stage01: 1 },
    });
  }
});

//ini start act01

var isTyping = true;
var act01intro = 0;
window.onload = function () {
  sceneTransition();
  setTimeout(function () {
    setTimeout(function () {
      $(".act01 .transitionBG").css("visibility", "hidden");
      $(".act01 .chatBox").css("visibility", "visible");
      $(".act01 .chatBox").animate({ opacity: "1" }, 300);
      $(".act01 .chatBlockTouch").css("display", "block");
      $(".act01 .chatBlockTouch").animate({ opacity: "50%" }, 300);
      guideArray = guideAct01;
      setTimeout(typeWriter, 300);
    }, 300);
  }, 600);
};

function sceneTransition(){
  $(".act01 .transitionBG").css("visibility", "visible");
  $(".act01 .transitionBG").animate({ opacity: "1" }, 300);
  $(".act01 .transitionBG").delay(300).animate({ opacity: "0" }, 300);
}
function closeChatbox() {
  $(".act01 .chatBox").css("visibility", "hidden");
  $(".act01 .chatBox").animate({ opacity: "0" }, 300);
  $(".act01 .chatBlockTouch").css("display", "none");
  $(".act01 .chatBlockTouch").css("opacity", "0");
}
function openChatbox() {
  $(".act01 .chatBox").css("visibility", "visible");
  $(".act01 .chatBox").animate({ opacity: "1" }, 300);
  $(".act01 .chatBlockTouch").css("display", "block");
  $(".act01 .chatBlockTouch").animate({ opacity: "50%" }, 300);
}

$(".btnAnna01Note").click(function () {
  setTimeout(function () {
    sceneTransition();
    setTimeout(function () {
      setTimeout(function () {
        $(".act01 .transitionBG").css("visibility", "hidden");
      }, 300);
      $(".act01 .btnAnna01Note").css("visibility", "hidden");
      $(".act01 .labNoteBG").css("visibility", "visible");
    }, 600);
  }, 1);
});

$(".labNoteBG .btnBack").click(function () {
  setTimeout(function () {
    sceneTransition();
    setTimeout(function () {
      setTimeout(function () {
        $(".act01 .transitionBG").css("visibility", "hidden");
      }, 300);
      $(".act01 .btnAnna01Note").css("visibility", "visible");
      $(".act01 .labNoteBG").css("visibility", "hidden");
    }, 600);
  }, 1);
});

$(".labBG .chatBtn").click(function () {
  guideZ = 3;
  openChatbox();
  setTimeout(typeWriter, 300);
});

var guideY = 0;
var guideZ = 0;
var guideAct01 = [
  "Uh oh, that doesn't sound good..",
  "Huh? Wait. Where's Mr. Clark?",
  "Uh... the door's closed...",
  "I should look around...",
  "Ah! The door is now opened!",
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
    } else {
      setTimeout(typeWriter, 50);
    }
  }
});

$(".labBG .btnBack").click(function () {
  setTimeout(function () {
    if ($(".anna01Counter").html() == "1") {
      guideZ = 4;
    } else {
      guideZ = 2;
    }
    openChatbox();
    setTimeout(typeWriter, 300);
  }, 100);
});

function openInventorybox() {
  $(".act01 .inventoryBox").css("visibility", "visible");
  $(".act01 .inventoryBox").animate({ opacity: "1" }, 300);
  $(".act01 .chatBlockTouch").css("display", "block");
  $(".act01 .chatBlockTouch").animate({ opacity: "50%" }, 300);
}
function closeInventorybox() {
  $(".act01 .inventoryBox").css("visibility", "hidden");
  $(".act01 .inventoryBox").animate({ opacity: "0" }, 300);
  $(".act01 .chatBlockTouch").css("display", "none");
  $(".act01 .chatBlockTouch").css("opacity", "0");
}


$(".inventoryBtn").click(function () {
  openInventorybox();
});

$(".chatBlockTouch").click(function () {
  if ($(".act01 .inventoryBox").css("visibility") == "visible") {
    closeInventorybox();
  }
});