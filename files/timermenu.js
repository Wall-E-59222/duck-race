function TimerMenu(timerProps) {
  var _this = this;
  var timerInstance = timerProps.timerInstance;
  var backInstance = timerProps.backInstance;
  var shuffleInstance = timerProps.shuffleInstance;
  var nextRaceInstance = timerInstance.nextRace;
  var language = timerProps.language;
  var realWindow = Helper.getRealWindow();
  timerInstance.info.originalX = timerInstance.info.x;
  timerInstance.info.originalY = timerInstance.info.y;
  timerInstance.info.originalWidth = timerInstance.info.getMeasuredWidth();
  _this.isShuffleAllowed = true;
  timerInstance.parent.setChildIndex(
    timerInstance,
    timerInstance.parent.children.length - 1
  );
  this.init = function () {
    timerInstance.bStart.removeAllEventListeners();
    timerInstance.bStart.addEventListener("mousedown", timerButtons);
    timerInstance.bClear.removeAllEventListeners();
    timerInstance.bClear.addEventListener("mousedown", function () {
      _this.showShuffle();
      var event = new createjs.Event("clear");
      _this.dispatchEvent(event);
    });
    backInstance.removeAllEventListeners();
    backInstance.addEventListener("mousedown", function () {
      if (timerInstance.tStart.text === "") {
        createjs.Sound.stop();
      }
      var event = new createjs.Event("settings");
      _this.dispatchEvent(event);
    });
    if (shuffleInstance) {
      shuffleInstance.removeAllEventListeners();
      shuffleInstance.addEventListener("mousedown", function () {
        var event = new createjs.Event("shuffle");
        _this.dispatchEvent(event);
      });
    }
  };
  this.showShuffle = function () {
    if (!shuffleInstance) return;
    shuffleInstance.alpha = 1;
    shuffleInstance.visible = true;
  };
  this.hideShuffle = function () {
    if (!shuffleInstance) return;
    shuffleInstance.alpha = 1;
    createjs.Tween.get(shuffleInstance)
      .to({ alpha: 0 }, 300)
      .call(function () {
        shuffleInstance.visible = false;
      });
  };
  this.changeDisplayType = function (display) {
    timerProps.display = display;
  };
  this.changeToShuffle = function () {
    _this.isShuffleAllowed = true;
  };
  this.state = function () {
    return timerInstance.tStart.text.toLowerCase();
  };
  function addPreZero(number, length) {
    var str = "" + number;
    while (str.length < length) {
      str = "0" + str;
    }
    return str;
  }
  function convertMS(milliseconds) {
    var ss = milliseconds / 1000;
    var hh = Math.floor(ss / 3600);
    var mm = Math.floor((ss - hh * 3600) / 60);
    var mmm = Math.floor(milliseconds % 1000);
    ss = Math.floor(ss - hh * 3600 - mm * 60);
    var seconds = milliseconds / 1000;
    var minutes = milliseconds / (1000 * 60);
    var hours = milliseconds / (1000 * 60 * 60);
    var days = milliseconds / (1000 * 60 * 60 * 24);
    return {
      hh: addPreZero(hh, 2),
      mm: addPreZero(mm, 2),
      ss: addPreZero(ss, 2),
      mmm: addPreZero(mmm, 3),
      days: Math.floor(days),
      hours: Math.floor(hours),
      minutes: Math.floor(minutes),
      seconds: Math.floor(seconds),
    };
  }
  var prevScreenText;
  this.update = function (valMls) {
    if (
      valMls < 60 * 1000 &&
      valMls !== 0 &&
      exportRoot.settings.timer.newWay.visible
    ) {
      timerInstance.tStart.visible = false;
      timerInstance.bStart.visible = false;
      timerInstance.alarmWarning_mc.visible = true;
    } else if (exportRoot.settings.timer.newWay.visible) {
      timerInstance.tStart.visible = true;
      timerInstance.bStart.visible = true;
      timerInstance.alarmWarning_mc.visible = false;
    }
    var screenText;
    var convertedTime = convertMS(valMls);
    if (timerProps.display === "HH:MM:SS:MMM") {
      screenText =
        convertedTime.hh + ":" + convertedTime.mm + ":" + convertedTime.ss;
    } else if (timerProps.display === "HH:MM:SS") {
      screenText =
        convertedTime.hh + ":" + convertedTime.mm + ":" + convertedTime.ss;
    } else if (
      (timerProps.display === "HH:MM" ||
        timerProps.display === "HH" ||
        timerProps.display === "MM") &&
      valMls < 60000
    ) {
      screenText = convertedTime.seconds + "s";
    } else if (timerProps.display === "HH" && convertedTime.hours > 0) {
      screenText = convertedTime.hours + "h";
    } else if (timerProps.display === "HH:MM" && convertedTime.hours !== 0) {
      screenText = convertedTime.hh + ":" + convertedTime.mm;
    } else if (
      (timerProps.display === "HH:MM" || timerProps.display === "HH") &&
      convertedTime.hours === 0
    ) {
      screenText = convertedTime.mm + "m";
    } else if (timerProps.display === "MM:SS" && convertedTime.minutes !== 0) {
      screenText = convertedTime.mm + ":" + convertedTime.ss;
    } else if (timerProps.display === "MM:SS" && convertedTime.minutes === 0) {
      screenText = convertedTime.ss + "s";
    } else if (timerProps.display === "MM") {
      screenText = convertedTime.minutes + "m";
    } else if (timerProps.display === "SS") {
      screenText = convertedTime.seconds + "s";
    }
    timerInstance.info.x =
      timerInstance.info.originalX +
      (timerInstance.info.originalWidth -
        timerInstance.info.getMeasuredWidth()) /
        2;
    if (prevScreenText !== screenText) {
      prevScreenText = screenText;
      realWindow.title = screenText;
      timerInstance.info.text = screenText;
      timerInstance.clock.visible = exportRoot.settings.timer.newWay.visible;
    }
    timerInstance.mls.text =
      timerProps.display === "HH:MM:SS:MMM" ? convertedTime.mmm : "";
  };
  function timerButtons() {
    var event;
    _this.isShuffleAllowed = false;
    if (
      timerInstance.tStart.text.toLowerCase() ===
      language.translate("pause").toLowerCase()
    ) {
      timerInstance.tStart.text = language.translate("Continue");
      event = new createjs.Event("pause");
      _this.dispatchEvent(event);
    } else if (
      timerInstance.tStart.text.toLowerCase() ===
      language.translate("start").toLowerCase()
    ) {
      if (shuffleInstance) {
        if (shuffleInstance.alpha === 1) _this.hideShuffle();
      }
      timerInstance.tStart.text = language.translate("Pause");
      event = new createjs.Event("run");
      _this.dispatchEvent(event);
    } else if (
      timerInstance.tStart.text.toLowerCase() ===
      language.translate("continue").toLowerCase()
    ) {
      timerInstance.tStart.text = language.translate("Pause");
      event = new createjs.Event("resume");
      _this.dispatchEvent(event);
    }
  }
  this.resetRemoveWinner = function () {
    nextRaceInstance.cross.visible = true;
    nextRaceInstance.tick.visible = false;
  };
  nextRaceInstance.removeWinner.removeAllEventListeners();
  nextRaceInstance.removeWinner.addEventListener("mousedown", function () {
    if (nextRaceInstance.cross.visible) {
      nextRaceInstance.cross.visible = false;
      nextRaceInstance.tick.visible = true;
    } else {
      nextRaceInstance.cross.visible = true;
      nextRaceInstance.tick.visible = false;
    }
  });
  nextRaceInstance.race.removeAllEventListeners();
  nextRaceInstance.race.addEventListener("mousedown", function () {
    if (nextRaceInstance.cross.visible) {
      timerInstance.bClear.dispatchEvent("mousedown");
      nextRaceInstance.visible = false;
    } else {
      var event = new createjs.Event("removewinner");
      nextRaceInstance.visible = false;
      _this.dispatchEvent(event);
    }
    _this.showShuffle();
  });
  this.showNextRace = function () {
    timerInstance.bClear.visible = false;
    nextRaceInstance.visible = true;
  };
  this.hideNextRace = function () {
    timerInstance.bClear.visible = true;
    nextRaceInstance.visible = false;
    timerInstance.tStart.visible = true;
    timerInstance.bStart.visible = true;
    timerInstance.alarmWarning_mc.visible = false;
  };
  this.showClock = function (value) {
    if (timerInstance.clock && exportRoot.settings.timer.newWay.visible) {
      timerInstance.clock.visible = true;
      timerInstance.clock.info.text = value.time + " " + value.ampm;
    } else {
      _this.hideClock();
    }
  };
  this.hideClock = function () {
    timerInstance.clock.visible = false;
  };
}
