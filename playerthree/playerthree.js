$(document).ready(function () {
  setTimeout(function () {
    $(".checkPlayerthree").load("checkPlayerthree.php");
  }, 1);
});

var isTyping = true;
var act01intro = 0;
var chatArrayIndex = 0;
var hide = "";
var show = "";

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
function openItemAcquired() {
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
    closeJanitor();
    closeGateClue(gateName)
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

function openGateClue(gateName) {
  $(".act01 " + gateName).css("visibility", "visible");
  $(".act01 " + gateName).animate({ opacity: "1" }, 300);
  openChatBlockTouch();
}
function closeGateClue(gateName) {
  $(".act01 " + gateName).css("visibility", "hidden");
  $(".act01 " + gateName).animate({ opacity: "0" }, 300);
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
var guideY = 0;
var guideZ = 0;
var guideAct01 = [
  //1
  "Oh damn, what was that?",
  "Crap, the door's blocked.",
  "Urgh.. Why did I drink that hot sauce...",
  "What should I do now...",

  //5
  "Ooh.. a screwdriver.. this could be handy..",
  //6
  "Urgh.. it's screwed tight..",
  //7
  "It won't budge..",
  //8
  "'The Professor.'",

  //9
  "What're you doing here?",
  "Are you one of the participants?",
  "...",
  "The station's gate is locked.",
  "We need to recharge the android to force open the gates.",
  "I need you to find me three powercells.",
  "I'm sure with your build, you can go through the vents.",
  "Use this card to get to my office.",
  "You can find a powercell there.",
  "There will also be a box in my table.",
  "I need you to bring it to me.",
  "Don't dawdle around, we don't have much time.",

  //21
  "I need you to find three powercells for the Android.",
  "And don't forget my box.",

  //23
  "...",
  "It's like a statue..",

  //25
  "'SCAN CARD HERE'",
  //26
  "I guess it's opened now.",
  //27
  "It's locked.",
  //28
  "How do I open this..?",
  //29
  "Huh. Weird looking battery.",
  //30
  "What does this button do?",
  //31
  "The mechanic said to not use the elevator.."
];

var guideArray = [];

var androidGuideY = 0;
var androidGuideZ = 0;

var androidGuideArray = [
  "Hi! Scan the QR Code to play with me and I'll tell you the password ^_^",
  "Yay! You're correct! :>",
  "Is that the best you can do? rofl.",
  "You're incorrect. :<",
  "Just give up lol.",
  "CONGRATS! YOUR ANSWER IS WRONG! HAHA.",
  "WRONG PASSWORD. >:("
];

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

function typeWriterAndroid() {
  if (androidGuideY < androidGuideArray[androidGuideZ].length) {
    document.getElementById("androidGuide").innerHTML += androidGuideArray[
      androidGuideZ
    ].charAt(androidGuideY);
    androidGuideY++;
    if (androidGuideY == androidGuideArray[androidGuideZ].length) {
      isTyping = false;
    }
    if (isTyping != false) {
      setTimeout(typeWriterAndroid, 50);
    }
  }
}

$(".gameHUD .chatBtn").click(function () {
  $(".checkPlayerthree").load("checkPlayerthree.php");
  chatArrayIndex = 3;
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

    if (
      guideZ == 4 ||
      guideZ == 5 ||
      guideZ == 6 ||
      guideZ == 7 ||
      guideZ == 8 ||
      guideZ == 20 ||
      guideZ == 22 ||
      guideZ == 24 ||
      guideZ == 25 ||
      guideZ == 26 ||
      guideZ == 27 ||
      guideZ == 28 ||
      guideZ == 29 ||
      guideZ == 30 ||
      guideZ == 31
    ) {
      closeChatbox();
      closeItemAcquired();
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
  openItemAcquired();
  $(".gameHUD .itemBox" + inventoryIndex).css("background-image", acquiredItem);
  inventoryIndex++;
  acquiredItem = "";
}

// ini toilet cowok
$(".act01 .btnJanitor").click(function () {
  openJanitor();
});
$(".toiletBG .btnWallet").click(function () {
  hide = ".toiletBG";
  show = ".walletBG";
  changeBG(hide, show);
});

$(".toiletBG .btnVent").click(function () {
  if (screwdriver == 1) {
    hide = ".toiletBG";
    show = ".toiletVentBG";
    changeBG(hide, show);
  } else {
    $(".checkPlayerthree").load("checkPlayerthree.php");
    chatArrayIndex = 5;
    clickTrusChatPopUp(chatArrayIndex);
  }
});

// ini dompet

$(".walletBG .btnWalletNote").click(function () {
  hide = ".walletBG";
  show = ".walletNoteBG";
  changeBG(hide, show);
});
$(".walletBG .btnCard").click(function () {
  $(".checkPlayerthree").load("checkPlayerthree.php");
  chatArrayIndex = 7;
  clickTrusChatPopUp(chatArrayIndex);
});

$(".walletBG .btnBack").click(function () {
  hide = ".walletBG";
  show = ".toiletBG";
  changeBG(hide, show);
});

// ini note yang di wallet
$(".walletNoteBG .btnBack").click(function () {
  hide = ".walletNoteBG";
  show = ".toiletBG";
  changeBG(hide, show);
});

// ini janitor
$(".janitorToolbox").click(function () {
  if (screwdriver != 1) {
    acquiredItem = "url(../playerthree/img/screwdriver.webp)";
    acquiredItemName = "Screwdriver";
    $(".janitorToolbox").css(
      "background-image",
      "url(../playerthree/img/janitortoolboxclicked.webp)"
    );
    $(".janitorToolbox").css("cursor", "default");
    screwdriver = 1;
    addItem();
    $(".checkPlayerthree").load("checkPlayerthree.php");
    chatArrayIndex = 4;
    clickTrusChatPopUp(chatArrayIndex);
  }
});

// ini vent pertigaan
$(".toiletVentBG .btnBack").click(function () {
  hide = ".toiletVentBG";
  show = ".toiletBG";
  changeBG(hide, show);
});
$(".toiletVentBG .btnLeft").click(function () {
  hide = ".toiletVentBG";
  show = ".toiletVentLeftBG";
  changeBG(hide, show);
});
$(".toiletVentBG .btnRight").click(function () {
  hide = ".toiletVentBG";
  show = ".toiletVentRightBG";
  changeBG(hide, show);
});

// ini vent kekiri
$(".toiletVentLeftBG .btnBack").click(function () {
  hide = ".toiletVentLeftBG";
  show = ".toiletVentBG";
  changeBG(hide, show);
});

$(".toiletVentLeftBG .btnVent").click(function () {
  hide = ".toiletVentLeftBG";
  show = ".mechanicDoorBG";
  changeBG(hide, show);
});

// ini di depan officenya mechanic
$(".mechanicDoorBG .btnRight").click(function () {
  hide = ".mechanicDoorBG";
  show = ".gate05fBG";
  changeBG(hide, show);
});
$(".mechanicDoorBG .btnDown").click(function () {
  hide = ".mechanicDoorBG";
  show = ".toiletVentLeftBG";
  changeBG(hide, show);
});

var mechanicdoorlock = 0;
$(".mechanicDoorBG .mechanicDoorLock").click(function () {
  $(".checkPlayerthree").load("checkPlayerthree.php");
  if (mechanickeycard != 1) {
    chatArrayIndex = 24;
    clickTrusChatPopUp(chatArrayIndex);
  } else {
    mechanicdoorlock = 1;
    chatArrayIndex = 25;
    clickTrusChatPopUp(chatArrayIndex);
  }
});
$(".mechanicDoorBG .mechanicOfficeDoor").click(function () {
  $(".checkPlayerthree").load("checkPlayerthree.php");
  if (mechanicdoorlock != 1) {
    chatArrayIndex = 26;
    clickTrusChatPopUp(chatArrayIndex);
  } else {
    hide = ".mechanicDoorBG";
    show = ".mechanicOfficeBG";
    changeBG(hide, show);
  }
});

// ini officenya si mechanic
$(".mechanicOfficeBG .btnRight").click(function () {
  hide = ".mechanicOfficeBG";
  show = ".mechanicWorkshopDoorBG";
  changeBG(hide, show);
});
$(".mechanicOfficeBG .btnDown").click(function () {
  hide = ".mechanicOfficeBG";
  show = ".mechanicDoorBG";
  changeBG(hide, show);
});
var glassesbox = 0;
$(".mechanicOfficeBG .btnGlassesBox").click(function () {
  $(".checkPlayerthree").load("checkPlayerthree.php");
  $(".mechanicOfficeBG .btnGlassesBox").css("display", "none");
  acquiredItem = "url(../playerthree/img/itemglassesbox.webp)";
  acquiredItemName = "Mysterious Box";
  glassesbox = 1;
  addItem();
  chatArrayIndex = 27;
  clickTrusChatPopUp(chatArrayIndex);
});

//ini pintu masuk ke dalem workshop
$(".mechanicWorkshopDoorBG .btnRight").click(function () {
  hide = ".mechanicWorkshopDoorBG";
  show = ".mechanicDoorBG";
  changeBG(hide, show);
});
$(".mechanicWorkshopDoorBG .btnDown").click(function () {
  hide = ".mechanicWorkshopDoorBG";
  show = ".mechanicOfficeBG";
  changeBG(hide, show);
});
$(".mechanicWorkshopDoorBG .btnAndroidIpad").click(function () {
  androidGuideZ = 0;
  androidGuideY = 0;
  isTyping = true;
  $("#androidGuide").html("");
  setTimeout(typeWriterAndroid, 300);
  hide = ".mechanicWorkshopDoorBG";
  show = ".androidIpadBG";
  changeBG(hide, show);
});

var androidipadlock = 0;
$(".mechanicWorkshopDoorBG .mechanicWorkshopDoor").click(function () {
  $(".checkPlayerthree").load("checkPlayerthree.php");
  if (androidipadlock == 1) {
    hide = ".mechanicWorkshopDoorBG";
    show = ".mechanicWorkshopBG";
    changeBG(hide, show);
  } else {
    chatArrayIndex = 26;
    clickTrusChatPopUp(chatArrayIndex);
  }
});

// ini tempat main game qr android
$(".androidIpadBG .btnBack").click(function () {
  hide = ".androidIpadBG";
  show = ".mechanicWorkshopDoorBG";
  changeBG(hide, show);
});
$(".androidIpadBG .btnSubmitIpad").click(function () {
  var androidipadans = $("#androidIpad")
    .val()
    .replace(/\s+/g, "")
    .toLowerCase();
  $.ajax({
    type: "post",
    url: "playerthree.php?p=androidipad",
    data: { stat: androidipadans },
    dataType: "html",
    success: function (result) {
      dbcheck = result;
    },
  }).done(function () {
    setTimeout(function () {
      if (dbcheck == "yes") {
        //kalo bener
        androidGuideZ = 1;
        androidGuideY = 0;
        isTyping = true;
        $("#androidGuide").html("");
        setTimeout(typeWriterAndroid, 300);
        androidipadlock = 1;
      } else {
        //kalo submit trus salah
        androidGuideZ = Math.floor(Math.random() * 5) + 2;
        androidGuideY = 0;
        isTyping = true;
        $("#androidGuide").html("");
        setTimeout(typeWriterAndroid, 300);
      }
    }, 1000);
  });
});

//ini di depannya workshop
$(".mechanicWorkshopDoorBG .btnRight").click(function () {
  hide = ".mechanicWorkshopDoorBG";
  show = ".mechanicDoorBG";
  changeBG(hide, show);
});
$(".mechanicWorkshopDoorBG .btnDown").click(function () {
  hide = ".mechanicWorkshopDoorBG";
  show = ".mechanicOfficeBG";
  changeBG(hide, show);
});

//ini di dalemnya workshop
$(".mechanicWorkshopBG .btnDown").click(function () {
  hide = ".mechanicWorkshopBG";
  show = ".mechanicWorkshopDoorBG";
  changeBG(hide, show);
});
var workshoppowercell = 0;
$(".mechanicWorkshopBG .btnWorkshopPowercell").click(function () {
  $(".checkPlayerthree").load("checkPlayerthree.php");
  $(".mechanicWorkshopBG .btnWorkshopPowercell").css("display", "none");
  acquiredItem = "url(../playerthree/img/itempowercellworkshop.webp)";
  acquiredItemName = "Powercell";
  workshoppowercell = 1;
  addItem();
  chatArrayIndex = 28;
  clickTrusChatPopUp(chatArrayIndex);
});

//ini gate besar yang ke pertigaan dari office
$(".gate05fBG .btnGateIpad").click(function () {
  gateName = ".gate05fClueBG";
  openGateClue(gateName);
});
var dbcheck = "";
var gate05f = 0;
$(".gate05fBG .btnGate").click(function () {
  $.ajax({
    type: "post",
    url: "playerthree.php?p=checkgate05f",
    data: { stat: dbcheck },
    dataType: "html",
    success: function (result) {
      dbcheck = result;
    },
  }).done(function () {
    if (dbcheck == "1") {
      gate05f = 1;
      // hide = ".labBG";
      // show = ".outsideLab";
      // changeBG(hide, show);
    } else {
      $(".checkPlayerthree").load("checkPlayerthree.php");
      chatArrayIndex = 29;
      clickTrusChatPopUp(chatArrayIndex);
    }
  });
});
$(".gate05fBG .btnDown").click(function () {
  hide = ".gate05fBG";
  show = ".mechanicDoorBG";
  changeBG(hide, show);
});

// ini vent kekanan
$(".toiletVentRightBG .btnBack").click(function () {
  hide = ".toiletVentRightBG";
  show = ".toiletVentBG";
  changeBG(hide, show);
});
$(".toiletVentRightBG .btnVent").click(function () {
  hide = ".toiletVentRightBG";
  show = ".toiletWomenBG";
  changeBG(hide, show);
});

// ini toilet cewek
$(".toiletWomenBG .btnVent").click(function () {
  hide = ".toiletWomenBG";
  show = ".toiletVentRightBG";
  changeBG(hide, show);
});
$(".toiletWomenBG .btnLeft").click(function () {
  hide = ".toiletWomenBG";
  show = ".lobbyToiletBG";
  changeBG(hide, show);
});

//ini lobby toilet
$(".lobbyToiletBG .toiletWomenDoor").click(function () {
  hide = ".lobbyToiletBG";
  show = ".toiletWomenBG";
  changeBG(hide, show);
});
$(".lobbyToiletBG .btnLeft").click(function () {
  hide = ".lobbyToiletBG";
  show = ".lobbyStationBG";
  changeBG(hide, show);
});
$(".lobbyToiletBG .btnRight").click(function () {
  hide = ".lobbyToiletBG";
  show = ".lobbyWarehouseBG";
  changeBG(hide, show);
});

// ini lobby warehouse
$(".lobbyWarehouseBG .btnLeft").click(function () {
  hide = ".lobbyWarehouseBG";
  show = ".lobbyToiletBG";
  changeBG(hide, show);
});
$(".lobbyWarehouseBG .btnRight").click(function () {
  hide = ".lobbyWarehouseBG";
  show = ".lobbyLabBG";
  changeBG(hide, show);
});

// ini lobby lab
$(".lobbyLabBG .btnLeft").click(function () {
  hide = ".lobbyLabBG";
  show = ".lobbyWarehouseBG";
  changeBG(hide, show);
});
$(".lobbyLabBG .btnRight").click(function () {
  hide = ".lobbyLabBG";
  show = ".lobbyReceptionistBG";
  changeBG(hide, show);
});

//ini lobby receptionist
var mechanickeycard = 0;
$(".lobbyReceptionistBG .btnMechanic").click(function () {
  $(".checkPlayerthree").html("Mechanic");
  if (mechanickeycard == 0) {
    acquiredItem = "url(../playerthree/img/itemmechanickeycard.webp)";
    acquiredItemName = "Mechanic's Keycard";
    mechanickeycard = 1;
    addItem();
    chatArrayIndex = 9;
    clickTrusChatPopUp(chatArrayIndex);
  } else {
    chatArrayIndex = 20;
    clickTrusChatPopUp(chatArrayIndex);
  }
});
$(".lobbyReceptionistBG .btnLift").click(function () {
  $(".checkPlayerthree").load("checkPlayerthree.php");
  chatArrayIndex = 30;
  clickTrusChatPopUp(chatArrayIndex);
});
$(".lobbyReceptionistBG .btnLeft").click(function () {
  hide = ".lobbyReceptionistBG";
  show = ".lobbyLabBG";
  changeBG(hide, show);
});
$(".lobbyReceptionistBG .btnRight").click(function () {
  hide = ".lobbyReceptionistBG";
  show = ".lobbyStationBG";
  changeBG(hide, show);
});

//ini lobby station
$(".lobbyStationBG .btnLeft").click(function () {
  hide = ".lobbyStationBG";
  show = ".lobbyReceptionistBG";
  changeBG(hide, show);
});
$(".lobbyStationBG .btnRight").click(function () {
  hide = ".lobbyStationBG";
  show = ".lobbyToiletBG";
  changeBG(hide, show);
});
$(".lobbyStationBG .btnAndroid").click(function () {
  $(".checkPlayerthree").load("checkPlayerthree.php");
  chatArrayIndex = 22;
  clickTrusChatPopUp(chatArrayIndex);
});
