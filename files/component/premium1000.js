(function (cjs, an) {
  var p;
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];
  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(
        this.mode,
        this.startPosition,
        this.loop,
        this.reversed
      )
    );
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }
  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }
  (lib.Symbol9 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#3CF650")
      .s()
      .p("AvaB1IAAh9QAAhsBsAAIbdAAQBsAAAABsIAAB9g");
    this.shape.setTransform(98.675, 11.65);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .lf(["#00CC00", "#27F611"], [0, 1], 0, 11.8, 0, -35)
      .s()
      .p("AtuB2QhsAAAAhsIAAh/Ie1AAIAAB/QAABshsAAg");
    this.shape_1.setTransform(98.675, 35.075);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {
              t: this.shape_1,
            },
            {
              t: this.shape,
            },
          ],
        })
        .wait(1)
    );
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .lf(["#00CC00", "#27F611"], [0, 1], 0, 23.4, 0, -23.4)
      .s()
      .p("AtuDqQhsAAAAhrIAAj9QAAhrBsAAIbdAAQBsAAAABrIAAD9QAABrhsAAg");
    this.shape_2.setTransform(98.675, 23.425);
    this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol9,
    new cjs.Rectangle(0, 0, 197.4, 46.9),
    null
  );
  (lib.Symbol4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p("AgGE1IAAppIANAAIAAJpg");
    var mask_graphics_1 = new cjs.Graphics().p("AgdE1IAAppIA7AAIAAJpg");
    var mask_graphics_2 = new cjs.Graphics().p("Ag0E1IAAppIBpAAIAAJpg");
    var mask_graphics_3 = new cjs.Graphics().p("AhKE1IAAppICVAAIAAJpg");
    var mask_graphics_4 = new cjs.Graphics().p("AhhE1IAAppIDDAAIAAJpg");
    var mask_graphics_5 = new cjs.Graphics().p("Ah4E1IAAppIDxAAIAAJpg");
    var mask_graphics_6 = new cjs.Graphics().p("AiPE1IAAppIEfAAIAAJpg");
    var mask_graphics_7 = new cjs.Graphics().p("AimE1IAAppIFNAAIAAJpg");
    var mask_graphics_8 = new cjs.Graphics().p("Ai8E1IAAppIF5AAIAAJpg");
    var mask_graphics_9 = new cjs.Graphics().p("AjTE1IAAppIGnAAIAAJpg");
    var mask_graphics_10 = new cjs.Graphics().p("AjqE1IAAppIHVAAIAAJpg");
    var mask_graphics_11 = new cjs.Graphics().p("AkBE1IAAppIIDAAIAAJpg");
    var mask_graphics_12 = new cjs.Graphics().p("AkYE1IAAppIIxAAIAAJpg");
    var mask_graphics_13 = new cjs.Graphics().p("AkuE1IAAppIJdAAIAAJpg");
    var mask_graphics_14 = new cjs.Graphics().p("AlFE1IAAppIKLAAIAAJpg");
    var mask_graphics_15 = new cjs.Graphics().p("AlcE1IAAppIK5AAIAAJpg");
    var mask_graphics_16 = new cjs.Graphics().p("AlzE1IAAppILnAAIAAJpg");
    var mask_graphics_17 = new cjs.Graphics().p("AmKE1IAAppIMVAAIAAJpg");
    var mask_graphics_18 = new cjs.Graphics().p("AmgE1IAAppINBAAIAAJpg");
    var mask_graphics_19 = new cjs.Graphics().p("Am3E1IAAppINvAAIAAJpg");
    var mask_graphics_20 = new cjs.Graphics().p("AnOE1IAAppIOdAAIAAJpg");
    var mask_graphics_21 = new cjs.Graphics().p("AnlE1IAAppIPLAAIAAJpg");
    var mask_graphics_22 = new cjs.Graphics().p("An8E1IAAppIP5AAIAAJpg");
    var mask_graphics_23 = new cjs.Graphics().p("AoSE1IAAppIQlAAIAAJpg");
    var mask_graphics_24 = new cjs.Graphics().p("AopE1IAAppIRTAAIAAJpg");
    var mask_graphics_25 = new cjs.Graphics().p("ApAE1IAAppISBAAIAAJpg");
    var mask_graphics_26 = new cjs.Graphics().p("ApXE1IAAppISvAAIAAJpg");
    var mask_graphics_27 = new cjs.Graphics().p("ApuE1IAAppITdAAIAAJpg");
    var mask_graphics_28 = new cjs.Graphics().p("AqEE1IAAppIUJAAIAAJpg");
    var mask_graphics_29 = new cjs.Graphics().p("AqbE1IAAppIU3AAIAAJpg");
    var mask_graphics_30 = new cjs.Graphics().p("AqyE1IAAppIVlAAIAAJpg");
    var mask_graphics_31 = new cjs.Graphics().p("ArJE1IAAppIWTAAIAAJpg");
    var mask_graphics_32 = new cjs.Graphics().p("ArfE1IAAppIW/AAIAAJpg");
    var mask_graphics_33 = new cjs.Graphics().p("Ar2E1IAAppIXtAAIAAJpg");
    var mask_graphics_34 = new cjs.Graphics().p("AsNE1IAAppIYbAAIAAJpg");
    var mask_graphics_35 = new cjs.Graphics().p("AskE1IAAppIZJAAIAAJpg");
    var mask_graphics_36 = new cjs.Graphics().p("As7E1IAAppIZ3AAIAAJpg");
    var mask_graphics_37 = new cjs.Graphics().p("AtRE1IAAppIajAAIAAJpg");
    var mask_graphics_38 = new cjs.Graphics().p("AtoE1IAAppIbRAAIAAJpg");
    var mask_graphics_39 = new cjs.Graphics().p("At/E1IAAppIb/AAIAAJpg");
    var mask_graphics_40 = new cjs.Graphics().p("AuWE1IAAppIctAAIAAJpg");
    var mask_graphics_41 = new cjs.Graphics().p("AutE1IAAppIdbAAIAAJpg");
    var mask_graphics_42 = new cjs.Graphics().p("AvDE1IAAppIeHAAIAAJpg");
    var mask_graphics_43 = new cjs.Graphics().p("AvaE1IAAppIe1AAIAAJpg");
    var mask_graphics_44 = new cjs.Graphics().p("AvxE1IAAppIfjAAIAAJpg");
    var mask_graphics_45 = new cjs.Graphics().p("AwIE1IAAppMAgRAAAIAAJpg");
    var mask_graphics_46 = new cjs.Graphics().p("AwfE1IAAppMAg/AAAIAAJpg");
    var mask_graphics_47 = new cjs.Graphics().p("Aw1E1IAAppMAhrAAAIAAJpg");
    var mask_graphics_48 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_49 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_50 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_51 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_52 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_53 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_54 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_55 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_56 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_57 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_58 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_59 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_60 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_61 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_62 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_63 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_64 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_65 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_66 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_67 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_68 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_69 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_70 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_71 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_72 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_73 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_74 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_75 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_76 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_77 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_78 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_79 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_80 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_81 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_82 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    var mask_graphics_83 = new cjs.Graphics().p("AxME1IAAppMAiZAAAIAAJpg");
    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({
          graphics: mask_graphics_0,
          x: 0.3002,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_1,
          x: 2.5826,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_2,
          x: 4.865,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_3,
          x: 7.1475,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_4,
          x: 9.4299,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_5,
          x: 11.7123,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_6,
          x: 13.9947,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_7,
          x: 16.2772,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_8,
          x: 18.5596,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_9,
          x: 20.842,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_10,
          x: 23.1244,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_11,
          x: 25.4068,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_12,
          x: 27.6893,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_13,
          x: 29.9717,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_14,
          x: 32.2541,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_15,
          x: 34.5365,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_16,
          x: 36.819,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_17,
          x: 39.1014,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_18,
          x: 41.3838,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_19,
          x: 43.6662,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_20,
          x: 45.9486,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_21,
          x: 48.2311,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_22,
          x: 50.5135,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_23,
          x: 52.7959,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_24,
          x: 55.0783,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_25,
          x: 57.3608,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_26,
          x: 59.6432,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_27,
          x: 61.9256,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_28,
          x: 64.208,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_29,
          x: 66.4904,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_30,
          x: 68.7729,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_31,
          x: 71.0553,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_32,
          x: 73.3377,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_33,
          x: 75.6201,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_34,
          x: 77.9026,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_35,
          x: 80.185,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_36,
          x: 82.4674,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_37,
          x: 84.7498,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_38,
          x: 87.0322,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_39,
          x: 89.3147,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_40,
          x: 91.5971,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_41,
          x: 93.8795,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_42,
          x: 96.1619,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_43,
          x: 98.4444,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_44,
          x: 100.7268,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_45,
          x: 103.0092,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_46,
          x: 105.2916,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_47,
          x: 107.5741,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_48,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_49,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_50,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_51,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_52,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_53,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_54,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_55,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_56,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_57,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_58,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_59,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_60,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_61,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_62,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_63,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_64,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_65,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_66,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_67,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_68,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_69,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_70,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_71,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_72,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_73,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_74,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_75,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_76,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_77,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_78,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_79,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_80,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_81,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_82,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
        .to({
          graphics: mask_graphics_83,
          x: 109.7313,
          y: 9.9007,
        })
        .wait(1)
    );
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FF0000")
      .s()
      .p(
        "AiaCfIgCgCQgcgcgPggIgKgWQgLghgBgmIAAgEQAAgsAQgnQAMgeAWgaIAPgRQBChBBaAAQBcAABBBBIAPARQAyA8AABPQAABchBBBIgCACQhAA/hbAAQhaAAhAg/g"
      );
    this.shape.setTransform(193.9, 8.35);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .lf(["#AD0000", "#FF0000"], [0, 0.333], -86.6, 0, 86.5, 0)
      .s()
      .p("AthBPIAAidIbDAAQgPAnAAAsIAAADQAAAmAMAhg");
    this.shape_1.setTransform(86.6375, 7.9);
    var maskedShapeInstanceList = [this.shape, this.shape_1];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {
              t: this.shape_1,
            },
            {
              t: this.shape,
            },
          ],
        })
        .wait(84)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -13.8, 216.1, 44.400000000000006);
  (lib.Symbol3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(255,255,255,0.2)")
      .s()
      .p(
        "AOWD+IgCAAQgHgEACgIIAQgkIgdgVQgEgFgBgFQAAgEACgDIAWghIgOgDIgXAOQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgEAAgCgDQgCgBAAgDQAAgEACgCIABgBIAXgPQAEgCAFAAIABAAIAaAFIARAMIAKAXIAWAAIACACIAEADQAAAEgBACQgCADgDABIgZAAQgHgBgEgHIgFgLIgQAaIAVAQQAJAGgFAJIgUAoQgCAEgDAAIgCABIgCgBgALhD+IgCAAQgGgEACgIIAQgkIgggXQgCgEgBgEIACgGIAWgiIgOgDIgXAOQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgCAAIgEgDQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgBQAAgDACgCIABgBIAYgPIAIgCIACAAIAaAFIARAMIAJAXIAWAAIADACIADADQAAAEgBACQgCADgCABIgZAAQgIgBgDgHIgGgLIgQAaIAWAQQAIAGgEAJIgUAoQgDAEgCAAIgCABIgDgBgAIoD+IgCAAQgGgEACgIIAQgkIgdgVQgFgFAAgFQgBgEACgDIAWghIgOgDIgXAOQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgDAAgCgDQgDgBAAgDQAAgEADgCIABgBIAXgPQAEgCAEAAIACAAIAaAFIARAMIAJAXIAWAAIADACIADADQABAEgCACQgBADgDABIgZAAQgIgBgDgHIgGgLIgQAaIAWAQQAIAGgEAJIgUAoQgCAEgDAAIgCABIgDgBgAFzD+IgBAAQgHgEACgIIAQgkIgdgVQgFgFAAgFQAAgEACgDIAVghIgOgDIgXAOQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgCgDQgBAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgEACgCIABgBIAXgPIAIgCIACAAIAaAFIARAMIAJAXIAWAAIADACIADADQABAEgCACQgBADgDABIgZAAQgHgBgEgHIgFgLIgQAaIAVAQQAIAGgEAJIgUAoQgCAEgDAAIgCABIgDgBgAC6D+IgBAAQgHgEADgIIAPgkIgdgVQgEgFgBgFQAAgEACgDIAWghIgPgDIgWAOQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgDAAgCgDQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAgEACgCIABgBIAYgPQADgCAEAAIACAAIAaAFIARAMIAJAXIAWAAIADACIADADQABAEgCACQgBADgDABIgYAAQgIgBgEgHIgFgLIgQAaIAVAQQAIAGgEAJIgUAoQgCAEgCAAIgDABIgDgBgAAGD+IgCAAQgGgEACgIIAQgkIgdgVQgEgFAAgFQgBgEACgDIAVghIgNgDIgXAOQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgDAAgDgDQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgEABgCIABgBIAYgPQADgCAFAAIACAAIAYAFIARAMIAKAXIAWAAIADACIADADQAAAEgBACQgBADgEABIgYAAQgIgBgDgHIgGgLIgQAaIAWAQQAIAGgFAJIgTAoQgDAEgCAAIgCABIgDgBgAiuD+IgCAAQgGgEACgIIAQgkIgdgVQgFgFAAgFQgBgEADgDIAWghIgPgDIgXAOQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgCgDQgBAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgEACgCIAAgBIAYgPQAEgCAEAAIACAAIAaAFIARAMIAJAXIAWAAIADACIADADQABAEgCACQgBADgDABIgZAAQgIgBgDgHIgFgLIgQAaIAVAQQAIAGgEAJIgUAoQgCAEgDAAIgCABIgDgBgAlmD+IgDAAQgGgEADgIIAPgkIgdgVQgFgFAAgFQgBgEADgDIAWghIgPgDIgWAOQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgCgDQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAgEACgCIABgBIAYgPQADgCAEAAIACAAIAaAFIARAMIAJAXIAWAAIADACQABAAAAABQABAAAAABQABAAAAAAQAAABAAAAQABAEgBACQgCADgDABIgYAAQgJgBgCgHIgGgLIgQAaIAWAQQAHAGgEAJIgUAoQgCAEgCAAIgDABIgCgBgAobD+IgCAAQgHgEADgIIAPgkIgdgVQgEgFgBgFQAAgEACgDIAWghIgOgDIgXAOQAAAAgBABQgBAAAAAAQgBABAAAAQgBAAAAAAQgEAAgCgDQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgEABgCIABgBIAXgPQAEgCAFAAIABAAIAaAFIARAMIAKAXIAWAAIACACIAEADQAAAEgBACQgBADgEABIgYAAQgIgBgEgHIgFgLIgQAaIAVAQQAJAGgFAJIgUAoQgCAEgCAAIgCABIgDgBgArUD+IgCAAQgGgEACgIIAPgkIgdgVQgEgFgBgFQAAgEADgDIAVghIgOgDIgXAOQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgDAAgDgDQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgEABgCIABgBIAYgPQADgCAFAAIABAAIAaAFIARAMIAKAXIAWAAIADACQAAAAABABQAAAAABABQAAAAAAAAQABABAAAAQAAAEgBACQgBADgEABIgYAAQgIgBgDgHIgGgLIgQAaIAWAQQAIAGgFAJIgUAoQgCAEgCAAIgCABIgDgBgAuJD+IgCAAQgGgEACgIIAQgkIgdgVQgFgFAAgFQgBgEADgDIAVghIgOgDIgXAOQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgCgDQgBAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgEACgCIABgBIAXgPQAEgCAEAAIACAAIAaAFIARAMIAJAXIAWAAIADACQAAAAABABQABAAAAABQABAAAAAAQAAABAAAAQABAEgBACQgCADgDABIgZAAQgIgBgDgHIgFgLIgRAaIAWAQQAIAGgEAJIgUAoQgCAEgDAAIgCABIgDgBgANODTQgHgBAAgIQAAgHAJgBIAgAAIAIgNQAEAHAKAGIgLAOQgCADgIAAgAKZDTIgDgBQgEgCAAgGQAAgHAIgBIAhAAIAJgNIAAABIACADQAEAFAIAEIgMAOQgBADgIAAgAHgDTQgGgBgBgIQABgHAIgBIAgAAIAJgNQADAHALAGIgMAOQgBADgIAAgAEsDTQgHgBAAgIQAAgHAIgBIAgAAIAJgNQADAHALAGIgLAOQgCADgIAAgABzDTQgHgBAAgIQAAgHAIgBIAhAAIAJgNQACAHALAGIgLAOQgCADgIAAgAhBDTQgGgBgBgIQABgHAIgBIAgAAIAJgNQADAHAKAGIgKAOQgCADgJAAgAj1DTQgHgBgBgIQABgHAIgBIAgAAIAJgNQADAHALAGIgLAOQgCADgIAAgAmuDTQgHgBgBgIQABgHAIgBIAhAAIAJgNQADAHAKAGIgLAOQgCADgIAAgApjDTQgHgBAAgIQAAgHAJgBIAgAAIAJgNQADAHAKAGIgKAOQgDADgIAAgAsbDTQgIgBAAgIQAAgHAJgBIAgAAIAJgNQADAHAKAGIgKAOQgCADgJAAgAvQDTQgHgBgBgIQABgHAIgBIAgAAIAJgNQAEAHAKAGIgLAOQgCADgIAAgAOqB6QgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAEgGAAQgHAAgEgEgAMAB+QgHAAgEgEQgEgEAAgGQAAgHAEgEQAEgFAHAAIABAAIAEABQADABADADQAEADAAAFIAAAFQAAAEgEAEIgGADIgEABgAI8B6QgEgEAAgGQAAgHAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAEgGAAQgGAAgFgEgAGIB6QgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAEgGAAQgHAAgEgEgADPB6QgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAEgGAAQgHAAgEgEgAAaB6QgEgEAAgGQAAgHAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAEgGAAQgGAAgFgEgAiZB6QgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAFAFQADAEAAAHQAAAGgDAEQgFAEgGAAQgHAAgEgEgAlSB6QgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAFAFQADAEAAAHQAAAGgDAEQgFAEgGAAQgHAAgEgEgAoHB6QgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAEgGAAQgHAAgEgEgArAB6QgEgEAAgGQAAgHAEgEQAEgFAHAAQAHAAAEAFQAEAEAAAHQAAAGgEAEQgEAEgHAAQgHAAgEgEgAt0B6QgFgEAAgGQAAgHAFgEQAEgFAHAAQAGAAAEAFQAFAEAAAHQAAAGgFAEQgEAEgGAAQgHAAgEgEgAOWBLIgCAAQgHgEACgIIAQgkIgdgVQgEgFgBgEQAAgEACgDIAWghIgOgDIgXAOQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgEAAgCgDQgCgBAAgDQAAgEACgCIABgBIAXgPQAEgCAFAAIABAAIAaAFIARAMIAKAXIAWAAIACACIAEADQAAAEgBACQgCADgDABIgZAAQgHgBgEgGIgFgMIgQAZIAVAQQAJAGgFAJIgUAoQgCAEgDAAIgCABIgCgBgALhBLIgCAAQgGgEACgIIAQgkIgggXQgCgEgBgDIACgGIAWgiIgOgDIgXAOQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgCAAIgEgDQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgBQAAgDACgCIABgBIAYgPIAIgCIACAAIAaAFIARAMIAJAXIAWAAIADACIADADQAAAEgBACQgCADgCABIgZAAQgIgBgDgGIgGgMIgQAZIAWAQQAIAGgEAJIgUAoQgDAEgCAAIgCABIgDgBgAIoBLIgCAAQgGgEACgIIAQgkIgdgVQgFgFAAgEQgBgEACgDIAWghIgOgDIgXAOQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgDAAgCgDQgDgBAAgDQAAgEADgCIABgBIAXgPQAEgCAEAAIACAAIAaAFIARAMIAJAXIAWAAIADACIADADQABAEgCACQgBADgDABIgZAAQgIgBgDgGIgGgMIgQAZIAWAQQAIAGgEAJIgUAoQgCAEgDAAIgCABIgDgBgAFzBLIgBAAQgHgEACgIIAQgkIgdgVQgFgFAAgEQAAgEACgDIAVghIgOgDIgXAOQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgCgDQgBAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgEACgCIABgBIAXgPIAIgCIACAAIAaAFIARAMIAJAXIAWAAIADACIADADQABAEgCACQgBADgDABIgZAAQgHgBgEgGIgFgMIgQAZIAVAQQAIAGgEAJIgUAoQgCAEgDAAIgCABIgDgBgAC6BLIgBAAQgHgEADgIIAPgkIgdgVQgEgFgBgEQAAgEACgDIAWghIgPgDIgWAOQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgDAAgCgDQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAgEACgCIABgBIAYgPQADgCAEAAIACAAIAaAFIARAMIAJAXIAWAAIADACIADADQABAEgCACQgBADgDABIgYAAQgIgBgEgGIgFgMIgQAZIAVAQQAIAGgEAJIgUAoQgCAEgCAAIgDABIgDgBgAAGBLIgCAAQgGgEACgIIAQgkIgdgVQgEgFAAgEQgBgEACgDIAVghIgNgDIgXAOQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgDAAgDgDQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgEABgCIABgBIAYgPQADgCAFAAIACAAIAYAFIARAMIAKAXIAWAAIADACIADADQAAAEgBACQgBADgEABIgYAAQgIgBgDgGIgGgMIgQAZIAWAQQAIAGgFAJIgTAoQgDAEgCAAIgCABIgDgBgAiuBLIgCAAQgGgEACgIIAQgkIgdgVQgFgFAAgEQgBgEADgDIAWghIgPgDIgXAOQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgCgDQgBAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgEACgCIAAgBIAYgPQAEgCAEAAIACAAIAaAFIARAMIAJAXIAWAAIADACIADADQABAEgCACQgBADgDABIgZAAQgIgBgDgGIgFgMIgQAZIAVAQQAIAGgEAJIgUAoQgCAEgDAAIgCABIgDgBgAlmBLIgDAAQgGgEADgIIAPgkIgdgVQgFgFAAgEQgBgEADgDIAWghIgPgDIgWAOQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgCgDQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAgEACgCIABgBIAYgPQADgCAEAAIACAAIAaAFIARAMIAJAXIAWAAIADACQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABAEgBACQgCADgDABIgYAAQgJgBgCgGIgGgMIgQAZIAWAQQAHAGgEAJIgUAoQgCAEgCAAIgDABIgCgBgAobBLIgCAAQgHgEADgIIAPgkIgdgVQgEgFgBgEQAAgEACgDIAWghIgOgDIgXAOQAAAAgBABQgBAAAAAAQgBABAAAAQgBAAAAAAQgEAAgCgDQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgEABgCIABgBIAXgPQAEgCAFAAIABAAIAaAFIARAMIAKAXIAWAAIACACIAEADQAAAEgBACQgBADgEABIgYAAQgIgBgEgGIgFgMIgQAZIAVAQQAJAGgFAJIgUAoQgCAEgCAAIgCABIgDgBgArUBLIgCAAQgGgEACgIIAPgkIgdgVQgEgFgBgEQAAgEADgDIAVghIgOgDIgXAOQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgDAAgDgDQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgEABgCIABgBIAYgPQADgCAFAAIABAAIAaAFIARAMIAKAXIAWAAIADACQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAAEgBACQgBADgEABIgYAAQgIgBgDgGIgGgMIgQAZIAWAQQAIAGgFAJIgUAoQgCAEgCAAIgCABIgDgBgAuJBLIgCAAQgGgEACgIIAQgkIgdgVQgFgFAAgEQgBgEADgDIAVghIgOgDIgXAOQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgCgDQgBAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgEACgCIABgBIAXgPQAEgCAEAAIACAAIAaAFIARAMIAJAXIAWAAIADACQAAAAABABQABAAAAAAQABABAAAAQAAABAAAAQABAEgBACQgCADgDABIgZAAQgIgBgDgGIgFgMIgRAZIAWAQQAIAGgEAJIgUAoQgCAEgDAAIgCABIgDgBgANOAgQgHgBAAgIQAAgHAJgBIAgAAIAIgNQAEAHAKAGIgLAOQgCADgIAAgAKZAgIgDgBQgEgCAAgGQAAgHAIgBIAhAAIAJgNIAAABIACADQAEAFAIAEIgMAOQgBADgIAAgAHgAgQgGgBgBgIQABgHAIgBIAgAAIAJgNQADAHALAGIgMAOQgBADgIAAgAEsAgQgHgBAAgIQAAgHAIgBIAgAAIAJgNQADAHALAGIgLAOQgCADgIAAgABzAgQgHgBAAgIQAAgHAIgBIAhAAIAJgNQACAHALAGIgLAOQgCADgIAAgAhBAgQgGgBgBgIQABgHAIgBIAgAAIAJgNQADAHAKAGIgKAOQgCADgJAAgAj1AgQgHgBgBgIQABgHAIgBIAgAAIAJgNQADAHALAGIgLAOQgCADgIAAgAmuAgQgHgBgBgIQABgHAIgBIAhAAIAJgNQADAHAKAGIgLAOQgCADgIAAgApjAgQgHgBAAgIQAAgHAJgBIAgAAIAJgNQADAHAKAGIgKAOQgDADgIAAgAsbAgQgIgBAAgIQAAgHAJgBIAgAAIAJgNQADAHAKAGIgKAOQgCADgJAAgAvQAgQgHgBgBgIQABgHAIgBIAgAAIAJgNQAEAHAKAGIgLAOQgCADgIAAgAOqg4QgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAEgGAAQgHAAgEgEgAMAg0QgHAAgEgEQgEgEAAgGQAAgHAEgEQAEgFAHAAIABAAIAEABQADABADADQAEADAAAFIAAAFQAAAEgEAEIgGADIgEABgAI8g4QgEgEAAgGQAAgHAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAEgGAAQgGAAgFgEgAGIg4QgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAEgGAAQgHAAgEgEgADPg4QgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAEgGAAQgHAAgEgEgAAag4QgEgEAAgGQAAgHAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAEgGAAQgGAAgFgEgAiZg4QgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAFAFQADAEAAAHQAAAGgDAEQgFAEgGAAQgHAAgEgEgAlSg4QgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAFAFQADAEAAAHQAAAGgDAEQgFAEgGAAQgHAAgEgEgAoHg4QgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAEgGAAQgHAAgEgEgArAg4QgEgEAAgGQAAgHAEgEQAEgFAHAAQAHAAAEAFQAEAEAAAHQAAAGgEAEQgEAEgHAAQgHAAgEgEgAt0g4QgFgEAAgGQAAgHAFgEQAEgFAHAAQAGAAAEAFQAFAEAAAHQAAAGgFAEQgEAEgGAAQgHAAgEgEgAOWhgIgCAAQgHgDACgJIAQgkIgdgVQgEgFgBgFQAAgEACgDIAWghIgOgDIgXAOQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgEAAgCgDQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAgEACgBIABgCIAXgOQAEgDAFAAIABAAIAaAFIARAMIAKAYIAWAAIACABQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAADgBADQgCACgDABIgZAAQgHgBgEgGIgFgMIgQAbIAVAPQAJAHgFAIIgUApQgCADgDAAIgCABIgCgBgALhhgIgCAAQgGgDACgJIAQgkIgdgVIgDgCQgCgEgBgEQAAgDACgDIAWgiIgOgDIgXAOQgBABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgCAAIgEgDQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgCQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAIABgCIAYgOQAEgDAEAAIACAAIAaAFIARAMIAJAYIAWAAIADABIADAEQAAADgBADQgCACgCABIgZAAQgIgBgDgGIgGgMIgQAbIAWAPQAIAHgEAIIgUApQgDADgCAAIgCABIgDgBgAIohgIgCAAQgGgDACgJIAQgkIgdgVQgFgFAAgFQgBgEACgDIAWghIgOgDIgXAOQgBABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgDAAgCgDQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAgEADgBIABgCIAXgOQAEgDAEAAIACAAIAaAFIARAMIAJAYIAWAAIADABIADAEQABADgCADQgBACgDABIgZAAQgIgBgDgGIgGgMIgQAbIAWAPQAIAHgEAIIgUApQgCADgDAAIgCABIgDgBgAFzhgIgBAAQgHgDACgJIAQgkIgdgVQgFgFAAgFQAAgEACgDIAVghIgOgDIgXAOQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgDAAgCgDQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEACgBIABgCIAXgOQAEgDAEAAIACAAIAaAFIARAMIAJAYIAWAAIADABQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABADgCADQgBACgDABIgZAAQgHgBgEgGIgFgMIgQAbIAVAPQAIAHgEAIIgUApQgCADgDAAIgCABIgDgBgAC6hgIgBAAQgHgDADgJIAPgkIgdgVQgEgFgBgFQAAgEACgDIAWghIgPgDIgWAOQgCACgDAAQgDAAgCgDQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgEACgBIABgCIAYgOQADgDAEAAIACAAIAaAFIARAMIAJAYIAWAAIADABQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABADgCADQgBACgDABIgYAAQgIgBgEgGIgFgMIgQAbIAVAPQAIAHgEAIIgUApQgCADgCAAIgDABIgDgBgAAGhgIgCAAQgGgDACgJIAQgkIgdgVQgEgFAAgFQgBgEACgDIAVghIgNgDIgXAOQgCACgCAAQgDAAgDgDQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEABgBIABgCIAYgOQADgDAFAAIACAAIAYAFIARAMIAKAYIAWAAIADABQAAABABAAQAAAAAAABQABAAAAABQAAAAABABQAAADgBADQgBACgEABIgYAAQgIgBgDgGIgGgMIgQAbIAWAPQAIAHgFAIIgTApQgDADgCAAIgCABIgDgBgAiuhgIgCAAQgGgDACgJIAQgkIgdgVQgFgFAAgFQgBgEADgDIAWghIgPgDIgXAOQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgDAAgCgDQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEACgBIAAgCIAYgOQAEgDAEAAIACAAIAaAFIARAMIAJAYIAWAAIADABQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABADgCADQgBACgDABIgZAAQgIgBgDgGIgFgMIgQAbIAVAPQAIAHgEAIIgUApQgCADgDAAIgCABIgDgBgAlmhgIgDAAQgGgDADgJIAPgkIgdgVQgFgFAAgFQgBgEADgDIAWghIgPgDIgWAOQgDACgCAAQgDAAgCgDQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgEACgBIABgCIAYgOQADgDAEAAIACAAIAaAFIARAMIAJAYIAWAAIADABQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABADgBADQgCACgDABIgYAAQgJgBgCgGIgGgMIgQAbIAWAPQAHAHgEAIIgUApQgCADgCAAIgDABIgCgBgAobhgIgCAAQgHgDADgJIAPgkIgdgVQgEgFgBgFQAAgEACgDIAWghIgOgDIgXAOQgCACgCAAQgEAAgCgDQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEABgBIABgCIAXgOQAEgDAFAAIABAAIAaAFIARAMIAKAYIAWAAIACABQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAADgBADQgBACgEABIgYAAQgIgBgEgGIgFgMIgQAbIAVAPQAJAHgFAIIgUApQgCADgCAAIgCABIgDgBgArUhgIgCAAQgGgDACgJIAPgkIgdgVQgEgFgBgFQAAgEADgDIAVghIgOgDIgXAOQgCACgCAAQgDAAgDgDQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEABgBIABgCIAYgOQADgDAFAAIABAAIAaAFIARAMIAKAYIAWAAIADABQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAADgBADQgBACgEABIgYAAQgIgBgDgGIgGgMIgQAbIAWAPQAIAHgFAIIgUApQgCADgCAAIgCABIgDgBgAuJhgIgCAAQgGgDACgJIAQgkIgdgVQgFgFAAgFQgBgEADgDIAVghIgOgDIgXAOQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgDAAgCgDQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEACgBIABgCIAXgOQAEgDAEAAIACAAIAaAFIARAMIAJAYIAWAAIADABQAAABABAAQABAAAAABQABAAAAABQAAAAAAABQABADgBADQgCACgDABIgZAAQgIgBgDgGIgFgMIgRAbIAWAPQAIAHgEAIIgUApQgCADgDAAIgCABIgDgBgANOiKQgHgCAAgHQAAgIAJgBIAgAAIAIgNQAEAHAKAGIgLAOQgCAEgIAAgAKZiKIgDgCQgEgCAAgFQAAgIAIgBIAhAAIAJgNIAAABIACADQAEAFAIAEIgMAOQgBAEgIAAgAHgiKQgGgCgBgHQABgIAIgBIAgAAIAJgNQADAHALAGIgMAOQgBAEgIAAgAEsiKQgHgCAAgHQAAgIAIgBIAgAAIAJgNQADAHALAGIgLAOQgCAEgIAAgABziKQgHgCAAgHQAAgIAIgBIAhAAIAJgNQACAHALAGIgLAOQgCAEgIAAgAhBiKQgGgCgBgHQABgIAIgBIAgAAIAJgNQADAHAKAGIgKAOQgCAEgJAAgAj1iKQgHgCgBgHQABgIAIgBIAgAAIAJgNQADAHALAGIgLAOQgCAEgIAAgAmuiKQgHgCgBgHQABgIAIgBIAhAAIAJgNQADAHAKAGIgLAOQgCAEgIAAgApjiKQgHgCAAgHQAAgIAJgBIAgAAIAJgNQADAHAKAGIgKAOQgDAEgIAAgAsbiKQgIgCAAgHQAAgIAJgBIAgAAIAJgNQADAHAKAGIgKAOQgCAEgJAAgAvQiKQgHgCgBgHQABgIAIgBIAgAAIAJgNQAEAHAKAGIgLAOQgCAEgIAAgAOqjkQgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAEgGAAQgHAAgEgEgAMAjgQgHAAgEgEQgEgEAAgGQAAgHAEgEQAEgFAHAAIABAAIAEABIAGAEQAEAEAAAFIAAAEQAAAEgEAEQgDADgDABIgEAAgAI8jkQgEgEAAgGQAAgHAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAEgGAAQgGAAgFgEgAGIjkQgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAEgGAAQgHAAgEgEgADPjkQgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAEgGAAQgHAAgEgEgAAajkQgEgEAAgGQAAgHAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAEgGAAQgGAAgFgEgAiZjkQgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAFAFQADAEAAAHQAAAGgDAEQgFAEgGAAQgHAAgEgEgAlSjkQgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAFAFQADAEAAAHQAAAGgDAEQgFAEgGAAQgHAAgEgEgAoHjkQgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAEgGAAQgHAAgEgEgArAjkQgEgEAAgGQAAgHAEgEQAEgFAHAAQAHAAAEAFQAEAEAAAHQAAAGgEAEQgEAEgHAAQgHAAgEgEgAt0jkQgFgEAAgGQAAgHAFgEQAEgFAHAAQAGAAAEAFQAFAEAAAHQAAAGgFAEQgEAEgGAAQgHAAgEgEg"
      );
    this.shape.setTransform(102.9313, 29.1125);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .lf(["#FFCC00", "#FFEA98"], [0, 1], -1.8, 29.6, -1.8, -29.6)
      .s()
      .p("AufEoQhsAAAAhsIAAl4QAAhrBsAAIc/AAQBsAAgBBrIAAF4QABBshsAAg");
    this.shape_1.setTransform(103.55, 29.6);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol3,
    new cjs.Rectangle(0, 0, 207.1, 59.2),
    null
  );
  (lib.Symbol1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABqArQgGgDgFgGQgEgGgCgJQgCgIAAgLQAAgLACgHQACgJAEgGQAFgGAGgCQAIgDAJgBQAKABAHADQAHADAEAFQAEAGACAJQACAIAAAKQAAALgCAIQgCAKgEAFQgEAGgHADQgHACgKAAQgKAAgHgCgABxgVQgDAGAAAPQAAAPADAIQADAGAHAAQAHAAADgGQADgIAAgPQAAgPgDgGQgDgHgHAAQgHAAgDAHgAAVArQgGgDgFgGQgEgGgCgJQgCgIAAgLQAAgLACgHQACgJAEgGQAFgGAGgCQAIgDAJgBQAKABAHADQAHADAEAFQAEAGACAJQACAIAAAKQAAALgCAIQgCAKgEAFQgEAGgHADQgHACgKAAQgKAAgHgCgAAcgVQgDAGAAAPQAAAPADAIQADAGAHAAQAHAAADgGQADgIAAgPQAAgPgDgGQgDgHgHAAQgHAAgDAHgAg/ArQgGgDgFgGQgEgGgCgJQgCgIAAgLQAAgLACgHQACgJAEgGQAFgGAGgCQAIgDAJgBQAKABAHADQAHADAEAFQAEAGACAJQACAIAAAKQAAALgCAIQgCAKgEAFQgEAGgHADQgHACgKAAQgKAAgHgCgAg4gVQgDAGAAAPQAAAPADAIQADAGAHAAQAHAAADgGQADgIAAgPQAAgPgDgGQgDgHgHAAQgHAAgDAHgAieAsIAAgQIASAAIAAgtIgSAAIAAgOIAIAAIAGgCQAEgBABgDQACgCAAgEIATAAIAABHIASAAIAAAQg"
      );
    this.shape.setTransform(15.925, 4.55);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol1,
    new cjs.Rectangle(0, 0, 31.9, 9.1),
    null
  );
  (lib.star_in_mc = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AgIAJIirgJICrgIIAIirIAJCrICrAIIirAJIgJCrg");
    this.shape.setTransform(18, 18);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.star_in_mc,
    new cjs.Rectangle(0, 0, 36, 36),
    null
  );
  (lib.slideAd2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E32118")
      .s()
      .p(
        "AhrBsQgugsAAhAQAAg/AugtQAqgrA8gCIAFAAIADAAIACAAQA8ACAsArQAtAtAAA/QAABAgtAsQguAug/gBQg+ABgtgugAg7BaQAbASAgAAQAtAAAfggQAgggAAgsQAAgggSgbgAgFhrQgoADgeAdQgfAgAAArQAAAgAQAaICUiVQgYgPgdgBIgCAAIgDgBIgFABg"
      );
    this.shape.setTransform(32.375, 29.85);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("AgGAkIAAgOIANAAIAAAOgAgDARIgEgjIAAgRIAPAAIAAARIgEAjg");
    this.shape_1.setTransform(201.55, 40.275);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSATQgFgIAAgKQAAgNAHgGQAGgIAKAAQALAAAHAIQAHAHgBAPIghAAQAAAGADADQADAEAEAAQADAAADgCQACgCABgDIAOACQgDAHgGAEQgFAEgJAAQgMAAgHgIgAgGgNQgDAEAAAFIAUAAQAAgFgDgEQgDgDgEAAQgEAAgDADg"
      );
    this.shape_2.setTransform(197.0767, 41.25);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgBAiIgFgDIgBgFIgBgKIAAgVIgGAAIAAgMIAGAAIAAgKIANgIIAAASIAJAAIAAAMIgJAAIAAATIAAAIIABABIADABIAFgBIABAKQgEACgHAAIgFgBg"
      );
    this.shape_3.setTransform(192.675, 40.4);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p("AgGAkIAAgzIANAAIAAAzgAgGgWIAAgNIANAAIAAANg");
    this.shape_4.setTransform(189.6, 40.275);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgPAXQgHgEgBgIIANgCQABAEADACQADACADABQAGAAACgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIgBgCIgEgBQgQgFgEgCQgHgDAAgIQAAgHAGgFQAFgEALAAQAKAAAFADQAFAEACAGIgNADQAAgDgDgCQgCgBgEAAQgFAAgCABQgBABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABABQABABAKACQALADAFADQAEADAAAHQAAAHgGAFQgGAFgMAAQgJAAgGgEg"
      );
    this.shape_5.setTransform(185.325, 41.25);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSATQgFgIAAgKQAAgNAHgGQAGgIAKAAQALAAAHAIQAHAHgBAPIghAAQAAAGADADQADAEAEAAQADAAADgCQACgCABgDIAOACQgDAHgGAEQgFAEgJAAQgMAAgHgIgAgGgNQgDAEAAAFIAUAAQAAgFgDgEQgDgDgEAAQgEAAgDADg"
      );
    this.shape_6.setTransform(177.0267, 41.25);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAKAkIAAgcIgBgJQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQgCgCgDAAQgCAAgDACIgEAEIgBAKIAAAaIgOAAIAAhHIAOAAIAAAaQAHgHAIAAQAFAAAEABIAFAFQACADABADIABAJIAAAfg"
      );
    this.shape_7.setTransform(171.275, 40.275);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgBAiIgFgDIgBgFIgBgKIAAgVIgGAAIAAgMIAGAAIAAgKIANgIIAAASIAJAAIAAAMIgJAAIAAATIAAAIIABABIADABIAFgBIABAKQgEACgHAAIgFgBg"
      );
    this.shape_8.setTransform(166.525, 40.4);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgBAiIgFgDIgBgFIgBgKIAAgVIgGAAIAAgMIAGAAIAAgKIANgIIAAASIAJAAIAAAMIgJAAIAAATIAAAIIABABIADABIAFgBIABAKQgEACgHAAIgFgBg"
      );
    this.shape_9.setTransform(160.375, 40.4);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgQAaIAAgzIANAAIAAAIIAFgHIAGgCQAFAAAEADIgEAMQgEgCgDAAQgDAAgCACQgBABgBAEIgBAQIAAAQg"
      );
    this.shape_10.setTransform(157.125, 41.2);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgNAYQgGgDgDgHQgEgGAAgIQAAgHAEgGQADgHAGgDQAGgDAHAAQAMAAAHAIQAIAHAAALQAAALgIAJQgHAHgMAAQgGAAgHgDgAgIgKQgEAEAAAGQAAAIAEAEQAEAEAEAAQAFAAAEgEQAEgEAAgIQAAgGgEgEQgEgFgFAAQgEAAgEAFg"
      );
    this.shape_11.setTransform(151.775, 41.25);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgYAkIAAhGIAMAAIAAAIQADgEAEgDQAEgCAEAAQAKAAAGAHQAGAHAAANQAAAMgGAHQgHAHgJAAQgDAAgDgCQgEgBgEgFIAAAagAgIgVQgDAEAAAIQAAAJAEADQADAEAEAAQAFAAADgEQADgDAAgIQAAgJgDgDQgDgEgFAAQgEAAgEADg"
      );
    this.shape_12.setTransform(145.825, 42.175);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgYAkIAAhGIAMAAIAAAIQADgEAEgDQAEgCAEAAQAKAAAGAHQAGAHAAANQAAAMgGAHQgHAHgJAAQgDAAgDgCQgEgBgEgFIAAAagAgIgVQgDAEAAAIQAAAJAEADQADAEAEAAQAFAAADgEQADgDAAgIQAAgJgDgDQgDgEgFAAQgEAAgEADg"
      );
    this.shape_13.setTransform(139.725, 42.175);
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgPAYQgEgCgCgEQgBgEAAgIIAAggIANAAIAAAYQAAALABACQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAEABQADAAADgBQADgCABgEQABgCAAgKIAAgXIAOAAIAAAzIgNAAIAAgIQgDAFgEACQgFACgEAAQgGAAgEgCg"
      );
    this.shape_14.setTransform(133.45, 41.3);
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgTAfQgIgHgBgMIAOgBQABAHAEADQAEAEAGAAQAHAAADgDQAEgDAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBgCgEgBIgLgEQgLgCgFgEQgHgGAAgIQAAgGAEgEQADgFAGgDQAFgCAIAAQANAAAHAGQAHAGAAAKIgOAAQgBgFgDgDQgDgCgGAAQgGAAgDACQgDACAAADQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQADADAKACQAKADAFACQAFADADAEQADAEAAAHQAAAGgDAFQgEAGgGACQgGADgKAAQgMAAgHgGg"
      );
    this.shape_15.setTransform(127.025, 40.275);
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p("AgFAZIAAgSIgTAAIAAgMIATAAIAAgTIAMAAIAAATIASAAIAAAMIgSAAIAAASg");
    this.shape_16.setTransform(118.05, 40.3);
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#FFFFFF")
      .s()
      .p("AgGAkIAAgOIANAAIAAAOgAgDARIgEgjIAAgRIAPAAIAAARIgEAjg");
    this.shape_17.setTransform(110.65, 40.275);
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSATQgFgIAAgKQAAgNAHgGQAGgIAKAAQALAAAHAIQAHAHgBAPIghAAQAAAGADADQADAEAEAAQADAAADgCQACgCABgDIAOACQgDAHgGAEQgFAEgJAAQgMAAgHgIgAgGgNQgDAEAAAFIAUAAQAAgFgDgEQgDgDgEAAQgEAAgDADg"
      );
    this.shape_18.setTransform(106.1767, 41.25);
    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgQAaIAAgzIANAAIAAAIIAFgHIAGgCQAFAAAEADIgEAMQgEgCgDAAQgDAAgCACQgBABgBAEIgBAQIAAAQg"
      );
    this.shape_19.setTransform(101.875, 41.2);
    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSATQgFgIAAgKQAAgNAHgGQAGgIAKAAQALAAAHAIQAHAHgBAPIghAAQAAAGADADQADAEAEAAQADAAADgCQACgCABgDIAOACQgDAHgGAEQgFAEgJAAQgMAAgHgIgAgGgNQgDAEAAAFIAUAAQAAgFgDgEQgDgDgEAAQgEAAgDADg"
      );
    this.shape_20.setTransform(96.7267, 41.25);
    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAKAkIAAgcIgBgJQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQgCgCgDAAQgCAAgDACIgEAEIgBAKIAAAaIgOAAIAAhHIAOAAIAAAaQAHgHAIAAQAFAAAEABIAFAFQACADABADIABAJIAAAfg"
      );
    this.shape_21.setTransform(90.975, 40.275);
    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#FFFFFF")
      .s()
      .p("AAJAaIgJghIgIAhIgNAAIgRgzIAOAAIAJAhIAJghIAMAAIAJAhIAKghIANAAIgQAzg");
    this.shape_22.setTransform(83.9, 41.25);
    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgVAjIgBgKIAGAAQAEAAADgCIADgIIgUgzIAPAAIALAlIANglIAOAAIgTAxIgDAJIgDAIIgDADIgFACIgHACIgIgCg"
      );
    this.shape_23.setTransform(77.275, 42.3);
    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAKAaIAAgaQAAgIgBgCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQgCgCgDAAQgCAAgDACQgDACgBADIgBALIAAAXIgOAAIAAgzIANAAIAAAIQAHgIAJgBQAFAAADACQAEACACACQACADABADIABAKIAAAeg"
      );
    this.shape_24.setTransform(71.525, 41.2);
    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#FFFFFF")
      .s()
      .p("AAUAkIgGgRIgcAAIgFARIgQAAIAchHIAOAAIAdBHgAgJAHIASAAIgJgZg");
    this.shape_25.setTransform(64.85, 40.275);
    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#FFFFFF")
      .s()
      .p("AgNBIIAAgcIAbAAIAAAcgAgHAjIgHhIIAAghIAdAAIAAAhIgHBIg");
    this.shape_26.setTransform(166.425, 20);
    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgfAuQgMgJgFgPIAcgEQACAIAFAEQAGAEAJAAQAKAAAGgEQADgCAAgFQAAgDgCgCQgCgCgHgCQghgHgIgGQgMgIAAgOQAAgOAKgJQALgJAWAAQAVAAAKAHQAKAHAEANIgaAFQgCgGgEgDQgFgEgIAAQgKAAgFADQgDADAAADQAAADACACQAEADAWAFQAWAFAIAHQAIAGAAANQABAPgMAKQgMAKgXAAQgVAAgMgIg"
      );
    this.shape_27.setTransform(157.35, 21.975);
    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AglA6QgNgOAAgaQAAgZANgOQAMgOATAAQARAAAMAPIAAg0IAcAAIAACOIgaAAIAAgPQgGAJgJAEQgIAFgIAAQgSAAgNgPgAgPgGQgHAHAAAPQAAARAFAHQAHALALAAQAJAAAHgIQAGgIAAgQQAAgSgGgHQgHgIgKAAQgIAAgHAIg"
      );
    this.shape_28.setTransform(145.725, 20.125);
    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#FFFFFF")
      .s()
      .p("AAoBIIgMghIg4AAIgMAhIgfAAIA4iOIAeAAIA5COgAgTAPIAmAAIgTg1g");
    this.shape_29.setTransform(132.575, 20);
    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgaAwQgNgHgHgMQgGgNgBgRQABgNAGgNQAHgNANgHQAMgGAOAAQAXAAAPAPQAPAPABAXQgBAXgPAQQgPAPgXAAQgNAAgNgGgAgRgXQgHAIgBAPQABAPAHAJQAIAIAJAAQALAAAHgIQAIgJAAgPQAAgPgIgIQgHgIgLAAQgJAAgIAIg"
      );
    this.shape_30.setTransform(113.8, 21.975);
    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#FFFFFF")
      .s()
      .p("AAcBIIg5hdIAABdIgbAAIAAiOIAcAAIA6BeIAAheIAbAAIAACOg");
    this.shape_31.setTransform(100.375, 20);
    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f()
      .s("#000000")
      .ss(3, 1, 1)
      .p(
        "ADvAAQAABjhGBGQhGBGhjAAQhiAAhGhGQhGhGAAhjQAAhiBGhGQBGhFBiAAQBjAABGBFQBGBGAABig"
      );
    this.shape_32.setTransform(32.1, 29.65);
    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .lf(
        ["#F2F2F2", "#FFFFFF", "#F6F6F6"],
        [0, 0.647, 1],
        -10.2,
        -21.7,
        10.2,
        21.6
      )
      .s()
      .p(
        "AioCpQhFhGAAhjQAAhiBFhGQBGhFBigBQBjABBGBFQBGBGAABiQAABjhGBGQhGBFhjAAQhiAAhGhFg"
      );
    this.shape_33.setTransform(32.1, 29.65);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {
              t: this.shape_33,
            },
            {
              t: this.shape_32,
            },
            {
              t: this.shape_31,
            },
            {
              t: this.shape_30,
            },
            {
              t: this.shape_29,
            },
            {
              t: this.shape_28,
            },
            {
              t: this.shape_27,
            },
            {
              t: this.shape_26,
            },
            {
              t: this.shape_25,
            },
            {
              t: this.shape_24,
            },
            {
              t: this.shape_23,
            },
            {
              t: this.shape_22,
            },
            {
              t: this.shape_21,
            },
            {
              t: this.shape_20,
            },
            {
              t: this.shape_19,
            },
            {
              t: this.shape_18,
            },
            {
              t: this.shape_17,
            },
            {
              t: this.shape_16,
            },
            {
              t: this.shape_15,
            },
            {
              t: this.shape_14,
            },
            {
              t: this.shape_13,
            },
            {
              t: this.shape_12,
            },
            {
              t: this.shape_11,
            },
            {
              t: this.shape_10,
            },
            {
              t: this.shape_9,
            },
            {
              t: this.shape_8,
            },
            {
              t: this.shape_7,
            },
            {
              t: this.shape_6,
            },
            {
              t: this.shape_5,
            },
            {
              t: this.shape_4,
            },
            {
              t: this.shape_3,
            },
            {
              t: this.shape_2,
            },
            {
              t: this.shape_1,
            },
          ],
        })
        .wait(1)
    );
    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("rgba(0,0,0,0.2)")
      .s()
      .p(
        "AioCoQhFhFAAhjQAAhiBFhGQBGhGBiAAQBjAABGBGQBGBGAABiQAABjhGBFQhGBHhjgBQhiABhGhHg"
      );
    this.shape_34.setTransform(32.1, 32.5);
    this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));
    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f()
      .s("#000000")
      .ss(3, 1, 1)
      .p("AufknIc/AAQBsAAAABrIAAF5QAABrhsAAI8/AAQhsAAAAhrIAAl5QAAhrBsAAg");
    this.shape_35.setTransform(105.15, 29.6);
    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .lf(["#FF0606", "#FF9E9E"], [0, 1], -1.8, 29.6, -1.8, -29.6)
      .s()
      .p("AufEoQhsAAABhsIAAl4QgBhrBsAAIc/AAQBrAAABBrIAAF4QgBBshrAAg");
    this.shape_36.setTransform(105.15, 29.6);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {
              t: this.shape_36,
            },
            {
              t: this.shape_35,
            },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.slideAd2,
    new cjs.Rectangle(0.1, -1.5, 210.1, 62.2),
    null
  );
  (lib.shinePremiumInner = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(255,255,255,0.298)")
      .s()
      .p("ApWGbIM2s2IF2AAIsgM2g");
    this.shape.setTransform(59.85, 41.15);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.shinePremiumInner,
    new cjs.Rectangle(0, 0, 119.7, 82.3),
    null
  );
  (lib.shinePremium = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(255,255,255,0.298)")
      .s()
      .p("AseGbIM2s2IMHAAIs2M2g");
    this.shape.setTransform(79.875, 41.15);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.shinePremium,
    new cjs.Rectangle(0, 0, 159.8, 82.3),
    null
  );
  (lib.massLock = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFE50A")
      .s()
      .p(
        "Ah1E1QgIAAgFgGQgHgEAAgKIAAiiQAAgIAHgGQAFgGAIABIAPAAIAAk9QADgnAbgdQAdgeApgBIABAAQANAAANAEQAMAEALAGIAUARQAJAKAGAKQAGALAEALQAEAMABAOIAAALIgsAAIAAgBIAAgFIAAgFQAAgPgHgLIAAAAQgEgGgFgGQgGgFgHgFIgCgBIgLgEIgBAAIgBgBIgLgCIgBAAQgYABgQARQgQAPAAAXIAAAFIAAAFIAAEzICxAAQAIgBAFAGQAGAGAAAIIAACiQAAAKgGAEQgFAGgIAAgAgTCsQgIAJAAALQAAAOAIAFIAFAFQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAADIAAABIgGAiIAAACIACAFQAAAAABABQAAAAABABQAAAAABAAQABAAAAAAIAbAAQABAAAAAAQABAAAAAAQAAgBAAAAQABgBAAAAQACgCAAgDIAAgCIgHgiIAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIABgBIABAAIADgFIAFgEQAEgGAAgJQAAgIgEgFIgFgHQgHgJgMABQgLgBgJAJg"
      );
    this.shape.setTransform(13.825, 30.9);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "Ah1FTQgUgBgNgMQgRgNAAgYIAAiiQgCgTASgQIABgBIAHgHQAFgDAGgBIAAkhIAAgCQAEgxAiglIABgBQAlgmA1gCIABAAIABAAIADAAIABAAIABAAQA1ACAlAmIABABQAiAlAEAxIAAACIAAALIhoAAIAAgBIAAgFIAAgFQAAgKgHgFIgBgCQgFgFgIgCIgPAAQgIACgFAFIgBACQgHAFAAAKIAAAFIAAAFIAAEUICcAAIAAACQAJABAHAEQAFADAEAFIABABQAPAQgBASIAACiQAAAZgRAMQgNANgTAAg"
      );
    this.shape_1.setTransform(13.8222, 30.9);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("rgba(0,0,0,0.467)")
      .s()
      .p(
        "AhQE1IAAhFIg5AAIAAhyQAAgGAHgHQAFgGAIAAIAPAAIAAk8QADggASgZIAJgMQANgNAQgHQATgJAWgBIABAAQANAAANAEIAPAGQAQAHANANIAJAMQASAZADAgIAAAGIgsAAIAAgBIAAgFQAAgUgNgOIgBAAIgDgDQgGgHgHgDQgMgIgOAAIgBAAQgYABgQARIgBABQgPAPAAAVIAAAGIAAADIAAEzIAGAAIAAAyIC+AAIAACEQAAAJgGAFQgFAGgIAAgAgTCtQgIAHAAAMQAAANAIAHIAFAEQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAAEIAAAAIgGAiIAAACIACAFQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAIAbAAQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQACgCAAgDIAAgCIgHgiIAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIABgBIABAAIADgEIAFgFQAEgGAAgJQAAgHgEgHIgFgFQgHgJgMAAQgLAAgJAJg"
      );
    this.shape_2.setTransform(19.975, 31.4);
    this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.massLock,
    new cjs.Rectangle(-3, -3, 36.8, 67.8),
    null
  );
  (lib.empty1000 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 0, 0);
  (lib.Symbol2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.Symbol1();
    this.instance.setTransform(15.9, 4.5, 1, 1, 0, 0, 0, 15.9, 4.5);
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to(
          {
            scaleX: 1.1285,
            scaleY: 1.1285,
            x: 15.95,
            y: 4.55,
          },
          11
        )
        .to(
          {
            scaleX: 1,
            scaleY: 1,
            x: 15.9,
            y: 4.5,
          },
          12
        )
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-2, -0.5, 36, 10.2);
  (lib.star_mc2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.body = new lib.star_in_mc();
    this.body.name = "body";
    this.body.setTransform(18, 18, 1, 1, 0, 0, 0, 18, 18);
    this.body._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.body)
        .wait(14)
        .to(
          {
            _off: false,
          },
          0
        )
        .to(
          {
            scaleX: 0.9997,
            scaleY: 0.9997,
            rotation: 173.9965,
            alpha: 0,
          },
          24
        )
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1.7, -1.8, 39.5, 39.599999999999994);
  (lib.star_mc = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.body = new lib.star_in_mc();
    this.body.name = "body";
    this.body.setTransform(18, 18, 1, 1, 0, 0, 0, 18, 18);
    this.timeline.addTween(
      cjs.Tween.get(this.body)
        .to(
          {
            scaleX: 0.9997,
            scaleY: 0.9997,
            rotation: 173.9965,
            alpha: 0,
          },
          24
        )
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1.7, -1.8, 39.5, 39.599999999999994);
  (lib.slideAd1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(3, 1, 1)
      .p("AufknIc/AAQBsAAAABrIAAF5QAABrhsAAI8/AAQhsAAAAhrIAAl5QAAhrBsAAg");
    this.shape.setTransform(105.15, 29.6);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#00B100")
      .s()
      .p(
        "Ag0A1QgSgTgEgXIAAgLIAAgLQAEgXASgSQAWgXAeAAQAgAAAWAXQASASADAXIAAABIAAAKIAAAKIAAABQgDAXgSATQgWAXggAAQgeAAgWgXgAAcgXQgEADgCAGQgCAGAAAJQAAAQAGAHQAFAGAHABQAHAAADgFQAFgDACgGQACgGAAgKQAAgHgCgFIgCgJIgGgFQgEgCgFAAQgFABgFADgAgPgXQgEADgCAGQgCAGAAAJQAAAQAGAHQAFAGAHABQAGAAAEgFQAEgDACgGQACgGAAgKIgBgMIgEgJQgBgDgFgCQgCgCgFAAQgGABgEADgAgvAdIAGAAIAAg4IgEAAQgCAEgFAEIgKAHIAAAGIAIgDIAHgFgAAeAUQgDgFAAgOQABgMADgHQADgDAEAAQAFAAAEAFQADAEAAANQAAAOgDAFQgEAEgFAAQgEAAgEgEgAgMAUQgEgFAAgOQAAgMAEgHQACgDAFAAQAFAAACAFQADAEABANQgBAOgDAFQgCAEgFAAQgFAAgCgEg"
      );
    this.shape_1.setTransform(38.65, 40.05);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#065E88")
      .s()
      .p(
        "ACFCNIAAgBIABgKIgBgKIAAgBIABAAQAFAAAEAEQADADAAAEIAAAAQAAAEgDAEQgEADgFAAgAiCCNQgEAAgDgDQgDgEAAgEIAAAAQAAgEADgDQADgEAEAAIByAAIAAALIAAALgAgbBfIgDgBQgJgFADgNIAXg1IgrggQgHgGgBgHQAAgGADgFIAhgyIgWgEIgiAVQgCACgEAAQgFAAgDgDQgDgCAAgFQAAgFADgDIABgCIAjgVQAGgEAGgCIADAAIAmAJIAZASIAOAjIAhAAIAEACQAEADABADQABAGgCADQgDAEgEABIglAAQgMgBgFgLIgIgRIgXAoIAfAWQAMAKgGANIgdA8QgDAEgDACIgEAAIgEAAgAiGAfQgKgCgBgMQABgLAMgCIAwAAIANgRQAFALAPAHIgPAUQgDAFgNABgAAChmQgFgGAAgKQAAgJAFgGQAHgHAKAAQAJAAAHAHQAGAGAAAJQAAAKgGAGQgHAHgJAAQgKAAgHgHg"
      );
    this.shape_2.setTransform(32.825, 27);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {
              t: this.shape_2,
            },
            {
              t: this.shape_1,
            },
          ],
        })
        .wait(1)
    );
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p("AgEAkIAAgKIAJAAIAAAKgAgBASIgEglIAAgQIALAAIAAAQIgDAlg");
    this.shape_3.setTransform(176, 39.975);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AgNAXQgGgEgBgIIAJgCQAAAFADADQADADAFAAQAHAAACgDQADgCABgDQAAgDgDgCIgJgDIgMgEQgEgBgCgDQgCgEAAgDQAAgEABgDQACgDADgBIAFgDIAIgBQAFAAAFACQAEACACACQADADAAAFIgIABQgBgDgCgCQgDgDgFAAQgGAAgCACQgDACABADIAAADIAEADIAGACIAOADQADABACADQACAEABAEQAAAEgDAEQgCAEgGACQgEACgHAAQgJAAgEgEg"
      );
    this.shape_4.setTransform(172.05, 40.95);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AgNAbIAAg0IAIAAIAAAIQADgFACgCQACgBADAAQAEAAAFACIgDAIQgDgCgEAAQgCAAgCACQgCACgBADIgBAKIAAAbg"
      );
    this.shape_5.setTransform(168.3, 40.9);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgQAUQgHgHAAgMQAAgNAHgHQAHgHAKAAQAKAAAHAHQAGAHAAAMIAAADIgmAAQAAAIAFAEQAEAFAGAAQAFAAADgDQADgCACgFIAJABQgBAHgHAFQgFAEgJAAQgKAAgHgHgAgIgOQgFAEAAAGIAbAAQAAgGgCgDQgFgGgGAAQgGAAgDAFg"
      );
    this.shape_6.setTransform(163.45, 40.95);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AAaAbIAAggIAAgIQgBgCgDgCQgCgBgDAAQgFAAgEAEQgEADAAAJIAAAdIgHAAIAAghQAAgGgCgDQgDgDgFAAQgDAAgDACQgEACgBAEQgBADAAAHIAAAbIgJAAIAAg0IAIAAIAAAIQACgEAEgCQAEgCAFAAQAGAAAEACQADADABADQAGgJAKABQAIAAAEAEQAEAEAAAJIAAAjg"
      );
    this.shape_7.setTransform(156.525, 40.9);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p("AgDAkIAAgzIAIAAIAAAzgAgDgZIAAgKIAIAAIAAAKg");
    this.shape_8.setTransform(151.25, 39.975);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p("AgEAkIAAg+IgXAAIAAgJIA3AAIAAAJIgXAAIAAA+g");
    this.shape_9.setTransform(147.125, 39.975);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgQAUQgHgHAAgMQAAgNAHgHQAHgHAKAAQAKAAAHAHQAGAHAAAMIAAADIgmAAQABAIAEAEQAFAFAFAAQAFAAADgDQAEgCABgFIAJABQgCAHgFAFQgGAEgJAAQgKAAgHgHgAgIgOQgFAEgBAGIAcAAQAAgGgDgDQgEgGgGAAQgGAAgDAFg"
      );
    this.shape_10.setTransform(138.45, 40.95);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p(
        "AgPAUQgHgGABgNQAAgIACgGQADgGAGgEQAFgDAGAAQAIAAAGAFQAFAEACAHIgJABQgBgFgDgCQgDgDgFAAQgGAAgEAFQgDAFAAAJQAAAKADAFQAEAFAGAAQAFAAADgDQAEgEABgGIAJABQgCAJgFAFQgHAFgIAAQgKAAgGgHg"
      );
    this.shape_11.setTransform(133.35, 40.95);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AgTAXQgEgEAAgGQAAgEACgEQABgDAEgBIAFgDIAIgBQAKgBAFgCIAAgCQAAgFgCgDQgEgDgGAAQgGAAgCADQgEABgBAGIgJgBQACgGADgDQACgDAFgCQAFgCAGAAQAHAAAEACQAEABACACQACADABAEIAAAIIAAAKIABAQIACAGIgKAAIgBgGQgFAEgFABQgDACgFAAQgIAAgGgEgAgBAEIgIABIgEADIgBAEQABAEACACQADACAFABQAEgBAEgCQAEgCACgEIABgJIAAgDQgEACgJACg"
      );
    this.shape_12.setTransform(127.9, 40.95);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p(
        "AATAkIgJgPIgHgKIgDgFIgFgCIgFAAIgLAAIAAAgIgKAAIAAhHIAfAAQAJAAAGACQAEACADAFQAEAFAAAGQAAAHgGAGQgFAEgJABIAFAEQAEAEAEAFIAMAUgAgVgDIAUAAQAGAAAEgCQADgBACgDQACgDAAgDQAAgFgEgEQgDgDgJAAIgVAAg"
      );
    this.shape_13.setTransform(121.9, 39.975);
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#000000")
      .s()
      .p("AgDAYIAAgUIgUAAIAAgHIAUAAIAAgUIAHAAIAAAUIAUAAIAAAHIgUAAIAAAUg");
    this.shape_14.setTransform(112.275, 40.025);
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#000000")
      .s()
      .p(
        "AgPAdQgIgIABgVQAAgLACgIQADgIAFgEQAFgEAHAAQAGgBAEADQAEADADAEQADAEACAGQABAHABAJQAAANgDAHQgDAIgFAFQgFADgIAAQgKABgFgIgAgJgXQgFAGABARQgBASAFAGQAEAFAFAAQAGAAAEgFQAEgGAAgSQAAgQgEgHQgEgFgGAAQgFAAgEAFg"
      );
    this.shape_15.setTransform(106.55, 40);
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#000000")
      .s()
      .p(
        "AgQAfQgGgGgBgJIAKgBQABAHADADQAEAEAFAAQAGAAAEgFQAFgFAAgIQAAgHgFgEQgEgEgGAAQgEAAgDACQgEACgCACIgIgBIAHgkIAiAAIAAAJIgbAAIgEATQAHgFAGAAQAJAAAGAHQAHAFAAAKQAAAKgGAHQgHAJgLAAQgJAAgHgFg"
      );
    this.shape_16.setTransform(101.025, 40.075);
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#000000")
      .s()
      .p(
        "AAMAbIAAgfIgBgIQAAgCgDgDQgDgBgEAAQgEAAgEADQgEAEAAAKIAAAcIgJAAIAAg0IAIAAIAAAIQAGgIAJAAQAFAAAEABQAEACACADQACADAAADIABAIIAAAgg"
      );
    this.shape_17.setTransform(92.65, 40.9);
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
    this.shape_18.setTransform(88.525, 39.975);
    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#000000")
      .s()
      .p("AgGA2IAAgPIANAAIAAAPgAgDAbIgEg4IAAgYIAPAAIAAAYIgEA4g");
    this.shape_19.setTransform(182.8, 22.225);
    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#000000")
      .s()
      .p(
        "AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg"
      );
    this.shape_20.setTransform(176.875, 23.725);
    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#000000")
      .s()
      .p(
        "AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog"
      );
    this.shape_21.setTransform(171.275, 23.625);
    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#000000")
      .s()
      .p(
        "AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg"
      );
    this.shape_22.setTransform(163.975, 23.725);
    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#000000")
      .s()
      .p(
        "AgBAzQgEgDgBgDQgCgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIABAHIACADIAFABIAFgBIACAMIgKABQgHAAgDgCg"
      );
    this.shape_23.setTransform(157.85, 22.4);
    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#000000")
      .s()
      .p(
        "AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg"
      );
    this.shape_24.setTransform(152.175, 23.725);
    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#000000")
      .s()
      .p(
        "AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg"
      );
    this.shape_25.setTransform(143.975, 23.725);
    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#000000")
      .s()
      .p(
        "AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog"
      );
    this.shape_26.setTransform(137.925, 23.625);
    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#000000")
      .s()
      .p(
        "AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg"
      );
    this.shape_27.setTransform(130.625, 23.725);
    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#000000")
      .s()
      .p(
        "AASA2IAAgyQAAgIgEgFQgEgEgIAAQgFAAgFADQgFADgCAFQgDAEAAAJIAAArIgMAAIAAhrIAMAAIAAAnQAKgLANAAQAJAAAGAEQAGADADAGQACAGABAKIAAAyg"
      );
    this.shape_28.setTransform(122.3, 22.225);
    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#000000")
      .s()
      .p(
        "AgYAwQgLgHgGgNQgGgOABgOQgBgRAHgMQAGgNAMgGQAMgHANABQAQAAALAHQALAJAFAOIgPAEQgDgMgIgFQgHgFgKAAQgLgBgJAHQgIAGgDAJQgEAKAAALQAAAMAEALQAEAKAJAFQAIAFAJAAQALAAAJgGQAIgIADgNIAOAEQgEARgMAJQgMAKgQAAQgRAAgKgIg"
      );
    this.shape_29.setTransform(112.8, 22.25);
    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#000000")
      .s()
      .p(
        "AgXArQgLgNAAgeQAAgSAEgLQAEgMAIgGQAHgHALAAQAJAAAGAEQAHADAEAHQAEAHADAIQACAKAAAPQAAATgDAMQgEALgIAHQgIAGgMAAQgOAAgJgMgAgNgjQgHAJAAAaQAAAbAGAIQAGAJAIAAQAKAAAFgJQAHgIAAgbQAAgZgHgJQgFgJgKAAQgIAAgFAIg"
      );
    this.shape_30.setTransform(98.9, 22.3);
    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#000000")
      .s()
      .p(
        "AgXArQgLgNAAgeQAAgSAEgLQAEgMAIgGQAIgHAKAAQAJAAAGAEQAHADAEAHQAFAHACAIQACAKAAAPQAAATgEAMQgDALgIAHQgIAGgMAAQgOAAgJgMgAgOgjQgGAJAAAaQAAAbAGAIQAGAJAIAAQAKAAAFgJQAHgIgBgbQABgZgHgJQgFgJgKAAQgIAAgGAIg"
      );
    this.shape_31.setTransform(90.55, 22.3);
    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#000000")
      .s()
      .p("AAGA2IAAhTQgEAFgHAEIgOAHIAAgNQALgFAIgHQAIgIADgHIAJAAIAABrg");
    this.shape_32.setTransform(81.725, 22.2);
    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f()
      .s("#000000")
      .ss(3, 1, 1)
      .p(
        "ADvAAQAABjhGBGQhGBGhjAAQhiAAhGhGQhGhGAAhjQAAhiBGhGQBGhFBiAAQBjAABGBFQBGBGAABig"
      );
    this.shape_33.setTransform(32.1, 29.65);
    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .lf(
        ["#F2F2F2", "#FFFFFF", "#F6F6F6"],
        [0, 0.647, 1],
        -10.3,
        -21.6,
        10.2,
        21.6
      )
      .s()
      .p(
        "AioCpQhFhGAAhjQAAhiBFhGQBGhFBigBQBjABBGBFQBGBGAABiQAABjhGBGQhGBFhjAAQhiAAhGhFg"
      );
    this.shape_34.setTransform(32.1, 29.65);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {
              t: this.shape_34,
            },
            {
              t: this.shape_33,
            },
            {
              t: this.shape_32,
            },
            {
              t: this.shape_31,
            },
            {
              t: this.shape_30,
            },
            {
              t: this.shape_29,
            },
            {
              t: this.shape_28,
            },
            {
              t: this.shape_27,
            },
            {
              t: this.shape_26,
            },
            {
              t: this.shape_25,
            },
            {
              t: this.shape_24,
            },
            {
              t: this.shape_23,
            },
            {
              t: this.shape_22,
            },
            {
              t: this.shape_21,
            },
            {
              t: this.shape_20,
            },
            {
              t: this.shape_19,
            },
            {
              t: this.shape_18,
            },
            {
              t: this.shape_17,
            },
            {
              t: this.shape_16,
            },
            {
              t: this.shape_15,
            },
            {
              t: this.shape_14,
            },
            {
              t: this.shape_13,
            },
            {
              t: this.shape_12,
            },
            {
              t: this.shape_11,
            },
            {
              t: this.shape_10,
            },
            {
              t: this.shape_9,
            },
            {
              t: this.shape_8,
            },
            {
              t: this.shape_7,
            },
            {
              t: this.shape_6,
            },
            {
              t: this.shape_5,
            },
            {
              t: this.shape_4,
            },
            {
              t: this.shape_3,
            },
          ],
        })
        .wait(1)
    );
    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("rgba(0,0,0,0.2)")
      .s()
      .p(
        "AioCoQhFhFAAhjQAAhiBFhGQBGhGBiAAQBjAABGBGQBGBGAABiQAABjhGBFQhGBHhjgBQhiABhGhHg"
      );
    this.shape_35.setTransform(32.1, 32.5);
    this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));
    this.instance = new lib.Symbol3();
    this.instance.setTransform(105.1, 29.6, 1, 1, 0, 0, 0, 103.5, 29.6);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.slideAd1,
    new cjs.Rectangle(0.1, -1.5, 210.1, 62.2),
    null
  );
  (lib.shinyPremiumClick = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p(
      "AtuDqQhsAAAAhrIAAj9QAAhrBsAAIbdAAQBsAAAABrIAAD9QAABrhsAAg"
    );
    mask.setTransform(95.525, 21.675);
    this.instance = new lib.shinePremiumInner();
    this.instance.setTransform(-51.05, 41.1, 1, 1, 0, 0, 0, 79.9, 41.1);
    var maskedShapeInstanceList = [this.instance];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(21)
        .to(
          {
            x: 255.25,
            y: 30.05,
          },
          13
        )
        .wait(14)
        .to(
          {
            x: -80.35,
            y: 41.1,
          },
          31
        )
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(
    -3.1,
    -1.7,
    197.29999999999998,
    46.800000000000004
  );
  (lib.shinyPremium = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p(
      "A78D2Qg5gBgFgxIgBAAIAAl7QAAg+A/AAMA36AAAQA+AAAAA+IAAF7QgGAxg4ABg"
    );
    mask.setTransform(188.075, 26.45);
    this.instance = new lib.shinePremium();
    this.instance.setTransform(-80.35, 41.1, 1, 1, 0, 0, 0, 79.9, 41.1);
    var maskedShapeInstanceList = [this.instance];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to(
          {
            x: 458.9,
          },
          23
        )
        .wait(13)
        .to(
          {
            x: -80.35,
          },
          25
        )
        .wait(19)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 373.3, 51);
  (lib.massBar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.Symbol4();
    this.instance.setTransform(88.95, 52.85, 1, 1, 0, 0, 0, 86.7, 7.9);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(["#AD0000", "#CC0000"], [0, 1], -6.7, 0, 6.8, 0)
      .s()
      .p("AhDBPQANgmAAgqQAAgpgMgkICGAAIAACdg");
    this.shape.setTransform(6.625, 52.85);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#CC0000").s().p("AtABPIAAidIaBAAIAACdg");
    this.shape_1.setTransform(96.1, 52.85);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#CC0000")
      .s()
      .p(
        "AiaCfIgCgCQgcgcgPggQgVgqgBgzIAAgEQAAhPAyg8IAPgRQBChBBaAAQBcAABBBBIAPARQAyA8AABPQAABchBBBIgCACQhAA/hbAAQhaAAhAg/g"
      );
    this.shape_2.setTransform(196.25, 53.35);
    this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f()
      .s("#000000")
      .ss(4, 1, 1)
      .p(
        "AxFihIZaAAQALgRANgQQAKgMALgMQBbhbCAAAQCBAABbBbQALAMAKAMQBFBUAABuQAABVgnBEQgUAjgfAgQgBABgCABQhaBYh/AAQh/AAhahYQgBgBgBgBQgfgggUgjI5hAA"
      );
    this.shape_3.setTransform(116.525, 53.35);
    this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AM4FDIgEAAIgFAAQiGABhghfQgjgkgWgpIgEgEIgFgBI54AAQAgiTggiTIZ6AAQADAAADgBQACgCABgDQAUgoAjgjQBYhXB5gHIAAAAIAKgBIASAAIAXACQBzAKBTBTQBfBfAACFQAACGhfBfQhbBbh/ADg"
      );
    this.shape_4.setTransform(114.8, 52.9);
    this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("rgba(0,0,0,0.498)")
      .s()
      .p(
        "AM1FNIgFAAQiKABhihjQglgkgXgqI6EAAQAlidglidIaHAAQAUgqAlgkQBahaB9gHIAKgBIATAAIAXACQB2AKBWBWQBiBiAACJQAACKhiBhQheBfiDADIgFAAg"
      );
    this.shape_5.setTransform(117.175, 55.6);
    this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.massBar,
    new cjs.Rectangle(-0.1, 20.4, 232.2, 68.6),
    null
  );
  (lib.Symbol8 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.Symbol2();
    this.instance.setTransform(197.4, 32.45, 1, 1, 0, 0, 0, 15.9, 4.5);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AgFAoIAAgMIALAAIAAAMgAgDASIgCg5IALAAIgBA5g");
    this.shape.setTransform(161.15, 32.25);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgNAeIgKgDIAAgMIABAAQAFADAFADQAHACAFAAQAFAAAEgCQAEgCAAgFQAAgDgCgCIgIgDIgFgCIgGgBQgHgCgEgDQgDgEgBgGQABgEABgDQACgDADgDQADgDAFgBQAEgCAFAAIALACQAGABADACIAAALIAAAAQgEgDgGgCQgFgCgGAAQgFAAgDACQgEACAAAEQAAAEACACQADACAEABIAGABIAGACQAGABAFADQADAEAAAGQABAJgIAFQgGAGgLgBQgHAAgFgBg"
      );
    this.shape_1.setTransform(156.25, 33.25);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSAeIAAg7IAKAAIAAAJQAGgFAEgCQAEgCAFAAIAEAAIAEABIAAAKIgBAAIgEAAIgFgBQgFAAgEACQgEACgEAEIAAApg"
      );
    this.shape_2.setTransform(151.475, 33.25);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSAYQgIgJAAgPQAAgNAIgJQAIgJAMAAQAMABAHAGQAGAHAAANIAAAFIgrAAQAAAGACADQACAFACADIAHADIAIABQAGAAAGgCIAJgEIAAAAIAAALIgKADIgLABQgOAAgJgHgAgKgRQgFAEgBAHIAiAAQAAgHgEgFQgEgFgIAAQgIABgEAFg"
      );
    this.shape_3.setTransform(145.325, 33.25);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgGAiQgFgEAAgMIAAgeIgHAAIAAgJIAHAAIAAgRIAKAAIAAARIAUAAIAAAJIgUAAIAAAaIAAAHQAAADABACQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAGABIAFgBIAEgBIABAAIAAAJIgGABIgGABQgJAAgEgFg"
      );
    this.shape_4.setTransform(139.925, 32.45);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgGAdQgGgBgDgEQgEgEgCgGQgDgGABgIQAAgNAIgJQAIgJAMAAIAKACIAJAEIAAALIAAAAQgFgEgFgBQgFgCgFgBQgHAAgFAGQgFAGAAAKQAAALAFAGQAFAGAHgBIAHAAIAFgDIAFgBIADgDIAAAAIAAALIgKAEQgEABgFAAQgFAAgGgCg"
      );
    this.shape_5.setTransform(135, 33.25);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgTAbQgGgGAAgJQABgGADgFQADgCAFgDQAGgCAHgCIAQAAIAAgCIgBgGIgEgDIgFgCIgGgBIgJACIgKADIAAAAIAAgKIAIgCIALgCIAKACQAFABADACQAEADACAEQACADgBAHIAAAnIgJAAIAAgGIgEACIgFADIgGACIgGAAQgIAAgGgEgAAFAAIgJABQgFABgCADQgDACAAAFQAAAFADACQADADAGAAQAFAAAEgCIAJgFIAAgPIgLAAg"
      );
    this.shape_6.setTransform(128.5, 33.25);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSAeIAAg7IAKAAIAAAJQAGgFAEgCQAEgCAFAAIAEAAIAEABIAAAKIgBAAIgEAAIgFgBQgFAAgEACQgEACgEAEIAAApg"
      );
    this.shape_7.setTransform(123.575, 33.25);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgTAbQgFgGAAgJQAAgGACgFQADgCAGgDQAGgCAHgCIAPAAIAAgCIgBgGIgDgDIgGgCIgFgBIgIACIgKADIgBAAIAAgKIAIgCIALgCIALACQAEABAEACQADADACAEQACADAAAHIAAAnIgLAAIAAgGIgDACIgEADIgGACIgHAAQgIAAgGgEgAAEAAIgJABQgDABgEADQgCACAAAFQAAAFADACQADADAGAAQAFAAAFgCIAHgFIAAgPIgLAAg"
      );
    this.shape_8.setTransform(117.2, 33.25);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAPAqIAAgiIAAgIIgDgFQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAIgHgBQgDAAgFACIgIAFIAAAsIgKAAIAAhTIAKAAIAAAeQAFgEAFgCQAEgCAFAAQAKAAAFAGQAFAGAAAKIAAAng"
      );
    this.shape_9.setTransform(110.65, 32.075);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgJAnQgHgDgFgFQgFgFgDgHQgDgJAAgKQAAgJADgHQADgIAFgGQAFgFAHgCQAHgEAIAAIANACQAGACAIADIAAANIgBAAQgGgGgHgCQgGgCgIgBQgFAAgEACQgFADgEADQgEAEgCAHQgCAGAAAHQAAAJACAFQADAGADAFQAEAEAFABQAEACAGAAQAHAAAHgDQAHgCAGgGIAAAAIAAANIgFADIgGACIgHACIgJAAQgIAAgHgCg"
      );
    this.shape_10.setTransform(103.375, 32.25);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgUAfQgGgJAAgWQAAgUAGgLQAHgJANgBQAOAAAHALQAGAKABAUQgBAWgGAJQgHAKgOAAQgOAAgGgKgAgHgeQgEADgCADQgBAEgBAHIgBANIABAOQABAGABAEQACAEAEACQADADAEAAQAFAAAEgDQACgBACgEQACgFABgGIABgOIgBgNQgBgGgCgFQgCgDgCgDQgEgCgFAAQgEAAgDACg"
      );
    this.shape_11.setTransform(92.1, 32.25);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgUAfQgGgJgBgWQABgUAGgLQAHgJANgBQAOAAAHALQAGAKAAAUQAAAWgGAJQgHAKgOAAQgOAAgGgKgAgIgeQgCADgCADQgDAEAAAHIgBANIABAOQAAAGADAEQABAEADACQADADAFAAQAFAAADgDQADgBADgEQABgFABgGIABgOIgBgNQgBgGgBgFQgDgDgDgDQgDgCgFAAQgEAAgEACg"
      );
    this.shape_12.setTransform(85.1, 32.25);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgUAfQgGgJgBgWQABgUAGgLQAHgJANgBQAPAAAGALQAHAKgBAUQABAWgHAJQgHAKgOAAQgNAAgHgKgAgIgeQgDADgBADQgCAEgBAHIgBANIABAOQABAGACAEQABAEADACQAEADAEAAQAFAAADgDQADgBADgEQACgFAAgGIABgOIgBgNQAAgGgCgFQgDgDgDgDQgDgCgFAAQgEAAgEACg"
      );
    this.shape_13.setTransform(78.1, 32.25);
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgUAoIAAgIIAQAAIAAg1IgQAAIAAgHIAHAAQADgBACgCIAFgDQABgCAAgDIAIAAIAABHIAQAAIAAAIg"
      );
    this.shape_14.setTransform(71.25, 32.25);
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgTAXQgIgIAAgPQAAgNAIgJQAHgJAMAAQANAAAHAJQAIAJAAANQAAAPgIAIQgHAJgNgBQgMABgHgJgAgMgRQgEAHAAAKQAAAMAEAFQAFAGAHAAQAIAAAFgGQAEgFAAgMQAAgKgEgHQgFgFgIAAQgHAAgFAFg"
      );
    this.shape_15.setTransform(60.375, 33.25);
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgGAiQgFgEAAgMIAAgeIgHAAIAAgJIAHAAIAAgRIAKAAIAAARIAUAAIAAAJIgUAAIAAAaIAAAHQAAADABACQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAGABIAFgBIAEgBIABAAIAAAJIgGABIgGABQgJAAgEgFg"
      );
    this.shape_16.setTransform(54.925, 32.45);
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgZAqIAAhRIAKAAIAAAGIAJgGQAFgCAFAAQAKAAAGAIQAGAIAAAPQAAAHgCAFQgCAGgEAFQgDAEgFACQgFACgFAAIgHgBIgIgDIAAAZgAgHgdQgEABgEAEIAAAhIAHACIAHABQAIAAAEgGQAFgGAAgKQAAgLgEgFQgDgFgIAAQgDAAgFACg"
      );
    this.shape_17.setTransform(45.625, 34.275);
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgMAnQgGgCgEgEQgEgEgCgHQgCgGAAgJIAAgvIALAAIAAAwIABAKIADAHQACADAEACQAEACAFAAQAGAAAEgCQAEgCACgDIADgHIABgKIAAgwIALAAIAAAvQAAAJgCAGQgCAHgEAEQgFAEgFACQgGACgHAAQgHAAgFgCg"
      );
    this.shape_18.setTransform(37.975, 32.325);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {
              t: this.shape_18,
            },
            {
              t: this.shape_17,
            },
            {
              t: this.shape_16,
            },
            {
              t: this.shape_15,
            },
            {
              t: this.shape_14,
            },
            {
              t: this.shape_13,
            },
            {
              t: this.shape_12,
            },
            {
              t: this.shape_11,
            },
            {
              t: this.shape_10,
            },
            {
              t: this.shape_9,
            },
            {
              t: this.shape_8,
            },
            {
              t: this.shape_7,
            },
            {
              t: this.shape_6,
            },
            {
              t: this.shape_5,
            },
            {
              t: this.shape_4,
            },
            {
              t: this.shape_3,
            },
            {
              t: this.shape_2,
            },
            {
              t: this.shape_1,
            },
            {
              t: this.shape,
            },
            {
              t: this.instance,
            },
          ],
        })
        .wait(1)
    );
    this.instance_1 = new lib.massLock();
    this.instance_1.setTransform(17.9, 34.5, 1, 1, 0, 0, 0, 13.8, 30.9);
    this.instance_2 = new lib.massBar();
    this.instance_2.setTransform(116.45, 34.05, 1, 1, 0, 0, 0, 115.7, 54.6);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {
              t: this.instance_2,
            },
            {
              t: this.instance_1,
            },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol8,
    new cjs.Rectangle(0.6, -0.2, 232.3, 68.60000000000001),
    null
  );
  (lib.Slidingbox = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("AxFFAIAAp/MAiLAAAIAAJ/g");
    mask.setTransform(103.45, 29.575);
    this.instance = new lib.slideAd1();
    this.instance.setTransform(103.8, 29.6, 1, 1, 0, 0, 0, 105.4, 29.6);
    var maskedShapeInstanceList = [this.instance];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(89)
        .to(
          {
            x: -111.6,
          },
          30
        )
        .wait(89)
        .to(
          {
            x: 317.4,
          },
          1
        )
        .to(
          {
            x: 103.8,
          },
          30
        )
        .wait(1)
    );
    this.instance_1 = new lib.slideAd2();
    this.instance_1.setTransform(320.4, 29.6, 1, 1, 0, 0, 0, 105.4, 29.6);
    this.instance_1._off = true;
    var maskedShapeInstanceList = [this.instance_1];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(89)
        .to(
          {
            _off: false,
          },
          0
        )
        .to(
          {
            x: 103.8,
          },
          30
        )
        .wait(90)
        .to(
          {
            x: -110.55,
          },
          30
        )
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-5.9, -1.5, 218.8, 62.2);
  (lib.Premium1000 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.part0 = new lib.star_mc();
    this.part0.name = "part0";
    this.part0.setTransform(203.55, 8.95, 1, 1, 45, 0, 0, 17.9, 18.1);
    this.part0_1 = new lib.star_mc2();
    this.part0_1.name = "part0_1";
    this.part0_1.setTransform(20.65, 8.6, 1, 1, 45, 0, 0, 17.9, 18.1);
    this.part0_2 = new lib.star_mc2();
    this.part0_2.name = "part0_2";
    this.part0_2.setTransform(207.15, 178.5, 1, 1, 45, 0, 0, 17.9, 18.1);
    this.part0_3 = new lib.star_mc();
    this.part0_3.name = "part0_3";
    this.part0_3.setTransform(17.5, 213.35, 1, 1, 45, 0, 0, 17.9, 18.1);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {
              t: this.part0_3,
            },
            {
              t: this.part0_2,
            },
            {
              t: this.part0_1,
            },
            {
              t: this.part0,
            },
          ],
        })
        .wait(1)
    );
    this.instance = new lib.shinyPremium();
    this.instance.setTransform(51.35, 6.6, 0.517, 0.517, 0, 0, 0, 79.9, 41.2);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this.slideAdBar = new lib.Slidingbox();
    this.slideAdBar.name = "slideAdBar";
    this.slideAdBar.setTransform(112.5, 135.5, 1, 1, 0, 0, 0, 103.5, 29.6);
    this.timeline.addTween(cjs.Tween.get(this.slideAdBar).wait(1));
    this.overPremiumBar = new lib.Symbol8();
    this.overPremiumBar.name = "overPremiumBar";
    this.overPremiumBar.setTransform(103.3, 68.4, 1, 1, 0, 0, 0, 116.4, 34.1);
    this.timeline.addTween(cjs.Tween.get(this.overPremiumBar).wait(1));
    this.empty1000 = new lib.empty1000();
    this.empty1000.name = "empty1000";
    this.empty1000.setTransform(3.4, 105.4);
    this.timeline.addTween(cjs.Tween.get(this.empty1000).wait(1));
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AgKAKIAFgTIAQAAIgFATg");
    this.shape.setTransform(67.4, 97.725);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#000000").s().p("AgJAKIAEgTIAQAAIgFATg");
    this.shape_1.setTransform(62.3, 97.725);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AgJAKIAEgTIAPAAIgEATg");
    this.shape_2.setTransform(57.2, 97.725);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgXAlIgLgEIADgOIAAAAIAFADIAFAEIAHACIAJABQAJABAGgEQAFgEAAgGQAAgEgDgCIgIgDIgFgBIgHgDQgIgCgFgDQgDgEgBgHQABgEACgGQACgEAFgEQAEgEAHgCQAGgCAIAAQAHAAAGACQAIABAEACIgDAOIgBAAIgDgDIgGgDIgGgCIgIgBQgIAAgGAEQgFAEAAAFQAAAEADADIAIADIAFABIAHACQAIACAFADQADAFABAFQgBAGgCAFQgCAFgFADQgFAFgHABQgGADgIAAQgJAAgHgDg"
      );
    this.shape_3.setTransform(51.6, 94.9);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AgfAiQgGgFAAgJIAAgFIABgFIALgwIANAAIgKAqIgBAGIgBAGQABAGADADQACADAIAAQAEAAAGgDIAMgHIANg4IANAAIgSBLIgMAAIABgIIgMAIQgGACgHAAQgKAAgFgFg"
      );
    this.shape_4.setTransform(43.8, 94.975);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#000000").s().p("AgSA1IAYhpIANAAIgYBpg");
    this.shape_5.setTransform(37.575, 93.375);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgpAzIAYhlIAZAAQAKAAAGACQAGABAEAEQAEADACAEQACAEAAAHQAAAIgEAHQgDAIgHAFQgGAEgIAEQgIACgKAAIgOAAIgJAmgAgQACIAMAAQAHAAAGgBQAFgBAEgDQAFgEACgFQACgFAAgGIgBgHQgBgCgCgCIgHgEIgLgBIgLAAg"
      );
    this.shape_6.setTransform(31.525, 93.6);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p("AgLAbIADgOIALAAIgDAOgAgCgMIACgOIAMAAIgDAOg");
    this.shape_7.setTransform(147.775, 32.175);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AgSAXQgHgFAAgKQAAgOAJgLQAKgLANAAQAJAAAFAFQAFAEAAAJIAAAEIgCAHIgnAAIgBADIAAACQAAAHAFAEQAEAEAHAAQAFAAAFgCIAKgFIAAAAIgCAKIgEACIgFABIgFABIgFABQgMAAgFgGgAgHgQQgFAEgCAHIAfAAIAAgCIAAgCQAAgGgDgDQgDgDgGAAQgGAAgGAFg"
      );
    this.shape_8.setTransform(142.6, 32.175);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AgWAbIAMg1IAKAAIgCAIIAKgHIAJgBIADAAIADAAIgCAJIAAAAIgEAAIgEgBQgFAAgEADIgIAFIgJAlg"
      );
    this.shape_9.setTransform(137.875, 32.175);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgWAZQgEgEAAgHIAAgDIABgDIAIgjIAJAAIgHAeIgBAFIgBADQAAAFADACQACACAFAAQADAAAEgCIAJgGIAJgnIAJAAIgMA2IgJAAIABgHIgJAGQgEACgFAAQgHAAgEgDg"
      );
    this.shape_10.setTransform(132.275, 32.25);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p(
        "AgOAhQgDgEgBgFIAAgEIABgDIAHgcIgHAAIACgIIAGAAIAEgQIAJAAIgEAQIASAAIgBAIIgSAAIgGAXIgBAFIAAAEQAAADABACQACACAFAAIAEgBIAEgBIAAAAIgBAIIgGABIgEABQgIAAgDgDg"
      );
    this.shape_11.setTransform(127.5, 31.45);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AgVAZQgEgEAAgGQAAgGACgFQADgEAGgCIANgEIARgCIABgCIAAgCIgBgEIgDgCIgEgCIgFAAIgIACIgJACIAAAAIABgJIAJgCIAJgBQAKAAAFAEQAFADAAAHIAAACIgBADIgIAkIgJAAIABgGIgDADIgFACIgFACIgHABQgGAAgEgEgAABAAQgFAAgEACQgEACgCACQgCADAAAEQAAAEADACQACACAFAAQAFAAADgCIAJgFIADgPIgNABg"
      );
    this.shape_12.setTransform(121.825, 32.175);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p(
        "AgTAXQgGgFAAgKQAAgOAKgLQAJgLAMAAQAKAAAFAFQAFAEAAAJIgBAEIgBAHIgnAAIAAADIAAACQAAAHADAEQAFAEAHAAQAFAAAGgCIAJgFIABAAIgCAKIgFACIgFABIgFABIgFABQgLAAgHgGgAgGgQQgGAEgCAHIAeAAIAAgCIABgCQAAgGgDgDQgDgDgGAAQgGAAgFAFg"
      );
    this.shape_13.setTransform(116.1, 32.175);
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#000000")
      .s()
      .p("AgfAkIARhHIAtAAIgBAIIgkAAIgFAVIAfAAIgCAHIgfAAIgIAjg");
    this.shape_14.setTransform(110.8, 31.275);
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#000000")
      .s()
      .p(
        "AgTAXQgGgFAAgKQAAgOAKgLQAJgLAMAAQAKAAAFAFQAFAEAAAJIgBAEIgBAHIgnAAIAAADIAAACQAAAHADAEQAFAEAHAAQAFAAAGgCIAJgFIABAAIgCAKIgFACIgFABIgFABIgFABQgLAAgHgGgAgGgQQgGAEgCAHIAeAAIAAgCIABgCQAAgGgDgDQgDgDgGAAQgGAAgFAFg"
      );
    this.shape_15.setTransform(100.9, 32.175);
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#000000")
      .s()
      .p(
        "AgLAcQgEgBgDgEQgDgCgBgEQgCgDAAgFQAAgJADgFQACgHAEgEQAFgGAGgCQAFgDAHAAIAJABIAIADIgCAKIAAAAIgDgCIgEgCIgEgCIgFgBQgJABgGAHQgGAJAAAKQAAAGAEAFQADADAHAAIAFgBIAFgBIAFgDIACgCIABAAIgCAKIgJAEIgIABIgKgBg"
      );
    this.shape_16.setTransform(95.55, 32.15);
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#000000")
      .s()
      .p(
        "AgVAZQgEgEAAgGQAAgGACgFQADgEAGgCIANgEIARgCIABgCIAAgCIgBgEIgDgCIgEgCIgFAAIgIACIgJACIAAAAIABgJIAJgCIAJgBQAKAAAFAEQAFADAAAHIAAACIgBADIgIAkIgJAAIABgGIgDADIgFACIgFACIgHABQgGAAgEgEgAABAAQgFAAgEACQgEACgCACQgCADAAAEQAAAEADACQACACAFAAQAFAAADgCIAJgFIADgPIgNABg"
      );
    this.shape_17.setTransform(89.475, 32.175);
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#000000")
      .s()
      .p(
        "AATAkIgTgdIgNAAIgHAdIgJAAIAQhHIATAAIALAAQAEABADADIAFAEQABADAAAEQAAAJgGAHQgFAGgJADIAUAfgAgLAAIAKAAIAHAAIAHgDQADgDACgEQACgDAAgEIgBgFQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAIgHAAIgKAAg"
      );
    this.shape_18.setTransform(83.075, 31.275);
    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#000000")
      .s()
      .p(
        "AgOAhQgDgEAAgFIAAgEIAAgDIAHgcIgHAAIACgIIAGAAIAEgQIAIAAIgDAQIASAAIgBAIIgSAAIgGAXIgBAFIAAAEQAAADABACQADACAEAAIAEgBIAEgBIAAAAIgBAIIgGABIgEABQgIAAgDgDg"
      );
    this.shape_19.setTransform(74.75, 31.45);
    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#000000")
      .s()
      .p(
        "AgWAbIAMg1IAKAAIgCAIIAKgHIAJgBIADAAIADAAIgCAJIAAAAIgEAAIgEgBQgFAAgEADIgIAFIgJAlg"
      );
    this.shape_20.setTransform(70.575, 32.175);
    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#000000")
      .s()
      .p(
        "AgVAZQgEgEAAgGQAAgGACgFQADgEAGgCIANgEIARgCIABgCIAAgCIgBgEIgDgCIgEgCIgFAAIgIACIgJACIAAAAIABgJIAJgCIAJgBQAKAAAFAEQAFADAAAHIAAACIgBADIgIAkIgJAAIABgGIgDADIgFACIgFACIgHABQgGAAgEgEgAABAAQgFAAgEACQgEACgCACQgCADAAAEQAAAEADACQACACAFAAQAFAAADgCIAJgFIADgPIgNABg"
      );
    this.shape_21.setTransform(64.825, 32.175);
    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#000000")
      .s()
      .p(
        "AgOAhQgDgEgBgFIAAgEIABgDIAHgcIgHAAIADgIIAFAAIAEgQIAJAAIgEAQIASAAIgBAIIgSAAIgGAXIgBAFIAAAEQAAADABACQADACAEAAIAEgBIAEgBIAAAAIgBAIIgGABIgEABQgIAAgDgDg"
      );
    this.shape_22.setTransform(60.55, 31.45);
    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#000000")
      .s()
      .p(
        "AgTAkQgHgBgGgDIADgMIAAAAQAFAFAHACQAHADAGAAQAJAAAGgEQAFgFAAgGQAAgDgBgDQgCgCgEgBIgIgCIgHgBQgIgCgEgDQgEgEAAgHQAAgKAJgHQAIgHANAAQAIAAAGACIALAEIgCAKIgBAAQgDgDgHgDQgGgCgHAAQgIAAgGAEQgFAEAAAGQAAADACADQACACAFABIAHACIAJACQAHACADADQAEAEAAAFQAAAFgCAFQgDAEgEAEQgEADgGADQgGACgIAAQgHAAgGgCg"
      );
    this.shape_23.setTransform(54.725, 31.275);
    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#000000")
      .s()
      .p(
        "AgQAbIgIgDIACgKIABAAIACACIAEACIAGACIAGABQAGAAAEgCQAEgDAAgFQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgGgCIgEgBIgFgBQgGgCgCgCQgDgDAAgEQAAgEABgEIAFgGIAIgEQAEgCAGAAIAKACQAFABADACIgCAJIgBAAIgCgCIgEgCIgFgCIgGAAQgFAAgEACQgEADAAAEQAAABAAAAQAAABABABQAAAAAAAAQABABAAAAQACACAEABIAEABIAFABQAGACADACQACADAAAEIgBAHQgCAEgDADIgJAEQgFACgFAAQgGAAgFgCg"
      );
    this.shape_24.setTransform(45.075, 32.175);
    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#000000")
      .s()
      .p(
        "AgQAbIgIgDIACgKIABAAIACACIAEACIAGACIAGABQAGAAAEgCQAEgDAAgFQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgGgCIgEgBIgFgBQgGgCgCgCQgDgDAAgEQAAgEABgEIAFgGIAIgEQAEgCAGAAIAKACQAFABADACIgCAJIgBAAIgCgCIgEgCIgFgCIgGAAQgFAAgEACQgEADAAAEQAAABAAAAQAAABABABQAAAAAAAAQABABAAAAQACACAEABIAEABIAFABQAGACADACQACADAAAEIgBAHQgCAEgDADIgJAEQgFACgFAAQgGAAgFgCg"
      );
    this.shape_25.setTransform(39.875, 32.175);
    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#000000")
      .s()
      .p(
        "AgVAZQgEgEAAgGQAAgGACgFQADgEAGgCIANgEIARgCIABgCIAAgCIgBgEIgDgCIgEgCIgFAAIgIACIgJACIAAAAIABgJIAJgCIAJgBQAKAAAFAEQAFADAAAHIAAACIgBADIgIAkIgJAAIABgGIgDADIgFACIgFACIgHABQgGAAgEgEgAABAAQgFAAgEACQgEACgCACQgCADAAAEQAAAEADACQACACAFAAQAFAAADgCIAJgFIADgPIgNABg"
      );
    this.shape_26.setTransform(34.125, 32.175);
    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#000000")
      .s()
      .p("AAOAkIAPg9IgdApIgGAAIgKgqIgPA+IgJAAIARhHIANAAIAKAnIAbgnIAOAAIgRBHg");
    this.shape_27.setTransform(27.275, 31.275);
    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#000000")
      .s()
      .p("AgOBPIAAgeIAdAAIAAAegAgIAmIgHhPIAAglIAfAAIAAAlIgIBPg");
    this.shape_28.setTransform(187.425, 194.225);
    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#000000")
      .s()
      .p(
        "AgpAoQgLgPAAgYQAAgcAPgPQAOgQAXgBQAZAAAOARQAPARgBAiIhKAAQAAANAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGAQgNAJQgMAJgTgBQgdAAgOgTgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAGg"
      );
    this.shape_29.setTransform(177.5758, 196.4);
    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#000000")
      .s()
      .p(
        "AgkA6IAAhxIAcAAIAAAQQAHgLAFgEQAGgDAHAAQALAAAJAFIgJAbQgIgFgHAAQgGAAgFADQgDAEgCAJQgDAJAAAcIAAAjg"
      );
    this.shape_30.setTransform(168.15, 196.275);
    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#000000")
      .s()
      .p(
        "AgdA1QgOgIgIgNQgHgOAAgSQAAgQAHgOQAIgOAOgHQANgHAQgBQAaAAAQARQARARAAAZQAAAagRAQQgRASgZgBQgPAAgOgGgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg"
      );
    this.shape_31.setTransform(156.325, 196.4);
    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#000000")
      .s()
      .p("AAuBPIAAh7IgeB7IgeAAIgfh7IAAB7IgeAAIAAidIAwAAIAbBrIAchrIAwAAIAACdg");
    this.shape_32.setTransform(140.35, 194.225);
    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#000000")
      .s()
      .p(
        "AgEBMQgGgDgEgEQgDgFgBgHIgBgVIAAgxIgOAAIAAgYIAOAAIAAgWIAdgSIAAAoIAVAAIAAAYIgVAAIAAAtIABAQQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQACACADAAQAEgBAIgDIADAYQgLAFgNgBQgJAAgFgCg"
      );
    this.shape_33.setTransform(121.45, 194.5);
    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#000000")
      .s()
      .p(
        "AgiA1QgJgFgEgJQgEgJAAgQIAAhHIAeAAIAAA0QAAAXACAGQABAFAFADQAFADAGAAQAHAAAGgEQAGgEACgGQACgHAAgXIAAgwIAfAAIAABxIgcAAIAAgRQgHAJgJAFQgJAFgMAAQgLAAgKgFg"
      );
    this.shape_34.setTransform(111, 196.525);
    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#000000")
      .s()
      .p(
        "Ag2A8QgWgVAAgmQAAgXAIgQQAFgMAKgKQAJgKALgEQAOgGATAAQAiAAAVAVQAWAWgBAlQABAmgWAWQgUAVgjAAQgiAAgUgVgAgfgoQgLAOgBAaQABAbALAOQANANASAAQATAAAMgNQAMgOABgbQgBgbgMgNQgLgNgUAAQgTAAgMANg"
      );
    this.shape_35.setTransform(95.8, 194.225);
    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#000000")
      .s()
      .p(
        "AgpBAQgOgPAAgdQAAgcAOgPQAOgPAUAAQATAAANAPIAAg4IAfAAIAACdIgcAAIAAgRQgHAJgKAFQgJAFgJAAQgUAAgOgQgAgRgHQgHAIAAARQAAATAFAIQAHALANAAQAKAAAHgJQAIgIAAgSQAAgUgHgIQgIgIgLAAQgJAAgIAIg"
      );
    this.shape_36.setTransform(74.125, 194.35);
    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#000000")
      .s()
      .p(
        "AAWA6IAAg6QAAgRgCgGQgCgFgFgDQgEgDgGAAQgHAAgGAEQgGAEgCAHQgDAHAAATIAAAzIgeAAIAAhxIAcAAIAAARQAPgTAVAAQAKAAAJADQAIAEAFAFQADAGACAHQACAHAAANIAABGg"
      );
    this.shape_37.setTransform(60.95, 196.275);
    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#000000")
      .s()
      .p("AgOBPIAAhxIAdAAIAABxgAgOgyIAAgcIAdAAIAAAcg");
    this.shape_38.setTransform(51.2, 194.225);
    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#000000")
      .s()
      .p("Ag1BPIAAidIBrAAIAAAbIhLAAIAAAlIBBAAIAAAaIhBAAIAABDg");
    this.shape_39.setTransform(41.65, 194.225);
    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#000000")
      .s()
      .p("AgJBIIAAgVIATAAIAAAVgAgFAkIgFhLIAAgfIAVAAIAAAfIgFBLg");
    this.shape_40.setTransform(175.9, -0.7);
    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#000000")
      .s()
      .p(
        "AglBHIgCgRIAKACQAGAAAEgCQADgCACgEQACgCAEgLIABgEIgnhnIATAAIAVA8IAHAXIAHgXIAWg8IARAAIgmBpIgJAXQgGAJgGAEQgFAEgJAAQgFAAgGgCg"
      );
    this.shape_41.setTransform(168.15, 3.375);
    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics.f("#000000").s().p("AgIBIIAAiOIARAAIAACOg");
    this.shape_42.setTransform(160.825, -0.7);
    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#000000")
      .s()
      .p(
        "AAZA1IAAg+QAAgLgCgFQgCgGgGgDQgFgDgHAAQgKAAgIAIQgIAGAAAVIAAA3IgSAAIAAhmIAQAAIAAAOQALgRAVAAQAJAAAIAEQAIADAEAFQAEAGABAHIABARIAAA/g"
      );
    this.shape_43.setTransform(153.075, 1.15);
    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#000000")
      .s()
      .p(
        "AgjBAQgQgJgIgRQgJgRAAgTQAAgjAUgUQATgUAdAAQAUAAAQAKQAQAIAJARQAHASAAAUQABAWgJARQgJASgQAIQgQAJgTAAQgTAAgQgKgAghgrQgPANAAAgQAAAaAOAPQAOAOAUAAQAWABAOgQQANgPAAgbQAAgRgGgNQgGgMgLgIQgMgHgNAAQgUAAgOAOg"
      );
    this.shape_44.setTransform(139.8, -0.7);
    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#000000")
      .s()
      .p(
        "AA1A1IAAhAQAAgLgCgFQgBgEgFgDQgEgDgGAAQgLAAgIAIQgHAGAAAQIAAA8IgQAAIAAhCQAAgMgFgGQgEgGgKAAQgHAAgGAEQgHAEgDAIQgCAHAAAOIAAA1IgSAAIAAhmIAQAAIAAAOQAFgIAIgEQAIgFAKAAQAMAAAHAFQAGAEADAJQANgSATAAQAQAAAIAIQAIAJAAASIAABGg"
      );
    this.shape_45.setTransform(118.125, 1.15);
    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#000000")
      .s()
      .p(
        "AgXAyQgIgEgEgFQgEgGgBgIIgBgQIAAg/IASAAIAAA5IABASQABAHAFAEQAGAEAIgBQAGAAAIgDQAGgFAEgGQADgIAAgNIAAg2IARAAIAABnIgQAAIAAgQQgMASgUAAQgJAAgIgDg"
      );
    this.shape_46.setTransform(104.2, 1.4);
    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#000000")
      .s()
      .p("AgIBIIAAhnIARAAIAABngAgIgzIAAgTIARAAIAAATg");
    this.shape_47.setTransform(96.475, -0.7);
    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#000000")
      .s()
      .p(
        "AA1A1IAAhAQAAgLgCgFQgBgEgFgDQgEgDgGAAQgLAAgIAIQgHAGAAAQIAAA8IgQAAIAAhCQAAgMgFgGQgEgGgKAAQgHAAgGAEQgHAEgDAIQgCAHAAAOIAAA1IgSAAIAAhmIAQAAIAAAOQAFgIAIgEQAIgFAKAAQAMAAAHAFQAGAEADAJQANgSATAAQAQAAAIAIQAIAJAAASIAABGg"
      );
    this.shape_48.setTransform(85.925, 1.15);
    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#000000")
      .s()
      .p(
        "AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg"
      );
    this.shape_49.setTransform(72.025, 1.275);
    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#000000")
      .s()
      .p(
        "AgbA1IAAhmIAQAAIAAAPQAGgLAFgDQAEgEAGAAQAJAAAJAFIgGARQgGgEgHAAQgGAAgDAEQgFADgCAGQgDAJAAALIAAA2g"
      );
    this.shape_50.setTransform(63.975, 1.15);
    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#000000")
      .s()
      .p(
        "Ag1BIIAAiOIA1AAIAVABQALABAHAGQAHAEAFAJQADAJABAKQAAATgMAMQgMANgegBIgjAAIAAA7gAgigDIAjAAQASAAAJgGQAHgIAAgMQAAgIgFgHQgEgGgIgCQgEgCgNAAIgjAAg"
      );
    this.shape_51.setTransform(53.5, -0.7);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {
              t: this.shape_51,
            },
            {
              t: this.shape_50,
            },
            {
              t: this.shape_49,
            },
            {
              t: this.shape_48,
            },
            {
              t: this.shape_47,
            },
            {
              t: this.shape_46,
            },
            {
              t: this.shape_45,
            },
            {
              t: this.shape_44,
            },
            {
              t: this.shape_43,
            },
            {
              t: this.shape_42,
            },
            {
              t: this.shape_41,
            },
            {
              t: this.shape_40,
            },
            {
              t: this.shape_39,
            },
            {
              t: this.shape_38,
            },
            {
              t: this.shape_37,
            },
            {
              t: this.shape_36,
            },
            {
              t: this.shape_35,
            },
            {
              t: this.shape_34,
            },
            {
              t: this.shape_33,
            },
            {
              t: this.shape_32,
            },
            {
              t: this.shape_31,
            },
            {
              t: this.shape_30,
            },
            {
              t: this.shape_29,
            },
            {
              t: this.shape_28,
            },
            {
              t: this.shape_27,
            },
            {
              t: this.shape_26,
            },
            {
              t: this.shape_25,
            },
            {
              t: this.shape_24,
            },
            {
              t: this.shape_23,
            },
            {
              t: this.shape_22,
            },
            {
              t: this.shape_21,
            },
            {
              t: this.shape_20,
            },
            {
              t: this.shape_19,
            },
            {
              t: this.shape_18,
            },
            {
              t: this.shape_17,
            },
            {
              t: this.shape_16,
            },
            {
              t: this.shape_15,
            },
            {
              t: this.shape_14,
            },
            {
              t: this.shape_13,
            },
            {
              t: this.shape_12,
            },
            {
              t: this.shape_11,
            },
            {
              t: this.shape_10,
            },
            {
              t: this.shape_9,
            },
            {
              t: this.shape_8,
            },
            {
              t: this.shape_7,
            },
            {
              t: this.shape_6,
            },
            {
              t: this.shape_5,
            },
            {
              t: this.shape_4,
            },
            {
              t: this.shape_3,
            },
            {
              t: this.shape_2,
            },
            {
              t: this.shape_1,
            },
            {
              t: this.shape,
            },
          ],
        })
        .wait(1)
    );
    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f()
      .s("#000000")
      .ss(3, 1, 1)
      .p("AOpCPI9QAAQghAAgDgdIgBAAIAAjcQAAgkAlAAIdQAAQAkAAAAAkIAADcQgEAdggAAg");
    this.shape_52.setTransform(113.1, 0.375);
    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .lf(["#F8DA00", "#D2B900"], [0, 1], 0, -6.5, 0, 6.6)
      .s()
      .p("AunCPQghAAgDgdIgBAAIAAjcQAAgkAlAAIdPAAQAlAAgBAkIAADcQgDAdghAAg");
    this.shape_53.setTransform(113.1, 0.375);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {
              t: this.shape_53,
            },
            {
              t: this.shape_52,
            },
          ],
        })
        .wait(1)
    );
    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f()
      .s("#000000")
      .ss(3, 1, 1)
      .p("AtujpIbdAAQBsAAAABrIAAD9QAABrhsAAI7dAAQhsAAAAhrIAAj9QAAhrBsAAg");
    this.shape_54.setTransform(113.475, 195.375);
    this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(1));
    this.instance_1 = new lib.shinyPremiumClick();
    this.instance_1.setTransform(91.4, 213.1, 1, 1, 0, 0, 0, 79.9, 41.2);
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
    this.instance_2 = new lib.Symbol9();
    this.instance_2.setTransform(114.35, 194.25, 1, 1, 0, 0, 0, 98.7, 23.4);
    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("rgba(0,0,0,0.498)")
      .s()
      .p("AtuC2QhsAAAAhsIAAj8IAAgDIe1AAIAAADIAAD8QAABshsAAg");
    this.shape_55.setTransform(117.625, 205.325);
    this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Premium1000,
    new cjs.Rectangle(-119.4, -16.5, 349.4, 270.7),
    null
  );
  (lib.premium1000 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.Premium1000();
    this.instance.setTransform(68.5, 139.6, 1, 1, 0, 0, 0, 68.5, 139.6);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(155.6, 183.2, 73.6, 71);
  lib.properties = {
    id: "7B005B36460FE74F8BF7410B8A8405A3",
    width: 550,
    height: 400,
    fps: 24,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [],
    preloads: [],
  };
  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();
  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };
  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };
  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }
  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };
  an.compositions = an.compositions || {};
  an.compositions["7B005B36460FE74F8BF7410B8A8405A3"] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };
  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };
  an.getComposition = function (id) {
    return an.compositions[id];
  };
  an.makeResponsive = function (
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers
  ) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if (
          (respDim == "width" && lastW == iw) ||
          (respDim == "height" && lastH == ih)
        ) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + "px";
        container.style.height = h * sRatio + "px";
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target;
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index];
            if (
              cacheInst.startFrame <= target.currentFrame &&
              target.currentFrame <= cacheInst.endFrame
            ) {
              cacheInst.instance.cache(
                cacheInst.x,
                cacheInst.y,
                cacheInst.w,
                cacheInst.h
              );
            }
          }
        }
      }
    }
  };
})((createjs = createjs || {}), (AdobeAn1000 = AdobeAn1000 || {}));
