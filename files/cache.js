function Cache() {
  var _this = this;
  this.simple = function (item, q, bnd) {
    if (q === 0) return;
    if (!bnd) {
      bnd = item.getBounds();
      if (!bnd) bnd = item.nominalBounds;
    }
    if (!bnd) {
      console.warn("Some part of the MovieClip can't be cached");
      return;
    }
    var scale = getMaxScale(item);
    if (scale === 0) throw new Error("Custom Cache Error: Scale can't be 0");
    var quality = scale * q;
    item.cache(bnd.x, bnd.y, bnd.width, bnd.height, quality);
  };
  this.flat = function (movieClip, q) {
    if (q === 0) return;
    var mainKeys = Object.keys(movieClip);
    for (var i = 0; i < mainKeys.length; i++) {
      var mainKey = mainKeys[i];
      var mainItem = movieClip[mainKey];
      if (mainItem instanceof createjs.MovieClip && mainKey !== "parent") {
        _this.simple(mainItem, q);
      }
    }
  };
  this.unFlat = function (movieClip) {
    var mainKeys = Object.keys(movieClip);
    for (var i = 0; i < mainKeys.length; i++) {
      var mainKey = mainKeys[i];
      var mainItem = movieClip[mainKey];
      if (mainItem instanceof createjs.MovieClip && mainKey !== "parent") {
        if (mainItem.cacheCanvas) {
          mainItem.cacheCanvas.width = 0;
          mainItem.cacheCanvas.height = 0;
          mainItem.cacheCanvas.remove();
          mainItem.uncache();
          mainItem.cacheCanvas = undefined;
        } else {
          mainItem.uncache();
        }
      }
    }
  };
  function getMaxScale(item, parents) {
    if (!parents) {
      parents = [];
      parents.push(item);
    }
    if (item.parent && item.parent instanceof createjs.MovieClip) {
      parents.push(item.parent);
      return getMaxScale(item.parent, parents);
    }
    return Math.max.apply(
      Math,
      parents.map(function (o) {
        return Math.max(o.scaleX, o.scaleY);
      })
    );
  }
  function isMoreDeeper(movieClip) {
    var mainKeys = Object.keys(movieClip);
    for (var i = 0; i < mainKeys.length; i++) {
      var mainKey = mainKeys[i];
      var mainItem = movieClip[mainKey];
      if (mainItem instanceof createjs.MovieClip && mainKey !== "parent")
        return true;
    }
    return false;
  }
  this.deep = function (movieClip, q) {
    var mainKeys = Object.keys(movieClip);
    for (var i = 0; i < mainKeys.length; i++) {
      var mainKey = mainKeys[i];
      var mainItem = movieClip[mainKey];
      if (mainItem instanceof createjs.MovieClip && mainKey !== "parent") {
        isMoreDeeper(mainItem)
          ? _this.deep(mainItem, q)
          : _this.simple(mainItem, q);
      }
    }
  };
  this.unDeep = function (movieClip) {
    var mainKeys = Object.keys(movieClip);
    for (var i = 0; i < mainKeys.length; i++) {
      var mainKey = mainKeys[i];
      var mainItem = movieClip[mainKey];
      if (mainItem instanceof createjs.MovieClip && mainKey !== "parent") {
        if (isMoreDeeper(mainItem)) {
          _this.unDeep(mainItem);
        } else if (mainItem.cacheCanvas) {
          mainItem.cacheCanvas.width = 0;
          mainItem.cacheCanvas.height = 0;
          mainItem.cacheCanvas.remove();
          mainItem.uncache();
          mainItem.cacheCanvas = undefined;
        } else {
          mainItem.uncache();
        }
      }
    }
  };
  this.uncache = function (item) {
    if (item.cacheCanvas) {
      item.cacheCanvas.width = 1;
      item.cacheCanvas.height = 1;
      var ctx = item.cacheCanvas.getContext('2d', { willReadFrequently: true });
      ctx && ctx.clearRect(0, 0, 1, 1);
      item.cacheCanvas.remove();
      item.uncache();
      item.cacheCanvas = undefined;
    } else {
      item.uncache();
    }
  };
}
