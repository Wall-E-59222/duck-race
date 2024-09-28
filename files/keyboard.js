function Keybrd(_menuInstance, _timerInstance, _doms, _focus) {
  var _this = this;
  var menuInstance = _menuInstance;
  var timerInstance = _timerInstance;
  var doms = _doms;
  var requireFocus = _focus;
  _this.init = function () {
    if (window.self !== window.top) {
      window.parent.addEventListener("keyup", keyboardEventHandler, false);
      window.addEventListener("keyup", keyboardEventHandler, false);
    } else {
      window.addEventListener("keyup", keyboardEventHandler, false);
    }
    $("canvas").click(function () {
      for (var i = 0; i < doms.length; i++) {
        var element = $("#" + doms[i]);
        if (element && element.css("display") !== "none") {
          if (requireFocus && requireFocus.indexOf(doms[i]) > -1) {
            element.blur();
          }
        }
      }
    });
  };
  function isSettingsActive() {
    return menuInstance.visible;
  }
  function isDOMActive() {
    for (var i = 0; i < doms.length; i++) {
      var element = $("#" + doms[i]);
      if (element && element.css("display") === "none") {
        if (requireFocus && requireFocus.indexOf(doms[i]) > -1) {
          if (element.is(":focus")) return true;
        } else {
          return false;
        }
      } else if (element && element.css("display") === "block") {
        return true;
      }
    }
    return false;
  }
  stage.addEventListener("stagemousedown", function () {
    $("#countInput").blur();
  });
  function keyboardEventHandler(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    if (menuInstance.loader.visible) return;
    if ($("#countInput").is(":focus")) return;
    if (e.which === 13 || e.which === 32) {
      if (isSettingsActive() && !isDOMActive()) {
        if (menuInstance.timer.oldWay.visible) {
          menuInstance.timer.oldWay.btnset.dispatchEvent("mousedown");
          setTimeout(function () {
            menuInstance.timer.oldWay.btnset.dispatchEvent("pressup");
          }, 100);
        } else {
          menuInstance.timer.newWay.set_btn.dispatchEvent("mousedown");
          setTimeout(function () {
            menuInstance.timer.newWay.set_btn.dispatchEvent("pressup");
          }, 100);
        }
      } else if (timerInstance.nextRace.visible && !isSettingsActive()) {
        timerInstance.nextRace.race.dispatchEvent("mousedown");
      } else if (timerInstance.tStart.text !== "" && !isSettingsActive()) {
        timerInstance.bStart.dispatchEvent("mousedown");
      } else if (timerInstance.tStart.text === "" && !isSettingsActive()) {
        timerInstance.bClear.dispatchEvent("mousedown");
      }
    }
    if (e.which === 37) {
      exportRoot.back.dispatchEvent("mousedown");
    }
    if (e.key.match(/[0-9]+/) && isSettingsActive() && !isDOMActive()) {
      menuInstance.timer.oldWay["btn" + e.key].dispatchEvent("mousedown");
      setTimeout(function () {
        menuInstance.timer.oldWay["btn" + e.key].dispatchEvent("pressup");
      }, 100);
    } else if (e.which === 67 && isSettingsActive() && !isDOMActive()) {
      menuInstance.timer.oldWay.btnclear.dispatchEvent("mousedown");
      setTimeout(function () {
        menuInstance.timer.oldWay.btnclear.dispatchEvent("pressup");
      }, 100);
    } else if (e.which === 67 && !isSettingsActive()) {
      timerInstance.bClear.dispatchEvent("mousedown");
    }
  }
}
