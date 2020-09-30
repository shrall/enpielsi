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
  $(".logoutBtn").click(function () {
    $(".checkPlayertwo").load("../logout.php");
  });
});

var kPos = 2,
  kPos2 = 1,
  kPos3 = 0,
  kPos5 = 0,
  kPos6 = 0,
  kPos7 = 0,
  kPos8 = 0,
  kPos9 = 0,
  kPos10 = 0,
  kPos11 = 0,
  kPos12 = 0,
  kPos14 = 0,
  kPos15 = 0,
  t3Counter = 0,
  t5Counter = 0,
  t6Counter = 0,
  t7Counter = 0,
  t8Counter = 0,
  t9Counter = 0,
  t10Counter = 0,
  t11Counter = 0,
  t12Counter = 0,
  t14Counter = 0,
  t15Counter = 0,
  clickCounter = 0;
var koodaBefore = $("#tile2");
$("#tile2").css("background-color", "#fff");
$("#tile2").css("background-image", "url(face.png)");
function reset() {
  kPos2 = 0;
  kPos3 = 0;
  kPos5 = 0;
  kPos6 = 0;
  kPos7 = 0;
  kPos8 = 0;
  kPos9 = 0;
  kPos10 = 0;
  kPos11 = 0;
  kPos12 = 0;
  kPos14 = 0;
  kPos15 = 0;
}
function start() {
  clickCounter++;
  if (kPos == 2) {
    reset();
    kPos2 = 1;
  }
  if (kPos == 3) {
    reset();
    kPos3 = 1;
  }
  if (kPos == 5) {
    reset();
    kPos5 = 1;
  }
  if (kPos == 6) {
    reset();
    kPos6 = 1;
  }
  if (kPos == 7) {
    reset();
    kPos7 = 1;
  }
  if (kPos == 8) {
    reset();
    kPos8 = 1;
  }
  if (kPos == 9) {
    reset();
    kPos9 = 1;
  }
  if (kPos == 10) {
    reset();
    kPos10 = 1;
  }
  if (kPos == 11) {
    reset();
    kPos11 = 1;
  }
  if (kPos == 12) {
    reset();
    kPos12 = 1;
  }
  if (kPos == 14) {
    reset();
    kPos14 = 1;
  }
  if (kPos == 15) {
    reset();
    kPos15 = 1;
  }
}

$("#tile3").click(function () {
  if (t3Counter == 0) {
    if (kPos5 == 1 || kPos10 == 1 || kPos12 == 1) {
      t3Counter = 1;
      $("#tile3").css("background-color", "#fff");
      $("#tile3").css("background-image", "url(face.png)");
      koodaBefore.css("background-image", "");
      koodaBefore = $("#tile3");
      kPos = 3;
      start();
    }
  }
});
$("#tile5").click(function () {
  if (t5Counter == 0) {
    if (kPos3 == 1 || kPos11 == 1 || kPos14 == 1) {
      t5Counter = 1;
      $("#tile5").css("background-color", "#fff");
      $("#tile5").css("background-image", "url(face.png)");
      koodaBefore.css("background-image", "");
      koodaBefore = $("#tile5");
      kPos = 5;
      start();
    }
  }
});
$("#tile6").click(function () {
  if (t6Counter == 0) {
    if (kPos15 == 1 || kPos12 == 1) {
      t6Counter = 1;
      $("#tile6").css("background-color", "#fff");
      $("#tile6").css("background-image", "url(face.png)");
      koodaBefore.css("background-image", "");
      koodaBefore = $("#tile6");
      kPos = 6;
      start();
    }
  }
});
$("#tile7").click(function () {
  if (t7Counter == 0) {
    if (kPos14 == 1 || kPos9 == 1) {
      t7Counter = 1;
      $("#tile7").css("background-color", "#fff");
      $("#tile7").css("background-image", "url(face.png)");
      koodaBefore.css("background-image", "");
      koodaBefore = $("#tile7");
      kPos = 7;
      start();
    }
  }
});
$("#tile8").click(function () {
  if (t8Counter == 0) {
    if (kPos15 == 1 || kPos10 == 1 || kPos2 == 1) {
      koodaPos = 8;
      t8Counter = 1;
      $("#tile8").css("background-color", "#fff");
      $("#tile8").css("background-image", "url(face.png)");
      koodaBefore.css("background-image", "");
      koodaBefore = $("#tile8");
      kPos = 8;
      start();
    }
  }
});
$("#tile9").click(function () {
  if (t9Counter == 0) {
    if (kPos15 == 1 || kPos7 == 1 || kPos2 == 1) {
      t9Counter = 1;
      $("#tile9").css("background-color", "#fff");
      $("#tile9").css("background-image", "url(face.png)");
      koodaBefore.css("background-image", "");
      koodaBefore = $("#tile9");
      kPos = 9;
      start();
    }
  }
});
$("#tile10").click(function () {
  if (t10Counter == 0) {
    if (kPos3 == 1 || kPos8 == 1) {
      t10Counter = 1;
      $("#tile10").css("background-color", "#fff");
      $("#tile10").css("background-image", "url(face.png)");
      koodaBefore.css("background-image", "");
      koodaBefore = $("#tile10");
      kPos = 10;
      start();
    }
  }
});
$("#tile11").click(function () {
  if (t11Counter == 0) {
    if (kPos5 == 1 || kPos2 == 1) {
      t11Counter = 1;
      $("#tile11").css("background-color", "#fff");
      $("#tile11").css("background-image", "url(face.png)");
      koodaBefore.css("background-image", "");
      koodaBefore = $("#tile11");
      kPos = 11;
      start();
    }
  }
});
$("#tile12").click(function () {
  if (t12Counter == 0) {
    if (kPos3 == 1 || kPos6 == 1 || kPos14 == 1) {
      t12Counter = 1;
      $("#tile12").css("background-color", "#fff");
      $("#tile12").css("background-image", "url(face.png)");
      koodaBefore.css("background-image", "");
      koodaBefore = $("#tile12");
      kPos = 12;
      start();
    }
  }
});
$("#tile14").click(function () {
  if (t14Counter == 0) {
    if (kPos5 == 1 || kPos7 == 1 || kPos12 == 1) {
      t14Counter = 1;
      $("#tile14").css("background-color", "#fff");
      $("#tile14").css("background-image", "url(face.png)");
      koodaBefore.css("background-image", "");
      koodaBefore = $("#tile14");
      kPos = 14;
      start();
    }
  }
});
$("#tile15").click(function () {
  if (t15Counter == 0) {
    if (kPos6 == 1 || kPos8 == 1 || kPos9 == 1) {
      t15Counter = 1;
      $("#tile15").css("background-color", "#fff");
      $("#tile15").css("background-image", "url(face.png)");
      koodaBefore.css("background-image", "");
      koodaBefore = $("#tile15");
      kPos = 15;
      start();
    }
  }
});

