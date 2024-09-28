function urlSettings() {
  var urlParametersTemplate = {
    ns: "3",
    nslen: "0",
    countdown: "00:00:00",
    clock: "",
    clockType: "",
    autoplay: "false",
    language: "english",
    musicOff: "false",
    sfxOff: "false",
    c: "1.6",
    characters: null,
    r: null,
    display: "HH:MM:SS",
    logo: null,
    bubble: false,
    characterStyle: "0",
    loadingChunks: "10",
    loadingDelay: "120",
    offset: "0",
    e: null,
    volume: "100",
    ref: null,
  };
  var urlParameters = JSON.parse(JSON.stringify(urlParametersTemplate));
  for (var key in urlParameters) urlParameters[key] = null;
  var getParameterByName = function (name, url) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };
  var iterate = function (parameters, url) {
    for (var key in parameters) {
      var paramVal = getParameterByName(key, url);
      if (paramVal != null) {
        parameters[key] = paramVal;
      }
    }
    return parameters;
  };
  try {
    if (window.location.href === window.parent.location.href) {
      urlParameters = iterate(urlParameters, window.location.href);
    } else if (window.parent.location.href.match(/\?./)) {
      urlParameters = iterate(urlParameters, window.location.href);
      urlParameters = iterate(urlParameters, window.parent.location.href);
    } else {
      urlParameters = iterate(urlParameters, window.location.href);
    }
  } catch (e) {
    urlParameters = iterate(urlParameters, window.location.href);
  }
  for (key in urlParameters) {
    if (urlParameters[key] == null) {
      urlParameters[key] = urlParametersTemplate[key];
    }
  }
  urlParameters.countdown = /[0-9]{2}:[0-9]{2}:[0-9]{2}/.test(
    urlParameters.countdown
  )
    ? urlParameters.countdown
    : urlParametersTemplate.countdown;
  if (parseInt(urlParameters.nslen) > 0) urlParameters.nslen--;
  if (!onOS()) {
    if (urlParameters.e != null) {
      $.post("/e/b.php", { c: urlParameters.e }, function (e) {
        if (!e) {
          var tmp = setInterval(function () {
            if (stage) {
              $("body").html('<div id="loader2">Online-Stopwatch.com</div>');
              clearInterval(tmp);
            }
          }, 100);
        } else {
          $.getScript(
            "https://www.googletagmanager.com/gtag/js?id=UA-23284110-1",
            function () {
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", "UA-23284110-1");
              gtag("event", "Embeded", {
                event_label: urlParameters.ref,
                event_category: "Embeded",
                non_interaction: true,
              });
            }
          );
        }
      });
    } else {
      var tmp = setInterval(function () {
        if (stage) {
          $("body").html('<div id="loader2">Online-Stopwatch.com</div>');
          clearInterval(tmp);
        }
      }, 100);
    }
  }
  return urlParameters;
}
function onOS() {
  try {
    return document.location.hostname === window.parent.location.hostname;
  } catch (e) {
    return false;
  }
}
function loadFinalManifestAWS(callBack, is1000) {
  var userLogoPath = "/files/images/aws/logo/";
  var premium = "../files/component/premium0.js";
  //   $.ajax({ type: "POST", url: "/js/pchk.php" }).done(function (answer) {
  var answer = "1";
  if (urlData.language !== "english")
    lib.properties.manifest.push({
      id: "language",
      src: "/language-files/" + urlData.language + ".txt",
    });
  var logoSrc =
    answer !== "1"
      ? "/files/images/join.png"
      : urlData.logo
      ? userLogoPath + urlData.logo + ".png"
      : "/files/images/add.png";
  urlData.userType = answer === "1";
  urlData.ownLogo = !!urlData.logo;
  lib.properties.manifest.push({
    id: "logo",
    src: logoSrc,
    crossOrigin: "Anonymous",
  });
  if (answer !== "1" && !is1000) {
    lib.properties.manifest.push({
      id: "premium0",
      src: "./component/premium0.js",
      crossOrigin: "Anonymous",
    });
  }
  callBack();
  //   });
}
function loadFinalManifest(callBack) {
  //   $.ajax({ url: "/js/pchk.php" }).done(function (answer) {
  var answer = "1";
  var logoSrc =
    answer !== "1"
      ? "/files/images/join.png"
      : urlData.logo
      ? "/files/images/" + urlData.logo + ".png"
      : "/files/images/add.png";
  urlData.userType = answer === "1";
  urlData.ownLogo = !!urlData.logo;
  lib.properties.manifest.push({ id: "logo", src: logoSrc });
  callBack();
  //   });
}
function isIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  return msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
}
function createIEevent(type) {
  var event = document.createEvent("Event");
  event.initEvent(type, false, true);
  return event;
}
(function () {
  var f = {};
  var g = /iPhone/i,
    i = /iPod/i,
    j = /iPad/i,
    k = /\biOS-universal(?:.+)Mac\b/i,
    h = /\bAndroid(?:.+)Mobile\b/i,
    m = /Android/i,
    c = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
    d = /Silk/i,
    b = /Windows Phone/i,
    n = /\bWindows(?:.+)ARM\b/i,
    p = /BlackBerry/i,
    q = /BB10/i,
    s = /Opera Mini/i,
    t = /\b(CriOS|Chrome)(?:.+)Mobile/i,
    u = /Mobile(?:.+)Firefox\b/i,
    v = function (l) {
      return (
        void 0 !== l &&
        "MacIntel" === l.platform &&
        "number" == typeof l.maxTouchPoints &&
        l.maxTouchPoints > 1 &&
        "undefined" == typeof MSStream
      );
    };
  function w(l) {
    return function ($) {
      return $.test(l);
    };
  }
  function x(l) {
    var $ = { userAgent: "", platform: "", maxTouchPoints: 0 };
    l || "undefined" == typeof navigator
      ? "string" == typeof l
        ? ($.userAgent = l)
        : l &&
          l.userAgent &&
          ($ = {
            userAgent: l.userAgent,
            platform: l.platform,
            maxTouchPoints: l.maxTouchPoints || 0,
          })
      : ($ = {
          userAgent: navigator.userAgent,
          platform: navigator.platform,
          maxTouchPoints: navigator.maxTouchPoints || 0,
        });
    var a = $.userAgent,
      e = a.split("[FBAN");
    void 0 !== e[1] && (a = e[0]),
      void 0 !== (e = a.split("Twitter"))[1] && (a = e[0]);
    var r = w(a),
      o = {
        apple: {
          phone: r(g) && !r(b),
          ipod: r(i),
          tablet: !r(g) && (r(j) || v($)) && !r(b),
          universal: r(k),
          device: (r(g) || r(i) || r(j) || r(k) || v($)) && !r(b),
        },
        amazon: { phone: r(c), tablet: !r(c) && r(d), device: r(c) || r(d) },
        android: {
          phone: (!r(b) && r(c)) || (!r(b) && r(h)),
          tablet: !r(b) && !r(c) && !r(h) && (r(d) || r(m)),
          device: (!r(b) && (r(c) || r(d) || r(h) || r(m))) || r(/\bokhttp\b/i),
        },
        windows: { phone: r(b), tablet: r(n), device: r(b) || r(n) },
        other: {
          blackberry: r(p),
          blackberry10: r(q),
          opera: r(s),
          firefox: r(u),
          chrome: r(t),
          device: r(p) || r(q) || r(s) || r(u) || r(t),
        },
        any: !1,
        phone: !1,
        tablet: !1,
      };
    return (
      (o.any =
        o.apple.device ||
        o.android.device ||
        o.windows.device ||
        o.other.device),
      (o.phone = o.apple.phone || o.android.phone || o.windows.phone),
      (o.tablet = o.apple.tablet || o.android.tablet || o.windows.tablet),
      o
    );
  }
  f = x();
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f;
  } else if (typeof define === "function" && define.amd) {
    define(function () {
      return f;
    });
  } else {
    this["isMobile"] = f;
  }
})();
(function ($) {
  var re = /([^&=]+)=?([^&]*)/g;
  var decodeRE = /\+/g;
  var decode = function (str) {
    return decodeURIComponent(str.replace(decodeRE, " "));
  };
  $.parseParams = function (query) {
    var params = {},
      e;
    while ((e = re.exec(query))) {
      var k = decode(e[1]),
        v = decode(e[2]);
      if (k.substring(k.length - 2) === "[]") {
        k = k.substring(0, k.length - 2);
        (params[k] || (params[k] = [])).push(v);
      } else params[k] = v;
    }
    return params;
  };
})(jQuery);

