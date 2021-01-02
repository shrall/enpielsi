var isTyping = true;
var act01intro = 0;
var plocation = "lab051";
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
  "I should look around...", //4
  "Where should I go now..", //5
  "Ooh a card.. Maybe I can use this later.", //6
  "Just an ordinary lab coat.", //7
  "Hmm.. it's locked.", //8
  "Hmm.. it says 'SCAN CARD HERE'.", //9
  "The door is now opened!", //10
  "It's too far to reach..", //11
  "What is this place?", //12
  "Code..?", //13
  "I hope the owner doesn't mind if I take this..", //14
  "These chemicals seems dangerous..", //15
  "Virus Progress.. Completed..?", //16
  "Is that Mr.namabossnya's family?", //17
  "I guess someone forgot to take out the trash.", //18
  "There's only 31 days on January..", //19
  "What is he trying to make..?", //20
  "Now I need to wait the photo to dry.", //21
  "Does this button do anything?", //22
  "It's blocked..", //23
  "Who's there?!",
  "...",
  "Ah! You're one of the students!",
  "I'm sorry if I startled you.",
  "I can't see well without my glasses..",
  "...",
  "We need to get out of here quickly.",
  "But, before that, I need your help.",
  "Inside this room, there's a liquid tube.",
  "I need you to get it for me.",
  "It's my most precious research item.",
  "If I could, I'd get it myself, but..",
  "The lights inside went out and I don't have my glasses.",
  "While you're looking for it,",
  "I'll find a way to open the gate to the station.", //38
  "I went inside a lot, and even though I can't see well..",
  "I remember the pathing.",
  "Go West, West, North, East, South.",
  "You'll find it there.", //42
  "What is this..? Orange juice?" //43
  
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
    closePopUpTwo();
    closeGateClue(gateName);
    closeItemAcquired();
  }
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

function openCamera(confirmationClass) {
  if (polaroid > 1) {
    $(".popUpSubCamera").html("You can take " + polaroid + " more photos.");
  } else {
    $(".popUpSubCamera").html("You can take " + polaroid + " more photo.");
  }
  $(".act01 " + confirmationClass).css("visibility", "visible");
  $(".act01 " + confirmationClass).animate({ opacity: "1" }, 300);
  openChatBlockTouch();
}
function closePopUpTwo() {
  $(".act01 .questionTwo").css("visibility", "hidden");
  $(".act01 .questionTwo").animate({ opacity: "0" }, 300);
  closeChatBlockTouch();
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
  openItemAcquired();
  $(".gameHUD .itemBox" + inventoryIndex).css("background-image", acquiredItem);
  inventoryIndex++;
  acquiredItem = "";
}

//ngoding

