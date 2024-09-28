function Sound(soundProps) {
  var _this = this;
  var timerMenu = soundProps.timerMenu;
  var settingsMenu = soundProps.settingsMenu;
  var musicOff = soundProps.musicOff.toString().toLowerCase() === "true";
  var sfxOff = soundProps.sfxOff;
  var menuInstance = soundProps.menuInstance;
  var musicInstance = soundProps.musicInstance;
  var sfxInstance = soundProps.sfxInstance;
  var musicToPlay = soundProps.musicToPlay;
  var musicVolume = soundProps.musicVolume;
  var sfxVolume = soundProps.sfxVolume;
  var sfxToPlay = soundProps.sfxToPlay;
  var sfxNsLen = soundProps.sfxNsLen;
  var isSubMenu = menuInstance.music.volumeBall;
  if (isSubMenu) musicVolume = parseInt(urlData.volume) / 100;
  var sliderPoints;
  if (isSubMenu) {
    sliderPoints = {
      low: menuInstance.music.volumeLine.x,
      high:
        menuInstance.music.volumeLine.x +
        menuInstance.music.volumeLine.nominalBounds.width,
    };
    menuInstance.music.volumeBall.x =
      musicVolume * (sliderPoints.high - sliderPoints.low) + sliderPoints.low;
  }
  var music;
  var sfx;
  var customSFXs = [];
  this.init = function () {
    if (musicOff) {
      if (isSubMenu) musicVolume = 0;
      menuInstance.music.gotoAndStop(1);
      if (isSubMenu) menuInstance.music.volumeBall.x = sliderPoints.low;
    }
    if (isSubMenu) {
      stage.addEventListener("stagemousedown", function () {
        var under = stage.getObjectsUnderPoint(stage.mouseX, stage.mouseY);
        for (var i = 0; i < under.length; i++) {
          if (under[i].name) {
            if (under[i].name.indexOf("jump") !== -1) return;
            if (under[i].name.indexOf("music") !== -1) return;
          }
        }
        resetSubMenu();
      });
    }
    if (sfxOff) _this.sfxOnOff("override");
    musicInstance.removeAllEventListeners();
    musicInstance.addEventListener("mousedown", useMenu);
    sfxInstance.removeAllEventListeners();
    sfxInstance.addEventListener("mousedown", _this.sfxOnOff);
    sfxInstance.addEventListener("mouseover", setCursor);
    musicInstance.addEventListener("mouseover", setCursor);
    if (isSubMenu) {
      menuInstance.music.volumeBall.removeAllEventListeners();
      menuInstance.music.jump_pos.removeAllEventListeners();
      menuInstance.music.jump_pos.addEventListener("mousedown", onJump);
      menuInstance.music.jump_down.removeAllEventListeners();
      menuInstance.music.jump_down.addEventListener("mousedown", onMute);
      menuInstance.music.jump_up.removeAllEventListeners();
      menuInstance.music.jump_up.addEventListener("mousedown", onFull);
    }
  };
  this.setMusicVolume = function (val) {
    if (music) music.volume = val;
    if (isSubMenu) setVolumeIcon(val);
    if (isSubMenu) menuInstance.music.showVolume.text = Math.round(val * 100);
  };
  function setVolumeIcon(val) {
    for (var i = 0; i < 2; i++) {
      if (val > 0.66) {
        menuInstance.music["vol" + i + "_mc"].gotoAndStop(3);
      } else if (val > 0.33 && val <= 0.66) {
        menuInstance.music["vol" + i + "_mc"].gotoAndStop(2);
      } else if (val > 0 && val <= 0.33) {
        menuInstance.music["vol" + i + "_mc"].gotoAndStop(1);
      } else if (val === 0) {
        menuInstance.music["vol" + i + "_mc"].gotoAndStop(0);
      }
    }
  }
  function onFull() {
    musicVolume = 1;
    menuInstance.music.volumeBall.x = sliderPoints.high;
    if (
      timerMenu.state() !== "continue" &&
      timerMenu.state() !== "start" &&
      musicVolume > 0
    ) {
      if (!music || music.playState !== "playSucceeded") {
        music = createjs.Sound.play(musicToPlay, {
          interrupt: createjs.Sound.INTERRUPT_ANY,
          loop: -1,
        });
      }
    }
    _this.setMusicVolume(musicVolume);
    Helper.addUrlParameter(null, "musicOff", false, true);
    createjs.Tween.get()
      .wait(250)
      .call(function () {
        Helper.addUrlParameter(null, "volume", 100, true);
      });
  }
  function onMute() {
    if (isSubMenu) musicVolume = 0;
    menuInstance.music.volumeBall.x = sliderPoints.low;
    _this.setMusicVolume(musicVolume);
    Helper.addUrlParameter(null, "musicOff", true, true);
    createjs.Tween.get()
      .wait(250)
      .call(function () {
        Helper.addUrlParameter(null, "volume", 0, true);
      });
  }
  function resetSubMenu() {
    menuInstance.music.gotoAndStop(musicVolume > 0 ? 0 : 1);
    _this.setMusicVolume(musicVolume);
    menuInstance.parent.shuffle.visible = true;
  }
  function onPressUp(e) {
    stage.removeEventListener("stagemousemove", onPressMove);
    Helper.addUrlParameter(null, "musicOff", Boolean(musicVolume === 0), true);
    createjs.Tween.get()
      .wait(250)
      .call(function () {
        Helper.addUrlParameter(
          null,
          "volume",
          Math.round(musicVolume * 100),
          true
        );
      });
  }
  function onJump(e) {
    stage.removeEventListener("stagemousemove", onPressMove);
    stage.addEventListener("stagemousemove", onPressMove);
    onPressMove(e);
    stage.removeEventListener("stagemouseup", onPressUp);
    stage.addEventListener("stagemouseup", onPressUp);
  }
  function onPressMove(e) {
    var point = menuInstance.music.globalToLocal(e.stageX, e.stageY);
    if (point.x <= sliderPoints.low) {
      point.x = sliderPoints.low;
    } else if (point.x >= sliderPoints.high) {
      point.x = sliderPoints.high;
    }
    menuInstance.music.volumeBall.x = point.x;
    musicVolume = calculateVolume(e);
    if (
      timerMenu.state() !== "continue" &&
      timerMenu.state() !== "start" &&
      musicVolume > 0
    ) {
      if (!music || music.playState !== "playSucceeded") {
        music = createjs.Sound.play(musicToPlay, {
          interrupt: createjs.Sound.INTERRUPT_ANY,
          loop: -1,
        });
      }
    }
    _this.setMusicVolume(musicVolume);
  }
  function calculateVolume() {
    return (
      (menuInstance.music.volumeBall.x - sliderPoints.low) /
      (sliderPoints.high - sliderPoints.low)
    );
  }
  function setCursor(e) {
    var target = e.currentTarget;
    target.cursor = settingsMenu.visible ? "default" : "pointer";
  }
  this.setMusic = function (val) {
    musicToPlay = val;
  };
  this.setSfxNsLen = function (val) {
    sfxNsLen = val;
  };
  this.mute = function () {
    if (music) {
      menuInstance.music.gotoAndStop(1);
      if (isSubMenu) musicVolume = 0;
      menuInstance.music.musicBall.x = sliderPoints.low;
      music.stop();
    }
    menuInstance.sfx.gotoAndStop(1);
    if (sfx) sfx.stop();
    Helper.addUrlParameter(null, "musicOff", true, true);
    Helper.addUrlParameter(null, "sfxOff", true, true);
  };
  function useMenu() {
    if (menuInstance.music.currentFrame === 2 && isSubMenu) {
      menuInstance.music.gotoAndStop(musicVolume === 0 ? 1 : 0);
      _this.setMusicVolume(musicVolume);
      menuInstance.parent.shuffle.visible = true;
    } else if (isSubMenu) {
      menuInstance.music.gotoAndStop(2);
      _this.setMusicVolume(musicVolume);
      menuInstance.parent.shuffle.visible = false;
    } else if (!isSubMenu && menuInstance.music.currentFrame === 0) {
      menuInstance.music.gotoAndStop(1);
      if (music) music.stop();
      Helper.addUrlParameter(null, "musicOff", true, true);
    } else if (!isSubMenu && menuInstance.music.currentFrame === 1) {
      menuInstance.music.gotoAndStop(0);
      if (timerMenu.state() !== "continue" && timerMenu.state() !== "start") {
        if (!music || music.playState !== "playSucceeded") {
          console.log(musicVolume);
          music = createjs.Sound.play(musicToPlay, {
            interrupt: createjs.Sound.INTERRUPT_ANY,
            loop: -1,
          });
          _this.setMusicVolume(musicVolume);
        }
      }
      Helper.addUrlParameter(null, "musicOff", false, true);
    }
  }
  this.playMusic = function (volume) {
    if (musicVolume > 0 && isSubMenu) {
      music = createjs.Sound.play(musicToPlay, {
        interrupt: createjs.Sound.INTERRUPT_ANY,
        loop: -1,
      });
      _this.setMusicVolume(musicVolume);
    } else if (!isSubMenu && menuInstance.music.currentFrame === 0) {
      music = createjs.Sound.play(musicToPlay, {
        interrupt: createjs.Sound.INTERRUPT_ANY,
        loop: -1,
      });
      _this.setMusicVolume(musicVolume);
    }
  };
  this.playSfx = function (loop) {
    if (loop === undefined) loop = 0;
    if (sfxNsLen) loop = sfxNsLen;
    if (menuInstance.sfx.currentFrame === 0) {
      sfx = createjs.Sound.play("sfx", {
        interrupt: createjs.Sound.INTERRUPT_ANY,
        loop: loop,
      });
    }
  };
  this.playCustomMusic = function (id, loop) {
    if (loop === undefined) loop = 0;
    if (menuInstance.music.currentFrame === 0) {
      music = createjs.Sound.play(id, {
        interrupt: createjs.Sound.INTERRUPT_ANY,
        loop: loop,
      });
      _this.setMusicVolume(musicVolume);
    }
  };
  this.playCustomSfx = function (id, loop, volume) {
    if (loop === undefined) loop = 0;
    if (volume === undefined) volume = 1;
    if (menuInstance.sfx.currentFrame === 0) {
      var customSfx = createjs.Sound.play(id, {
        interrupt: createjs.Sound.INTERRUPT_ANY,
        loop: loop,
      });
      customSfx.volume = volume;
      customSFXs.push(customSfx);
      return customSfx;
    }
  };
  this.stopCustomSfx = function (id) {
    if (id) id.stop();
  };
  this.killCustomSfx = function (id) {
    id.stop();
    for (var i = 0; i < customSFXs.length; i++) {
      if (id === customSFXs[i]) {
        customSFXs.splice(i, 1);
        return;
      }
    }
  };
  this.sfxOn = function () {
    menuInstance.sfx.gotoAndStop(0);
    createjs.Tween.get()
      .wait(25)
      .call(function () {
        Helper.addUrlParameter(null, "sfxOff", false, true);
      });
  };
  this.sfxOnOff = function (really) {
    if (settingsMenu.visible && really !== "override") return;
    var frameAsNotAllowed = 1 - menuInstance.sfx.currentFrame;
    menuInstance.sfx.gotoAndStop(frameAsNotAllowed);
    Helper.addUrlParameter(null, "sfxOff", Boolean(frameAsNotAllowed), true);
    if (frameAsNotAllowed) {
      if (sfx) sfx.stop();
      for (var i = 0; i < customSFXs.length; i++) customSFXs[i].stop();
    }
  };
}
