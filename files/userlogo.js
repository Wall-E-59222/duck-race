function UserLogo(props) {
  var _this = this;
  var image = props.image;
  var image1000 = props.image1000;
  var premium = props.premium;
  var type = props.type;
  var settings = props.settings;
  var container;
  var logo;
  var isVisible = false;
  function init() {
    container = new createjs.Container();
    exportRoot.addChild(container);
    if (!image) return;
    logo = new createjs.Bitmap(image);
    container.addChild(logo);
    addRectangle(image.width, image.height);
    addShadow();
    _this.hide();
    container.on("click", getURL);
    container.on("mouseover", function () {
      container.cursor = !settings.visible ? "pointer" : "default";
    });
  }
  function premiumBannerInit() {
    if (!premium) return;
    var premiumContainerMenu = new createjs.Container();
    settings.addChildAt(premiumContainerMenu, settings.numChildren - 2);
    premiumContainerMenu.cursor = "pointer";
    premiumContainerMenu.addChild(premium.image);
    premiumContainerMenu.x = premium.x;
    premiumContainerMenu.y = premium.y;
    premiumContainerMenu.scaleX = premiumContainerMenu.scaleY = premium.scale;
    premiumContainerMenu.on("click", function () {
      window.open("https://www.online-stopwatch.com/premium/", "_blank");
    });
    if (premium.image1000) {
      var premium1000 = new createjs.Container();
      settings.list.premiumOver.empty1000.addChild(premium1000);
      premium1000.cursor = "pointer";
      premium1000.addChild(premium.image1000);
      premium1000.on("click", function () {
        window.open("https://www.online-stopwatch.com/premium/", "_blank");
      });
    }
  }
  function getURL() {
    if (!isVisible || settings.visible) return;
    var url =
      type === "free"
        ? "https://www.online-stopwatch.com/premium/"
        : "https://www.online-stopwatch.com/#logo";
    window.open(url, "_blank");
  }
  this.isVisible = function (val) {
    isVisible = val;
    if (!isVisible) _this.hide();
  };
  function addShadow(val) {
    if (!val) val = 4;
    container.shadow = new createjs.Shadow("#000000", val, val, 5);
    var cache = new Cache();
    cache.simple(container, 1);
  }
  function addRectangle(width, height) {
    var rect = new createjs.Shape();
    var stroke = 10;
    var minus = stroke - 6;
    rect.graphics
      .setStrokeStyle(stroke)
      .beginStroke("rgba(0,0,0,1)")
      .drawRect(0, 0, width - minus, height - minus);
    container.addChild(rect);
  }
  this.big = function () {
    if (!isVisible) return;
    createjs.Tween.removeTweens(container);
    _this.show();
    _this.scale(0.6);
    _this.setPosition(480, 220);
  };
  this.small = function () {
    if (!isVisible) return;
    createjs.Tween.get(container).to(
      { x: 730, y: 0, scaleX: 0.3, scaleY: 0.3 },
      500
    );
  };
  this.show = function () {
    container.visible = true;
  };
  this.hide = function () {
    createjs.Tween.removeTweens(container);
    container.visible = false;
  };
  this.scale = function (scale) {
    container.scaleX = container.scaleY = scale;
  };
  this.setPosition = function (x, y) {
    container.x = x;
    container.y = y;
  };
  init();
  premiumBannerInit();
}
