
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
    if (
      $(".gameHUD .chatBox").css("visibility") != "visible"
    ) {
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