$(".gameHUD .chatBtn").click(function () {
  $(".checkPlayerone").load("checkPlayerone.php");
  if (guideArray == guideAct01) {
    if (labdooropened == 1) {
      if (plocation == "bridge") {
        chatArrayIndex = 11;
      } else if (plocation == "panelReiner") {
        chatArrayIndex = 12;
      } else {
        chatArrayIndex = 4;
      }
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
      guideZ == 4 ||
      guideZ == 5 ||
      guideZ == 6 ||
      guideZ == 7 ||
      guideZ == 8 ||
      guideZ == 9 ||
      guideZ == 10 ||
      guideZ == 11 ||
      guideZ == 12 ||
      guideZ == 13 ||
      guideZ == 14 ||
      guideZ == 15 ||
      guideZ == 16 ||
      guideZ == 17 ||
      guideZ == 18 ||
      guideZ == 19 ||
      guideZ == 20 ||
      guideZ == 21 ||
      guideZ == 22 ||
      guideZ == 23 ||
      guideZ == 38 ||
      guideZ == 42 ||
      guideZ == 43) {
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

$(".inventoryBtn").click(function () {
  openInventorybox();
});
var mainkeycard = 0;
$(".btnLabCoat").click(function () {
  $(".checkPlayerone").load("checkPlayerone.php");
  if (mainkeycard != 1) {
    acquiredItem = "url(../playerone/img/mainkeycard.webp)";
    acquiredItemName = "Lab Keycard";
    mainkeycard = 1;
    addItem();
    chatArrayIndex = 5;
    clickTrusChatPopUp(chatArrayIndex);
  } else {
    chatArrayIndex = 6;
    clickTrusChatPopUp(chatArrayIndex);
  }
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
var labdooropened = 0;
$(".labBG .btnBack").click(function () {
  $.ajax({
    type: "post",
    url: "playerone.php?p=checkanna01",
    data: { stat: dbcheck },
    dataType: "html",
    success: function (result) {
      dbcheck = result;
    },
  }).done(function () {
    if (dbcheck == "1") {
      labdooropened = 1;
      hide = ".labBG";
      show = ".outsideLab";
      changeBG(hide, show);
    } else {
      $(".checkPlayerone").load("checkPlayerone.php");
      chatArrayIndex = 2;
      clickTrusChatPopUp(chatArrayIndex);
    }
  });
});

// outside

$(".outsideLab .btnRight").click(function () {
  hide = ".outsideLab";
  show = ".threeLab";
  changeBG(hide, show);
});
$(".outsideLab .outsideBigDoor").click(function () {
  hide = ".outsideLab";
  show = ".labBG";
  changeBG(hide, show);
});

// pertigaan

$(".threeLab .btnLeft").click(function () {
  hide = ".threeLab";
  show = ".gate05aBG";
  changeBG(hide, show);
});
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

var bridgedoorlock = 0;
$(".doorToBridge .bridgeDoorLock").click(function () {
  $(".checkPlayerone").load("checkPlayerone.php");
  if (mainkeycard != 1) {
    chatArrayIndex = 8;
    clickTrusChatPopUp(chatArrayIndex);
  } else {
    bridgedoorlock = 1;
    chatArrayIndex = 9;
    clickTrusChatPopUp(chatArrayIndex);
  }
});

$(".doorToBridge .bridgeDoor").click(function () {
  $(".checkPlayerone").load("checkPlayerone.php");
  if (bridgedoorlock != 1) {
    chatArrayIndex = 7;
    clickTrusChatPopUp(chatArrayIndex);
  } else {
    plocation = "bridge";
    hide = ".doorToBridge";
    show = ".bridgeToMainLab";
    changeBG(hide, show);
  }
});

// jembatan

var bridgepanel = 0;
$(".bridgeToMainLab .bridgeLift").click(function () {
  $(".checkPlayerone").load("checkPlayerone.php");
  if (bridgepanel != 1) {
    chatArrayIndex = 10;
    clickTrusChatPopUp(chatArrayIndex);
  } else {
    hide = ".bridgeToMainLab";
    show = ".mainLabLift";
    changeBG(hide, show);
  }
});

$(".bridgeToMainLab .btnReiner01Panel").click(function () {
  plocation = "panelReiner";
  hide = ".bridgeToMainLab";
  show = ".bridgePanelBG";
  changeBG(hide, show);
});

$(".bridgeToMainLab .btnDown").click(function () {
  plocation = "lab051";
  hide = ".bridgeToMainLab";
  show = ".doorToBridge";
  changeBG(hide, show);
});

// panelnya reiner

$(".bridgePanelBG .btnBack").click(function () {
  plocation = "bridge";
  hide = ".bridgePanelBG";
  show = ".bridgeToMainLab";
  changeBG(hide, show);
});

var switch1 = 0;
var switch2 = 0;
var switch3 = 0;
var switch4 = 0;
var switch5 = 0;
$(".bridgePanelBG .switch1").click(function () {
  $(".switch1").css("background-image", "url(../playerone/img/switchon.webp)");
  var reiner01ans = $("#panelBridge1").val().replace(/\s+/g, "").toLowerCase();
  $.ajax({
    type: "post",
    url: "playerone.php?p=reiner01",
    data: { stat: reiner01ans },
    dataType: "html",
    success: function (result) {
      dbcheck = result;
    },
  }).done(function () {
    setTimeout(function () {
      if (dbcheck == "yes") {
        //kalo bener
        switch1 = 1;
        $(".panelLightCSS1").animate({ backgroundColor: "green" }, 100);
      } else {
        $(".panelLightCSS1").animate({ backgroundColor: "red" }, 100);
        $(".panelLightCSS1").animate({ backgroundColor: "#333" }, 2000);
        $(".switch1").css(
          "background-image",
          "url(../playerone/img/switchoff.webp)"
        );
      }
    }, 1000);
  });
});
$(".bridgePanelBG .switch2").click(function () {
  $(".switch2").css("background-image", "url(../playerone/img/switchon.webp)");
  var reiner02ans = $("#panelBridge2").val().replace(/\s+/g, "").toLowerCase();
  $.ajax({
    type: "post",
    url: "playerone.php?p=reiner02",
    data: { stat: reiner02ans },
    dataType: "html",
    success: function (result) {
      dbcheck = result;
    },
  }).done(function () {
    setTimeout(function () {
      if (dbcheck == "yes") {
        //kalo bener
        switch2 = 1;
        $(".panelLightCSS2").animate({ backgroundColor: "green" }, 100);
      } else {
        $(".panelLightCSS2").animate({ backgroundColor: "red" }, 100);
        $(".panelLightCSS2").animate({ backgroundColor: "#333" }, 2000);
        $(".switch2").css(
          "background-image",
          "url(../playerone/img/switchoff.webp)"
        );
      }
    }, 1000);
  });
});
$(".bridgePanelBG .switch3").click(function () {
  $(".switch3").css("background-image", "url(../playerone/img/switchon.webp)");
  var reiner03ans = $("#panelBridge3").val().replace(/\s+/g, "").toLowerCase();
  $.ajax({
    type: "post",
    url: "playerone.php?p=reiner03",
    data: { stat: reiner03ans },
    dataType: "html",
    success: function (result) {
      dbcheck = result;
    },
  }).done(function () {
    setTimeout(function () {
      if (dbcheck == "yes") {
        //kalo bener
        switch3 = 1;
        $(".panelLightCSS3").animate({ backgroundColor: "green" }, 100);
      } else {
        $(".panelLightCSS3").animate({ backgroundColor: "red" }, 100);
        $(".panelLightCSS3").animate({ backgroundColor: "#333" }, 2000);
        $(".switch3").css(
          "background-image",
          "url(../playerone/img/switchoff.webp)"
        );
      }
    }, 1000);
  });
});
$(".bridgePanelBG .switch4").click(function () {
  $(".switch4").css("background-image", "url(../playerone/img/switchon.webp)");
  var reiner04ans = $("#panelBridge4").val().replace(/\s+/g, "").toLowerCase();
  $.ajax({
    type: "post",
    url: "playerone.php?p=reiner04",
    data: { stat: reiner04ans },
    dataType: "html",
    success: function (result) {
      dbcheck = result;
    },
  }).done(function () {
    setTimeout(function () {
      if (dbcheck == "yes") {
        //kalo bener
        switch4 = 1;
        $(".panelLightCSS4").animate({ backgroundColor: "green" }, 100);
      } else {
        $(".panelLightCSS4").animate({ backgroundColor: "red" }, 100);
        $(".panelLightCSS4").animate({ backgroundColor: "#333" }, 2000);
        $(".switch4").css(
          "background-image",
          "url(../playerone/img/switchoff.webp)"
        );
      }
    }, 1000);
  });
});
$(".bridgePanelBG .switch5").click(function () {
  $(".switch5").css("background-image", "url(../playerone/img/switchon.webp)");
  var reiner05ans = $("#panelBridge5").val().replace(/\s+/g, "").toLowerCase();
  $.ajax({
    type: "post",
    url: "playerone.php?p=reiner05",
    data: { stat: reiner05ans },
    dataType: "html",
    success: function (result) {
      dbcheck = result;
    },
  }).done(function () {
    setTimeout(function () {
      if (dbcheck == "yes") {
        //kalo bener
        switch5 = 1;
        $(".panelLightCSS5").animate({ backgroundColor: "green" }, 100);
      } else {
        $(".panelLightCSS5").animate({ backgroundColor: "red" }, 100);
        $(".panelLightCSS5").animate({ backgroundColor: "#333" }, 2000);
        $(".switch5").css(
          "background-image",
          "url(../playerone/img/switchoff.webp)"
        );
      }
    }, 1000);
  });
});
$(".bridgePanelBG .panelSubmitBtn").click(function () {
  if (
    switch1 == 1 &&
    switch2 == 1 &&
    switch3 == 1 &&
    switch4 == 1 &&
    switch5 == 1
  ) {
    bridgepanel = 1;
    $(".bridgeToMainLab").css(
      "background-image",
      "url(../playerone/bg/bridgetolab.webp)"
    );
  }
});

// * ini mainlab
var polaroid = 3;
var bonuspoints = 0;
$(".selectClose").click(function () {
  closeUniversal();
});
// ini pintu ke lift
$(".mainLabLift .btnLift").click(function () {
  hide = ".mainLabLift";
  show = ".bridgeToMainLab";
  changeBG(hide, show);
});
$(".mainLabLift .btnLeft").click(function () {
  hide = ".mainLabLift";
  show = ".mainLabWorktable";
  changeBG(hide, show);
});
$(".mainLabLift .btnRight").click(function () {
  hide = ".mainLabLift";
  show = ".mainLabChemical";
  changeBG(hide, show);
});
$(".mainLabLift .btnDown").click(function () {
  hide = ".mainLabLift";
  show = ".mainLabStairs";
  changeBG(hide, show);
});

//ini meja yang ada polaroidnya

var polaroidcamera = 0;
$(".mainLabWorktable .btnCamera").click(function () {
  $(".checkPlayerone").load("checkPlayerone.php");
  if (polaroidcamera != 1) {
    $(".btnCamera").css("visibility", "hidden");
    acquiredItem = "url(../playerone/img/itemcamera.webp)";
    acquiredItemName = "Camera";
    polaroidcamera = 1;
    addItem();
    chatArrayIndex = 13;
    clickTrusChatPopUp(chatArrayIndex);
  }
});
$(".mainLabWorktable .btnLeft").click(function () {
  hide = ".mainLabWorktable";
  show = ".mainLabStairs";
  changeBG(hide, show);
});
$(".mainLabWorktable .btnRight").click(function () {
  hide = ".mainLabWorktable";
  show = ".mainLabLift";
  changeBG(hide, show);
});
$(".mainLabWorktable .btnDown").click(function () {
  hide = ".mainLabWorktable";
  show = ".mainLabChemical";
  changeBG(hide, show);
});

//ini meja yang banyak tabungnya

var photoChemical = 0;
$(".mainLabChemical .btnChemicals").click(function () {
  $(".checkPlayerone").load("checkPlayerone.php");
  if (polaroidcamera != 1) {
    chatArrayIndex = 14;
    clickTrusChatPopUp(chatArrayIndex);
  } else {
    if (polaroid > 0 && photoChemical < 1) {
      openCamera(".confirmationChemical");
    } else {
      chatArrayIndex = 14;
      clickTrusChatPopUp(chatArrayIndex);
    }
  }
});
$(".mainLabChemical .selectAChemical").click(function () {
  if (polaroid == 3) {
    acquiredItem = "url(../playerone/img/itemphotos.webp)";
    acquiredItemName = "Photos";
    addItem();
  }
  polaroid--;
  bonuspoints++;
  $.ajax({
    type: "post",
    url: "playerone.php?p=bonuscamera",
    data: { stat: bonuspoints },
    dataType: "html",
    success: function (result) {},
  }).done(function () {
    $(".checkPlayerone").load("checkPlayerone.php");
    photoChemical++;
    closePopUpTwo();
    chatArrayIndex = 20;
    clickTrusChatPopUp(chatArrayIndex);
  });
});

$(".mainLabChemical .btnLeft").click(function () {
  hide = ".mainLabChemical";
  show = ".mainLabLift";
  changeBG(hide, show);
});
$(".mainLabChemical .btnRight").click(function () {
  hide = ".mainLabChemical";
  show = ".mainLabStairs";
  changeBG(hide, show);
});
$(".mainLabChemical .btnDown").click(function () {
  hide = ".mainLabChemical";
  show = ".mainLabWorktable";
  changeBG(hide, show);
});

//ini tangga di mainlab
$(".mainLabStairs .btnLeft").click(function () {
  hide = ".mainLabStairs";
  show = ".mainLabChemical";
  changeBG(hide, show);
});
$(".mainLabStairs .btnRight").click(function () {
  hide = ".mainLabStairs";
  show = ".mainLabWorktable";
  changeBG(hide, show);
});
$(".mainLabStairs .btnDown").click(function () {
  hide = ".mainLabStairs";
  show = ".mainLabLift";
  changeBG(hide, show);
});
$(".mainLabStairs .btnUp").click(function () {
  hide = ".mainLabStairs";
  show = ".mainLabMonitor";
  changeBG(hide, show);
});

// ini monitor gede di mainlab
var photoHugeMonitor = 0;
$(".mainLabMonitor .btnHugeMonitor").click(function () {
  $(".checkPlayerone").load("checkPlayerone.php");
  if (polaroidcamera != 1) {
    chatArrayIndex = 15;
    clickTrusChatPopUp(chatArrayIndex);
  } else {
    if (polaroid > 0 && photoHugeMonitor < 1) {
      openCamera(".confirmationHugeMonitor");
    } else {
      chatArrayIndex = 15;
      clickTrusChatPopUp(chatArrayIndex);
    }
  }
});
$(".mainLabMonitor .selectAHugeMonitor").click(function () {
  if (polaroid == 3) {
    acquiredItem = "url(../playerone/img/itemphotos.webp)";
    acquiredItemName = "Photos";
    addItem();
  }
  polaroid--;
  bonuspoints++;
  $.ajax({
    type: "post",
    url: "playerone.php?p=bonuscamera",
    data: { stat: bonuspoints },
    dataType: "html",
    success: function (result) {},
  }).done(function () {
    $(".checkPlayerone").load("checkPlayerone.php");
    photoHugeMonitor++;
    closePopUpTwo();
    chatArrayIndex = 20;
    clickTrusChatPopUp(chatArrayIndex);
  });
});

$(".mainLabMonitor .btnLeft").click(function () {
  hide = ".mainLabMonitor";
  show = ".mainLabWhiteboard";
  changeBG(hide, show);
});
$(".mainLabMonitor .btnRight").click(function () {
  hide = ".mainLabMonitor";
  show = ".mainLabPhotos";
  changeBG(hide, show);
});
$(".mainLabMonitor .btnDown").click(function () {
  hide = ".mainLabMonitor";
  show = ".mainLabLift";
  changeBG(hide, show);
});

// ini photophoto di mainlab
var photoPhotoFrame = 0;
$(".mainLabPhotos .btnPhotoFrames").click(function () {
  $(".checkPlayerone").load("checkPlayerone.php");
  if (polaroidcamera != 1) {
    chatArrayIndex = 16;
    clickTrusChatPopUp(chatArrayIndex);
  } else {
    if (polaroid > 0 && photoPhotoFrame < 1) {
      openCamera(".confirmationPhotos");
    } else {
      chatArrayIndex = 16;
      clickTrusChatPopUp(chatArrayIndex);
    }
  }
});
$(".mainLabPhotos .selectAPhotos").click(function () {
  $(".checkPlayerone").load("checkPlayerone.php");
  if (polaroid == 3) {
    acquiredItem = "url(../playerone/img/itemphotos.webp)";
    acquiredItemName = "Photos";
    addItem();
  }
  polaroid--;
  photoPhotoFrame++;
  closePopUpTwo();
  chatArrayIndex = 20;
  clickTrusChatPopUp(chatArrayIndex);
});
$(".mainLabPhotos .btnLeft").click(function () {
  hide = ".mainLabPhotos";
  show = ".mainLabMonitor";
  changeBG(hide, show);
});
$(".mainLabPhotos .btnRight").click(function () {
  hide = ".mainLabPhotos";
  show = ".mainLabLift";
  changeBG(hide, show);
});
$(".mainLabPhotos .btnDown").click(function () {
  hide = ".mainLabPhotos";
  show = ".mainLabWhiteboard";
  changeBG(hide, show);
});

//ini whiteboard di mainlab
var photoNoteVirus = 0;
$(".mainLabWhiteboard .btnNoteVirus").click(function () {
  $(".checkPlayerone").load("checkPlayerone.php");
  if (polaroidcamera != 1) {
    chatArrayIndex = 19;
    clickTrusChatPopUp(chatArrayIndex);
  } else {
    if (polaroid > 0 && photoNoteVirus < 1) {
      openCamera(".confirmationNoteVirus");
    } else {
      chatArrayIndex = 19;
      clickTrusChatPopUp(chatArrayIndex);
    }
  }
});

$(".mainLabWhiteboard .selectANoteVirus").click(function () {
  if (polaroid == 3) {
    acquiredItem = "url(../playerone/img/itemphotos.webp)";
    acquiredItemName = "Photos";
    addItem();
  }
  polaroid--;
  bonuspoints++;
  $.ajax({
    type: "post",
    url: "playerone.php?p=bonuscamera",
    data: { stat: bonuspoints },
    dataType: "html",
    success: function (result) {},
  }).done(function () {
    $(".checkPlayerone").load("checkPlayerone.php");
    photoNoteVirus++;
    closePopUpTwo();
    chatArrayIndex = 20;
    clickTrusChatPopUp(chatArrayIndex);
  });
});

var photoNoteMom = 0;
$(".mainLabWhiteboard .btnNoteMom").click(function () {
  $(".checkPlayerone").load("checkPlayerone.php");
  if (polaroidcamera != 1) {
    chatArrayIndex = 18;
    clickTrusChatPopUp(chatArrayIndex);
  } else {
    if (polaroid > 0 && photoNoteMom < 1) {
      openCamera(".confirmationNoteMom");
    } else {
      chatArrayIndex = 18;
      clickTrusChatPopUp(chatArrayIndex);
    }
  }
});
$(".mainLabWhiteboard .selectANoteMom").click(function () {
  $(".checkPlayerone").load("checkPlayerone.php");
  if (polaroid == 3) {
    acquiredItem = "url(../playerone/img/itemphotos.webp)";
    acquiredItemName = "Photos";
    addItem();
  }
  polaroid--;
  photoNoteMom++;
  closePopUpTwo();
  chatArrayIndex = 20;
  clickTrusChatPopUp(chatArrayIndex);
});

var photoNoteTrash = 0;
$(".mainLabWhiteboard .btnNoteTrash").click(function () {
  $(".checkPlayerone").load("checkPlayerone.php");
  if (polaroidcamera != 1) {
    chatArrayIndex = 17;
    clickTrusChatPopUp(chatArrayIndex);
  } else {
    if (polaroid > 0 && photoNoteTrash < 1) {
      openCamera(".confirmationNoteTrash");
    } else {
      chatArrayIndex = 17;
      clickTrusChatPopUp(chatArrayIndex);
    }
  }
});
$(".mainLabWhiteboard .selectANoteTrash").click(function () {
  $(".checkPlayerone").load("checkPlayerone.php");
  if (polaroid == 3) {
    acquiredItem = "url(../playerone/img/itemphotos.webp)";
    acquiredItemName = "Photos";
    addItem();
  }
  polaroid--;
  photoNoteTrash++;
  closePopUpTwo();
  chatArrayIndex = 20;
  clickTrusChatPopUp(chatArrayIndex);
});

$(".mainLabWhiteboard .btnLeft").click(function () {
  hide = ".mainLabWhiteboard";
  show = ".mainLabLift";
  changeBG(hide, show);
});
$(".mainLabWhiteboard .btnRight").click(function () {
  hide = ".mainLabWhiteboard";
  show = ".mainLabMonitor";
  changeBG(hide, show);
});
$(".mainLabWhiteboard .btnDown").click(function () {
  hide = ".mainLabWhiteboard";
  show = ".mainLabPhotos";
  changeBG(hide, show);
});

// ini jalan ke kiri
$(".gate05aBG .btnGateIpad").click(function () {
  gateName = ".gate05aClueBG";
  openGateClue(gateName);
});
$(".gate05aBG .btnGate").click(function () {
  $.ajax({
    type: "post",
    url: "playerone.php?p=checkgate05a",
    data: { stat: dbcheck },
    dataType: "html",
    success: function (result) {
      dbcheck = result;
    },
  }).done(function () {
    if (dbcheck == "1") {
      hide = ".gate05aBG";
      show = ".labSectionBG";
      changeBG(hide, show);
    } else {
      $(".checkPlayerone").load("checkPlayerone.php");
      chatArrayIndex = 21;
      clickTrusChatPopUp(chatArrayIndex);
    }
  });
});
$(".gate05aBG .btnDown").click(function () {
  hide = ".gate05aBG";
  show = ".threeLab";
  changeBG(hide, show);
});

//ini diperempatan abis buka gate05f
$(".labSectionBG .btnDown").click(function () {
  hide = ".labSectionBG";
  show = ".gate05aBG";
  changeBG(hide, show);
});
$(".labSectionBG .btnUp").click(function () {
  $(".checkPlayerone").load("checkPlayerone.php");
  chatArrayIndex = 22;
  clickTrusChatPopUp(chatArrayIndex);
});
$(".labSectionBG .btnLeft").click(function () {
  hide = ".labSectionBG";
  show = ".gate05bBG";
  changeBG(hide, show);
});

//ini gate05b yang mau ke specimen
$(".gate05bBG .btnGateIpad").click(function () {
  gateName = ".gate05bClueBG";
  openGateClue(gateName);
});
$(".gate05bBG .btnGate").click(function () {
  $.ajax({
    type: "post",
    url: "playerone.php?p=checkgate05b",
    data: { stat: dbcheck },
    dataType: "html",
    success: function (result) {
      dbcheck = result;
    },
  }).done(function () {
    if (dbcheck == "1") {
      hide = ".gate05bBG";
      show = ".specimenGateBG";
      changeBG(hide, show);
    } else {
      $(".checkPlayerone").load("checkPlayerone.php");
      chatArrayIndex = 21;
      clickTrusChatPopUp(chatArrayIndex);
    }
  });
});
$(".gate05bBG .btnDown").click(function () {
  hide = ".gate05bBG";
  show = ".labSectionBG";
  changeBG(hide, show);
});

// ini specimen gate yang mau masuk kedalem specimen room
$(".specimenGateBG .btnLeft").click(function () {
  hide = ".specimenGateBG";
  show = ".gate05bBG";
  changeBG(hide, show);
});
var professorfirstinteraction = 0;
$(".specimenGateBG .btnProfessor").click(function () {
  $(".checkPlayerone").html("Professor");
  if (professorfirstinteraction == 0) {
    professorfirstinteraction = 1;
    chatArrayIndex = 23;
    clickTrusChatPopUp(chatArrayIndex);
  } else if(virustube == 1){
    window.open("finalstage.html");
  } else{
    chatArrayIndex = 38;
    clickTrusChatPopUp(chatArrayIndex);
  }
});
$(".specimenGateBG .btnGate").click(function () {
  hide = ".specimenGateBG";
  show = ".specimenRoomOneBG";
  changeBG(hide, show);
});

// ini specimen room pertama
$(".specimenRoomOneBG .btnDown").click(function () {
  hide = ".specimenRoomOneBG";
  show = ".specimenGateBG";
  changeBG(hide, show);
});
$(".specimenRoomOneBG .btnUp").click(function () {
  hide = ".specimenRoomOneBG";
  show = ".specimenRoomOneBG";
  changeBG(hide, show);
});
$(".specimenRoomOneBG .btnLeft").click(function () {
  hide = ".specimenRoomOneBG";
  show = ".specimenRoomTwoBG";
  changeBG(hide, show);
});
$(".specimenRoomOneBG .btnRight").click(function () {
  hide = ".specimenRoomOneBG";
  show = ".specimenRoomOneBG";
  changeBG(hide, show);
});
// ini specimen room kedua
$(".specimenRoomTwoBG .btnDown").click(function () {
  hide = ".specimenRoomTwoBG";
  show = ".specimenRoomOneBG";
  changeBG(hide, show);
});
$(".specimenRoomTwoBG .btnUp").click(function () {
  hide = ".specimenRoomTwoBG";
  show = ".specimenRoomThreeBG";
  changeBG(hide, show);
});
$(".specimenRoomTwoBG .btnLeft").click(function () {
  hide = ".specimenRoomTwoBG";
  show = ".specimenRoomOneBG";
  changeBG(hide, show);
});
$(".specimenRoomTwoBG .btnRight").click(function () {
  hide = ".specimenRoomTwoBG";
  show = ".specimenRoomOneBG";
  changeBG(hide, show);
});
// ini specimen room tiga
$(".specimenRoomThreeBG .btnDown").click(function () {
  hide = ".specimenRoomThreeBG";
  show = ".specimenRoomTwoBG";
  changeBG(hide, show);
});
$(".specimenRoomThreeBG .btnUp").click(function () {
  hide = ".specimenRoomThreeBG";
  show = ".specimenRoomOneBG";
  changeBG(hide, show);
});
$(".specimenRoomThreeBG .btnLeft").click(function () {
  hide = ".specimenRoomThreeBG";
  show = ".specimenRoomOneBG";
  changeBG(hide, show);
});
$(".specimenRoomThreeBG .btnRight").click(function () {
  hide = ".specimenRoomThreeBG";
  show = ".specimenRoomFourBG";
  changeBG(hide, show);
});
// ini specimen room empat
$(".specimenRoomFourBG .btnDown").click(function () {
  hide = ".specimenRoomFourBG";
  show = ".specimenRoomThreeBG";
  changeBG(hide, show);
});
$(".specimenRoomFourBG .btnUp").click(function () {
  hide = ".specimenRoomFourBG";
  show = ".specimenRoomOneBG";
  changeBG(hide, show);
});
$(".specimenRoomFourBG .btnLeft").click(function () {
  hide = ".specimenRoomFourBG";
  show = ".specimenRoomOneBG";
  changeBG(hide, show);
});
$(".specimenRoomFourBG .btnRight").click(function () {
  hide = ".specimenRoomFourBG";
  show = ".specimenRoomFiveBG";
  changeBG(hide, show);
});
// ini specimen room lima
$(".specimenRoomFiveBG .btnDown").click(function () {
  hide = ".specimenRoomFiveBG";
  show = ".specimenRoomFourBG";
  changeBG(hide, show);
});
$(".specimenRoomFiveBG .btnUp").click(function () {
  hide = ".specimenRoomFiveBG";
  show = ".specimenRoomOneBG";
  changeBG(hide, show);
});
$(".specimenRoomFiveBG .btnLeft").click(function () {
  hide = ".specimenRoomFiveBG";
  show = ".specimenRoomOneBG";
  changeBG(hide, show);
});
$(".specimenRoomFiveBG .btnRight").click(function () {
  hide = ".specimenRoomFiveBG";
  show = ".specimenRoomSixBG";
  changeBG(hide, show);
});
// ini specimen room enam

var virustube = 0;
$(".specimenRoomSixBG .btnTube").click(function () {
  $(".checkPlayerone").load("checkPlayerone.php");
  $(".specimenRoomSixBG .btnTube").css("display", "none");
  acquiredItem = "url(../playerone/img/itemvirustube.webp)";
  acquiredItemName = "Liquid Tube";
  virustube = 1;
  addItem();
  chatArrayIndex = 42;
  clickTrusChatPopUp(chatArrayIndex);
});

$(".specimenRoomSixBG .btnDown").click(function () {
  hide = ".specimenRoomSixBG";
  show = ".specimenRoomFiveBG";
  changeBG(hide, show);
});
$(".specimenRoomSixBG .btnLeft").click(function () {
  hide = ".specimenRoomSixBG";
  show = ".specimenRoomFourBG";
  changeBG(hide, show);
});
$(".specimenRoomSixBG .btnRight").click(function () {
  hide = ".specimenRoomSixBG";
  show = ".specimenRoomThreeBG";
  changeBG(hide, show);
});