$(".kudaSubmit").click(function () {
  if (clickCounter > 10) {
    $(".kudaIndicator").css("background-color", "green");

    $.ajax({
      type: "post",
      url: "playertwo.php?p=add",
      data: { stat: 1 },
    });
  }
});

//ini start act01

var anna01 = 0;
var isTyping = true;
var act01intro = 0;

window.onload = function () {
  $(".act01 .transitionBG").css("visibility", "visible");
  $(".act01 .transitionBG").animate({ opacity: "1" }, 300);
  $(".act01 .transitionBG").delay(300).animate({ opacity: "0" }, 300);
  setTimeout(function () {
    setTimeout(function () {
      $(".act01 .transitionBG").css("visibility", "hidden");
      openChatbox();
      guideArray = guideAct01;
      setTimeout(typeWriter, 300);
    }, 300);
  }, 600);
};
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

$(".anna01Note .btnBack").click(function () {
  $(".anna01Note").css("visibility", "hidden");
});

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
    $(".act01 .transitionBG").css("visibility", "visible");
    $(".act01 .transitionBG").animate({ opacity: "1" }, 300);
    $(".act01 .transitionBG").delay(300).animate({ opacity: "0" }, 300);
    setTimeout(function () {
      setTimeout(function () {
        $(".act01 .transitionBG").css("visibility", "hidden");
      }, 300);
      $(".act01 .btnAnna01").css("visibility", "hidden");
      $(".act01 .anna01BG").css("visibility", "visible");
    }, 600);
  }, 1);
});

$(".anna01BG .btnBack").click(function () {
  setTimeout(function () {
    $(".act01 .transitionBG").css("visibility", "visible");
    $(".act01 .transitionBG").animate({ opacity: "1" }, 300);
    $(".act01 .transitionBG").delay(300).animate({ opacity: "0" }, 300);
    setTimeout(function () {
      setTimeout(function () {
        $(".act01 .transitionBG").css("visibility", "hidden");
      }, 300);
      $(".act01 .btnAnna01").css("visibility", "visible");
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

//chatbox code

$(".chatBtn").click(function () {
  if (anna01 == 1) {
    guideZ = 3;
  } else {
    guideZ = 2;
  }
  openChatbox();
  setTimeout(typeWriter, 300);
});

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
    } else {
      setTimeout(typeWriter, 50);
    }
  }
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
