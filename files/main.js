function Main(fromURL) {
  var isAppAlarmClock;
  var timeMls;
  var coreData = [];
  var coreTimer;
  var waitTimer;
  var clock;
  var timerMenu;
  var sound;
  var userLogo;
  var cacheQuality = parseFloat(fromURL.c);
  var characters = [];
  var animationCharacters = [];
  var realWindow = Helper.getRealWindow();
  var originalTitle = realWindow.title;
  var listWinners;
  var cache;
  var settings;
  var showNumbers;
  var showNames;
  var prevState = {
    charNum: null,
    showNumbers: null,
    showNames: null,
    characterStyle: null,
  };
  var fpsTimeout;
  var language;
  var characterStyle = 0;
  var finishCharacters = [];
  var finishLineX;
  function bubbleMaker(character, prop) {
    var textWidth;
    var bubleBound;
    cache.uncache(character.no);
    cache.uncache(character.myNum);
    character.myNum.text = prop.number;
    character.no.visible = showNames || showNumbers;
    if (character.no.txt.text !== "1y") {
      character.no.left.x = 2;
      character.no.center.scaleX = 1;
      character.no.center.x = 18;
      character.no.txt.text = "1y";
      character.no.txt.x = 40;
      character.no.txt.text = prop.name;
      character.no.txt.textAlign = "right";
    } else {
      character.no.txt.text = prop.name;
      character.no.txt.textAlign = "right";
    }
    character.no.txt.lineWidth = null;
    var bds = character.no.txt.getBounds();
    var centerWidth = 14;
    var leftWidth = 17;
    var fixedPoint = 35;
    var rightEdgeOfBubble = 81;
    var pushText = 30;
    var leftEdge = Math.floor(rightEdgeOfBubble - leftWidth - bds.width);
    var pixelSnapFix = 2 + character.scaleX * 2;
    if (leftEdge > 0) {
      character.no.txt.textAlign = "center";
    } else {
      character.no.txt.x += pushText;
      character.no.left.x = leftEdge;
      var scaleX = leftEdge + leftWidth - pixelSnapFix;
      var scaleWidth = (fixedPoint - scaleX) / centerWidth;
      character.no.center.scaleX = scaleWidth;
      character.no.center.x = scaleX;
    }
    bubleBound = character.no.nominalBounds;
    textWidth = character.no.txt.getMeasuredWidth();
    character.no.setBounds(
      -textWidth,
      0,
      bubleBound.width + textWidth,
      bubleBound.height
    );
    var cacheQ = isMobile.apple.device ? cacheQuality / 1.2 : cacheQuality;
    cache.simple(character.myNum, cacheQ);
    cache.simple(character.no, cacheQ);
  }
  var characterOriginalBounds = {
    x: 0,
    y: 0,
    width: 220,
    bubbleHeight: 194,
    normalHeight: 194,
  };
  var charMaxWidth = 42;

  var titleInput = $("#titleInput").val();
  var titleInput1 = $("#titleInput1").val();
  var titleInput2 = $("#titleInput2").val();

  var charactersNumber = { max: 1000, min: 2, nonPremium: 100, default: 4 };
  var charactersNum = charactersNumber.default;
  var timerMusic = "emoiji";
  var timersfx = "bell";
  var trackSpeed = Math.getRandomArbitrary(5000, 8000);
  var scaleFactor = { min: 0.5, max: 0.8 };
  var offScreenPos = 400;
  var stageDim = { width: 942, height: 530 };
  var endLineStartPos = 1000;
  var trackWidth = exportRoot.hills.nominalBounds.width / 2;
  var startLineSpeed =
    (trackSpeed / trackWidth) * (exportRoot.trackStart.x + offScreenPos);
  var knobHorizontalMax = 650;
  var nonPremiumDragMax = 650;
  var fromServer = {};
  var finishPrepareTime =
    (trackSpeed / trackWidth) * (endLineStartPos + offScreenPos);
  var trackStart = { x: 120, y: exportRoot.trackStart.y, startX: 120 };
  var waterBounds = exportRoot.water.nominalBounds;
  function resetGame(e) {
    createjs.Sound.stop();
    createjs.Tween.removeAllTweens();
    if (e !== "keepRemoveWinner") timerMenu.resetRemoveWinner();
    timerMenu.hideNextRace();
    if (coreTimer && isAppAlarmClock)
      timeMls = coreTimer.duration - coreTimer.position;
    if (isAppAlarmClock) setTimers();
    patternArr.length = 0;
    charArr.length = 0;
    colorArr.length = 0;
    exportRoot.timer.tStart.text = language.translate("Start");
    exportRoot.hills.x = 0;
    exportRoot.water.x = 0;
    timerMenu.showShuffle();
    timerMenu.update(timeMls);
    realWindow.title = originalTitle;
    createjs.Ticker.paused = false;
    listWinners.hideWinOrder();
    exportRoot.trackStart.x = trackStart.x;
    exportRoot.trackStart.y = trackStart.y;
    exportRoot.winLine.x = endLineStartPos;
  }
  function resumeGame() {
    sound.playMusic();
    createjs.Ticker.paused = false;
  }
  function pauseGame() {
    createjs.Sound.stop();
    createjs.Ticker.paused = true;
  }
  function runGame() {
    if (!fpsTimeout) fpsTimeout = setTimeout(fpsCheck, 2000);
    customBackgroundSound();
    userLogo.small();
    sound.playCustomSfx("airhorn0", 0, 0.2);
    sound.playCustomSfx("cheer0", 0, 0.2);
    var hillsBound = exportRoot.hills.nominalBounds;
    createjs.Tween.get(exportRoot.hills, { override: true, loop: true }).to(
      { x: -hillsBound.width / 2 },
      trackSpeed * 1.5
    );
    createjs.Tween.get(exportRoot.trackStart).to(
      { x: -offScreenPos },
      startLineSpeed
    );
    for (var i = 0; i < characters.length; i++) characterAnim(i);
    if (!isAppAlarmClock) setTimers();
  }
  function setTimers() {
    if (coreTimer) {
      coreTimer.removeAllEventListeners();
      createjs.Tween.removeTweens(coreTimer.target);
    }
    coreTimer = createjs.Tween.get({}, { ignoreGlobalPause: isAppAlarmClock })
      .wait(timeMls)
      .call(showWinner);
    coreTimer.addEventListener("change", gameProcess);
    finishPrepareTime = timeMls - finishPrepareTime < 0 ? timeMls - 100 : 20000;
    if (waitTimer) {
      waitTimer.removeAllEventListeners();
      createjs.Tween.removeTweens(waitTimer.target);
    }
    waitTimer = createjs.Tween.get({})
      .wait(timeMls - finishPrepareTime)
      .call(prepareWinner);
  }
  function checkOut() {
    return characters.filter(function (ch) {
      return ch.targetX > 0;
    }).length;
  }
  function reArange(characterData) {
    var inRace = animationCharacters.map(function (e) {
      return e.number;
    });
    var notInRace = coreData.filter(function (e) {
      return inRace.indexOf(e.number) === -1;
    });
    notInRace = notInRace.shuffle();
    characterData.name = notInRace[0].name;
    characterData.number = notInRace[0].number;
    bubbleMaker(characterData.instance, notInRace[0]);
  }
  function characterAnim(characterIndex) {
    var character = animationCharacters[characterIndex].instance;
    if (character.x < 0 && charactersNum > 100)
      reArange(animationCharacters[characterIndex]);
    var characterScale = character.scaleX;
    var postDelay = 10;
    var preDelay = 0;
    var realFps = createjs.Ticker.getMeasuredFPS();
    var randomX;
    var slowFlag = realFps < 24 && realFps > 2 && charactersNum > 20;
    var maxCharactersForAnimation = 50;
    if (slowFlag && checkOut() > maxCharactersForAnimation) {
      randomX = -Math.getRandomArbitrary(
        characterOriginalBounds.width * characterScale * 2,
        stageDim.width / 2
      );
    } else if (slowFlag && checkOut() <= maxCharactersForAnimation) {
      randomX = Math.getRandomArbitrary(
        characterOriginalBounds.width * characterScale,
        stageDim.width - stageDim.width / 4
      );
    } else if (characters.length > maxCharactersForAnimation) {
      var delta = Helper.convertRange(
        charactersNum > 100 ? 100 : charactersNum,
        { min: 0, max: 0.5 },
        { min: 4, max: 100 }
      );
      randomX = Math.getRandomArbitrary(
        -stageDim.width * delta,
        stageDim.width - stageDim.width / 4
      );
    } else if (characters.length <= maxCharactersForAnimation) {
      randomX = Math.getRandomArbitrary(
        characterOriginalBounds.width * characterScale,
        stageDim.width - stageDim.width / 4
      );
    }
    preDelay = timeMls < 10000 ? 0 : Math.getRandomArbitrary(5.3);
    var characterSpeed = Math.getRandomArbitrary(400, 800);
    if (randomX < 0) {
      postDelay = Math.getRandomArbitrary(100, 300);
      if (animationCharacters[characterIndex].firstRun) {
        preDelay = timeMls < 10000 ? 0 : Math.getRandomArbitrary(0, 50);
        characterSpeed = Math.getRandomArbitrary(300, 600);
      }
    }
    if (animationCharacters[characterIndex].firstRun) {
      if (randomX > 0 && characters.length > 20) {
        randomX = Math.getRandomArbitrary(
          0,
          stageDim.width / 2 + stageDim.width / 4
        );
        characterSpeed = Math.getRandomArbitrary(300, 600);
      }
      animationCharacters[characterIndex].firstRun = false;
    }
    animationCharacters[characterIndex].targetX = randomX;
    createjs.Tween.removeTweens(character);
    swimAnim(character);
    var tween = createjs.Tween.get(character, { useTicks: true })
      .wait(preDelay)
      .to({ x: randomX }, characterSpeed)
      .wait(postDelay);
    animationCharacters[characterIndex].tween = tween;
    tween.addEventListener("complete", function (f) {
      createjs.Tween.removeTweens(f.target.target);
      tween.removeAllEventListeners();
      tween = null;
      characterAnim(characterIndex);
    });
  }
  function showWinner() {
    var i;
    sound.playSfx();
    coreTimer.removeAllEventListeners();
    createjs.Tween.removeTweens(coreTimer.target);
    coreTimer = undefined;
    timerMenu.update(0);
    Helper.callBackOnTimerFinish();
    exportRoot.timer.tStart.text = "";
    for (i = 1; i < finishCharacters.length; i++) {
      createjs.Tween.get(finishCharacters[i].instance).to(
        { x: (-waterBounds.width / 2).toString() },
        trackSpeed
      );
    }
    createjs.Tween.get(exportRoot.winLine, { override: true }).to(
      { x: (-waterBounds.width / 2).toString() },
      trackSpeed
    );
    if (isAppAlarmClock)
      timeMls = Helper.calculateClock(clock.time, clock.ampm);
    if (coreData.length > 2) timerMenu.showNextRace();
    exportRoot.winOrder.alpha = 0;
    exportRoot.winOrder.visible = true;
    var inRace = finishCharacters.map(function (elt) {
      return elt.number;
    });
    var notInRace = coreData.filter(function (elt) {
      return inRace.indexOf(elt.number) === -1;
    });
    notInRace = notInRace.shuffle();
    var overall = finishCharacters.concat(notInRace);
    createjs.Tween.get(exportRoot.winOrder, { override: true })
      .to({ alpha: 1 }, 300)
      .call(listWinners.offerWinOrder, [
        overall,
        showNames,
        showNumbers,
        fromServer,
      ]);
  }
  function reconstructFinish(e) {
    var time = 1;
    for (var i = 1; i < finishCharacters.length; i++) {
      var instance = finishCharacters[i].instance;
      if (e.data === "show") {
        createjs.Tween.get(instance, { override: true }).to(
          { x: finishCharacters[i].finishX },
          time
        );
      } else {
        createjs.Tween.get(instance, { override: true }).to({ x: -300 }, time);
      }
    }
    if (e.data === "show") {
      createjs.Tween.get().wait(time).call(pauseGame);
      createjs.Tween.get(exportRoot.winLine, { override: true }).to(
        { x: finishLineX },
        time
      );
    } else {
      resumeGame();
      createjs.Tween.get(exportRoot.winLine, { override: true }).to(
        { x: -300 },
        time
      );
    }
  }
  function chooseWinner() {
    var winner1;
    var winner2;
    var winner3;
    if (titleInput) {
      let matchingCharacters = coreData.filter(
        (character) =>
          character.name.toString() === titleInput
      );
      if (matchingCharacters.length > 0) {
        winner1 = matchingCharacters[0];
      } else {
        winner1 = coreData.shuffle()[0];
      }
    } else winner1 = coreData.shuffle()[0];
    if (titleInput1) {
      let matchingCharacters = coreData.filter(
        (character) =>
          character.name.toString() === titleInput1
      );
      if (matchingCharacters.length > 0) {
        winner2 = matchingCharacters[0];
      } else winner2 = coreData.shuffle()[0];
    } else winner2 = coreData.shuffle()[0];
    if (titleInput2) {
      let matchingCharacters = coreData.filter(
        (character) =>
          character.name.toString() === titleInput2
      );
      if (matchingCharacters.length > 0) {
        winner3 = matchingCharacters[0];
      } else winner3 = coreData.shuffle()[0];
    } else winner3 = coreData.shuffle()[0];
    var onScreenArr = animationCharacters.filter(function (obj) {
      return obj.name === winner1.name;
    });
    var onScreenArr1 = animationCharacters.filter(function (obj) {
      return obj.name === winner2.name;
    });
    var onScreenArr2 = animationCharacters.filter(function (obj) {
      return obj.name === winner3.name;
    });
    var characterChange1;
    var characterChange2;
    var characterChange3;
    if (winner3 && onScreenArr2.length === 0) {
      var outOfScreen = animationCharacters.filter(function (obj) {
        return obj.instance.x < 0;
      });
      if (outOfScreen.length === 0) {
        characterChange3 = animationCharacters.reduce(function (a, b) {
          return a.instance.x < b.instance.x ? a : b;
        });
      } else {
        characterChange3 = outOfScreen[2];
      }
      characterChange3.name = winner3.name;
      characterChange3.number = winner3.number;
      bubbleMaker(characterChange3.instance, winner3);
      characters.sort(function (x, y) {
        return x.number === characterChange3.number
          ? -1
          : y.number === characterChange3.number
          ? 1
          : 0;
      });
      finishCharacters = characters.clone();
      var first = finishCharacters.shift();
      finishCharacters = finishCharacters.shuffle();
      finishCharacters.unshift(first);
    }
    if (winner2 && onScreenArr1.length === 0) {
      var outOfScreen = animationCharacters.filter(function (obj) {
        return obj.instance.x < 0;
      });
      if (outOfScreen.length === 0) {
        characterChange2 = animationCharacters.reduce(function (a, b) {
          return a.instance.x < b.instance.x ? a : b;
        });
      } else {
        characterChange2 = outOfScreen[1];
      }
      characterChange2.name = winner2.name;
      characterChange2.number = winner2.number;
      bubbleMaker(characterChange2.instance, winner2);
      characters.sort(function (x, y) {
        return x.number === characterChange2.number
          ? -1
          : y.number === characterChange2.number
          ? 1
          : 0;
      });
      finishCharacters = characters.clone();
      var first = finishCharacters.shift();
      finishCharacters = finishCharacters.shuffle();
      finishCharacters.unshift(first);
    }
    if (onScreenArr.length === 0) {
      var outOfScreen = animationCharacters.filter(function (obj) {
        return obj.instance.x < 0;
      });
      if (outOfScreen.length === 0) {
        characterChange1 = animationCharacters.reduce(function (a, b) {
          return a.instance.x < b.instance.x ? a : b;
        });
      } else {
        characterChange1 = outOfScreen[0];
      }
      characterChange1.name = winner1.name;
      characterChange1.number = winner1.number;
      bubbleMaker(characterChange1.instance, winner1);
      characters.sort(function (x, y) {
        return x.number === characterChange1.number
          ? -1
          : y.number === characterChange1.number
          ? 1
          : 0;
      });
      finishCharacters = characters.clone();
      // var first = finishCharacters.shift();
      finishCharacters = finishCharacters.shuffle();
      // finishCharacters.unshift(first);
    }
    finishCharacters = characters.clone();
    finishCharacters = finishCharacters.shuffle();
    let candidate1 = finishCharacters.filter(
      (item) => item.name === winner1.name
    );
    let candidate2 = [],
      candidate3 = [];
    finishCharacters = finishCharacters.filter(
      (item) => item.name !== winner1.name
    );
    if (winner2) {
      candidate2 = finishCharacters.filter(
        (item) => item.name === winner2.name
      );
      finishCharacters = finishCharacters.filter(
        (item) => item.name !== winner2.name
      );
    }
    if (winner3) {
      candidate3 = finishCharacters.filter(
        (item) => item.name === winner3.name
      );
      finishCharacters = finishCharacters.filter(
        (item) => item.name !== winner3.name
      );
    }
    winner3 && candidate3.length && finishCharacters.unshift(candidate3[0]);
    winner2 && candidate2.length && finishCharacters.unshift(candidate2[0]);
    finishCharacters.unshift(candidate1[0]);
  }
  function prepareWinner() {
    chooseWinner();
    var timeLeftMls = coreTimer.duration - coreTimer.position;
    if (coreTimer.duration === 0) timeLeftMls = 1000;
    var i;
    var finishLineBounds = exportRoot.winLine.nominalBounds;
    finishLineX = Math.getRandomArbitrary(
      stageDim.width / 2 - finishLineBounds.width / 2,
      stageDim.width / 2 - finishLineBounds.width
    );
    var distanceToFinishLine = timeLeftMls * (trackWidth / trackSpeed);
    exportRoot.winLine.x = finishLineX + distanceToFinishLine;
    createjs.Tween.get(exportRoot.winLine, { override: true }).to(
      { x: finishLineX },
      timeLeftMls
    );
    var finishLineOuterBounds = Helper.calcualteDimension(
      exportRoot.trackStart
    );
    var character;
    var characterRealWidth;
    var step =
      finishCharacters.length > 20
        ? stageDim.width / finishCharacters.length
        : finishLineX / finishCharacters.length;
    if (finishCharacters.length < 10) step = step / 2;
    for (i = 0; i < finishCharacters.length; i++) {
      character = finishCharacters[i].instance;
      characterRealWidth = characterOriginalBounds.width * character.scaleX;
      var tween = finishCharacters[i].tween;
      tween.removeAllEventListeners();
      createjs.Tween.removeTweens(character);
      swimAnim(character);
      character.visible = true;
      var charPos = Helper.intersect(
        { x1: 0, y1: character.y, x2: 1000, y2: character.y },
        {
          x1: finishLineX,
          y1: finishLineOuterBounds.bottom.y,
          x2:
            finishLineX +
            finishLineOuterBounds.top.x -
            finishLineOuterBounds.bottom.x,
          y2: finishLineOuterBounds.top.y,
        }
      );
      var timeDelimiter = Math.getRandomArbitrary(1.5, 3.1);
      if (i === 0) {
        createjs.Tween.get(character)
          .to(
            { x: Math.getRandomArbitrary(0, charPos.x - charPos.x / 2) },
            timeLeftMls - timeLeftMls / timeDelimiter
          )
          .to(
            { x: charPos.x + characterRealWidth },
            timeLeftMls / timeDelimiter
          );
        finishCharacters[i].finishX = charPos.x;
      } else {
        var maxX = charPos.x - step * i + characterRealWidth / 2;
        var minX = charPos.x - step * (i + 1) + characterRealWidth / 2;
        var finishX = Math.getRandomArbitrary(minX, maxX);
        createjs.Tween.get(character)
          .to(
            {
              x: Math.getRandomArbitrary(
                character.x,
                maxX - Math.getRandomArbitrary(character.x, maxX)
              ),
            },
            timeLeftMls - timeLeftMls / timeDelimiter
          )
          .to({ x: finishX }, timeLeftMls / timeDelimiter);
        finishCharacters[i].finishX = finishX;
      }
    }
  }
  function cacheAll() {
    var menuInstance = exportRoot.settings;
    menuInstance.list.thumb.txt.font = "20px SANS-SERIF";
    menuInstance.list.thumb.txt.y += 2;
    cache.simple(menuInstance.bg, cacheQuality);
    exportRoot.shuffle.setBounds(0, 0, 150, 30);
    cache.simple(exportRoot.shuffle, cacheQuality);
    cache.deep(menuInstance.timer.oldWay, cacheQuality);
    cache.deep(menuInstance.timer.newWay, cacheQuality);
    cache.simple(menuInstance.back, cacheQuality);
    cache.deep(exportRoot.timer, cacheQuality);
    cache.simple(menuInstance.list.bg, cacheQuality);
    cache.simple(menuInstance.list.thumb.bigShow.bubble, cacheQuality);
    cache.simple(menuInstance.list.thumb.circle, cacheQuality);
    cache.simple(menuInstance.list.choiceToggle, cacheQuality);
    cache.simple(menuInstance.list.premium0, cacheQuality, {
      x: 0,
      y: 0,
      width: 270,
      height: 60,
    });
    cache.simple(exportRoot.siteLogo, cacheQuality);
    cache.deep(exportRoot.cog, cacheQuality);
    cache.deep(menuInstance.lightbox, cacheQuality);
    cache.deep(menuInstance.loader, cacheQuality);
    cache.flat(exportRoot.hills, cacheQuality);
    exportRoot.hills.mouseEnabled = false;
    cache.simple(exportRoot.water, cacheQuality);
    exportRoot.water.tickEnabled = false;
    exportRoot.water.mouseEnabled = false;
    cache.flat(exportRoot.trackStart, cacheQuality);
    exportRoot.trackStart.mouseEnabled = false;
    cache.flat(exportRoot.winLine, cacheQuality);
    exportRoot.winLine.mouseEnabled = false;
  }
  function createAllCharacters() {
    var charNum = charactersNum > 100 ? 100 : charactersNum;
    var i;
    var topTreshold;
    characters.length = 0;
    if (charactersNum > 100) coreData = coreData.shuffle();
    var scale =
      charactersNum > 100
        ? Helper.convertRange(
            charactersNum,
            { min: 0.4, max: 0.505 },
            { min: 100, max: 1000 },
            true
          )
        : Helper.convertRange(charNum, scaleFactor, { min: 2, max: 100 }, true);
    var trackStartBounds = Helper.calcualteDimension(exportRoot.trackStart);
    var timerMenuHeight = exportRoot.timer.nominalBounds.height;
    if (showNumbers || showNames) {
      topTreshold =
        timerMenuHeight + (characterOriginalBounds.bubbleHeight * scale) / 1.5;
    } else {
      topTreshold =
        timerMenuHeight + (characterOriginalBounds.normalHeight * scale) / 1.5;
    }
    if (topTreshold < trackStartBounds.top.y) {
      topTreshold = trackStartBounds.top.y + 8;
    }
    var topIntersectPoint = Helper.intersect(
      { x1: 0, y1: topTreshold, x2: 1000, y2: topTreshold },
      {
        x1: exportRoot.trackStart.x,
        y1: trackStartBounds.bottom.y,
        x2:
          exportRoot.trackStart.x +
          trackStartBounds.top.x -
          trackStartBounds.bottom.x,
        y2: trackStartBounds.top.y,
      }
    );
    var bottomIntersectPoint = Helper.intersect(
      {
        x1: 0,
        y1:
          trackStartBounds.bottom.y -
          (exportRoot.character.nominalBounds.height * scale) / 8,
        x2: 1000,
        y2:
          trackStartBounds.bottom.y -
          (exportRoot.character.nominalBounds.height * scale) / 8,
      },
      {
        x1: exportRoot.trackStart.x,
        y1: trackStartBounds.bottom.y,
        x2:
          exportRoot.trackStart.x +
          trackStartBounds.top.x -
          trackStartBounds.bottom.x,
        y2: trackStartBounds.top.y,
      }
    );
    var maxPerRowFor100 = 25;
    var columns = 100 / maxPerRowFor100;
    var charactersPerRow = charactersNum <= 100 ? charNum - 1 : maxPerRowFor100;
    var interpolation = Helper.divideIntoSegments(
      { x: bottomIntersectPoint.x, y: bottomIntersectPoint.y },
      { x: topIntersectPoint.x, y: topIntersectPoint.y },
      charactersPerRow
    );
    settings.loaderReset();
    var props = [];
    var prop;
    patternArr.length = 0;
    charArr.length = 0;
    colorArr.length = 0;
    for (i = 0; i < charNum; i++) {
      prop = {};
      prop.depth = exportRoot.getChildIndex(exportRoot.settings) - 1;
      if (coreData[i].character) {
        prop.character = coreData[i].character;
      } else {
        prop.character = buildNewVisual();
      }
      if (!coreData[i].character) coreData[i].character = prop.character;
      prop.scaleX = scale;
      prop.scaleY = scale;
      prop.y =
        charactersNum > 100
          ? interpolation[Math.floor(i / columns)].y
          : interpolation[i].y;
      prop.x =
        charactersNum > 100
          ? interpolation[Math.floor(i / columns)].x -
            (i % columns) * exportRoot.character.nominalBounds.width * scale
          : interpolation[i].x;
      prop.number = coreData[i].number;
      prop.name = coreData[i].name;
      props.push(prop);
    }
    createjs.Tween.get().wait(100).call(loadAsChunks, [props]);
  }
  function calculateCharacterProperties(i) {
    var character = characters[i].instance;
    characters[i].firstRun = true;
    characters[i].targetX = 0;
    character.name = "character" + i;
    character.mouseChildren = false;
    character.mouseEnabled = false;
    character.visible = true;
    settings.loaderUpdate(i / characters.length);
    character.x = characters[i].startX;
    character.y = characters[i].startY;
    character.scaleX = characters[i].startScaleX;
    character.scaleY = characters[i].startScaleY;
    createjs.Tween.removeTweens(character);
    character.removeAllEventListeners();
    if (i === characters.length - 1) {
      completeCharacterSetup();
    } else {
      calculateCharacterProperties(i + 1);
    }
  }
  function loadAsChunks(props) {
    var chunks = parseInt(fromURL.loadingChunks);
    var delay = parseInt(fromURL.loadingDelay);
    settings.loaderUpdate(0.1);
    var counter = 0;
    var divider = Helper.convertRange(
      props.length,
      { min: 1, max: chunks },
      { min: 2, max: 100 }
    );
    for (var i = 0; i < props.length; i++) {
      if (i > (props.length / divider) * (counter + 1)) counter++;
      createjs.Tween.get()
        .wait(counter * delay)
        .call(createCharacter, [props, i]);
    }
    createjs.Tween.get()
      .wait(counter * delay + 10)
      .call(completeCharacterSetup);
  }
  function createCharacter(props, i) {
    var character = new lib.Character();
    character.name = "character" + i;
    character.mouseChildren = false;
    character.mouseEnabled = false;
    var prop = props[i];
    character.prop = prop;
    character.inner.gotoAndStop(prop.character.frame);
    character.inner.duckColour.gotoAndStop(prop.character.duckColour);
    character.inner.duckPattern.gotoAndStop(prop.character.duckPattern);
    settings.loaderUpdate(i / props.length);
    character.x = prop.x;
    character.y = prop.y;
    character.scaleX = prop.scaleX;
    character.scaleY = prop.scaleY;
    characters.push({
      instance: character,
      name: prop.name,
      number: prop.number,
      startX: character.x,
      startY: character.y,
      startScaleX: character.scaleX,
      startScaleY: character.scaleY,
      firstRun: true,
      targetX: 0,
    });
    bubbleMaker(character, { name: prop.name, number: prop.number });
    var cacheQ = isMobile.apple.device ? cacheQuality / 1.2 : cacheQuality;
    cache.simple(character.inner, cacheQ);
    exportRoot.addChildAt(character, prop.depth);
  }
  function swimAnim(character) {
    var range = { min: 600, max: 1200 };
    var delta = 5;
    var startY = 0;
    for (var i = 0; i < characters.length; i++) {
      if (character === characters[i].instance) {
        startY = characters[i].startY;
        break;
      }
    }
    createjs.Tween.get(character)
      .to({ y: startY }, Math.getRandomArbitrary(range.min / 2, range.max / 2))
      .wait(Math.getRandomArbitrary(0, range.min))
      .to({ y: startY + delta }, Math.getRandomArbitrary(range.min, range.max))
      .to({ y: startY }, Math.getRandomArbitrary(range.min, range.max))
      .to({ y: startY - delta }, Math.getRandomArbitrary(range.min, range.max))
      .to({ y: startY }, Math.getRandomArbitrary(range.min, range.max))
      .call(swimAnim, [character]);
  }
  function resetAnimations() {
    var i;
    for (i = 0; i < characters.length; i++) {
      var character = characters[i].instance;
      swimAnim(character);
    }
    exportRoot.water.x = 0;
    createjs.Tween.get(exportRoot.water, { override: true, loop: true }).to(
      { x: -waterBounds.width / 2 },
      trackSpeed
    );
  }
  function completeCharacterSetup() {
    isShuffleAllowed = true;
    settings.fakeLoader("hide");
    settings.hide();
    animationCharacters = characters.clone();
    animationCharacters = animationCharacters.shuffle();
    resetAnimations();
    exportRoot.settings.mouseEnabled = true;
    trackStart.x = trackStart.startX;
    if (charactersNum <= 4) {
      cache.uncache(exportRoot.trackStart.showNos);
      cache.uncache(exportRoot.winLine.showNos);
      var frame = 4 - charactersNum;
      exportRoot.trackStart.showNos.visible = true;
      exportRoot.winLine.showNos.visible = true;
      exportRoot.trackStart.showNos.gotoAndStop(frame);
      exportRoot.winLine.showNos.gotoAndStop(frame);
      cache.simple(exportRoot.trackStart.showNos, cacheQuality);
      cache.simple(exportRoot.winLine.showNos, cacheQuality);
    } else {
      exportRoot.trackStart.showNos.visible = false;
      exportRoot.winLine.showNos.visible = false;
    }
    exportRoot.trackStart.x = trackStart.x;
    exportRoot.setChildIndex(exportRoot.settings, exportRoot.numChildren - 1);
    exportRoot.setChildIndex(exportRoot.winOrder, exportRoot.numChildren - 1);
    userLogo.big();
  }
  var patternArr = [];
  var charArr = [];
  var colorArr = [];
  function generateArr(len) {
    var arr = [];
    for (var i = 0; i < len; i++) {
      arr.push(i);
    }
    return arr.shuffle();
  }
  function buildNewVisual() {
    var frame;
    var character = exportRoot.character;
    var data = {};
    if (characterStyle === 0) {
      var rnd = Math.getRandomArbitrary(1, 100);
      if (rnd >= 50) {
        if (!charArr.length) charArr = generateArr(character.inner.totalFrames);
        frame = charArr.shift(0);
        data.frame = frame;
        data.duckColour = 0;
        data.duckPattern = 0;
      } else if (rnd < 50 && rnd > 25) {
        data.frame = 0;
        if (!colorArr.length)
          colorArr = generateArr(character.inner.duckColour.totalFrames);
        frame = colorArr.shift(0);
        data.duckColour = frame;
        if (!patternArr.length)
          patternArr = generateArr(character.inner.duckPattern.totalFrames);
        frame = patternArr.shift(0);
        data.duckPattern = frame;
      } else {
        data.frame = 0;
        data.duckColour = 0;
        data.duckPattern = 0;
      }
    }
    if (characterStyle === 2) {
      if (!colorArr.length)
        colorArr = generateArr(character.inner.duckColour.totalFrames);
      frame = colorArr.shift(0);
      data.duckColour = frame;
      if (Math.getRandomArbitrary(0, 2) === 1) {
        if (!patternArr.length)
          patternArr = generateArr(character.inner.duckPattern.totalFrames);
        frame = patternArr.shift(0);
        data.duckPattern = frame;
      }
    }
    return data;
  }
  function setCharacterInitialProperties(e) {
    if (
      prevState.charNum === null ||
      prevState.charNum !== charactersNum ||
      prevState.showNumbers === null ||
      prevState.showNumbers !== showNumbers ||
      prevState.showNames === null ||
      prevState.showNames !== showNames ||
      prevState.characterStyle === null ||
      prevState.characterStyle !== characterStyle
    ) {
      for (var i = 0; i < characters.length; i++) {
        var character = characters[i].instance;
        character.removeAllEventListeners();
        createjs.Tween.removeTweens(character);
        cache.uncache(character.inner);
        cache.uncache(character.myNum);
        cache.uncache(character.no);
        exportRoot.removeChild(character);
        character = null;
      }
      characters.length = 0;
      createAllCharacters(charactersNum);
      prevState.charNum = charactersNum;
      prevState.showNumbers = showNumbers;
      prevState.showNames = showNames;
      prevState.characterStyle = characterStyle;
    } else {
      calculateCharacterProperties(0);
    }
    timerMenu.update(timeMls);
  }
  var once = false;
  function gameProcess(e) {
    var leftTime = e.target.duration - e.target.position;
    timerMenu.update(leftTime);
    if (
      isAppAlarmClock &&
      leftTime < 60 * 1000 &&
      exportRoot.timer.tStart.text.toLowerCase() !==
        language.translate("start").toLowerCase()
    ) {
      once = true;
    }
    if (isAppAlarmClock && leftTime < 60 * 1000 && createjs.Ticker.paused)
      resumeGame();
    if (
      !once &&
      !exportRoot.settings.loader.visible &&
      isAppAlarmClock &&
      exportRoot.timer.tStart.text.toLowerCase() ===
        language.translate("start").toLowerCase() &&
      leftTime < 60 * 1000
    ) {
      exportRoot.timer.bStart.dispatchEvent("mousedown");
    } else if (
      once &&
      !exportRoot.settings.loader.visible &&
      isAppAlarmClock &&
      exportRoot.timer.tStart.text.toLowerCase() ===
        language.translate("start").toLowerCase() &&
      leftTime < 60 * 1000
    ) {
      coreTimer.removeAllEventListeners();
      waitTimer.removeAllEventListeners();
      createjs.Tween.removeAllTweens();
      gotoSettings(e);
    }
  }
  function gotoSettings(e) {
    settings.show();
    listWinners.hideOnlyList();
  }
  function fpsCheck(e) {
    var fps = createjs.Ticker.getMeasuredFPS();
    if (fps > 2 && fps < 12 && !document.hidden) {
      clearTimeout(fpsTimeout);
      exportRoot.slowWarning.alpha = 0;
      exportRoot.slowWarning.visible = true;
      exportRoot.slowWarning.y += 20;
      createjs.Tween.get(exportRoot.slowWarning, { override: true }).to(
        { alpha: 1 },
        300
      );
      exportRoot.slowWarning.on("mousedown", function () {
        window.open(
          "https://www.online-stopwatch.com/help/#slowracetimers",
          "_blank"
        );
      });
    }
  }
  function removeWinner() {
    var characterNumber = finishCharacters[0].number;
    var characterInstance = finishCharacters[0].instance;
    characterInstance.parent.removeChild(characterInstance);
    characters = characters.filter(function (e) {
      return e.number !== characterNumber;
    });
    coreData = coreData.filter(function (e) {
      return e.number !== characterNumber;
    });
    var result = coreData.map(function (a) {
      return a.name;
    });
    if (showNames) settings.removeWinner(result.join("\n"));
    charactersNum = coreData.length;
    resetGame("keepRemoveWinner");
    setCharacterInitialProperties();
  }
  var customSound = {};
  function customBackgroundSound() {
    createjs.Tween.removeTweens(customSound);
    createjs.Tween.get(customSound)
      .wait(Math.getRandomArbitrary(3000, 5000))
      .call(function () {
        if (!exportRoot.settings.visible)
          sound.playCustomMusic("duck" + Math.getRandomArbitrary(0, 2));
        customBackgroundSound();
      });
  }
  function clearGame() {
    resetGame("keepRemoveWinner");
    settings.fakeLoader("show");
    calculateCharacterProperties(0);
  }
  var isShuffleAllowed = true;
  function shuffle() {
    if (!isShuffleAllowed) return;
    isShuffleAllowed = false;
    if (isMobile.apple.device && characters.length >= 50) {
      var startIndex = characters[0].instance.parent.getChildIndex(
        characters[0].instance
      );
      var tempCharacters = characters.clone();
      tempCharacters = tempCharacters.shuffle();
      var character;
      for (var i = 0; i < tempCharacters.length; i++) {
        character = tempCharacters[i].instance;
        character.x = characters[i].startX;
        character.y = characters[i].startY;
        character.parent.setChildIndex(character, startIndex - i);
      }
      for (i = 0; i < tempCharacters.length; i++) {
        character = tempCharacters[i].instance;
        tempCharacters[i].startX = character.x;
        tempCharacters[i].startY = character.y;
      }
      characters = tempCharacters;
      isShuffleAllowed = true;
    } else {
      settings.fakeLoader("show");
      coreData = coreData.shuffle();
      coreData = coreData.map(function (obj) {
        obj.character = undefined;
        return obj;
      });
      prevState.showNames = null;
      setCharacterInitialProperties();
    }
  }
  (function () {
    language = new Language(fromURL.language);
    language.init();
    cache = new Cache();
    cacheAll();
    createjs.EventDispatcher.initialize(ListWinners.prototype);
    listWinners = new ListWinners(
      exportRoot.winOrder,
      $("#listwinners"),
      showNames,
      showNumbers
    );
    listWinners.addEventListener("used", reconstructFinish);
    exportRoot.settings.back.cursor = "pointer";
    exportRoot.slowWarning.cursor = "pointer";
    exportRoot.winOrder.cursor = "pointer";
    exportRoot.settings.lightbox.saveCover.cursor = "default";
    exportRoot.settings.list.listCover.cursor = "default";
    if (!urlData.userType) {
      knobHorizontalMax = nonPremiumDragMax;
      charactersNum = charactersNumber.default;
      if (fromURL.characters) {
        charactersNum =
          parseInt(fromURL.characters) > charactersNumber.nonPremium
            ? charactersNumber.default
            : parseInt(fromURL.characters);
        if (charactersNum < charactersNumber.min)
          charactersNum = charactersNumber.min;
        if (isNaN(charactersNum)) charactersNum = charactersNumber.default;
      }
      exportRoot.settings.list.premium1.on("mousedown", function () {
        window.open("https://www.online-stopwatch.com/premium/", "_blank");
      });
      exportRoot.settings.list.premium0.on("mousedown", function () {
        window.open("https://www.online-stopwatch.com/premium/", "_blank");
      });
    } else {
      charactersNum = fromURL.characters
        ? parseInt(fromURL.characters)
        : charactersNumber.default;
      if (charactersNum > charactersNumber.max)
        charactersNum = charactersNumber.max;
      if (charactersNum < charactersNumber.min)
        charactersNum = charactersNumber.min;
      if (isNaN(charactersNum)) charactersNum = charactersNumber.default;
      exportRoot.settings.list.premiumOver.gotoAndStop(1);
      exportRoot.settings.list.showMax.text = charactersNumber.max;
    }
    if (fromURL.r) {
      createjs.EventDispatcher.initialize(Server.prototype);
      var server = new Server();
      server.addEventListener("serverAnswer", function (e) {
        server.removeAllEventListeners();
        fromServer = e.data;
        var namesFromServer = fromServer.list.split(",");
        fromServer.list = namesFromServer;
        coreData = Helper.generateCoreData(namesFromServer);
        charactersNum = coreData.length;
        init();
      });
      server.load({ r: fromURL.r });
    } else {
      fromServer.owner = "other";
      fromServer.type = urlData.userType ? "premium" : "free";
      var namesFromServer = Helper.defaultList.split(",");
      fromServer.list = namesFromServer;
      coreData = Helper.generateCoreData(namesFromServer);
      prevState.showNumbers = null;
      init();
    }
  })();
  function init() {
    $("canvas").show();
    $("#loader").hide();
    var keybrd = new Keybrd(
      exportRoot.settings,
      exportRoot.timer,
      [
        "titleInput",
        "titleInput1",
        "titleInput2",
        "namesList",
        "selectDrop",
        "countInput",
      ],
      ["countInput"]
    );
    // keybrd.init();
    var timerProps = {
      language: language,
      timerInstance: exportRoot.timer,
      backInstance: exportRoot.back,
      shuffleInstance: exportRoot.shuffle,
      display: fromURL.display,
    };
    createjs.EventDispatcher.initialize(TimerMenu.prototype);
    timerMenu = new TimerMenu(timerProps);
    timerMenu.addEventListener("pause", pauseGame);
    timerMenu.addEventListener("run", runGame);
    timerMenu.addEventListener("resume", resumeGame);
    timerMenu.addEventListener("clear", clearGame);
    timerMenu.addEventListener("settings", gotoSettings);
    timerMenu.addEventListener("removewinner", removeWinner);
    timerMenu.addEventListener("shuffle", shuffle);
    timerMenu.init();
    var soundProps = {
      timerMenu: timerMenu,
      settingsMenu: exportRoot.settings,
      menuInstance: exportRoot.cog,
      musicInstance: exportRoot.music,
      sfxInstance: exportRoot.sfx,
      musicOff: fromURL.musicOff === "true",
      sfxOff: fromURL.sfxOff === "true",
      musicToPlay: timerMusic,
      sfxToPlay: timersfx,
      musicVolume: 0.8,
      sfxVolume: 1,
    };
    createjs.EventDispatcher.initialize(Sound.prototype);
    sound = new Sound(soundProps);
    sound.init();
    var logoProps = {
      settings: exportRoot.settings,
      image: fromURL.logo,
      premium: { image1000: fromURL.premium1000, x: 4, y: 293, scale: 1 },
      type: fromServer.type,
    };
    userLogo = new UserLogo(logoProps);
    if (fromURL.premium0) cache.simple(fromURL.premium0.part1, cacheQuality);
    if (fromURL.premium0) fromURL.premium0.visible = false;
    var settingsProps = {
      language: language,
      characterNum: charactersNum,
      menuInstance: exportRoot.settings,
      timerInstance: exportRoot.timer,
      knobMax: knobHorizontalMax,
      characterMaxNum:
        fromServer.type === "free"
          ? charactersNumber.nonPremium
          : charactersNumber.max,
      characterMinNum: charactersNumber.min,
      soundClass: sound,
      characterStyle: fromURL.characterStyle,
      freeMaxAllowed: true,
      fromServer: fromServer,
      fromURL: fromURL,
      titleInput,
      titleInput1,
      titleInput2,
    };
    // console.log("settingsProps", settingsProps);
    createjs.EventDispatcher.initialize(Settings.prototype);
    settings = new Settings(settingsProps);
    settings.addEventListener("complete", function (e) {
      isAppAlarmClock = exportRoot.settings.timer.newWay.visible;
      once = false;
      clock = e.data.clock;
      timerMenu.showClock(clock);
      if (isAppAlarmClock) {
        timeMls = Helper.calculateClock(clock.time, clock.ampm);
      } else {
        timeMls = e.data.timerMilliseconds;
      }
      titleInput = e.data.inputValue;
      titleInput1 = e.data.inputValue1;
      titleInput2 = e.data.inputValue2;
      charactersNum = e.data.characterNum;
      showNumbers = e.data.showNumbers;
      characterStyle = e.data.characterStyle;
      timerMenu.changeDisplayType(e.data.display);
      userLogo.isVisible(e.data.isLogoVisible);
      var namesFromServer;
      if (e.data.list) {
        namesFromServer = e.data.list;
        coreData = Helper.generateCoreData(namesFromServer);
        showNames = true;
        showNumbers = false;
      } else {
        namesFromServer = Helper.generateIncrementalArray(charactersNum);
        coreData = Helper.generateCoreData(namesFromServer);
        showNames = false;
      }
      charactersNum = coreData.length;
      exportRoot.trackStart.x = trackStart.x;
      timerMenu.changeToShuffle();
      prevState.charNum = null;
      if (coreTimer) {
        coreTimer.removeAllEventListeners();
        createjs.Tween.removeTweens(coreTimer.target);
        coreTimer = null;
      }
      resetGame();
      setCharacterInitialProperties();
    });
    settings.init();
  }
}
