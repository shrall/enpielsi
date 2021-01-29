var bgMusic = new Audio("../audio/music/bgm.mp3");
bgMusic.loop = true;
var screwSFX = new Audio("../audio/sfx/screwvent.mp3");
var grabItemSFX = new Audio("../audio/sfx/getitem.mp3");
var zipperSFX = new Audio("../audio/sfx/backpack.mp3");
var cardScanSFX = new Audio("../audio/sfx/cardscan.mp3");
var gateOpenSFX = new Audio("../audio/sfx/gate.mp3");
var openVentSFX = new Audio("../audio/sfx/screwvent.mp3");
var ventMoveSFX = new Audio("../audio/sfx/ventmovement.mp3");
var walkSFX = new Audio("../audio/sfx/walk.mp3");
var correctSFX = new Audio("../audio/sfx/correct.mp3");
var wrongSFX = new Audio("../audio/sfx/wrong.mp3");

function playSFX(sfx) {
  sfx.pause();
  sfx.currentTime = 0;
  sfx.play();
}

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
};

function openingEnded() {
  bgMusic.play();
  $(".skipBtn").css("visibility", "hidden");
  $(".skipBtn").animate({ opacity: "0" }, 300);
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
    closeJanitor();
    closeElectricalBox();
    closeGateClue(gateName);
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
function openElectricalBox() {
  $(".act01 .electricalBoxBG").css("visibility", "visible");
  $(".act01 .electricalBoxBG").animate({ opacity: "1" }, 300);
  openChatBlockTouch();
}
function closeElectricalBox() {
  $(".act01 .electricalBoxBG").css("visibility", "hidden");
  $(".act01 .electricalBoxBG").animate({ opacity: "0" }, 300);
  closeChatBlockTouch();
}
var guideY = 0;
var guideZ = 0;
var guideAct01 = [
  //0
  "Oh damn, what was that?",
  "Crap, the door's blocked.",
  "Urgh.. Why did I drink that hot sauce...",
  "What should I do now...",

  //4
  "Ooh.. a screwdriver.. this could be handy..",
  //5
  "Urgh.. it's screwed tight..",
  //6
  "It won't budge..",
  //7
  "'The Professor.'",

  //8
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

  //20
  "I need you to find three powercells for the Android.",
  "And don't forget my box.",

  //22
  "...",
  "It's like a statue..",

  //24
  "'SCAN CARD HERE'",
  //25
  "I guess it's opened now.",
  //26
  "It's locked.",
  //27
  "How do I open this..?",
  //28
  "Huh. Weird looking battery.",
  //29
  "What does this button do?",
  //30
  "The mechanic said to not use the elevator..",
  //31
  "The path's blocked..",
  //32
  "You can go and talk to the android when you're ready.",
];

var guideArray = [];

var androidGuideY = 0;
var androidGuideZ = 0;

var androidGuideArray = [
  "Hi! Ask the committee member to play with you to get the password ^_^",
  "Yay! You're correct! :>",
  "Is that the best you can do? rofl.",
  "You're incorrect. :<",
  "Just give up lol.",
  "CONGRATS! YOUR ANSWER IS WRONG! HAHA.",
  "WRONG PASSWORD. >:(",
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
      guideZ == 31 ||
      guideZ == 32 ||
      guideZ == 33
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
  playSFX(zipperSFX);
  openInventorybox();
});

$(".soundBtn").click(function () {
  $(".soundBtn").css("display", "none");
  $(".muteBtn").css("display", "block");
  bgMusic.pause();
});
$(".muteBtn").click(function () {
  $(".muteBtn").css("display", "none");
  $(".soundBtn").css("display", "block");
  bgMusic.play();
});
$(".skipBtn").click(function () {
  document.getElementById("vidOpening").pause();
  openingEnded();
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
    playSFX(screwSFX);
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
  playSFX(ventMoveSFX);
  hide = ".toiletVentBG";
  show = ".toiletVentLeftBG";
  changeBG(hide, show);
});
$(".toiletVentBG .btnRight").click(function () {
  playSFX(ventMoveSFX);
  hide = ".toiletVentBG";
  show = ".toiletVentRightBG";
  changeBG(hide, show);
});

