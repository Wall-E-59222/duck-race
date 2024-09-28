var Helper = {
  defaultList: "Aaron,George,Rozalyn,Ilia,Rory",
  defaultDisplay: [
    "HH:MM:SS:MMM",
    "HH:MM:SS",
    "HH:MM",
    "MM:SS",
    "HH",
    "MM",
    "SS",
  ],
  generateNumbersInRange: function (start, stop, step) {
    var a = [start],
      b = start;
    while (b < stop) {
      a.push((b += step || 1));
    }
    return a;
  },
  getRealWindow: function () {
    var realWindow;
    try {
      realWindow =
        window.location.href === window.parent.location.href
          ? window.parent
          : window;
    } catch (e) {
      realWindow = window;
    }
    return realWindow;
  },
  calculateClock: function (hhmm, ampm) {
    var timerDigits = hhmm.split(":");
    var hour = Number(timerDigits[0]);
    var minute = Number(timerDigits[1]);
    if (ampm === "PM" && hour < 12) hour = hour + 12;
    if (ampm === "AM" && hour === 12) hour = hour - 12;
    var startDate = new Date();
    var year = startDate.getUTCFullYear();
    var month = startDate.getUTCMonth();
    var date = startDate.getDate();
    var endDate = new Date(year, month, date, hour, minute);
    var milliseconds = endDate.getTime() - startDate.getTime();
    if (milliseconds < 60000) milliseconds = 60 * 60 * 24 * 1000 + milliseconds;
    return milliseconds;
  },
  callBackOnTimerFinish: function () {
    try {
      if (typeof window.top.winShow !== "undefined") window.top.winShow();
    } catch (e) {}
  },
  calcualteDimension: function (track) {
    var lineInTrack = track.mainLine;
    var mainLineBounds = lineInTrack.nominalBounds;
    var trackStartBounds = track.nominalBounds;
    var topX = track.x + mainLineBounds.width;
    var topY = track.y;
    var bottomX = track.x;
    var bottomY = track.y + trackStartBounds.height;
    return { bottom: { x: bottomX, y: bottomY }, top: { x: topX, y: topY } };
  },
  generateCoreData: function (namesArr) {
    return namesArr.map(function (name, i) {
      return { name: name, number: i + 1 };
    });
  },
  generateIncrementalArray: function (charactersNum) {
    return new Array(charactersNum)
      .join()
      .split(",")
      .map(function (item, index) {
        return ++index;
      });
  },
  getWindowLocation: function () {
    var location;
    var iframe;
    try {
      if (window.location.href === window.parent.location.href) {
        location = window.location.href;
        iframe = false;
      } else {
        location = window.parent.location.href;
        iframe = true;
      }
    } catch (e) {
      location = window.location.href;
      iframe = true;
    }
    return { location: location, iframe: iframe };
  },
  removeUrlParameter: function removeParam(key, sourceURL, changeURL) {
    var winLoc = Helper.getWindowLocation();
    sourceURL = null;
    if (
      sourceURL === null ||
      sourceURL === undefined ||
      sourceURL.length === 0
    ) {
      sourceURL = winLoc.location.split("?");
      sourceURL = sourceURL.length === 1 ? "" : "?" + sourceURL[1];
    }
    var rtn = sourceURL.split("?")[0],
      param,
      params_arr = [],
      queryString =
        sourceURL.indexOf("?") !== -1 ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
      params_arr = queryString.split("&");
      for (var i = params_arr.length - 1; i >= 0; i -= 1) {
        param = params_arr[i].split("=")[0];
        if (param === key) {
          params_arr.splice(i, 1);
        }
      }
      rtn = rtn + "?" + params_arr.join("&");
    }
    if (changeURL) {
      if (winLoc.iframe) {
        var data = { id: "replaceUrl", url: rtn };
        window.parent.postMessage(data, "*");
      } else {
        history.replaceState({}, "", rtn);
      }
    }
    return rtn === "?" ? "" : rtn;
  },
  getURLparameter: function (parameter) {
    var query = Helper.getWindowLocation().location;
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      var key = decodeURIComponent(pair.shift());
      var value = decodeURIComponent(pair.join("="));
      if (typeof query_string[key] === "undefined") {
        query_string[key] = value;
      } else if (typeof query_string[key] === "string") {
        var arr = [query_string[key], value];
        query_string[key] = arr;
      } else {
        query_string[key].push(value);
      }
    }
    return query_string[parameter];
  },
  addUrlParameter: function (
    sourceURL,
    parameterName,
    parameterValue,
    replaceDuplicates
  ) {
    var winLoc = Helper.getWindowLocation();
    if (sourceURL == null || sourceURL.length === 0)
      sourceURL = winLoc.location;
    var urlParts = sourceURL.split("?");
    var newQueryString = "";
    if (urlParts.length > 1) {
      var parameters = urlParts[1].split("&");
      for (var i = 0; i < parameters.length; i++) {
        var parameterParts = parameters[i].split("=");
        if (!(replaceDuplicates && parameterParts[0] === parameterName)) {
          if (newQueryString === "") {
            newQueryString = "?";
          } else {
            newQueryString += "&";
          }
          newQueryString += parameterParts[0] + "=" + parameterParts[1];
        }
      }
    }
    if (newQueryString === "") {
      newQueryString = "?";
    } else {
      newQueryString += "&";
    }
    newQueryString += parameterName + "=" + parameterValue;
    var url = urlParts[0] + newQueryString;
    if (winLoc.iframe) {
      var data = { id: "replaceUrl", url: url };
      function generateHash(length) {
        let result = "";
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }
        return result;
      }

      // Generate a random hash of the same length as '6135abd94bd1a8'
      let randomHash = generateHash("6135abd94bd1a8".length);

      // Replace parts of the URL
      if (!url.includes("undefined"))
        url = url.replace("?", `?${randomHash}=undefined&`);
      url = url.replace(/([&?])characterStyle=.*?(&|$)/, "$1");

      url = url.replace(/[?&]$/, "");
      window.parent.history.pushState(null, null, url.toString());
      window.parent.postMessage(data, "*");
    } else {
      history.replaceState({}, "", url);
    }
    return urlParts[0] + newQueryString;
  },
  forceResize: function () {
    createjs.Tween.get()
      .wait(100)
      .call(function () {
        window.dispatchEvent(new Event("resize"));
      });
  },
  updateParam: function (url, param, value) {
    var re = new RegExp(param + "=(.+?)(&|$)", "g");
    var answer = url.replace(re, param + "=" + value + "$2");
    if (url === answer)
      return url.indexOf("?") !== -1
        ? url + "&" + param + "=" + value
        : url + "?" + param + "=" + value;
    return answer;
  },
  distToSegment: function (point, line) {
    function dist(_point, x, y) {
      var dx = x - _point.x;
      var dy = y - _point.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
    var dx = line.ex - line.sx;
    var dy = line.ey - line.sy;
    var l2 = dx * dx + dy * dy;
    if (l2 === 0) return dist(point, line.sx, line.sy);
    var t = ((point.x - line.sx) * dx + (point.y - line.sy) * dy) / l2;
    t = Math.max(0, Math.min(1, t));
    return dist(point, line.sx + t * dx, line.sy + t * dy);
  },
  divideIntoSegments: function (startPoint, endPoint, number) {
    var x1 = startPoint.x,
      y1 = startPoint.y;
    var x2 = endPoint.x,
      y2 = endPoint.y;
    var dx = (x2 - x1) / number;
    var dy = (y2 - y1) / number;
    var interiorPoints = [];
    for (var i = 1; i < number; i++) {
      interiorPoints.push({ x: x1 + i * dx, y: y1 + i * dy });
    }
    if (interiorPoints.length === 0) {
      interiorPoints.push({ x: x1 + dx / 2, y: y1 + dy / 4 });
      interiorPoints.push({ x: x1 + dx + dx / 16, y: y1 + dy / 3 + dy / 2 });
      return interiorPoints;
    }
    return [startPoint].concat(interiorPoints, [endPoint]);
  },
  intersect: function (line1, line2) {
    if (
      (line1.x1 === line1.x2 && line1.y1 === line1.y2) ||
      (line2.x1 === line2.x2 && line2.y1 === line2.y2)
    )
      return false;
    var denominator =
      (line2.y2 - line2.y1) * (line1.x2 - line1.x1) -
      (line2.x2 - line2.x1) * (line1.y2 - line1.y1);
    if (denominator === 0) return false;
    var ua =
      ((line2.x2 - line2.x1) * (line1.y1 - line2.y1) -
        (line2.y2 - line2.y1) * (line1.x1 - line2.x1)) /
      denominator;
    var ub =
      ((line1.x2 - line1.x1) * (line1.y1 - line2.y1) -
        (line1.y2 - line1.y1) * (line1.x1 - line2.x1)) /
      denominator;
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) return false;
    var x = line1.x1 + ua * (line1.x2 - line1.x1);
    var y = line1.y1 + ua * (line1.y2 - line1.y1);
    return { x: x, y: y };
  },
  convertRange: function (val, base, range, reverse) {
    var xMax = base.max;
    var xMin = base.min;
    var yMax;
    var yMin;
    if (reverse) {
      yMax = range.min;
      yMin = range.max;
    } else {
      yMax = range.max;
      yMin = range.min;
    }
    var percent = (val - yMin) / (yMax - yMin);
    return percent * (xMax - xMin) + xMin;
  },
  swords: [
    "nubyr",
    "nahf",
    "nfu0yr",
    "nfu0yrf",
    "nfubyrf",
    "nff",
    "Nff Zbaxrl",
    "Nffsnpr",
    "nffu0yr",
    "nffu0yrm",
    "nffubyr",
    "nffubyrf",
    "nffubym",
    "nffjvcr",
    "nmmubyr",
    "onffgreqf",
    "onfgneq",
    "onfgneqf",
    "onfgneqm",
    "onfgreqf",
    "onfgreqm",
    "Ovngpu",
    "ovgpu",
    "ovgpurf",
    "Oybj Wbo",
    "obssvat",
    "ohggubyr",
    "ohggjvcr",
    "p0px",
    "p0pxf",
    "p0x",
    "Pnecrg Zhapure",
    "pnjx",
    "pnjxf",
    "Pyvg",
    "pagf",
    "pagm",
    "pbpx",
    "pbpxurnq",
    "pbpx-urnq",
    "pbpxf",
    "PbpxFhpxre",
    "pbpx-fhpxre",
    "penc",
    "phz",
    "phag",
    "phagf",
    "phagm",
    "qvpx",
    "qvyq0",
    "qvyq0f",
    "qvyqb",
    "qvyqbf",
    "qvyyq0",
    "qvyyq0f",
    "qbzvangevpxf",
    "qbzvangevpf",
    "qbzvangevk",
    "qlxr",
    "rarzn",
    "s h p x",
    "s h p x r e",
    "snt",
    "snt1g",
    "sntrg",
    "sntt1g",
    "snttvg",
    "snttbg",
    "sntvg",
    "sntf",
    "sntm",
    "snvt",
    "snvtf",
    "sneg",
    "syvccvat gur oveq",
    "shpx",
    "shpxre",
    "shpxva",
    "shpxvat",
    "shpxf",
    "Shqtr Cnpxre",
    "shx",
    "Shxnu",
    "Shxra",
    "shxre",
    "Shxva",
    "Shxx",
    "Shxxnu",
    "Shxxra",
    "Shxxre",
    "Shxxva",
    "t00x",
    "tnl",
    "tnlobl",
    "tnltvey",
    "tnlf",
    "tnlm",
    "Tbqqnzarq",
    "u00e",
    "u0ne",
    "u0er",
    "uryyf",
    "ubne",
    "ubbe",
    "ubber",
    "wnpxbss",
    "wnc",
    "wncf",
    "wrex-bss",
    "wvfvz",
    "wvff",
    "wvmz",
    "wvmm",
    "xabo",
    "xabof",
    "xabom",
    "xhag",
    "xhagf",
    "xhagm",
    "Yrfovna",
    "Yrmmvna",
    "Yvcfuvgf",
    "Yvcfuvgm",
    "znfbpuvfg",
    "znfbxvfg",
    "znffgreonvg",
    "znffgeonvg",
    "znffgeongr",
    "znfgreonvgre",
    "znfgreongr",
    "znfgreongrf",
    "Zbgun Shpxre",
    "Zbgun Shxre",
    "Zbgun Shxxnu",
    "Zbgun Shxxre",
    "Zbgure Shpxre",
    "Zbgure Shxnu",
    "Zbgure Shxre",
    "Zbgure Shxxnu",
    "Zbgure Shxxre",
    "zbgure-shpxre",
    "Zhgun Shpxre",
    "Zhgun Shxnu",
    "Zhgun Shxre",
    "Zhgun Shxxnu",
    "Zhgun Shxxre",
    "a1te",
    "anfgg",
    "avttre;",
    "avthe;",
    "avvtre;",
    "avvte;",
    "bensvf",
    "betnfvz;",
    "betnfz",
    "betnfhz",
    "bevsnpr",
    "bevsvpr",
    "bevsvff",
    "cnpxv",
    "cnpxvr",
    "cnpxl",
    "cnxv",
    "cnxvr",
    "cnxl",
    "crpxre",
    "crrrahf",
    "crrrahfff",
    "crrahf",
    "crvahf",
    "cra1f",
    "cranf",
    "cravf",
    "cravf-oerngu",
    "crahf",
    "crahhf",
    "Cuhpx",
    "Cuhx",
    "Cuhxre",
    "Cuhxxre",
    "cbynp",
    "cbynpx",
    "cbynx",
    "Cbbanav",
    "ce1p",
    "ce1px",
    "ce1x",
    "chffr",
    "chffrr",
    "chffl",
    "chhxr",
    "chhxre",
    "dhrre",
    "dhrref",
    "dhrrem",
    "djrref",
    "djrrem",
    "djrve",
    "erpxghz",
    "erpghz",
    "ergneq",
    "fnqvfg",
    "fpnax",
    "fpuybat",
    "fperjvat",
    "frzra",
    "frk",
    "frkl",
    "Fu!g",
    "fu1g",
    "fu1gre",
    "fu1gf",
    "fu1ggre",
    "fu1gm",
    "fuvg",
    "fuvgf",
    "fuvggre",
    "Fuvggl",
    "Fuvgl",
    "fuvgm",
    "Fulg",
    "Fulgr",
    "Fulggl",
    "Fulgl",
    "fxnapx",
    "fxnax",
    "fxnaxrr",
    "fxnaxrl",
    "fxnaxf",
    "Fxnaxl",
    "fynt",
    "fyhg",
    "fyhgf",
    "Fyhggl",
    "fyhgm",
    "fba-bs-n-ovgpu",
    "gvg",
    "gheq",
    "in1wvan",
    "int1an",
    "intvvan",
    "intvan",
    "inw1an",
    "inwvan",
    "ihyyin",
    "ihyin",
    "j0c",
    "ju00e",
    "ju0er",
    "juber",
    "kengrq",
    "kkk",
    "o!+pu",
    "ovgpu",
    "oybjwbo",
    "pyvg",
    "nefpuybpu",
    "shpx",
    "fuvg",
    "nff",
    "nffubyr",
    "o!gpu",
    "o17pu",
    "o1gpu",
    "onfgneq",
    "ov+pu",
    "obvbynf",
    "ohprgn",
    "p0px",
    "pnjx",
    "puvax",
    "pvcn",
    "pyvgf",
    "pbpx",
    "phz",
    "phag",
    "qvyqb",
    "qvefn",
    "rwnxhyngr",
    "sngnff",
    "sphx",
    "shx",
    "shk0e",
    "ubre",
    "uber",
    "wvfz",
    "xnjx",
    "y3vgpu",
    "y3v+pu",
    "yrfovna",
    "znfgheongr",
    "znfgreong*",
    "znfgreong3",
    "zbgureshpxre",
    "f.b.o.",
    "zbsb",
    "anmv",
    "avttn",
    "avttre",
    "ahgfnpx",
    "cuhpx",
    "cvzcvf",
    "chffr",
    "chffl",
    "fpebghz",
    "fu!g",
    "furznyr",
    "fuv+",
    "fu!+",
    "fyhg",
    "fzhg",
    "grrgf",
    "gvgf",
    "obbof",
    "o00of",
    "grrm",
    "grfgvpny",
    "grfgvpyr",
    "gvgg",
    "j00fr",
    "wnpxbss",
    "jnax",
    "jubne",
    "juber",
    "qnza",
    "qlxr",
    "shpx",
    "fuvg",
    "nzpvx",
    "naqfxbgn",
    "nefr*",
    "nffenzzre",
    "nlve",
    "ov7pu",
    "ovgpu",
    "obyybpx",
    "oernfgf",
    "ohgg-cvengr",
    "pnoeba",
    "pnmmb",
    "puenn",
    "puhw",
    "Pbpx",
    "phag",
    "q4za",
    "qnltb",
    "qrtb",
    "qvpx",
    "qvxr",
    "qhcn",
    "qmvjxn",
    "rwnpxhyngr",
    "Rxerz",
    "Rxgb",
    "raphyre",
    "snra",
    "snt",
    "snaphyb",
    "snaal",
    "srprf",
    "srt",
    "Srypure",
    "svpxra",
    "svgg",
    "Syvxxre",
    "sberfxva",
    "Sbgmr",
    "Sh",
    "shx",
    "shgxergma",
    "tnl",
    "tbbx",
    "thvran",
    "u0e",
    "u4k0e",
    "uryy",
    "uryirgr",
    "ubre",
    "ubaxrl",
    "Uhriba",
    "uhv",
    "vawha",
    "wvmm",
    "xnaxre",
    "xvxr",
    "xybbgmnx",
    "xenhg",
    "xahyyr",
    "xhx",
    "xhxfhtre",
    "Xhenp",
    "xhejn",
    "xhfv",
    "xlecn",
    "yrfob",
    "znzubba",
    "znfgheong",
    "zreq",
    "zvoha",
    "zbaxyrvtu",
    "zbhyvrjbc",
    "zhvr",
    "zhyxxh",
    "zhfpuv",
    "anmvf",
    "arcrfnhevb",
    "avttre",
    "bebfch",
    "cnfxn",
    "crefr",
    "cvpxn",
    "cvreqby",
    "cvyyh",
    "cvzzry",
    "cvff",
    "cvmqn",
    "cbbagfrr",
    "cbbc",
    "cbea",
    "c0ea",
    "ce0a",
    "cergrra",
    "chyn",
    "chyr",
    "chgn",
    "chgb",
    "dnuoru",
    "dhrrs",
    "enhgraoret",
    "fpunssre",
    "fpurvff",
    "fpuynzcr",
    "fpuzhpx",
    "fperj",
    "fu!g",
    "funezhgn",
    "funezhgr",
    "fuvcny",
    "fuvm",
    "fxevom",
    "fxhejlfla",
    "fcurapgre",
    "fcvp",
    "fcvreqnynw",
    "fcybbtr",
    "fhxn",
    "o00o",
    "grfgvpyr",
    "gvgg",
    "gjng",
    "ivggh",
    "jnax",
    "jrgonpx",
    "jvpufre",
    "jbc",
    "lrq",
    "mnobhenu",
  ],
  rot13: function (s) {
    return (s ? s : this)
      .split("")
      .map(function (_) {
        if (!_.match(/[A-Za-z]/)) return _;
        var c = Math.floor(_.charCodeAt(0) / 97);
        var k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
        return String.fromCharCode(k + (c === 0 ? 64 : 96));
      })
      .join("");
  },
  filterBadWords: function (textArea) {
    var filter = Helper.swords.map(function (value) {
      return Helper.rot13(value);
    });
    textArea.val(function (i, txt) {
      for (var j = 0; j < filter.length; j++) {
        var pattern = new RegExp("\\b" + filter[j] + "\\b", "gi");
        var replacement = "*".repeat(filter[j].length);
        txt = txt.replace(pattern, replacement);
      }
      return txt;
    });
  },
  drawRect: function (x, y, w, h, color) {
    if (!color) color = "red";
    var rect = new createjs.Shape();
    rect.graphics.beginFill(color);
    rect.graphics.drawRect(x, y, w, h);
    rect.graphics.endFill();
    return rect;
  },
  forwardTime: function (toMilliseconds) {
    var now = new Date();
    var plusMilliseconds = now.getTime() + toMilliseconds;
    plusMilliseconds = new Date(plusMilliseconds);
    var hours24 = plusMilliseconds.getHours();
    var minutes = plusMilliseconds.getMinutes();
    var ampm = hours24 >= 12 ? "PM" : "AM";
    var hours12 = hours24 % 12;
    hours12 = hours12 ? hours12 : 12;
    hours12 = hours12 < 10 ? "0" + hours12 : hours12;
    hours24 = hours24 < 10 ? "0" + hours24 : hours24;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return { hours12: hours12, hours24: hours24, minutes: minutes, ampm: ampm };
  },
};
function ColorTool(props) {
  var _this = this;
  var mc = props.mc;
  var baseArray = [];
  var baseArrayLength = 0;
  var resetArray = [];
  var useArray = [];
  var createShades = props.createShades;
  var colorsNeeded = 0;
  function init() {
    var children = mc.children;
    children.sort(function (a, b) {
      return a.x - b.x;
    });
    for (var i = 0; i < children.length; i++) {
      baseArray.push(children[i].graphics._fill.style);
    }
    baseArrayLength = baseArray.length;
  }
  _this.clear = function () {
    useArray.length = 0;
  };
  _this.getColor = function () {
    return useArray.shift();
  };
  _this.colorsNeeded = function (num) {
    useArray.length = 0;
    if (colorsNeeded === num) {
      useArray = resetArray.slice();
      useArray = useArray.shuffle();
      return;
    }
    colorsNeeded = num;
    var tmpArray = baseArray.slice();
    var tmpArrayLength = baseArrayLength;
    var cur;
    if (createShades) {
      for (i = 0; i < baseArrayLength; i++) {
        cur = baseArray[i];
        tmpArray.push(_this.colorShift(cur, -50));
      }
      for (i = 0; i < baseArrayLength; i++) {
        cur = baseArray[i];
        tmpArray.push(_this.colorShift(cur, +50));
      }
      tmpArrayLength = tmpArray.length;
    }
    var x = 0;
    for (var i = 0; i < num; i++) {
      useArray[i] = tmpArray[x];
      x += 1;
      if (x >= tmpArrayLength) {
        x = 0;
      }
    }
    useArray = useArray.shuffle();
    resetArray = useArray.slice();
  };
  _this.reportBuild = function () {
    return resetArray;
  };
  _this.reportBase = function () {
    return baseArray;
  };
  _this.colorShift = function (col, amt) {
    col = col.slice(1);
    var num = parseInt(col, 16);
    var r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    var b = ((num >> 8) & 0x00ff) + amt;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    var g = (num & 0x0000ff) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    var string = "000000" + (g | (b << 8) | (r << 16)).toString(16);
    return "#" + string.substr(string.length - 6);
  };
  _this.blackGradient = function (mc, replaceColor) {
    var cur = mc.shape.graphics._fill.style.props;
    var oldColors = cur.colors;
    var newColor = hexToRgbA(replaceColor).slice(0, -2);
    var i;
    for (i = 0; i < oldColors.length; i++) {
      var alpha = oldColors[i].split(",").pop().slice(0, -1);
      if (alpha.indexOf("#") >= 0) {
        alpha = "1";
      }
      oldColors[i] = newColor + alpha + ")";
    }
    mc.shape.graphics._fill.linearGradient(
      cur.colors,
      cur.ratios,
      cur.x0,
      cur.y0,
      cur.x1,
      cur.y1
    );
  };
  _this.invertColor = function (hex, bw) {
    if (hex.indexOf("#") === 0) {
      hex = hex.slice(1);
    }
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error("Invalid HEX color.");
    }
    var r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
      return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
    }
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    return "#" + padZero(r) + padZero(g) + padZero(b);
  };
  function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join("0");
    return (zeros + str).slice(-len);
  }
  function hexToRgbA(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");
      return (
        "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",1)"
      );
    }
    throw new Error("Bad Hex");
  }
  init();
}
