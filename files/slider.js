function Slider(thumb, pointMin, pointMax, charactersNum) {
  var _this = this;
  var thumbBounds = thumb.circle.nominalBounds;
  var newCharNum;
  thumb.mouseChildren = false;
  this.isClock = false;
  this.autoCorrect = false;
  this.autoCorrectTime = 12;
  this.enableSlider = function () {
    thumb.addEventListener("mousedown", startSlide);
    thumb.addEventListener("pressmove", sliding);
    thumb.addEventListener("pressup", up);
  };
  this.disableSlider = function () {
    thumb.removeEventListener("mousedown", startSlide);
    thumb.removeEventListener("pressmove", sliding);
    thumb.removeEventListener("pressup", up);
  };
  function up(e) {
    thumb.bigShow.visible = false;
    var event = new createjs.Event("finish");
    if (_this.autoCorrect) _this.setCharNum(newCharNum, _this.autoCorrectTime);
    event.data = { characterNum: newCharNum };
    _this.dispatchEvent(event);
  }
  function startSlide(e) {
    thumb.bigShow.visible = true;
    var event = new createjs.Event("start");
    _this.dispatchEvent(event);
  }
  function sliding(e) {
    var point = thumb.parent.globalToLocal(e.stageX, e.stageY);
    point.x -= thumbBounds.width / 2;
    if (point.x > pointMax.x) {
      point.x = pointMax.x;
    }
    if (point.y > pointMax.y) {
      point.y = pointMax.y;
    }
    if (point.x < pointMin.x) {
      point.x = pointMin.x;
    }
    if (point.y < pointMin.y) {
      point.y = pointMax.y;
    }
    thumb.x = point.x;
    thumb.y = point.y;
    var percent = (point.x - pointMin.x) / (pointMax.x - pointMin.x);
    newCharNum = Math.round(
      charactersNum.min + percent * (charactersNum.max - charactersNum.min)
    );
    thumb.txt.text = formatValue(newCharNum);
    thumb.bigShow.txt.text = formatValue(newCharNum);
    var event = new createjs.Event("sliding");
    event.data = { characterNum: newCharNum };
    _this.dispatchEvent(event);
  }
  function formatValue(val) {
    var value;
    if (_this.isClock) {
      value = val < 10 ? "0" + val.toString() : val;
    } else {
      value = val;
    }
    return value;
  }
  this.setCharNum = function (val, animTime) {
    newCharNum = val;
    thumb.txt.text = formatValue(val);
    thumb.bigShow.txt.text = formatValue(val);
    var x =
      ((val - charactersNum.min) / (charactersNum.max - charactersNum.min)) *
        (pointMax.x - pointMin.x) +
      pointMin.x;
    if (!animTime) {
      thumb.x = x;
    } else {
      createjs.Tween.get(thumb, { override: true }).to({ x: x }, animTime);
    }
  };
  this.setMax = function (val) {
    charactersNum.max = val;
  };
  this.setMin = function (val) {
    charactersNum.min = val;
  };
}