// ini vent kekanan
$(".toiletVentRightBG .btnBack").click(function () {
  playSFX(ventMoveSFX);
  hide = ".toiletVentRightBG";
  show = ".toiletVentBG";
  changeBG(hide, show);
});
$(".toiletVentRightBG .btnVent").click(function () {
  playSFX(screwSFX);
  hide = ".toiletVentRightBG";
  show = ".toiletWomenBG";
  changeBG(hide, show);
});

// ini toilet cewek
$(".toiletWomenBG .btnVent").click(function () {
  playSFX(screwSFX);
  hide = ".toiletWomenBG";
  show = ".toiletVentRightBG";
  changeBG(hide, show);
});
$(".toiletWomenBG .btnLeft").click(function () {
  playSFX(walkSFX);
  hide = ".toiletWomenBG";
  show = ".lobbyToiletBG";
  changeBG(hide, show);
});

//ini lobby toilet
$(".lobbyToiletBG .toiletWomenDoor").click(function () {
  playSFX(walkSFX);
  hide = ".lobbyToiletBG";
  show = ".toiletWomenBG";
  changeBG(hide, show);
});
$(".lobbyToiletBG .btnLeft").click(function () {
  playSFX(walkSFX);
  hide = ".lobbyToiletBG";
  show = ".lobbyStationBG";
  changeBG(hide, show);
});
$(".lobbyToiletBG .btnRight").click(function () {
  playSFX(walkSFX);
  hide = ".lobbyToiletBG";
  show = ".lobbyWarehouseBG";
  changeBG(hide, show);
});

// ini lobby warehouse
$(".lobbyWarehouseBG .btnLeft").click(function () {
  playSFX(walkSFX);
  hide = ".lobbyWarehouseBG";
  show = ".lobbyToiletBG";
  changeBG(hide, show);
});
$(".lobbyWarehouseBG .btnRight").click(function () {
  playSFX(walkSFX);
  hide = ".lobbyWarehouseBG";
  show = ".lobbyLabBG";
  changeBG(hide, show);
});

// ini lobby lab
$(".lobbyLabBG .btnLeft").click(function () {
  playSFX(walkSFX);
  hide = ".lobbyLabBG";
  show = ".lobbyWarehouseBG";
  changeBG(hide, show);
});
$(".lobbyLabBG .btnRight").click(function () {
  playSFX(walkSFX);
  hide = ".lobbyLabBG";
  show = ".lobbyReceptionistBG";
  changeBG(hide, show);
});

