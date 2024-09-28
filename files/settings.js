function Settings(props) {
  // console.log("settings");
  var _this = this;
  createjs.EventDispatcher.initialize(Slider.prototype);
  var slider;
  var internalObject = {};
  var menuInstance = props.menuInstance;
  menuInstance.lightbox.visible = false;
  var language = props.language;
  var timerInstance = props.timerInstance;
  var isAllowed = { remove: false, save: false, update: false };
  var knobMax = props.knobMax;
  var initialThumbPos = menuInstance.list.thumb.x;
  var fromServer = props.fromServer;
  var fromURL = props.fromURL;
  var demoSound;
  var demoVolume = 0.2;
  var comboSelectOptions = { display: "HH:MM:SS", sfx: 1 };
  var comboSelectedIndexes = {
    display: Helper.defaultDisplay.indexOf(fromURL.display),
    sfx: fromURL.sounds.findIndex(function (x) {
      return x.fileName === fromURL.ns;
    }),
  };
  var inputValue = props.titleInput;
  var inputValue1 = props.titleInput1;
  var inputValue2 = props.titleInput2;
  var characterNum = props.characterNum;
  var freeMaxAllowed = props.freeMaxAllowed;
  var characterMaxNum = props.characterMaxNum;
  var characterMinNum = props.characterMinNum;
  var sounds = fromURL.sounds;
  var soundClass = props.soundClass;
  var nslen = fromURL.nslen;
  if (nslen === 998) {
    soundClass.setSfxNsLen(nslen);
    menuInstance.lightbox.nsLenLoop.gotoAndStop(1);
  }
  var isLogoVisible = false;
  $("#selectDrop").hide();
  $("#titleInput").hide();
  $("#titleInput1").hide();
  $("#titleInput2").hide();
  $("#namesList").hide();
  menuInstance.list.premium1.visible = false;
  if (menuInstance.list.ownLogoPromo) {
    menuInstance.list.ownLogoPromo.visible = true;
    menuInstance.list.ownLogoPromo.tickcross.cross.visible = true;
    menuInstance.list.ownLogoPromo.tickcross.tick.visible = false;
    menuInstance.list.ownLogoPromo.tickcross.cursor = "pointer";
    menuInstance.list.ownLogoPromo.tickcross.addEventListener(
      "mousedown",
      showLogoEG
    );
  }
  if (fromURL.ownLogo && fromServer.type !== "free") {
    menuInstance.list.ownLogoPromo.tickcross.tick.visible = true;
    menuInstance.list.ownLogoPromo.tickcross.cross.visible = false;
    isLogoVisible = true;
  }
  function showLogoEG(e) {
    if (!menuInstance.list.ownLogoPromo.tickcross.cross.visible) {
      menuInstance.list.ownLogoPromo.tickcross.cross.visible = true;
      menuInstance.list.ownLogoPromo.tickcross.tick.visible = false;
      isLogoVisible = false;
    } else {
      menuInstance.list.ownLogoPromo.tickcross.cross.visible = false;
      menuInstance.list.ownLogoPromo.tickcross.tick.visible = true;
      isLogoVisible = true;
    }
  }
  function showNameCount() {
    var txt = $("#namesList").val();
    txt = txt.trim().split("\n");
    var showLength = txt.length;
    if (!$("#namesList").prop("readonly")) {
      if (showLength > characterMaxNum) {
        txt = txt.slice(0, characterMaxNum);
        $("#namesList").val(txt.join("\n"));
        showLength = characterMaxNum;
      }
    }
    if (txt[0] === "") showLength = 0;
    menuInstance.list.namesInList.text =
      language.translate("Names in list: ") +
      showLength +
      "/" +
      characterMaxNum;
    _this.fixDom(menuInstance.list.namesList, $("#namesList"));
  }
  function onMenuShowNameCount() {
    menuInstance.list.namesInList.text =
      language.translate("Names in list: ") + listCollector.list.length;
  }
  if (fromServer.type === "free") {
    isAllowed.remove = false;
    isAllowed.save = false;
    isAllowed.update = false;
    menuInstance.list.premium0.visible = false;
    menuInstance.list.premium1.visible = false;
    menuInstance.list.btn_delete.visible = false;
    menuInstance.list.btn_winner.visible = true;
    menuInstance.list.btn_new.visible = false;
    menuInstance.list.mc_delete.addEventListener("mousedown", showPremium);
    menuInstance.list.mc_save.addEventListener("mousedown", showPremium);
    menuInstance.list.mc_update.addEventListener("mousedown", showPremium);
  }
  if (fromServer.owner === "other") {
    isAllowed.remove = false;
    isAllowed.save = false;
    isAllowed.update = false;
    menuInstance.list.btn_delete.visible = false;
    menuInstance.list.btn_winner.visible = true;
    menuInstance.list.mc_delete.alpha = 0.5;
    menuInstance.list.mc_update.alpha = 0.5;
  }
  if (menuInstance.list.choiceToggle) {
    var characterStyle = parseInt(props.characterStyle);
    menuInstance.list.choiceToggle.gotoAndStop(characterStyle);
    menuInstance.list.choiceToggle.updateCache();
  }
  var listCollector = { list: fromServer.list, restoredList: fromServer.list };
  $("#namesList").val(listCollector.list.join("\n"));
  setLightBoxDomElements("hide");
  createjs.EventDispatcher.initialize(Server.prototype);
  var server = new Server();
  server.addEventListener("serverAnswer", serverAnswer);
  function serverAnswer(e) {
    if (menuInstance.list.currentFrame === 2)
      menuInstance.list.btn_done.dispatchEvent("mousedown");
    setLightBoxDomElements("hide");
    if (e.action === "saveas") {
      isAllowed.remove = true;
      isAllowed.save = true;
      isAllowed.update = true;
      menuInstance.list.btn_delete.visible = true;
      menuInstance.list.btn_winner.visible = true;
      menuInstance.list.mc_delete.alpha = 1;
      menuInstance.list.mc_update.alpha = 1;
      fromServer.r = e.data.r;
      fromServer.owner = e.data.owner;
      fromServer.type = e.data.type;
      Helper.addUrlParameter(null, "r", fromServer.r, true);
    } else if (e.action === "delete") {
      Helper.addUrlParameter(null, "r", "", true);
      isAllowed.remove = false;
      isAllowed.save = true;
      isAllowed.update = false;
      menuInstance.list.btn_delete.visible = false;
      menuInstance.list.btn_winner.visible = false;
      menuInstance.list.mc_delete.alpha = 0.5;
      menuInstance.list.mc_update.alpha = 0.5;
    }
  }
  function setLightBoxDomElements(hideOrShow) {
    if (hideOrShow === "hide") {
      menuInstance.lightbox.visible = false;
      $("#titleInput").hide();
      $("#titleInput1").hide();
      $("#titleInput2").hide();
      $("#selectDrop").hide();
      $("#namesList").hide();
      $("#countInput").show();
    } else {
      menuInstance.lightbox.visible = true;
      exportRoot.settings.lightbox.titleInputText.visible = true;
      exportRoot.settings.lightbox.titleInputText1.visible = true;
      exportRoot.settings.lightbox.titleInputText2.visible = true;
      $("#titleInput").show();
      $("#titleInput1").show();
      $("#titleInput2").show();
      $("#selectDrop").hide();
      $("#namesList").hide();
      $("#countInput").hide();
    }
  }
  _this.fixDom = function (cjsElement, jqElement) {
    var counter = 0;
    var dummy = new createjs.Container();
    var tween = createjs.Tween.get(dummy, {
      loop: true,
      ignoreGlobalPause: true,
    }).wait(25);
    tween.addEventListener("change", letsWait);
    function letsWait() {
      counter++;
      if (jqElement.length > 0 || counter > 25) {
        createjs.Tween.removeTweens(dummy);
        tween.removeAllEventListeners();
        tween = undefined;
        dummy = undefined;
        letsDo();
      }
    }
    function letsDo() {
      var trw = cjsElement.nominalBounds.width;
      if (
        menuInstance.lightbox.previewSound &&
        menuInstance.lightbox.nsLenLoop &&
        menuInstance.lightbox.nsLenLoop.visible
      ) {
        trw = 80;
      }
      if (cjsElement.name === "namesList") {
        trw = 100;
      }
      var props = cjsElement.getConcatenatedDisplayProps(cjsElement._props);
      var mat = props.matrix;
      var tx1 = mat.decompose();
      var sx = tx1.scaleX;
      var sy = tx1.scaleY;
      var w = trw * sx;
      var h = cjsElement.nominalBounds.height * sy;
      jqElement.height(h);
      jqElement.width(w);
    }
  };
  _this.show = function () {
    menuInstance.visible = true;
    timerInstance.visible = false;
    onMenuShowNameCount();
    waitForReady("#namesList", function () {
      $("#namesList").hide();
    });
    goLive();
    if (menuInstance.list.currentFrame === 0) sliderInput();
    menuInstance.parent.setChildIndex(
      menuInstance,
      menuInstance.parent.numChildren - 1
    );
  };
  _this.hide = function () {
    menuInstance.visible = false;
    timerInstance.visible = true;
    // $("#titleInput").hide();
    // $("#titleInput1").hide();
    // $("#titleInput2").hide();
    $("#selectDrop").hide();
    $("#namesList").hide();
    $("#countInput").hide();
  };
  _this.fakeLoader = function (action) {
    if (action === "show") {
      menuInstance.visible = true;
      menuInstance.loader.bar.resizable.scaleX = Math.getRandomArbitrary(
        0.3,
        0.8
      );
      menuInstance.loader.visible = true;
      $("#countInput").hide();
    } else {
      menuInstance.visible = false;
      menuInstance.loader.bar.resizable.scaleX = 0;
      menuInstance.loader.visible = false;
    }
  };
  _this.removeWinner = function (newList) {
    listCollector.list = newList.split("\n").filter(function (el) {
      return $.trim(el) !== "";
    });
    onMenuShowNameCount();
  };
  _this.loaderReset = function () {
    menuInstance.visible = true;
    menuInstance.mouseEnabled = false;
    menuInstance.loader.bar.resizable.scaleX = 0;
    menuInstance.loader.visible = true;
    waitForReady("#titleInput", function () {
      $("#titleInput").hide();
    });
    waitForReady("#titleInput1", function () {
      $("#titleInput1").hide();
    });
    waitForReady("#titleInput2", function () {
      $("#titleInput2").hide();
    });
    waitForReady("#selectDrop", function () {
      $("#selectDrop").hide();
    });
    waitForReady("#namesList", function () {
      $("#namesList").hide();
    });
    waitForReady("#countInput", function () {
      $("#countInput").hide();
    });
  };
  _this.loaderUpdate = function (val) {
    menuInstance.loader.bar.resizable.scaleX = val;
  };
  function showPremium() {
    menuInstance.list.mc_delete.removeEventListener("mousedown", showPremium);
    menuInstance.list.mc_save.removeEventListener("mousedown", showPremium);
    menuInstance.list.mc_update.removeEventListener("mousedown", showPremium);
    if (fromServer.type === "free" && !menuInstance.list.premium1.visible) {
      if (createjs.Ticker.paused) {
        menuInstance.list.premium1.visible = true;
      } else {
        menuInstance.list.premium1.alpha = 0;
        menuInstance.list.premium1.visible = true;
        createjs.Tween.get(menuInstance.list.premium1).to({ alpha: 1 }, 500);
      }
    }
  }
  function forServer() {
    menuInstance.list.btn_delete.removeAllEventListeners();
    menuInstance.list.btn_delete.addEventListener("mousedown", saveOptions);
    menuInstance.list.btn_winner.removeAllEventListeners();
    menuInstance.list.btn_winner.addEventListener("mousedown", saveOptions);
    menuInstance.list.btn_new.removeAllEventListeners();
    // menuInstance.list.btn_new.addEventListener("mousedown", saveOptions);
    function saveOptions(e) {
      calc();
      menuInstance.lightbox.nsLenLoop.visible = false;
      setLightBoxDomElements("show");
      var whatWeDoing = e.currentTarget.name;
      if (
        (whatWeDoing === "btn_delete" || whatWeDoing === "btn_winner") &&
        $.trim($("#titleInput").val()) === ""
      ) {
        waitForReady("#titleInput", function () {
          $("#selectDrop").hide();
          $("#titleInput").show();
          $("#titleInput").val(inputValue);
          _this.fixDom(menuInstance.lightbox.titleInput, $("#titleInput"));
        });
        waitForReady("#titleInput1", function () {
          $("#selectDrop").hide();
          $("#titleInput1").show();
          $("#titleInput1").val(inputValue1);
          _this.fixDom(menuInstance.lightbox.titleInput1, $("#titleInput1"));
        });
        waitForReady("#titleInput2", function () {
          $("#selectDrop").hide();
          $("#titleInput2").show();
          $("#titleInput2").val(inputValue2);
          _this.fixDom(menuInstance.lightbox.titleInput2, $("#titleInput2"));
        });
      } else if (whatWeDoing === "btn_new") {
        // waitForReady("#titleInput", function () {
        //   $("#selectDrop").hide();
        //   $("#titleInput").show();
        //   $("#titleInput").val("");
        //   _this.fixDom(menuInstance.lightbox.titleInput, $("#titleInput"));
        // });
      }
      var isReadOnly = whatWeDoing === "btn_delete";
      $("#titleInput").prop("readonly", isReadOnly);
      $("#titleInput1").prop("readonly", isReadOnly);
      $("#titleInput2").prop("readonly", isReadOnly);
      menuInstance.lightbox.grc_cancel.removeAllEventListeners();
      menuInstance.lightbox.grc_cancel.addEventListener(
        "mousedown",
        function (e) {
          setLightBoxDomElements("hide");
          if (menuInstance.list.currentFrame === 2) {
            $("#namesList").show();
          }
        }
      );
      menuInstance.lightbox.grc_set.removeAllEventListeners();
      menuInstance.lightbox.grc_set.addEventListener("mousedown", function (e) {
        var title = $.trim($("#titleInput").val());
        var title1 = $.trim($("#titleInput1").val());
        var title2 = $.trim($("#titleInput2").val());
        // if (title === "") {
        //   menuInstance.lightbox.info.color = "red";
        //   menuInstance.lightbox.info.text = language.translate(
        //     "Name Your Timer :-)"
        //   );
        //   return;
        // }
        fromServer.title = title;
        var tempList = $("#namesList")
          .val()
          .split("\n")
          .filter(function (el) {
            return $.trim(el) !== "";
          });
        if (tempList.length !== 0) listCollector.list = tempList;
        var list = listCollector.list.join(",");
        var obj = {
          type: "premium",
          list: list,
          title: title,
          url: Helper.removeUrlParameter("r", null),
        };
        if (menuInstance.list.currentFrame === 0) {
          var currentList = JSON.stringify(listCollector.list.sort());
          var defaultList = JSON.stringify(
            Helper.defaultList.split(",").sort()
          );
          if (currentList === defaultList) obj.list = "";
        }
        menuInstance.lightbox.grc_set.removeAllEventListeners();
        setLightBoxDomElements("hide");
        if (whatWeDoing === "btn_delete") {
          obj.r = fromServer.r;
          server.remove(obj);
        } else if (whatWeDoing === "btn_winner") {
          inputValue = title;
          inputValue1 = title1;
          inputValue2 = title2;
          // obj.r = fromServer.r;
          // server.save(obj);
        } else if (whatWeDoing === "btn_new") {
          server.saveas(obj);
        }
      });
      menuInstance.lightbox.info.color = "#000000";
      if (whatWeDoing === "btn_delete") {
        menuInstance.lightbox.info.text = language.translate(
          "Delete this Timer?\n\n(This is Permanent!)"
        );
      } else if (whatWeDoing === "btn_winner") {
        menuInstance.lightbox.info.text = language.translate("");
      } else if (whatWeDoing === "btn_new") {
        menuInstance.lightbox.info.text = language.translate(
          "\nSave as New Timer?"
        );
      }
    }
  }
  function calculateMilliseconds(val) {
    var timerParts = val.split(":");
    var hours = parseInt(timerParts[0]) * 60 * 60 * 1000;
    var minutes = parseInt(timerParts[1]) * 60 * 1000;
    var seconds = parseInt(timerParts[2]) * 1000;
    var timeMilliseconds = hours + minutes + seconds;
    if (timeMilliseconds === 0) timeMilliseconds = 10000;
    return timeMilliseconds;
  }
  function calc() {
    var clock;
    var timeMilliseconds;
    if (menuInstance.timer.newWay.visible) {
      timeMilliseconds = calculateMilliseconds(
        menuInstance.timer.newWay.display.valueForTimer
      );
      clock = menuInstance.timer.newWay.clock.text.split(":");
      clock = clock[0] + ":" + clock[1] + ":" + "00";
    } else {
      timeMilliseconds = calculateMilliseconds(
        menuInstance.timer.oldWay.display.text
      );
    }
    var eventData = {};
    var characterStyle = 0;
    $("#countInput").hide();
    if (menuInstance.list.choiceToggle) {
      characterStyle = menuInstance.list.choiceToggle.currentFrame;
      setTimeout(function () {
        Helper.addUrlParameter(null, "characterStyle", characterStyle, true);
      }, 30);
    }
    if (menuInstance.list.currentFrame === 0) {
      characterNum = parseInt(characterNum) === 1 ? 2 : characterNum;
      slider.setCharNum(characterNum);
      Helper.addUrlParameter(null, "characters", characterNum, true);
      eventData = {
        inputValue: inputValue,
        inputValue1: inputValue1,
        inputValue2: inputValue2,
        timerMilliseconds: timeMilliseconds,
        characterNum: characterNum,
        showNumbers: menuInstance.list.tickcross.tick.visible,
        isLogoVisible: isLogoVisible,
        showNames: false,
        display: comboSelectOptions.display,
        sfx: comboSelectOptions.sfx,
        nslen: nslen,
        characterStyle: characterStyle,
        clock: clock
          ? { time: clock, ampm: menuInstance.timer.newWay.ampm.text }
          : undefined,
      };
    } else {
      var currentList = listCollector.list.clone();
      Helper.addUrlParameter(null, "characters", currentList.length, true);
      if (fromServer.type === "free") {
        if (currentList.length > characterMaxNum) {
          currentList.length = characterMaxNum;
        }
      }
      eventData = {
        inputValue: inputValue,
        inputValue1: inputValue1,
        inputValue2: inputValue2,
        timerMilliseconds: timeMilliseconds,
        list: currentList,
        display: comboSelectOptions.display,
        isLogoVisible: isLogoVisible,
        sfx: comboSelectOptions.sfx,
        nslen: nslen,
        characterStyle: characterStyle,
        clock: clock
          ? { time: clock, ampm: menuInstance.timer.newWay.ampm.text }
          : undefined,
      };
    }
    if (menuInstance.timer.oldWay.visible) {
      Helper.addUrlParameter(
        null,
        "countdown",
        (timeMilliseconds / 1000).toString().toHHMMSS(),
        true
      );
      setTimeout(function () {
        Helper.removeUrlParameter("clock", null, true);
      }, 30);
      setTimeout(function () {
        Helper.removeUrlParameter("clockType", null, true);
      }, 60);
    } else {
      Helper.addUrlParameter(
        null,
        "clock",
        menuInstance.timer.newWay.clock.text,
        true
      );
      setTimeout(function () {
        var type =
          menuInstance.timer.newWay.ampm.text === ""
            ? "24"
            : menuInstance.timer.newWay.ampm.text;
        Helper.addUrlParameter(null, "clockType", type, true);
      }, 30);
      setTimeout(function () {
        Helper.removeUrlParameter("countdown", null, true);
      }, 60);
    }
    return eventData;
  }
  function goLive() {
    createjs.Tween.removeTweens(internalObject);
    createjs.Tween.get(internalObject, { loop: true, ignoreGlobalPause: true })
      .wait(1000)
      .call(setClockDisplay);
    setClockDisplay();
  }
  function setClockDisplay() {
    var seconds =
      Helper.calculateClock(
        menuInstance.timer.newWay.clock.text,
        menuInstance.timer.newWay.ampm.text
      ) / 1000;
    var hhmmss = seconds.toString().toHHMMSS().split(":");
    var display = "";
    if (parseInt(hhmmss[0]) !== 0) {
      display += hhmmss[0] + " hrs, ";
    }
    seconds = 60 - new Date().getSeconds();
    if (seconds === 60) seconds = 0;
    display +=
      hhmmss[1] + " mins, " + (seconds < 10 ? "0" : "") + seconds + " secs";
    menuInstance.timer.newWay.display.text = display;
    menuInstance.timer.newWay.display.valueForTimer =
      hhmmss[0] + ":" + hhmmss[1] + ":00";
  }
  _this.init = function () {
    forServer();
    comboSelectOptions.display = fromURL.display;
    comboSelectOptions.sfx = fromURL.ns;
    menuInstance.timer.oldWay.display.text = fromURL.countdown;
    if (comboSelectOptions.sfx !== "mute")
      createjs.Sound.registerSound({
        id: "sfx",
        src: "/files/sounds/" + comboSelectOptions.sfx + ".mp3",
      });
    if (!menuInstance.list.tickcross.tickLock.visible) {
      menuInstance.list.tickcross.cross.visible = fromURL.bubble === "true";
      showNumbersChange();
      menuInstance.list.tickcross.cursor = "pointer";
    }
    menuInstance.list.thumb.cursor = "pointer";
    menuInstance.list.premium0.cursor = "pointer";
    menuInstance.list.premium1.cursor = "pointer";
    menuInstance.list.dragBarCover.cursor = "default";
    menuInstance.visible = true;
    timerInstance.visible = false;
    var digitCount = 0;
    var i, button;
    for (i = 0; i < 10; i++) {
      button = menuInstance.timer.oldWay["btn" + i];
      button.removeAllEventListeners();
      button.addEventListener("mousedown", setDigit);
    }
    menuInstance.timer.oldWay.btnset.removeAllEventListeners();
    menuInstance.timer.oldWay.btnset.addEventListener("mousedown", setTime);
    menuInstance.timer.oldWay.btnclear.removeAllEventListeners();
    menuInstance.timer.oldWay.btnclear.addEventListener("mousedown", clearTime);
    menuInstance.timer.newWay.am_btn.addEventListener(
      "mousedown",
      function (e) {
        dropAll();
        e.currentTarget.gotoAndStop(1);
        menuInstance.timer.newWay.ampm.text = "AM";
        slider_hr.setMax(12);
        slider_hr.setMin(1);
        var currentHr = parseInt(
          menuInstance.timer.newWay.clock.text.split(":")[0]
        );
        if (currentHr > 12) currentHr -= 12;
        if (currentHr === 0) currentHr = 12;
        menuInstance.timer.newWay.hr_txt.text = "12";
        menuInstance.timer.newWay.mn_txt.text = "01";
        var addon = currentHr < 10 ? "0" : "";
        var answer = addon + currentHr.toString() + ":";
        answer += menuInstance.timer.newWay.clock.text.split(":")[1];
        menuInstance.timer.newWay.clock.text = answer;
        slider_hr.setCharNum(currentHr);
        setClockDisplay();
      }
    );
    menuInstance.timer.newWay.pm_btn.addEventListener(
      "mousedown",
      function (e) {
        dropAll();
        e.currentTarget.gotoAndStop(1);
        menuInstance.timer.newWay.ampm.text = "PM";
        slider_hr.setMax(12);
        slider_hr.setMin(1);
        menuInstance.timer.newWay.hr_txt.text = "12";
        menuInstance.timer.newWay.mn_txt.text = "01";
        var currentHr = parseInt(
          menuInstance.timer.newWay.clock.text.split(":")[0]
        );
        if (currentHr > 12) currentHr -= 12;
        if (currentHr === 0) currentHr = 12;
        var addon = currentHr < 10 ? "0" : "";
        var answer = addon + currentHr.toString() + ":";
        answer += menuInstance.timer.newWay.clock.text.split(":")[1];
        menuInstance.timer.newWay.clock.text = answer;
        slider_hr.setCharNum(currentHr);
        setClockDisplay();
      }
    );
    menuInstance.timer.newWay.full_btn.addEventListener(
      "mousedown",
      function (e) {
        dropAll();
        e.currentTarget.gotoAndStop(1);
        slider_hr.setMax(23);
        slider_hr.setMin(0);
        var currentHr = parseInt(
          menuInstance.timer.newWay.clock.text.split(":")[0]
        );
        if (menuInstance.timer.newWay.ampm.text.toLowerCase() === "pm")
          currentHr += 12;
        if (currentHr === 24) currentHr = 0;
        var addon = currentHr < 10 ? "0" : "";
        var answer = addon + currentHr.toString() + ":";
        answer += menuInstance.timer.newWay.clock.text.split(":")[1];
        menuInstance.timer.newWay.clock.text = answer;
        slider_hr.setCharNum(currentHr);
        menuInstance.timer.newWay.ampm.text = "";
        menuInstance.timer.newWay.hr_txt.text = "23";
        menuInstance.timer.newWay.mn_txt.text = "00";
        setClockDisplay();
      }
    );
    function dropAll() {
      menuInstance.timer.newWay.am_btn.gotoAndStop(0);
      menuInstance.timer.newWay.pm_btn.gotoAndStop(0);
      menuInstance.timer.newWay.full_btn.gotoAndStop(0);
    }
    var slider_hr = new Slider(
      menuInstance.timer.newWay.thumb_hr,
      { x: 127, y: menuInstance.timer.newWay.thumb_hr.y },
      { x: 385, y: menuInstance.timer.newWay.thumb_hr.y },
      { min: 1, max: 12 }
    );
    slider_hr.addEventListener("sliding", slidingHr);
    slider_hr.autoCorrect = true;
    slider_hr.isClock = true;
    slider_hr.enableSlider();
    function slidingHr(e) {
      var currentVal = menuInstance.timer.newWay.clock.text;
      var addon = e.data.characterNum < 10 ? "0" : "";
      var answer = addon + e.data.characterNum.toString() + ":";
      answer += currentVal.split(":")[1];
      menuInstance.timer.newWay.clock.text = answer;
      setClockDisplay();
    }
    var slider_mn = new Slider(
      menuInstance.timer.newWay.thumb_mn,
      { x: 127, y: menuInstance.timer.newWay.thumb_mn.y },
      { x: 385, y: menuInstance.timer.newWay.thumb_mn.y },
      { min: 0, max: 59 }
    );
    slider_mn.addEventListener("sliding", slidingMn);
    slider_mn.autoCorrect = true;
    slider_mn.isClock = true;
    slider_mn.enableSlider();
    function slidingMn(e) {
      var currentVal = menuInstance.timer.newWay.clock.text;
      var addon = e.data.characterNum < 10 ? "0" : "";
      menuInstance.timer.newWay.clock.text =
        currentVal.split(":")[0] + ":" + addon + e.data.characterNum.toString();
      setClockDisplay();
    }
    if (fromURL.clock === "") {
      setPlus10Minutes();
    } else {
      dropAll();
      menuInstance.timer.newWay.clock.text = fromURL.clock;
      menuInstance.timer.newWay.ampm.text =
        fromURL.clockType === "24" ? "" : fromURL.clockType;
      switch (fromURL.clockType) {
        case "AM":
          slider_hr.setMax(12);
          slider_hr.setMin(1);
          menuInstance.timer.newWay.hr_txt.text = "12";
          menuInstance.timer.newWay.mn_txt.text = "01";
          menuInstance.timer.newWay.am_btn.gotoAndStop(1);
          break;
        case "PM":
          slider_hr.setMax(12);
          slider_hr.setMin(1);
          menuInstance.timer.newWay.hr_txt.text = "12";
          menuInstance.timer.newWay.mn_txt.text = "01";
          menuInstance.timer.newWay.pm_btn.gotoAndStop(1);
          break;
        case "24":
          slider_hr.setMax(23);
          slider_hr.setMin(0);
          menuInstance.timer.newWay.hr_txt.text = "23";
          menuInstance.timer.newWay.mn_txt.text = "00";
          menuInstance.timer.newWay.full_btn.gotoAndStop(1);
          break;
      }
      var hhmm = fromURL.clock.split(":");
      slider_mn.setCharNum(parseInt(hhmm[1]));
      slider_hr.setCharNum(parseInt(hhmm[0]));
      setClockDisplay();
    }
    menuInstance.timer.newWay.set_btn.addEventListener(
      "mousedown",
      function (e) {
        createjs.Ticker.paused = false;
        var event = new createjs.Event("complete");
        event.data = calc();
        $("#countInput").hide();
        setTimeout(function () {
          _this.dispatchEvent(event);
          setLightBoxDomElements("hide");
          $("#countInput").hide();
          menuInstance.back.visible = true;
        }, 90);
      }
    );
    if (!menuInstance.list.tickcross.tickLock.visible) {
      menuInstance.list.tickcross.removeAllEventListeners();
      menuInstance.list.tickcross.addEventListener(
        "mousedown",
        showNumbersChange
      );
    }
    menuInstance.back.removeAllEventListeners();
    menuInstance.back.addEventListener("mousedown", backToTimer);
    menuInstance.list.tab0.removeAllEventListeners();
    menuInstance.list.tab0.addEventListener("mousedown", switchTabs);
    menuInstance.list.tab1.removeAllEventListeners();
    menuInstance.list.tab1.addEventListener("mousedown", switchTabs);
    if (menuInstance.list.choiceToggle) {
      cache = new Cache();
      menuInstance.list.choiceToggle.removeAllEventListeners();
      menuInstance.list.choiceToggle.addEventListener("mousedown", function () {
        var frame =
          menuInstance.list.choiceToggle.currentFrame ===
          menuInstance.list.choiceToggle.totalFrames - 1
            ? 0
            : menuInstance.list.choiceToggle.currentFrame + 1;
        menuInstance.list.choiceToggle.gotoAndStop(frame);
        menuInstance.list.choiceToggle.updateCache();
        var event = new createjs.Event("change");
        menuInstance.list.choiceToggle.gotoAndStop(frame);
        menuInstance.list.choiceToggle.updateCache();
        event.data = { characterStyle: frame };
        _this.dispatchEvent(event);
      });
    }
    function prepareSelect(type) {
      var selectedIndex;
      var i;
      $("#selectDrop").empty();
      if (type === "display") {
        var versions = Helper.defaultDisplay;
        selectedIndex = comboSelectedIndexes.display;
        for (i = 0; i < versions.length; i++) {
          $("#selectDrop").append(
            $("<option></option>").attr("value", i).text(versions[i])
          );
        }
      } else if (type === "sound") {
        selectedIndex = comboSelectedIndexes.sfx;
        for (i = 0; i < sounds.length; i++) {
          $("#selectDrop").append(
            $("<option></option>").attr("value", i).text(sounds[i].niceName)
          );
        }
        $("#selectDrop").off("change");
        $("#selectDrop").on("change", function () {
          if (menuInstance.lightbox.previewSound.currentFrame === 1) {
            if (demoSound) demoSound.stop();
            menuInstance.lightbox.previewSound.gotoAndStop(0);
          }
        });
      }
      $("#selectDrop")[0].selectedIndex = selectedIndex;
      $("#selectDrop").show();
      _this.fixDom(menuInstance.lightbox.selectDrop, $("#selectDrop"));
      $(window).off("resize", resizer);
      $(window).resize(resizer);
    }
    function resizer() {
      _this.fixDom(menuInstance.lightbox.selectDrop, $("#selectDrop"));
    }
    if (fromURL.clock !== "") {
      menuInstance.timer.oldWay.visible = false;
      menuInstance.timer.newWay.visible = true;
      goLive();
    }
    menuInstance.timer.btn_clock.addEventListener("mousedown", function () {
      if (menuInstance.timer.oldWay.visible) {
        menuInstance.timer.oldWay.visible = false;
        menuInstance.timer.newWay.visible = true;
        goLive();
        if (!Helper.getURLparameter("clock")) {
          setPlus10Minutes();
        }
      } else {
        menuInstance.timer.oldWay.visible = true;
        menuInstance.timer.newWay.visible = false;
        createjs.Tween.removeTweens(internalObject);
      }
    });
    function setPlus10Minutes() {
      dropAll();
      var forwardTime = Helper.forwardTime(1000 * 60 * 10);
      slider_mn.setCharNum(parseInt(forwardTime.minutes));
      slider_hr.setCharNum(parseInt(forwardTime.hours12));
      menuInstance.timer.newWay.clock.text =
        forwardTime.hours12 + ":" + forwardTime.minutes;
      menuInstance.timer.newWay.ampm.text = forwardTime.ampm;
      menuInstance.timer.newWay[
        forwardTime.ampm.toLowerCase() + "_btn"
      ].gotoAndStop(1);
      setClockDisplay();
    }
    menuInstance.timer.btn_hhmmss.addEventListener("mousedown", function () {
      menuInstance.lightbox.visible = true;
      menuInstance.lightbox.nsLenLoop.visible = false;
      Helper.forceResize();
      waitForReady("#selectDrop", function () {
        prepareSelect("display");
        $("#titleInput").hide();
        $("#titleInput1").hide();
        $("#titleInput2").hide();
        exportRoot.settings.lightbox.titleInputText.visible = false;
        exportRoot.settings.lightbox.titleInputText1.visible = false;
        exportRoot.settings.lightbox.titleInputText2.visible = false;
        $("#countInput").hide();
      });
      menuInstance.lightbox.info.color = "#000000";
      menuInstance.lightbox.info.text = language.translate(
        "Change the Timer Display!\n\nE.g: 00:01:30 as 90s"
      );
      menuInstance.lightbox.grc_cancel.removeAllEventListeners();
      menuInstance.lightbox.grc_cancel.addEventListener(
        "mousedown",
        function (e) {
          $("#selectDrop").hide();
          $("#countInput").show();
          menuInstance.lightbox.visible = false;
        }
      );
      menuInstance.lightbox.grc_set.removeAllEventListeners();
      menuInstance.lightbox.grc_set.addEventListener("mousedown", function (e) {
        $selected = $("#" + $("#selectDrop").attr("id") + " option:selected");
        $("#selectDrop").hide();
        $("#countInput").show();
        menuInstance.lightbox.visible = false;
        var display = $selected.text();
        var index = parseInt($selected.val());
        comboSelectOptions.display = display;
        comboSelectedIndexes.display = index;
        Helper.addUrlParameter(null, "display", display, true);
      });
    });
    menuInstance.timer.btn_changesound.addEventListener(
      "mousedown",
      function () {
        menuInstance.lightbox.visible = true;
        $("#countInput").hide();
        waitForReady("#selectDrop", function () {
          prepareSelect("sound");
          $("#titleInput").hide();
          $("#titleInput1").hide();
          $("#titleInput2").hide();
          exportRoot.settings.lightbox.titleInputText.visible = false;
          exportRoot.settings.lightbox.titleInputText1.visible = false;
          exportRoot.settings.lightbox.titleInputText2.visible = false;
          $("#selectDrop").show();
        });
        menuInstance.lightbox.info.color = "#000000";
        menuInstance.lightbox.info.text = language.translate(
          "\n\nChange the Alarm Sound! :-)"
        );
        if (menuInstance.lightbox.nsLenLoop) {
          menuInstance.lightbox.nsLenLoop.visible = true;
          menuInstance.lightbox.nsLenLoop.removeAllEventListeners();
          menuInstance.lightbox.nsLenLoop.addEventListener(
            "mousedown",
            function (e) {
              var frameToGo =
                menuInstance.lightbox.nsLenLoop.currentFrame === 0 ? 1 : 0;
              menuInstance.lightbox.nsLenLoop.gotoAndStop(frameToGo);
            }
          );
        }
        if (menuInstance.lightbox.previewSound) {
          menuInstance.lightbox.previewSound.visible = true;
          menuInstance.lightbox.previewSound.gotoAndStop(0);
          menuInstance.lightbox.previewSound.removeAllEventListeners();
          menuInstance.lightbox.previewSound.addEventListener(
            "mousedown",
            previewSoundCall
          );
        }
        menuInstance.lightbox.grc_cancel.removeAllEventListeners();
        menuInstance.lightbox.grc_cancel.addEventListener(
          "mousedown",
          function (e) {
            $("#selectDrop").hide();
            $("#countInput").show();
            menuInstance.lightbox.visible = false;
            if (menuInstance.lightbox.nsLenLoop) {
              menuInstance.lightbox.nsLenLoop.visible = false;
              menuInstance.lightbox.nsLenLoop.removeAllEventListeners();
            }
            if (menuInstance.lightbox.previewSound) {
              if (demoSound) demoSound.stop();
              menuInstance.lightbox.previewSound.visible = false;
              menuInstance.lightbox.previewSound.removeAllEventListeners();
            }
          }
        );
        function demoSoundDone() {
          if (demoSound) demoSound.stop();
          menuInstance.lightbox.previewSound.gotoAndStop(0);
          demoSound.removeAllEventListeners();
        }
        function previewSoundCall(e) {
          if (menuInstance.lightbox.previewSound.currentFrame === 1) {
            if (demoSound) demoSound.stop();
            menuInstance.lightbox.previewSound.gotoAndStop(0);
            return;
          }
          $selected = $("#" + $("#selectDrop").attr("id") + " option:selected");
          var niceName = $selected.text();
          if (niceName === "Mute All") return;
          var index = sounds.findIndex(function (x) {
            return x.niceName === niceName;
          });
          var fileName = sounds[index].fileName;
          if (index === parseInt(comboSelectedIndexes.sfx)) {
            if (demoSound) demoSound.stop();
            createjs.Sound.registerSound(
              "/files/sounds/" + fileName + ".mp3",
              fileName
            );
            demoSound = createjs.Sound.play(fileName, {
              interrupt: createjs.Sound.INTERRUPT_ANY,
              loop: 0,
            });
            demoSound.volume = demoVolume;
            demoSound.addEventListener("complete", demoSoundDone);
            menuInstance.lightbox.previewSound.gotoAndStop(1);
          } else if (createjs.Sound.loadComplete(fileName)) {
            if (demoSound) demoSound.stop();
            demoSound = createjs.Sound.play(fileName, {
              interrupt: createjs.Sound.INTERRUPT_ANY,
              loop: 0,
            });
            demoSound.volume = demoVolume;
            demoSound.addEventListener("complete", demoSoundDone);
            menuInstance.lightbox.previewSound.gotoAndStop(1);
          } else {
            createjs.Sound.addEventListener("fileload", handleSoundLoad);
            createjs.Sound.registerSound(
              "/files/sounds/" + fileName + ".mp3",
              fileName
            );
          }
        }
        function handleSoundLoad(e) {
          $selected = $("#" + $("#selectDrop").attr("id") + " option:selected");
          var niceName = $selected.text();
          var index = sounds.findIndex(function (x) {
            return x.niceName === niceName;
          });
          var fileName = sounds[index].fileName;
          if (demoSound) demoSound.stop();
          demoSound = createjs.Sound.play(fileName, {
            interrupt: createjs.Sound.INTERRUPT_ANY,
            loop: 0,
          });
          demoSound.volume = demoVolume;
          demoSound.addEventListener("complete", demoSoundDone);
          menuInstance.lightbox.previewSound.gotoAndStop(1);
        }
        menuInstance.lightbox.grc_set.removeAllEventListeners();
        menuInstance.lightbox.grc_set.addEventListener(
          "mousedown",
          function (e) {
            $selected = $(
              "#" + $("#selectDrop").attr("id") + " option:selected"
            );
            $("#selectDrop").hide();
            $("#countInput").show();
            menuInstance.lightbox.visible = false;
            var niceName = $selected.text();
            var index = sounds.findIndex(function (x) {
              return x.niceName === niceName;
            });
            var fileName = sounds[index].fileName;
            if (fileName === "mute") {
              soundClass.mute();
            } else {
              nslen = 0;
              if (menuInstance.lightbox.nsLenLoop) {
                nslen =
                  menuInstance.lightbox.nsLenLoop.currentFrame === 1 ? 999 : 0;
              }
              if (nslen === 0) {
                Helper.removeUrlParameter("nslen", null, true);
              } else {
                setTimeout(function () {
                  Helper.addUrlParameter(null, "nslen", nslen, true);
                }, 50);
              }
              soundClass.sfxOn();
              soundClass.setSfxNsLen(nslen);
              createjs.Sound.registerSound({
                id: "sfx",
                src: "/files/sounds/" + fileName + ".mp3",
              });
            }
            if (menuInstance.lightbox.nsLenLoop) {
              menuInstance.lightbox.nsLenLoop.visible = false;
              menuInstance.lightbox.nsLenLoop.removeAllEventListeners();
            }
            if (menuInstance.lightbox.previewSound) {
              if (demoSound) demoSound.stop();
              menuInstance.lightbox.previewSound.visible = false;
              menuInstance.lightbox.previewSound.removeAllEventListeners();
            }
            setTimeout(function () {
              Helper.addUrlParameter(null, "ns", fileName, true);
            }, 50);
            index = parseInt($selected.val());
            comboSelectedIndexes.sfx = index;
          }
        );
      }
    );
    if (fromURL.r) {
      menuInstance.list.tab1.dispatchEvent("mousedown");
    } else {
      menuInstance.list.tab0.dispatchEvent("mousedown");
    }
    function switchTabs(e) {
      if (e.currentTarget.name === "tab0") {
        menuInstance.list.gotoAndStop(0);
        menuInstance.list.thumb.visible = true;
        menuInstance.list.removeAllEventListeners();
        if (exportRoot.settings.list.premiumOver) {
          if (fromServer.type !== "free") {
            exportRoot.settings.list.premiumOver.visible = true;
            exportRoot.settings.list.premiumOver.gotoAndStop(1);
            sliderInput();
          } else {
            exportRoot.settings.list.premiumOver.btn.removeAllEventListeners();
            exportRoot.settings.list.premiumOver.btn.addEventListener(
              "mousedown",
              function () {
                window.open(
                  "https://www.online-stopwatch.com/premium/",
                  "_blank"
                );
              }
            );
          }
        }
      } else {
        menuInstance.list.gotoAndStop(1);
        menuInstance.list.editList.text = language.translate(
          menuInstance.list.editList.text
        );
        if (exportRoot.settings.list.premiumOver) {
          if (fromServer.type !== "free") {
            exportRoot.settings.list.premiumOver.visible = false;
          } else {
            exportRoot.settings.list.premiumOver.btn.removeAllEventListeners();
            exportRoot.settings.list.premiumOver.btn.addEventListener(
              "mousedown",
              function () {
                window.open(
                  "https://www.online-stopwatch.com/premium/",
                  "_blank"
                );
              }
            );
          }
        }
        onMenuShowNameCount();
        menuInstance.list.thumb.visible = false;
        menuInstance.list.btn_editList.removeAllEventListeners();
        menuInstance.list.btn_editList.addEventListener(
          "mousedown",
          function (e) {
            var tmpCurrentList = $("#namesList").val();
            var shouldRestore = false;
            if (
              JSON.stringify(listCollector.restoredList) ===
              JSON.stringify(listCollector.list)
            ) {
              menuInstance.list.clearList.text =
                language.translate("Clear List");
              shouldRestore = false;
            } else {
              menuInstance.list.clearList.text =
                language.translate("Clear List");
              shouldRestore = false;
            }
            menuInstance.list.gotoAndStop(2);
            menuInstance.list.doneList.text = language.translate(
              menuInstance.list.doneList.text
            );
            menuInstance.list.whatsPossible.text = language.translate(
              menuInstance.list.whatsPossible.text
            );
            menuInstance.list.clearList.text = language.translate(
              menuInstance.list.clearList.text
            );
            $("#namesList").off();
            $("#namesList").on("change keyup paste", function () {
              showNameCount();
            });
            waitForReady("#namesList", function () {
              $("#namesList").show();
              if (listCollector.list.length === 0)
                listCollector.list = Helper.defaultList.split(",");
              $("#namesList").val(listCollector.list.join("\n"));
              tmpCurrentList = $("#namesList").val();
              menuInstance.list.whatsPossible.text =
                language.translate("Enter up to ") +
                characterMaxNum +
                " " +
                language.translate("Names:");
              menuInstance.list.btn_clearList.removeAllEventListeners();
              menuInstance.list.btn_clearList.addEventListener(
                "mousedown",
                function (e) {
                  if (shouldRestore) {
                    $("#namesList").val(listCollector.restoredList.join("\n"));
                    menuInstance.list.clearList.text =
                      language.translate("Clear List");
                    shouldRestore = false;
                  } else {
                    $("#namesList").val("");
                  }
                  $("#namesList").prop("readonly", false);
                  showNameCount();
                }
              );
              showNameCount();
              _this.fixDom(menuInstance.list.namesList, $("#namesList"));
            });
            setLightBoxDomElements("hide");
            menuInstance.list.btn_done.removeAllEventListeners();
            menuInstance.list.btn_done.addEventListener(
              "mousedown",
              function (e) {
                Helper.filterBadWords($("#namesList"));
                listCollector.list = $("#namesList").val().split("\n");
                listCollector.list = listCollector.list.map(function (s) {
                  return $.trim(s);
                });
                listCollector.list = listCollector.list.filter(function (el) {
                  return $.trim(el) !== "";
                });
                if (listCollector.list.length === 0) {
                  listCollector.list = Helper.defaultList.split(",");
                  $("#namesList").val(Helper.defaultList.split(",").join("\n"));
                  return;
                } else if (listCollector.list.length === 1) {
                  var shuffledDefaultNames = Helper.defaultList
                    .split(",")
                    .shuffle();
                  listCollector.list.push(shuffledDefaultNames[0]);
                  $("#namesList").val(listCollector.list.join("\n"));
                  return;
                }
                if (tmpCurrentList !== $("#namesList").val()) {
                  listCollector.restoredList = listCollector.list;
                }
                onMenuShowNameCount();
                menuInstance.list.removeAllEventListeners();
                menuInstance.list.gotoAndStop(1);
                setLightBoxDomElements("hide");
              }
            );
          }
        );
      }
    }
    function backToTimer() {
      if (menuInstance.list.currentFrame >= 1) {
        menuInstance.list.gotoAndStop(1);
      }
      _this.hide();
      if (timerInstance.tStart.text === "") {
      }
      $("#titleInput").hide();
      $("#titleInput1").hide();
      $("#titleInput2").hide();
      $("#namesList").hide();
      $("#selectDrop").hide();
      $("#countInput").hide();
    }
    function showNumbersChange(e) {
      if (!menuInstance.list.tickcross.cross.visible) {
        menuInstance.list.tickcross.cross.visible = true;
        menuInstance.list.tickcross.tick.visible = false;
      } else {
        menuInstance.list.tickcross.cross.visible = false;
        menuInstance.list.tickcross.tick.visible = true;
      }
      if (e)
        Helper.addUrlParameter(
          null,
          "bubble",
          menuInstance.list.tickcross.tick.visible,
          true
        );
    }
    function setTime() {
      createjs.Ticker.paused = false;
      var event = new createjs.Event("complete");
      event.data = calc();
      $("#countInput").hide();
      setTimeout(function () {
        _this.dispatchEvent(event);
        setLightBoxDomElements("hide");
        $("#countInput").hide();
        menuInstance.back.visible = true;
      }, 90);
    }
    function clearTime() {
      digitCount = 0;
      menuInstance.timer.oldWay.display.text = "00:00:00";
    }
    function setDigit(e) {
      if (digitCount === 6) return;
      var digit = e.currentTarget.name.substr(3);
      var timerText = menuInstance.timer.oldWay.display.text;
      var timerDigits = timerText.replaceAll(":", "");
      timerDigits = timerDigits.substr(1);
      timerDigits = timerDigits.concat(digit);
      timerDigits = timerDigits.slice(0, 2) + ":" + timerDigits.slice(2);
      timerDigits = timerDigits.slice(0, 5) + ":" + timerDigits.slice(5);
      menuInstance.timer.oldWay.display.text = timerDigits;
      digitCount++;
    }
    createSlider();
    if (menuInstance.list.currentFrame === 0) sliderInput();
  };
  function createSlider() {
    slider = new Slider(
      menuInstance.list.thumb,
      { x: initialThumbPos, y: menuInstance.list.thumb.y },
      { x: knobMax, y: menuInstance.list.thumb.y },
      { min: characterMinNum, max: characterMaxNum }
    );
    slider.addEventListener("start", startSliding);
    slider.addEventListener("finish", slidingFinished);
    slider.enableSlider();
    slider.setCharNum(characterNum);
    forceBubbleWithNumbers();
  }
  function forceBubbleWithNumbers() {
    if (
      fromURL.bubble !== "false" &&
      characterNum > 6 &&
      props.allowNumberBubblesOnSlider
    ) {
      menuInstance.list.tickcross.cross.visible = false;
      menuInstance.list.tickcross.tick.visible = true;
      props.allowNumberBubblesOnSlider = false;
    }
  }
  function startSliding() {
    if (
      fromServer.type === "free" &&
      !menuInstance.list.premium0.visible &&
      !freeMaxAllowed
    ) {
      if (createjs.Ticker.paused) {
        menuInstance.list.premium0.visible = true;
      } else {
        menuInstance.list.premium0.alpha = 0;
        menuInstance.list.premium0.visible = true;
        createjs.Tween.get(menuInstance.list.premium0, { override: true }).to(
          { alpha: 1 },
          300
        );
      }
    }
  }
  function slidingFinished(e) {
    characterNum = e.data.characterNum;
    $("#countInput").val(characterNum);
    forceBubbleWithNumbers();
    Helper.addUrlParameter(null, "characters", characterNum, true);
  }
  function sliderInput() {
    if (fromServer.type !== "free") {
      if (characterMaxNum > 100) {
        waitForReady("#countInput", function () {
          $("#countInput").show();
          $("#countInput").numbersOnly("destroy");
          $("#countInput").numbersOnly({
            allowDot: false,
            allowDash: false,
            minimum: 1,
            limit: characterMaxNum,
          });
          $("#countInput").val(characterNum);
          $("#titleInput").val(inputValue);
          $("#titleInput1").val(inputValue1);
          $("#titleInput2").val(inputValue2);
          $("#countInput").off("input");
          $("#countInput").on("input", function () {
            var tmp = parseInt($("#countInput").val());
            if (isNaN(tmp)) {
              characterNum = 2;
            } else if (tmp > characterMaxNum) {
              characterNum = characterMaxNum;
            } else {
              characterNum = tmp;
            }
            slider.setCharNum(characterNum);
          });
        });
      }
    }
  }
  function waitForReady(what, callback) {
    var counter = 0;
    var waitForReady = setInterval(function () {
      counter++;
      if (counter === 20) {
        clearInterval(waitForReady);
        return;
      }
      if ($(what).length !== 0) {
        clearInterval(waitForReady);
        callback();
      }
    }, 10);
  }
}
(function ($) {
  $.fn.numbersOnly = function (options) {
    var defaults = {
      allowDot: false,
      allowDash: false,
      minimum: false,
      limit: false,
    };
    options || (options = {});
    var allowDot = options.allowDot === true;
    var allowDash = options.allowDash === true;
    var minimum = options.minimum === false ? false : options.minimum;
    var limit = options.limit === false ? false : options.limit;
    var firstChar;
    this.on("keydown", function (event) {
      var allowedKeys = [8, 9, 13, 16, 27, 37, 39, 46, 91, 144];
      var ctrlKey = event.metaKey || event.ctrlKey;
      if (allowDot) {
        var dot1 = 110;
        var dot2 = 190;
        if ($(this).val().indexOf(".") === -1) {
          allowedKeys.push(dot1);
          allowedKeys.push(dot2);
        }
      }
      if (allowDash) {
        var dash1 = 109;
        var dash2 = 189;
        if (event.which === dash1 || event.which === dash2) {
          firstChar = $(this).val().charAt(0);
          if (firstChar !== "-" && $(this).prop("selectionStart") === 0) {
            allowedKeys.push(dash1);
            allowedKeys.push(dash2);
          }
        }
      }
      if (
        (ctrlKey && event.which === 65) ||
        (ctrlKey && event.which === 67) ||
        (ctrlKey && event.which === 86) ||
        (ctrlKey && event.which === 88)
      ) {
        return true;
      }
      firstChar = $(this).val().charAt(0);
      if (event.which !== 46) {
        if (
          firstChar === "-" &&
          $(this).prop("selectionStart") === 0 &&
          $(this).prop("selectionEnd") === 0
        ) {
          return false;
        }
      }
      var e;
      if (limit) {
        if (
          (event.which >= 35 && event.which <= 40) ||
          (event.which >= 48 && event.which <= 57) ||
          (event.which >= 96 && event.which <= 105)
        ) {
          e = $(this);
          setTimeout(function () {
            if (window.getSelection().toString() === "") {
              if (parseInt(e.val()) > limit) {
                e.val(limit);
                return false;
              }
            }
          }, 10);
        }
      }
      if (minimum) {
        if (
          (event.which >= 35 && event.which <= 40) ||
          (event.which >= 48 && event.which <= 57) ||
          (event.which >= 96 && event.which <= 105)
        ) {
          e = $(this);
          setTimeout(function () {
            if (window.getSelection().toString() === "") {
              if (parseInt(e.val()) < minimum) {
                e.val(minimum);
                return false;
              }
            }
          }, 10);
        }
      }
      return (
        $.inArray(event.which, allowedKeys) !== -1 ||
        (event.which >= 35 && event.which <= 40) ||
        (event.which >= 48 && event.which <= 57) ||
        (event.which >= 96 && event.which <= 105)
      );
    });
    this.on("paste", function (event) {
      var e = $(this);
      setTimeout(function () {
        e.val(e.val().replace(/\D/g, ""));
      }, 10);
    });
    if (options === "destroy") {
      this.unbind("keydown paste");
    }
  };
})(jQuery);