//ini lobby receptionist
var mechanickeycard = 0;
var mechaniccutscene = 0;
$(".lobbyReceptionistBG .btnMechanic").click(function () {
  $(".checkPlayerthree").html("Mechanic");
  if (mechanickeycard == 0) {
    acquiredItem = "url(../playerthree/img/itemmechanickeycard.webp)";
    acquiredItemName = "Mechanic's Keycard";
    mechanickeycard = 1;
    addItem();
    chatArrayIndex = 9;
    clickTrusChatPopUp(chatArrayIndex);
  } else if (
    workshoppowercell == 1 &&
    electricalpowercell == 1 &&
    storagepowercell == 1 &&
    glassesbox == 1
  ) {
    mechaniccutscene = 1;
    chatArrayIndex = 32;
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
  playSFX(walkSFX);
  hide = ".lobbyReceptionistBG";
  show = ".lobbyLabBG";
  changeBG(hide, show);
});
$(".lobbyReceptionistBG .btnRight").click(function () {
  playSFX(walkSFX);
  hide = ".lobbyReceptionistBG";
  show = ".lobbyStationBG";
  changeBG(hide, show);
});

//ini lobby station
$(".lobbyStationBG .btnLeft").click(function () {
  playSFX(walkSFX);
  hide = ".lobbyStationBG";
  show = ".lobbyReceptionistBG";
  changeBG(hide, show);
});
$(".lobbyStationBG .btnRight").click(function () {
  playSFX(walkSFX);
  hide = ".lobbyStationBG";
  show = ".lobbyToiletBG";
  changeBG(hide, show);
});
$(".lobbyStationBG .btnAndroid").click(function () {
  if (mechaniccutscene == 1) {
    $.ajax({
      type: "post",
      url: "playerthree.php?p=finalpthree",
      data: { stat: dbcheck },
      dataType: "html",
      success: function (result) {
        dbcheck = result;
      },
    }).done(function () {
      bgMusic.pause();
      window.open("finalstage.html");
    });
  } else {
    $(".checkPlayerthree").load("checkPlayerthree.php");
    chatArrayIndex = 22;
    clickTrusChatPopUp(chatArrayIndex);
  }
});

// ini vent kekiri
$(".toiletVentLeftBG .btnBack").click(function () {
  playSFX(ventMoveSFX);
  hide = ".toiletVentLeftBG";
  show = ".toiletVentBG";
  changeBG(hide, show);
});

$(".toiletVentLeftBG .btnVent").click(function () {
  playSFX(screwSFX);
  hide = ".toiletVentLeftBG";
  show = ".mechanicDoorBG";
  changeBG(hide, show);
});

// ini di depan officenya mechanic
$(".mechanicDoorBG .btnRight").click(function () {
  playSFX(walkSFX);
  hide = ".mechanicDoorBG";
  show = ".gate05fBG";
  changeBG(hide, show);
});
$(".mechanicDoorBG .btnDown").click(function () {
  playSFX(walkSFX);
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
    playSFX(cardScanSFX);
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
  playSFX(walkSFX);
  hide = ".mechanicOfficeBG";
  show = ".mechanicWorkshopDoorBG";
  changeBG(hide, show);
});
$(".mechanicOfficeBG .btnDown").click(function () {
  playSFX(walkSFX);
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
  playSFX(walkSFX);
  hide = ".mechanicWorkshopDoorBG";
  show = ".mechanicDoorBG";
  changeBG(hide, show);
});
$(".mechanicWorkshopDoorBG .btnDown").click(function () {
  playSFX(walkSFX);
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
    playSFX(walkSFX);
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
        playSFX(correctSFX);
        androidGuideZ = 1;
        androidGuideY = 0;
        isTyping = true;
        $("#androidGuide").html("");
        setTimeout(typeWriterAndroid, 300);
        androidipadlock = 1;
      } else {
        //kalo submit trus salah
        playSFX(wrongSFX);
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
  playSFX(walkSFX);
  hide = ".mechanicWorkshopDoorBG";
  show = ".mechanicDoorBG";
  changeBG(hide, show);
});
$(".mechanicWorkshopDoorBG .btnDown").click(function () {
  playSFX(walkSFX);
  hide = ".mechanicWorkshopDoorBG";
  show = ".mechanicOfficeBG";
  changeBG(hide, show);
});

//ini di dalemnya workshop
$(".mechanicWorkshopBG .btnDown").click(function () {
  playSFX(walkSFX);
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
      playSFX(gateOpenSFX);
      hide = ".gate05fBG";
      show = ".warehouseSectionBG";
      changeBG(hide, show);
    } else {
      $(".checkPlayerthree").load("checkPlayerthree.php");
      chatArrayIndex = 29;
      clickTrusChatPopUp(chatArrayIndex);
    }
  });
});
$(".gate05fBG .btnDown").click(function () {
  playSFX(walkSFX);
  hide = ".gate05fBG";
  show = ".mechanicDoorBG";
  changeBG(hide, show);
});

//ini diperempatan abis buka gate05f
$(".warehouseSectionBG .btnDown").click(function () {
  playSFX(walkSFX);
  hide = ".warehouseSectionBG";
  show = ".gate05fBG";
  changeBG(hide, show);
});
$(".warehouseSectionBG .btnUp").click(function () {
  playSFX(walkSFX);
  hide = ".warehouseSectionBG";
  show = ".gate05hBG";
  changeBG(hide, show);
});
$(".warehouseSectionBG .btnLeft").click(function () {
  playSFX(walkSFX);
  hide = ".warehouseSectionBG";
  show = ".gate05gBG";
  changeBG(hide, show);
});
$(".warehouseSectionBG .btnRight").click(function () {
  chatArrayIndex = 31;
  clickTrusChatPopUp(chatArrayIndex);
});

//ini gate05g yang mau ke storage
$(".gate05gBG .btnGateIpad").click(function () {
  gateName = ".gate05gClueBG";
  openGateClue(gateName);
});
$(".gate05gBG .btnGate").click(function () {
  $.ajax({
    type: "post",
    url: "playerthree.php?p=checkgate05g",
    data: { stat: dbcheck },
    dataType: "html",
    success: function (result) {
      dbcheck = result;
    },
  }).done(function () {
    if (dbcheck == "1") {
      gateOpenSFX.play();
      hide = ".gate05gBG";
      show = ".storageGateBG";
      changeBG(hide, show);
    } else {
      $(".checkPlayerthree").load("checkPlayerthree.php");
      chatArrayIndex = 29;
      clickTrusChatPopUp(chatArrayIndex);
    }
  });
});
$(".gate05gBG .btnDown").click(function () {
  playSFX(walkSFX);
  hide = ".gate05gBG";
  show = ".warehouseSectionBG";
  changeBG(hide, show);
});

// ini storage gate yang mau masuk kedalem storage room
$(".storageGateBG .btnDown").click(function () {
  playSFX(walkSFX);
  hide = ".storageGateBG";
  show = ".gate05gBG";
  changeBG(hide, show);
});
$(".storageGateBG .btnGate").click(function () {
  playSFX(gateOpenSFX);
  hide = ".storageGateBG";
  show = ".storageRoomBG";
  changeBG(hide, show);
});

//ini storage room
$(".storageRoomBG .btnDown").click(function () {
  playSFX(walkSFX);
  hide = ".storageRoomBG";
  show = ".storageGateBG";
  changeBG(hide, show);
});
var storagepowercell = 0;
$(".storageRoomBG .btnStoragePowercell").click(function () {
  $(".checkPlayerthree").load("checkPlayerthree.php");
  $(".storageRoomBG .btnStoragePowercell").css("display", "none");
  acquiredItem = "url(../playerthree/img/itempowercellstorage.webp)";
  acquiredItemName = "Powercell";
  storagepowercell = 1;
  addItem();
  chatArrayIndex = 28;
  clickTrusChatPopUp(chatArrayIndex);
});

//ini gate05h yang mau ke electrical
$(".gate05hBG .btnGateIpad").click(function () {
  gateName = ".gate05hClueBG";
  openGateClue(gateName);
});
$(".gate05hBG .btnGate").click(function () {
  $.ajax({
    type: "post",
    url: "playerthree.php?p=checkgate05h",
    data: { stat: dbcheck },
    dataType: "html",
    success: function (result) {
      dbcheck = result;
    },
  }).done(function () {
    if (dbcheck == "1") {
      playSFX(gateOpenSFX);
      hide = ".gate05hBG";
      show = ".electricalGateBG";
      changeBG(hide, show);
    } else {
      $(".checkPlayerthree").load("checkPlayerthree.php");
      chatArrayIndex = 29;
      clickTrusChatPopUp(chatArrayIndex);
    }
  });
});
$(".gate05hBG .btnDown").click(function () {
  playSFX(walkSFX);
  hide = ".gate05hBG";
  show = ".warehouseSectionBG";
  changeBG(hide, show);
});

// ini electrical gate yang mau masuk kedalem electrical room
$(".electricalGateBG .btnDown").click(function () {
  playSFX(walkSFX);
  hide = ".electricalGateBG";
  show = ".gate05hBG";
  changeBG(hide, show);
});
$(".electricalGateBG .btnGate").click(function () {
  playSFX(gateOpenSFX);
  hide = ".electricalGateBG";
  show = ".electricalFrontRoomBG";
  changeBG(hide, show);
});

//ini electrical room yang didepan
$(".electricalFrontRoomBG .btnDown").click(function () {
  playSFX(walkSFX);
  hide = ".electricalFrontRoomBG";
  show = ".electricalGateBG";
  changeBG(hide, show);
});
$(".electricalFrontRoomBG .btnUp").click(function () {
  playSFX(walkSFX);
  hide = ".electricalFrontRoomBG";
  show = ".electricalBackRoomBG";
  changeBG(hide, show);
});

// ini electrical room yang dibelakang
$(".electricalBackRoomBG .btnDown").click(function () {
  playSFX(walkSFX);
  hide = ".electricalBackRoomBG";
  show = ".electricalFrontRoomBG";
  changeBG(hide, show);
});
$(".electricalBackRoomBG .btnLeft").click(function () {
  openElectricalBox();
});
var electricalpowercell = 0;
$(".electricalBackRoomBG .btnElectricalPowercell").click(function () {
  $(".checkPlayerthree").load("checkPlayerthree.php");
  $(".electricalBackRoomBG .btnElectricalPowercell").css("display", "none");
  acquiredItem = "url(../playerthree/img/itempowercellelectrical.webp)";
  acquiredItemName = "Powercell";
  electricalpowercell = 1;
  addItem();
  chatArrayIndex = 28;
  clickTrusChatPopUp(chatArrayIndex);
});
